/**
 * Liens sortants du site, à un seul endroit.
 *
 * Le dashboard est une application à part (app.enduraw.co) : on n'y accède que
 * par des liens, aucun code partagé, pour qu'une panne de l'un n'affecte
 * jamais l'autre.
 */
export const APP_URL = "https://app.enduraw.co";

export const LINKS = {
  app: APP_URL,
  register: `${APP_URL}/register`,
  login: `${APP_URL}/login`,
  /** Boutique du dashboard : abonnements, tests, services. Icône de la barre. */
  shop: `${APP_URL}/shop`,
  /** Achat des tests (VO2max, lactate…). */
  shopTesting: `${APP_URL}/shop?tab=testing`,
  pacingDemo: `${APP_URL}/pacingplan?demo=true`,
  nutritionGuide: `${APP_URL}/guide-nutrition`,
  careersForm: "https://forms.gle/jksfSE32JdsRFTnF9",
  medium:
    "https://medium.com/@josephmestrallet/enduraw-report-api-a-powerful-tool-to-enhance-your-activity-interpretation-with-external-7273edbf9653",
  instagram: "https://www.instagram.com/enduraw.data/",
  youtube: "https://www.youtube.com/@EndurawData",
  twitter: "https://twitter.com/EndurawData",
  linkedin: "https://fr.linkedin.com/company/enduraw",
  strava: "https://www.strava.com/athletes/136348346",
} as const;

export const EMAILS = {
  performance: "performance@enduraw.co",
  dashboard: "dashboard@enduraw.co",
  communication: "communication@enduraw.co",
  media: "media@enduraw.co",
} as const;

export const mailto = (address: string, subject?: string) =>
  `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

/** Adresse du Performance Center. */
export const ADDRESS = {
  street: "185 clos du tour noir",
  postalCode: "74400",
  locality: "Chamonix-Mont-Blanc",
  country: "FR",
  display: "185 clos du tour noir, 74400 Chamonix",
} as const;

export const SITE_URL = "https://enduraw.co";
