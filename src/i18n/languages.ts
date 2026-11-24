export const LANGS = ["en", "fr", "es", "de", "ja"] as const;
export type Lang = (typeof LANGS)[number];

/**
 * Langue du HTML prérendu, donc celle qu'indexent les moteurs (décision D1 du
 * plan). C'est aussi la langue de repli d'i18next et celle que voient
 * Googlebot et Lighthouse (navigateur en en-US).
 */
export const DEFAULT_LANG: Lang = "en";

/** Libellés dans leur propre langue : on cherche « Deutsch », pas « Allemand ». */
export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  ja: "日本語",
};

/** Même clé que l'ancien détecteur d'i18next : un visiteur qui avait choisi
 *  sa langue la retrouve. */
export const STORAGE_KEY = "i18nextLng";

export function normalizeLang(code: string | null | undefined): Lang | null {
  if (!code) return null;
  const base = code.toLowerCase().split("-")[0];
  return (LANGS as readonly string[]).includes(base) ? (base as Lang) : null;
}

/** Choix mémorisé, puis langues du navigateur, puis la langue par défaut. */
export function detectLang(): Lang {
  try {
    const stored = normalizeLang(localStorage.getItem(STORAGE_KEY));
    if (stored) return stored;
  } catch {
    /* stockage bloqué : on passe au navigateur */
  }
  for (const code of navigator.languages ?? [navigator.language]) {
    const lang = normalizeLang(code);
    if (lang) return lang;
  }
  return DEFAULT_LANG;
}

export function rememberLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* navigation privée : le choix vaut pour la session */
  }
}
