import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Ouverture de section : le tiret incliné de la charte, le titre, une phrase.
 * Pas d'eyebrow au-dessus du titre : le tiret suffit à ouvrir.
 */
export function SectionHead({
  title,
  lead,
  as: Tag = "h2",
  className,
  aside,
  tone = "light",
}: {
  title: ReactNode;
  lead?: ReactNode;
  as?: "h2" | "h3";
  className?: string;
  /** Lien ou action alignée à droite sur desktop. */
  aside?: ReactNode;
  /** `dark` : posé sur une section claire (`ep-invert`), tiret noir. */
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-[720px]">
        <span className={cn("ep-tiret", tone === "dark" && "ep-tiret--dark")} aria-hidden="true" />
        <Tag className={cn("ep-display mt-5", Tag === "h2" ? "ep-h2" : "ep-h3")}>{title}</Tag>
        {lead && <p className="ep-lead mt-5 max-w-[56ch]">{lead}</p>}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  );
}
