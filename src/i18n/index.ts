import i18next, { type i18n as I18n, type Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANG, rememberLang, type Lang } from "./languages";

type Messages = Record<string, unknown>;

/**
 * Une langue = un dossier, un fichier par page ou par zone (`common.json`,
 * `home.json`, `legal.json`…). Chaque fichier porte ses propres clés de premier
 * niveau ; ils sont fusionnés en un seul jeu de messages. Seule la langue
 * active est chargée.
 */
const loaders = import.meta.glob<{ default: Messages }>("../locales/*/*.json");

export async function loadMessages(lang: Lang): Promise<Messages> {
  const prefix = `../locales/${lang}/`;
  const files = Object.keys(loaders).filter((k) => k.startsWith(prefix));
  if (!files.length) throw new Error(`Locale introuvable : ${lang}`);
  const parts = await Promise.all(files.map((k) => loaders[k]().then((m) => m.default)));
  return Object.assign({}, ...parts);
}

/**
 * Instance i18next pour un rendu. Une par requête côté prérendu, une seule
 * côté navigateur. Les messages sont fournis d'emblée : l'initialisation est
 * synchrone, rien ne suspend pendant le rendu ni pendant l'hydratation.
 */
export function createI18n(lang: Lang, messages: Messages): I18n {
  const resources: Resource = { [lang]: { translation: messages } };
  const instance = i18next.createInstance();
  instance.use(initReactI18next).init({
    lng: lang,
    fallbackLng: DEFAULT_LANG,
    resources,
    initAsync: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
  return instance;
}

/** Change de langue en chargeant la locale si besoin, puis synchronise
 *  `<html lang>` et le choix mémorisé. */
export async function switchLanguage(instance: I18n, lang: Lang) {
  if (!instance.hasResourceBundle(lang, "translation")) {
    instance.addResourceBundle(lang, "translation", await loadMessages(lang));
  }
  await instance.changeLanguage(lang);
  document.documentElement.lang = lang;
  rememberLang(lang);
}
