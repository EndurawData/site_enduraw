import type { TFunction } from "i18next";
import { ADDRESS, LINKS, SITE_URL } from "@/lib/links";
import { breadcrumbOf, type RouteDef } from "./manifest";
import type { Lang } from "@/i18n/languages";

/**
 * Le `<head>` d'une page, calculé depuis le manifeste.
 *
 * Une seule fonction pour deux consommateurs : le prérendu l'écrit en dur
 * dans chaque `route/index.html` (c'est ce que lisent les moteurs et les
 * aperçus de lien), le navigateur le réapplique à chaque navigation interne.
 */

export type Head = {
  lang: Lang;
  title: string;
  description: string;
  /** Absent sur la page 404 : une URL inconnue n'a pas de version canonique. */
  canonical: string | null;
  robots: string;
  image: string;
  imageAlt: string;
  jsonLd: Record<string, unknown>[];
};

const BRAND = "Enduraw";
const OG_IMAGE = `${SITE_URL}/images/og-cover.png`;
const OG_LOCALE: Record<Lang, string> = {
  en: "en_GB",
  fr: "fr_FR",
  es: "es_ES",
  de: "de_DE",
  ja: "ja_JP",
};

/** Coupe au mot, sous 158 caractères, sans couper une phrase courte. */
export function clip(text: string, max = 158) {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

const urlOf = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

function organization(t: TFunction) {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo512.png`,
    description: t("seo.tagline"),
    email: "communication@enduraw.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.postalCode,
      addressLocality: ADDRESS.locality,
      addressCountry: ADDRESS.country,
    },
    sameAs: [LINKS.instagram, LINKS.linkedin, LINKS.twitter],
  };
}

/** Prix exposés aux moteurs : aucun tant que l'équipe ne les a pas validés. */
const OFFERS: Record<string, Record<string, unknown>> = {};

export function buildHead(route: RouteDef, t: TFunction, lang: Lang, pathname = route.path): Head {
  const name = route.title ? t(route.title) : "";
  const title = route.path === "/" ? `${BRAND} · ${t("seo.tagline")}` : `${name} · ${BRAND}`;
  const description = clip(t(route.description));
  const indexable = route.indexable !== false;
  const canonical = route.path === "*" ? null : urlOf(route.path);
  const url = canonical ?? urlOf(pathname);

  const jsonLd: Record<string, unknown>[] = [];
  const graph: Record<string, unknown>[] = [];

  if (route.schema === "home") {
    graph.push(organization(t), {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: BRAND,
      url: `${SITE_URL}/`,
      inLanguage: lang,
      publisher: { "@id": `${SITE_URL}/#organization` },
    });
  }

  if (route.schema === "service") {
    const offers = OFFERS[route.path];
    graph.push({
      "@type": "Service",
      name,
      description,
      url,
      provider: { "@type": "Organization", name: BRAND, url: `${SITE_URL}/` },
      areaServed: "FR",
      ...(offers ? { offers } : {}),
    });
  }

  if (route.schema === "place") {
    graph.push({
      "@type": "LocalBusiness",
      "@id": `${url}#place`,
      name,
      description,
      url,
      image: OG_IMAGE,
      email: "performance@enduraw.co",
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        postalCode: ADDRESS.postalCode,
        addressLocality: ADDRESS.locality,
        addressCountry: ADDRESS.country,
      },
      parentOrganization: { "@type": "Organization", name: BRAND, url: `${SITE_URL}/` },
    });
  }

  if (route.path !== "/" && indexable) {
    const chain = breadcrumbOf(route);
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: chain.map((step, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: step.path === "/" ? BRAND : t(step.title ?? ""),
        item: urlOf(step.path),
      })),
    });
  }

  if (graph.length) jsonLd.push({ "@context": "https://schema.org", "@graph": graph });

  return {
    lang,
    title,
    description,
    canonical,
    robots: indexable ? "index, follow" : "noindex, follow",
    image: OG_IMAGE,
    imageAlt: t("seo.og_alt"),
    jsonLd,
  };
}

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Balises de `<head>` en HTML, pour le prérendu. */
export function headToHtml(head: Head) {
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<meta name="robots" content="${head.robots}" />`,
    ...(head.canonical ? [`<link rel="canonical" href="${head.canonical}" />`] : []),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${BRAND}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[head.lang]}" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    ...(head.canonical ? [`<meta property="og:url" content="${head.canonical}" />`] : []),
    `<meta property="og:image" content="${head.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(head.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(head.title)}" />`,
    `<meta name="twitter:description" content="${esc(head.description)}" />`,
    `<meta name="twitter:image" content="${head.image}" />`,
    ...head.jsonLd.map(
      (data) =>
        `<script type="application/ld+json" data-head="ld">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`,
    ),
  ];
  return tags.join("\n    ");
}

/** Réapplique le `<head>` après une navigation interne. */
export function applyHead(head: Head) {
  document.title = head.title;
  document.documentElement.lang = head.lang;

  const meta = (attr: "name" | "property", key: string, content: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.content = content;
  };
  meta("name", "description", head.description);
  meta("name", "robots", head.robots);
  meta("property", "og:locale", OG_LOCALE[head.lang]);
  meta("property", "og:title", head.title);
  meta("property", "og:description", head.description);
  if (head.canonical) meta("property", "og:url", head.canonical);
  meta("name", "twitter:title", head.title);
  meta("name", "twitter:description", head.description);

  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!head.canonical) {
    link?.remove();
  } else {
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = head.canonical;
  }

  document.head.querySelectorAll('script[data-head="ld"]').forEach((el) => el.remove());
  for (const data of head.jsonLd) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.head = "ld";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}
