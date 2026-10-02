// Latest articles & Instagram posts — newest first.
// Shown on the Media page (full list) and on the home page (first 3 items).
export interface ContentItem {
  title: string;
  url: string;
  source: string;
  description: string;
}

export const latestContent: ContentItem[] = [
  {
    title: "UTMB 2026 Recap",
    url: "https://www.instagram.com/p/DdbLBDKDEsM/?img_index=1",
    source: "Instagram",
    description: "Our data-driven recap of the UTMB 2026 races."
  },
  {
    title: "Tor des Glaciers – Race Analysis",
    url: "https://www.instagram.com/p/DdJ5roZNgz0/",
    source: "Instagram",
    description: "Race analysis of the Tor des Glaciers."
  },
  {
    title: "Trail Running Team Rankings 2026 – International Teams",
    url: "https://distances.plus/international/trail-running-team-rankings-international-teams-2-hoka-salomon-2026/",
    source: "Distances Plus",
    description: "2026 rankings of the international trail running teams, featuring Hoka and Salomon."
  },
  {
    title: "Enduraw Nutrition Guide",
    url: "https://app.enduraw.co/guide-nutrition",
    source: "Enduraw",
    description: "Our guide to fueling your training and races."
  },
  {
    title: "What makes Paris 2024 a race to records",
    url: "https://worldathletics.org/waendurancemedicine/news/what-makes-paris-2024-a-race-to-records",
    source: "World Athletics",
    description: "Analysis of the performance factors behind the record-breaking performances at Paris 2024 Olympics."
  },
  {
    title: "Mathieu Blanchard Athlete Highlight",
    url: "https://www.instagram.com/p/DD7UHw6tQec/?img_index=1",
    source: "Instagram",
    description: "Mathieu Blanchard Performance"
  }
];
