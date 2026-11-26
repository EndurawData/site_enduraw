/**
 * Prérendu statique de toutes les routes, après `vite build`.
 *
 *   vite build && vite build --ssr src/entry-server.tsx --outDir build-ssr
 *   node scripts/prerender.mjs
 *
 * Pour chaque route du manifeste (src/routes/manifest.ts), le HTML complet de
 * la page et son `<head>` (title, description, canonical, Open Graph, JSON-LD)
 * sont écrits dans `build/` :
 *
 *   build/services/testing/index.html    servi pour /services/testing/
 *   build/services/testing.html          servi pour /services/testing
 *
 * GitHub Pages répond à `/services/testing` (sans barre finale) par une 301
 * vers `/services/testing/` quand seul le dossier existe. Les URLs du site
 * n'ont jamais eu de barre finale et sont indexées ainsi : le fichier `.html`
 * permet de les servir telles quelles, en 200.
 *
 * Remplace `post-build.js` : `404.html` n'est plus une copie de l'accueil
 * (servie en 404 pour toutes les pages profondes) mais une vraie page 404.
 *
 * Écrit aussi `sitemap.xml` (routes indexables) et complète `robots.txt`.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const OUT = "build";
const SSR = "build-ssr";
const SITE = "https://enduraw.co";

const template = fs.readFileSync(path.join(OUT, "index.html"), "utf8");
// Le gabarit est l'index.html de `vite build`. Un index.html déjà prérendu
// (second passage sans rebuild) n'a plus ses marqueurs : on refuse plutôt que
// de recopier l'accueil dans toutes les pages.
if (!template.includes("<!--app-html-->")) {
  throw new Error("build/index.html est déjà prérendu : relancer `vite build` d'abord");
}
const entry = fs.readdirSync(SSR).find((f) => /^entry-server\.m?js$/.test(f));
if (!entry) throw new Error(`Bundle serveur introuvable dans ${SSR}/`);
const { render, ROUTES, REDIRECTS } = await import(pathToFileURL(path.join(SSR, entry)).href);

/* Polices du chemin critique : le latin de chaque famille. Le reste (latin
   étendu) n'est téléchargé que si la page en contient un caractère. */
const fonts = fs
  .readdirSync(path.join(OUT, "assets"))
  .filter((f) => /^(inter-tight-700-italic-latin-(?!ext-)|space-grotesk-latin-wght-normal-)[\w-]+\.woff2$/.test(f))
  .map((f) => `<link rel="preload" as="font" type="font/woff2" href="/assets/${f}" crossorigin />`);
if (fonts.length !== 2) throw new Error(`Polices critiques introuvables (${fonts.length}/2)`);

/** Précharge l'image marquée `fetchpriority="high"` (photo de tête). */
/* Une page peut avoir deux images de tête, l'une masquée selon la largeur
   (Dashboard : ordinateur sur desktop, téléphone sur mobile). Chacune est
   préchargée avec ses `sizes` : l'appareil masqué n'en charge que la plus
   petite variante. */
function lcpPreload(html) {
  return [...html.matchAll(/<img[^>]*fetchpriority="high"[^>]*>/gi)].slice(0, 2).map((m) => preloadOne(m[0])).join("\n    ");
}
function preloadOne(img) {
  const attr = (name) => img.match(new RegExp(`\\s${name}="([^"]*)"`, "i"))?.[1];
  const srcset = attr("srcset") ?? attr("srcSet");
  const sizes = attr("sizes");
  const src = attr("src");
  if (srcset) {
    return `<link rel="preload" as="image" imagesrcset="${srcset}"${sizes ? ` imagesizes="${sizes}"` : ""} fetchpriority="high" />`;
  }
  return src ? `<link rel="preload" as="image" href="${src}" fetchpriority="high" />` : "";
}

/* La feuille de style est écrite dans chaque page plutôt que chargée à part :
   un aller-retour de moins avant la première peinture (Lighthouse : ressource
   bloquante, ~150 à 600 ms sur mobile). ≈ 10 Ko compressés, une seule fois par
   visite — la navigation suivante se fait sans recharger la page. */
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (!cssLink) throw new Error("Feuille de style principale introuvable dans index.html");
const inlineCss = `<style>${fs.readFileSync(path.join(OUT, cssLink[1]), "utf8")}</style>`;

/* Le JavaScript part après l'événement `load` (photo du premier écran et
   polices arrivées), puis après la première peinture. Exception : un visiteur
   d'une autre langue attend sa traduction, le script part tout de suite. La page prérendue est déjà
   complète et lisible ; le script ne sert qu'à la rendre interactive. Demandé
   d'emblée, il disputait la bande passante aux polices et à l'image du
   premier écran (88 Ko compressés sur une connexion mobile lente). Les liens
   restent des liens tant qu'il n'est pas arrivé : un clic charge la page. */
const entryScript = template.match(/<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/);
if (!entryScript) throw new Error("Script d'entrée introuvable dans index.html");
const deferredEntry = `<script type="module">const go = () => requestAnimationFrame(() => setTimeout(() => import("${entryScript[1]}")));
document.readyState === "complete" || document.documentElement.classList.contains("ep-lang-pending") ? go() : addEventListener("load", go, { once: true });</script>`;

function page({ html, head, lang }) {
  const out = template
    .replace(cssLink[0], () => inlineCss)
    .replace(entryScript[0], () => deferredEntry)
    .replace(/\s*<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}" data-prerender-lang="${lang}">`)
    .replace(/\s*<title>[^<]*<\/title>/, "")
    .replace("<!--app-head-->", [head, ...fonts, lcpPreload(html)].filter(Boolean).join("\n    "))
    .replace("<!--app-html-->", html);
  if (out.includes("<!--app-")) throw new Error("Marqueur de gabarit non remplacé");
  return out;
}

function write(file, content) {
  const target = path.join(OUT, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
}

const started = Date.now();
const report = [];

for (const route of ROUTES) {
  const result = await render(route.path);
  const html = page(result);
  if (route.path === "/") {
    write("index.html", html);
  } else {
    const rel = route.path.slice(1);
    write(`${rel}/index.html`, html);
    write(`${rel}.html`, html);
  }
  // Garde-fou : un bloc <Suspense> encore en attente signifie que la page
  // s'afficherait d'abord vide puis sauterait.
  if (/<!--\$\?-->|<template id="B:/.test(result.html)) throw new Error(`${route.path} : rendu incomplet (Suspense en attente)`);
  const h1 = (result.html.match(/<h1[\s>]/g) ?? []).length;
  report.push(`${route.path.padEnd(32)} ${String(Math.round(html.length / 1024)).padStart(4)} Ko  h1=${h1}`);
  // Une page indexée a exactement un titre de premier niveau. Les pages
  // techniques (noindex) peuvent prérendre un état de chargement sans titre.
  if (h1 !== 1 && route.indexable !== false) throw new Error(`${route.path} : ${h1} <h1> au lieu de 1`);
}

write("404.html", page(await render("/404-introuvable")));

/* Anciennes URL : une page minimale qui renvoie vers la nouvelle adresse
   (GitHub Pages ne sait pas faire de 301). Canonical vers la cible. */
for (const [from, to] of Object.entries(REDIRECTS)) {
  const target = `${SITE}${to}`;
  const stub = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Enduraw</title><link rel="canonical" href="${target.split("#")[0]}"><meta http-equiv="refresh" content="0; url=${to}"><script>location.replace(${JSON.stringify(to)})</script></head><body><a href="${to}">${target}</a></body></html>`;
  const rel = from.slice(1);
  write(`${rel}/index.html`, stub);
  write(`${rel}.html`, stub);
  report.push(`${from.padEnd(32)} → ${to}`);
}
report.push(`${"404.html".padEnd(32)} (page introuvable)`);

/* ─── sitemap et robots ────────────────────────────────────────────────── */
const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.filter((r) => r.indexable !== false).map((r) => {
  const loc = r.path === "/" ? `${SITE}/` : `${SITE}${r.path}`;
  const priority = r.path === "/" ? "1.0" : r.parent ? "0.7" : "0.8";
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
});
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);
write("robots.txt", `# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nDisallow:\n\nSitemap: ${SITE}/sitemap.xml\n`);

fs.rmSync(SSR, { recursive: true, force: true });

console.log(report.join("\n"));
console.log(
  `prérendu : ${ROUTES.length} routes + 404.html, sitemap de ${urls.length} URLs, en ${((Date.now() - started) / 1000).toFixed(1)} s`,
);
