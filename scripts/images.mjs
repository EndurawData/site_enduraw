/**
 * Variantes d'images et manifeste des dimensions.
 *
 *   node scripts/images.mjs          (lancé par predev et prebuild)
 *
 * Pour chaque image affichée par le site : des variantes WebP à plusieurs
 * largeurs dans `public/_img/` (ignoré par git, régénéré), et une entrée dans
 * `src/data/images.generated.json` — largeur, hauteur, `srcset` — que lit le
 * composant `Media`. Aucune image n'est plus affichée sans `width`/`height`.
 *
 * Les originaux ne sont jamais modifiés. Les fichiers des signatures mail
 * (`images/signatures/`, `images/logos/`) ne sont pas dans la liste et ne le
 * seront jamais : ils sont servis tels quels par raw.githubusercontent.
 *
 * Cache : une variante plus récente que sa source n'est pas réencodée.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const PUBLIC = "public";
const OUT = "public/_img";
const MANIFEST = "src/data/images.generated.json";

/** Dossiers et fichiers sources, relatifs à public/. */
const SOURCES = [
  "images/workshop",
  "images/conferences/web",
  "images/epc/web",
  "images/home",
  "images/dashboard",
  "images/athletes",
  "images/team",
  "images/photos",
  "images/captures",
];

/** Largeurs servies. Une image plus étroite que la plus grande est servie à sa
 *  largeur d'origine, jamais agrandie. */
const WIDTHS = [400, 640, 800, 960, 1280, 1600, 1920];
const EXT = /\.(jpe?g|png|webp)$/i;

function listSources() {
  const files = [];
  for (const entry of SOURCES) {
    const abs = path.join(PUBLIC, entry);
    if (!fs.existsSync(abs)) continue;
    if (fs.statSync(abs).isDirectory()) {
      for (const f of fs.readdirSync(abs).sort()) if (EXT.test(f)) files.push(path.join(entry, f));
    } else {
      files.push(entry);
    }
  }
  return files;
}

const slug = (rel) => rel.replace(EXT, "").replace(/[^a-zA-Z0-9/_-]+/g, "-");

const manifest = {};
let encoded = 0;
const started = Date.now();

for (const rel of listSources()) {
  const src = path.join(PUBLIC, rel);
  const meta = await sharp(src).metadata();
  // Orientation EXIF : les dimensions affichées sont celles de l'image redressée.
  const swap = meta.orientation && meta.orientation >= 5;
  const width = swap ? meta.height : meta.width;
  const height = swap ? meta.width : meta.height;
  const widths = [...new Set(WIDTHS.filter((w) => w < width).concat(Math.min(width, WIDTHS.at(-1))))];
  const srcMtime = fs.statSync(src).mtimeMs;
  const variants = [];

  for (const w of widths) {
    const outRel = `${slug(rel)}-${w}.webp`;
    const out = path.join(OUT, outRel);
    variants.push(`/_img/${encodeURI(outRel)} ${w}w`);
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs > srcMtime) continue;
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 74, effort: 4 }).toFile(out);
    encoded++;
  }

  manifest[`/${rel}`] = {
    w: width,
    h: height,
    srcset: variants.join(", "),
    // Variante de repli : la plus proche de 960 px.
    fallback: variants
      .map((v) => v.split(" ")[0])
      .find((_, i) => widths[i] >= Math.min(960, width)),
  };
}

fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
const json = JSON.stringify(manifest, null, 1) + "\n";
if (!fs.existsSync(MANIFEST) || fs.readFileSync(MANIFEST, "utf8") !== json) fs.writeFileSync(MANIFEST, json);

console.log(
  `images : ${Object.keys(manifest).length} sources, ${encoded} variantes encodées en ${((Date.now() - started) / 1000).toFixed(1)} s`,
);
