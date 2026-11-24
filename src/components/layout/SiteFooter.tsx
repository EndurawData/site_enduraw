import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ADDRESS, EMAILS, LINKS, mailto } from "@/lib/links";

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="ep-label">{title}</p>
      <ul className="mt-3">{children}</ul>
    </div>
  );
}

const ITEM = "ep-body inline-flex min-h-11 items-center text-[15px] text-white/[0.62] transition-colors hover:text-white";

function Item({ to, href, children }: { to?: string; href?: string; children: ReactNode }) {
  return (
    <li>
      {to ? (
        <Link to={to} className={ITEM}>
          {children}
        </Link>
      ) : (
        <a
          href={href}
          className={ITEM}
          {...(href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      )}
    </li>
  );
}

export function SiteFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pb-11 pt-[70px]" id="contact">
      <div className="ep-wrap">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-[34ch]">
            <img
              src="/images/brand/logo-ecran-80.png"
              alt="Enduraw"
              width={215}
              height={80}
              loading="lazy"
              className="ep-brand ep-brand--sm"
            />
            <p className="ep-body mt-4 max-w-[30ch] text-[15px]">{t("footer.tagline")}</p>
          </div>

          <Column title={t("footer.site")}>
            <Item to="/media">{t("nav.media")}</Item>
            <Item to="/dashboard">{t("nav.dashboard")}</Item>
            <Item to="/services">{t("nav.services")}</Item>
            <Item to="/about">{t("nav.about")}</Item>
            <Item to="/careers">{t("footer.careers")}</Item>
          </Column>

          <Column title={t("footer.contact")}>
            <Item href={mailto(EMAILS.communication)}>{EMAILS.communication}</Item>
            <Item href={mailto(EMAILS.performance)}>{EMAILS.performance}</Item>
            <li className="ep-body pt-2 text-[15px] text-white/[0.62]">
              {ADDRESS.street}
              <br />
              {ADDRESS.postalCode} {ADDRESS.locality}
            </li>
          </Column>

          <Column title={t("footer.follow")}>
            <Item href={LINKS.instagram}>Instagram</Item>
            <Item href={LINKS.linkedin}>LinkedIn</Item>
            <Item href={LINKS.youtube}>YouTube</Item>
            <Item href={LINKS.strava}>Strava</Item>
          </Column>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="ep-label">© {year} Enduraw</p>
          <ul className="ep-label flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/mentions-legales" className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                {t("footer.mentions")}
              </Link>
            </li>
            <li>
              <Link to="/politique-confidentialite" className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                {t("footer.privacy")}
              </Link>
            </li>
            <li>
              <Link to="/cgu" className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                {t("footer.cgu")}
              </Link>
            </li>
            <li>
              <Link to="/sous-traitants" className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                {t("footer.subprocessors")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
