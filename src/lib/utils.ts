import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Fusion de classes : `clsx` pour les conditions, `tailwind-merge` pour que
 *  le dernier utilitaire gagne. Les classes `ep-*` ne sont pas touchées. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Lien qui sort du site : http(s), mail, téléphone. */
export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/** Lien qui quitte l'onglet : http(s) seulement — un `mailto:` ouvre le client
 *  de messagerie, pas une page. */
export function opensNewTab(href: string) {
  return /^https?:/.test(href);
}
