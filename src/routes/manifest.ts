import type { ComponentType } from "react";

/**
 * Les routes du site, à un seul endroit.
 *
 * Le routeur, le prérendu (`scripts/prerender.mjs`), le sitemap et les balises
 * de `<head>` lisent cette table. Une page qui n'y est pas n'existe nulle part.
 *
 * Les anciennes URL ne disparaissent jamais : elles passent dans `REDIRECTS`,
 * qui redirige côté routeur et écrit une page de redirection au prérendu.
 */

export type NavSection = "home" | "media" | "dashboard" | "services" | "about" | "legal";

export type Schema = "home" | "service" | "place";

export type RouteDef = {
  path: string;
  load: () => Promise<{ default: ComponentType }>;
  /** Clé i18n du nom de la page : `<title>` = « {nom} · Enduraw ». */
  title?: string;
  /** Clé i18n de la meta description. */
  description: string;
  section?: NavSection;
  parent?: string;
  schema?: Schema;
  /** `false` : `noindex`, et absente du sitemap. */
  indexable?: boolean;
};

export const ROUTES: RouteDef[] = [
  {
    path: "/",
    load: () => import("@/pages/HomePage"),
    description: "seo.home",
    section: "home",
    schema: "home",
  },
  {
    path: "/media",
    load: () => import("@/pages/MediaPage"),
    title: "nav.media",
    description: "seo.media",
    section: "media",
  },
  {
    path: "/dashboard",
    load: () => import("@/pages/DashboardPage"),
    title: "nav.dashboard",
    description: "seo.dashboard",
    section: "dashboard",
    schema: "service",
  },
  {
    path: "/services",
    load: () => import("@/pages/ServicesPage"),
    title: "nav.services",
    description: "seo.services",
    section: "services",
  },
  {
    path: "/services/testing",
    load: () => import("@/pages/services/LabPage"),
    title: "nav.lab",
    description: "seo.lab",
    section: "services",
    parent: "/services",
    schema: "place",
  },
  {
    path: "/services/coaching",
    load: () => import("@/pages/services/CoachingPage"),
    title: "nav.coaching",
    description: "seo.coaching",
    section: "services",
    parent: "/services",
    schema: "service",
  },
  {
    path: "/services/conferences",
    load: () => import("@/pages/services/ConferencesPage"),
    title: "nav.conferences",
    description: "seo.conferences",
    section: "services",
    parent: "/services",
    schema: "service",
  },
  {
    path: "/about",
    load: () => import("@/pages/AboutPage"),
    title: "nav.about",
    description: "seo.about",
    section: "about",
  },
  {
    path: "/careers",
    load: () => import("@/pages/CareersPage"),
    title: "footer.careers",
    description: "seo.careers",
    section: "about",
    parent: "/about",
  },
  {
    path: "/mentions-legales",
    load: () => import("@/pages/legal/MentionsPage"),
    title: "footer.mentions",
    description: "seo.legal",
    section: "legal",
  },
  {
    path: "/politique-confidentialite",
    load: () => import("@/pages/legal/PrivacyPage"),
    title: "footer.privacy",
    description: "seo.legal",
    section: "legal",
  },
  {
    path: "/cgu",
    load: () => import("@/pages/legal/CguPage"),
    title: "footer.cgu",
    description: "seo.legal",
    section: "legal",
  },
  {
    path: "/sous-traitants",
    load: () => import("@/pages/legal/SubprocessorsPage"),
    title: "footer.subprocessors",
    description: "seo.legal",
    section: "legal",
  },
];

/**
 * Anciennes URL → nouvelle adresse (ancre comprise). Elles sont indexées,
 * partagées, imprimées : elles doivent toujours mener quelque part.
 */
export const REDIRECTS: Record<string, string> = {
  "/news": "/media",
  "/platform": "/dashboard",
  "/services/enduraw-dashboard": "/dashboard",
  "/services/pacing-plan": "/dashboard#pacing",
  "/services/enduraw-report": "/dashboard#report",
  "/services/enduraw-api": "/dashboard#api",
  "/services/athlete-support": "/services/coaching",
  "/endurawperformancecenter": "/services/testing#performance-center",
  "/epc/trainingcamp": "/services/testing#training-camp",
  "/epc/corporateseminar": "/services/testing#seminars",
  "/epc/coworking": "/services/testing#coworking",
  "/epc/podcaststudio": "/services/testing#podcast",
  "/contact": "/about#contact",
};

export const NOT_FOUND: RouteDef = {
  path: "*",
  load: () => import("@/pages/NotFoundPage"),
  title: "notFound.title",
  description: "notFound.text",
  indexable: false,
};

export function normalizePath(pathname: string) {
  const p = pathname.replace(/\.html$/, "").replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function findRoute(pathname: string): RouteDef {
  const p = normalizePath(pathname);
  return ROUTES.find((r) => r.path === p) ?? NOT_FOUND;
}

export function breadcrumbOf(route: RouteDef): RouteDef[] {
  const chain: RouteDef[] = [];
  let current: RouteDef | undefined = route;
  while (current) {
    chain.unshift(current);
    current = current.parent ? ROUTES.find((r) => r.path === current!.parent) : undefined;
  }
  return chain[0]?.path === "/" ? chain : [ROUTES[0], ...chain];
}
