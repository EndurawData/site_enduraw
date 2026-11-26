import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { EMAILS, mailto } from "@/lib/links";
import { cn } from "@/lib/utils";

/** Adresse de contact des textes juridiques (DPO, éditeur, signalements). */
export const LEGAL_EMAIL = EMAILS.media;

export function LegalMail() {
  return <a href={mailto(LEGAL_EMAIL)}>{LEGAL_EMAIL}</a>;
}

const LEGAL_PAGES = [
  { to: "/mentions-legales", label: "footer.mentions" },
  { to: "/politique-confidentialite", label: "footer.privacy" },
  { to: "/cgu", label: "footer.cgu" },
  { to: "/sous-traitants", label: "footer.subprocessors" },
] as const;

export type LegalSection = {
  /** Ancre de la section (`#id`), reprise par le sommaire. */
  id: string;
  title: string;
  body: ReactNode;
};

/**
 * Gabarit commun des pages légales : en-tête sombre court, puis le texte dans
 * une section claire, colonne de lecture `.ep-legal`. Les pages longues
 * reçoivent un sommaire d'ancres, fixe à gauche sur desktop.
 */
export function LegalLayout({
  path,
  title,
  updated,
  sections,
  toc = false,
  lang,
}: {
  /** Route de la page, retirée des liens vers les autres documents. */
  path: (typeof LEGAL_PAGES)[number]["to"];
  title: string;
  updated?: string;
  sections: LegalSection[];
  toc?: boolean;
  /** Langue du texte quand elle diffère de celle du site (page non traduite). */
  lang?: string;
}) {
  const { t } = useTranslation();
  const others = LEGAL_PAGES.filter((p) => p.to !== path);
  const tocList = (
    <ol className="text-[13px] leading-snug text-black/[0.62]">
      {sections.map((s) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="inline-flex min-h-11 items-center py-1 transition-colors hover:text-black">
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <header className="ep-wrap pb-10 pt-[calc(var(--ep-nav-h)+48px)] md:pb-12 md:pt-[calc(var(--ep-nav-h)+64px)]">
        <span className="ep-tiret" aria-hidden="true" />
        <h1 className="ep-display ep-h2 mt-5 max-w-[22ch]" lang={lang}>
          {title}
        </h1>
        {updated && (
          <p className="mt-4 text-[13px] text-white/[0.55]" lang={lang}>
            {updated}
          </p>
        )}
        <nav aria-label={t("legalLayout.related")} className="mt-8">
          <ul className="flex flex-wrap gap-x-6 text-[13px]">
            {others.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="ep-inline-link inline-flex min-h-11 items-center">
                  {t(p.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="ep-invert">
        <div
          className={cn(
            "ep-wrap py-12 md:py-16",
            toc && "lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16",
          )}
        >
          {toc && (
            <>
              {/* Sous lg : sommaire replié au-dessus du texte. */}
              <details className="group mb-10 border-y border-black/10 lg:hidden">
                <summary className="ep-label flex min-h-11 cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                  {t("legalLayout.toc")}
                  <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" className="transition-transform group-open:rotate-180" />
                </summary>
                <nav aria-label={t("legalLayout.toc")} className="pb-4">
                  {tocList}
                </nav>
              </details>
              <nav aria-label={t("legalLayout.toc")} className="hidden lg:block">
                <div className="sticky top-[calc(var(--ep-nav-h)+32px)] max-h-[calc(100svh-var(--ep-nav-h)-64px)] overflow-y-auto pb-4">
                  <p className="ep-label">{t("legalLayout.toc")}</p>
                  <div className="mt-2">{tocList}</div>
                </div>
              </nav>
            </>
          )}

          <article className="ep-legal [&>section:first-child>h2]:mt-0" lang={lang}>
            {sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id}>
                <h2 id={s.id}>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
