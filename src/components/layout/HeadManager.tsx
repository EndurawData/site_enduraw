import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { normalizeLang, DEFAULT_LANG } from "@/i18n/languages";
import { findRoute } from "@/routes/manifest";
import { applyHead, buildHead } from "@/routes/head";

/**
 * Tient le `<head>` à jour pendant la navigation et au changement de langue.
 * Le premier `<head>`, lui, est écrit par le prérendu : c'est celui que lisent
 * les moteurs et les aperçus de liens.
 */
export function HeadManager() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const lang = normalizeLang(i18n.language) ?? DEFAULT_LANG;

  useEffect(() => {
    applyHead(buildHead(findRoute(pathname), t, lang, pathname));
  }, [pathname, t, lang]);

  return null;
}
