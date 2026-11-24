/**
 * Vérifie que chaque clé de traduction écrite en dur dans le code — `t("a.b")`
 * — existe dans les cinq langues. Les clés construites (`t(\`a.${x}\`)`) ne
 * sont pas vérifiées ici ; les pages les déclarent dans des tableaux de clés
 * littérales autant que possible.
 *
 *   node scripts/check-i18n.mjs        (sort en erreur si une clé manque)
 */
import fs from "node:fs";
import path from "node:path";

const LANGS = ["en", "fr", "es", "de", "ja"];
const readLang = (l) =>
  Object.assign(
    {},
    ...fs
      .readdirSync(`src/locales/${l}`)
      .filter((f) => f.endsWith(".json"))
      .map((f) => JSON.parse(fs.readFileSync(`src/locales/${l}/${f}`, "utf8").replace(/^\uFEFF/, ""))),
  );
const locales = Object.fromEntries(LANGS.map((l) => [l, readLang(l)]));
const get = (obj, key) => key.split(".").reduce((o, k) => (o && typeof o === "object" ? o[k] : undefined), obj);

const files = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(tsx?|mjs)$/.test(entry.name)) files.push(p);
  }
};
walk("src");

// t("x.y"), t('x.y'), et les clés listées en littéral dans `label: "nav.x"`, `title: "…"`, `description: "…"`.
const CALL = /\bt\(\s*["']([a-zA-Z0-9_.-]+)["']/g;
const PROP = /\b(?:label|title|description|key):\s*["']([a-zA-Z][a-zA-Z0-9_]*\.[a-zA-Z0-9_.]+)["']/g;

const missing = [];
for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  for (const re of [CALL, PROP]) {
    for (const [, key] of src.matchAll(re)) {
      if (key.includes("/") || /^\d/.test(key)) continue;
      const absent = LANGS.filter((l) => get(locales[l], key) === undefined);
      if (absent.length) missing.push(`${file}: ${key} (${absent.join(", ")})`);
    }
  }
}

if (missing.length) {
  console.error(`Clés manquantes :\n  ${[...new Set(missing)].join("\n  ")}`);
  process.exit(1);
}
console.log(`i18n : toutes les clés littérales existent dans les ${LANGS.length} langues`);
