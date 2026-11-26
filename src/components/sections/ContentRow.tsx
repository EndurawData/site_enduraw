import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import type { ContentItem } from "@/data/latestContent";
import { cn } from "@/lib/utils";

/** Texte masqué qui annonce l'ouverture d'un lien dans un nouvel onglet. */
export function NewTab() {
  const { t } = useTranslation();
  return <span className="sr-only"> {t("content.newTab")}</span>;
}

/** Ligne « nature · source », posée sous le résumé (jamais en eyebrow). */
export function ContentMeta({ item, className }: { item: ContentItem; className?: string }) {
  const { t } = useTranslation();
  return (
    <p className={cn("ep-label", className)}>
      {t(`content.kinds.${item.kind}`)} · {item.source}
    </p>
  );
}

/** Lien externe d'un contenu : titre, flèche alignée sur la première ligne. */
export function ContentLink({ item, children, className }: { item: ContentItem; children?: ReactNode; className?: string }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      // Lien étiré : toute la rangée est cliquable, le nom accessible reste le titre.
      className={cn("flex items-start justify-between gap-4 after:absolute after:inset-0", className)}
    >
      <span>
        {children ?? item.title}
        <NewTab />
      </span>
      <ArrowUpRight
        size={18}
        strokeWidth={1.5}
        aria-hidden="true"
        className="mt-[0.2em] shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

/**
 * Rangée de contenu (article, publication Instagram), commune à l'accueil
 * (`tone="dark"`, sans vignette) et à la page Média (`tone="light"` sur une
 * section `ep-invert`, avec vignette). À poser dans un `ContentList`.
 */
export function ContentRow({ item, tone = "dark" }: { item: ContentItem; tone?: "dark" | "light" }) {
  const { t } = useTranslation();
  const light = tone === "light";

  return (
    <li className={cn("group relative", light && "grid grid-cols-[96px_1fr] gap-5 sm:grid-cols-[200px_1fr] sm:gap-8")}>
      {light &&
        (item.image ? (
          <Media src={item.image} alt="" ratio="4 / 3" sizes="(min-width: 640px) 200px, 96px" position={item.imagePosition} />
        ) : (
          // Pas de photo qui convienne : vignette typographique, le sujet en grand.
          <span
            aria-hidden="true"
            className="flex aspect-[4/3] items-end bg-black/[0.05] p-3 sm:p-4"
          >
            <span className="ep-display text-[13px] leading-[1.05] text-black/[0.55] sm:text-[22px]">{item.tile ?? item.source}</span>
          </span>
        ))}
      <div className="min-w-0">
        <h3
          className={cn(
            "font-medium leading-snug transition-colors",
            light
              ? "text-[18px] text-black group-hover:underline group-hover:underline-offset-4 sm:text-[21px]"
              : "text-[19px] text-white group-hover:text-ep-sky",
          )}
        >
          <ContentLink item={item} />
        </h3>
        <p className={cn("ep-body mt-2 max-w-[68ch] leading-relaxed", light ? "text-[14px] sm:text-[15px]" : "text-[15px]")}>
          {t(`content.items.${item.key}`)}
        </p>
        <ContentMeta item={item} className="mt-3" />
      </div>
    </li>
  );
}

/** Liste à filets des rangées de contenu, filets clairs ou sombres selon le fond. */
export function ContentList({ tone = "dark", className, children }: { tone?: "dark" | "light"; className?: string; children: ReactNode }) {
  return (
    <ul className={cn("ep-lines", tone === "light" && "[--ep-line:rgba(0,0,0,0.1)]", className)}>{children}</ul>
  );
}
