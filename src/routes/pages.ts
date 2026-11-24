import { NOT_FOUND, ROUTES, findRoute } from "./manifest";
import { lazyPage } from "./lazy";

/* Une page = un fichier chargé à la demande : la page d'accueil ne télécharge
   plus le code des vingt autres. Les composants paresseux sont créés une fois,
   au chargement du module, jamais pendant un rendu. */
export const pages = new Map(ROUTES.map((r) => [r.path, lazyPage(r.load)]));
export const notFound = lazyPage(NOT_FOUND.load);

/** Précharge la page d'une URL : à appeler avant le premier rendu. */
export function preloadRoute(pathname: string) {
  const route = findRoute(pathname);
  return (pages.get(route.path) ?? notFound).preload();
}
