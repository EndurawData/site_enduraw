import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { HeadManager } from "./HeadManager";
import { ScrollManager } from "./ScrollManager";

/** La coque commune : barre, contenu, pied de page. Échelle de marque `.ep-shell`. */
export function SiteLayout() {
  const { t } = useTranslation();
  return (
    <div className="ep-shell">
      <HeadManager />
      <ScrollManager />
      <a href="#main" className="ep-skip">
        {t("a11y.skip")}
      </a>
      <SiteNav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<div className="min-h-[100svh]" aria-hidden="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
