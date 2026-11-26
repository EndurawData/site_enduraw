// Derniers articles et publications Instagram, du plus récent au plus ancien.
// Affichés sur la page Média (liste complète, l'élément `featured` en tête) et
// sur l'accueil (les trois premiers), par le même composant `ContentRow`.
// Les résumés et les natures sont traduits : `content.items.<key>`, `content.kinds.<kind>`.
export type ContentKind = "analysis" | "press" | "guide" | "athlete";

export interface ContentItem {
  /** Titre d'origine de la publication, non traduit. */
  title: string;
  url: string;
  source: string;
  /** Identifiant stable : résumé traduit à `content.items.<key>`. */
  key: string;
  /** Nature de la publication, affichée en libellé. */
  kind: ContentKind;
  /**
   * Illustration du manifeste (illustrative, pas tirée de la publication).
   * Jamais une photo de hero d'une autre page. Absente : vignette typographique.
   */
  image?: string;
  /** Sans `image` : mot-repère de la vignette typographique (nom propre, non traduit). */
  tile?: string;
  /** `object-position` de l'illustration. */
  imagePosition?: string;
  /** Article à la une de la page Média. Sans lui, le premier élément ouvre. */
  featured?: boolean;
}

export const latestContent: ContentItem[] = [
  {
    title: "UTMB 2026 Recap",
    url: "https://www.instagram.com/p/DdbLBDKDEsM/?img_index=1",
    source: "Instagram",
    key: "utmb2026",
    kind: "analysis",
    tile: "UTMB 2026",
  },
  {
    title: "Tor des Glaciers – Race Analysis",
    url: "https://www.instagram.com/p/DdJ5roZNgz0/",
    source: "Instagram",
    key: "torDesGlaciers",
    kind: "analysis",
    tile: "Tor des Glaciers",
  },
  {
    title: "Trail Running Team Rankings 2026 – International Teams",
    url: "https://distances.plus/international/trail-running-team-rankings-international-teams-2-hoka-salomon-2026/",
    source: "Distances Plus",
    key: "teamRankings",
    kind: "press",
    tile: "Team rankings 2026",
  },
  {
    title: "Enduraw Nutrition Guide",
    url: "https://app.enduraw.co/guide-nutrition",
    source: "Enduraw",
    key: "nutritionGuide",
    kind: "guide",
    image: "/images/conferences/web/charline_epc.jpg",
    imagePosition: "70% center",
  },
  {
    title: "What makes Paris 2024 a race to records",
    url: "https://worldathletics.org/waendurancemedicine/news/what-makes-paris-2024-a-race-to-records",
    source: "World Athletics",
    key: "paris2024",
    kind: "press",
    image: "/images/photos/marathon-paris.jpg",
    imagePosition: "center 35%",
    featured: true,
  },
  {
    title: "Mathieu Blanchard Athlete Highlight",
    url: "https://www.instagram.com/p/DD7UHw6tQec/?img_index=1",
    source: "Instagram",
    key: "blanchard",
    kind: "athlete",
    tile: "Mathieu Blanchard",
  },
];
