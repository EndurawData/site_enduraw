import type { ReactNode } from "react";
import { imageEntry } from "@/lib/images";
import { cn } from "@/lib/utils";

/**
 * Premier écran d'une page : une photo nette plein cadre, fondue au noir vers
 * le bas, le titre posé sur la partie calme. Le haut de la section suivante
 * reste visible. C'est le seul endroit de la page qui porte une image en fond.
 */
export function PhotoHero({
  image,
  alt,
  position = "center",
  title,
  lead,
  actions,
  short = false,
  zoom,
  side = "right",
  children,
}: {
  image: string;
  alt: string;
  /** `object-position` : garde le sujet dans le cadre sur mobile. */
  position?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  short?: boolean;
  /** Recadrage plus serré sur desktop seulement (ex. sortir du cadre une
   *  zone chargée qui passerait sous le titre). */
  zoom?: { scale: number; origin: string };
  /** Côté de la photo sur desktop ; le texte se pose de l'autre côté, sur le
   *  noir. Alterner d'une page à l'autre donne du rythme au parcours. */
  side?: "left" | "right";
  children?: ReactNode;
}) {
  const entry = imageEntry(image);
  return (
    <header className={cn("ep-hero", short && "ep-hero--short", side === "left" && "ep-hero--left")}>
      <div
        className="ep-hero__media"
        style={zoom ? ({ "--ep-hero-zoom": zoom.scale, "--ep-hero-origin": zoom.origin } as React.CSSProperties) : undefined}
      >
        <img
          src={entry?.fallback ?? image}
          srcSet={entry?.srcset}
          // Image en `cover` : sur mobile le cadre (100vw × 60svh) recadre une
          // photo 3:2, d'où ~150vw ; sur desktop elle occupe 68vw mais déborde.
          sizes="(max-width: 1023px) 100vw, 85vw"
          width={entry?.w}
          height={entry?.h}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          style={{ objectPosition: position }}
        />
      </div>
      <div className="ep-wrap w-full">
        <div className="ep-hero__text max-w-[720px]">
          <span className="ep-tiret ep-tiret--sky ep-rise" aria-hidden="true" />
          <h1 className="ep-display ep-h1 ep-rise ep-rise--2 mt-6">{title}</h1>
          {lead && <p className="ep-lead ep-rise ep-rise--3 mt-6 max-w-[46ch]">{lead}</p>}
          {actions && <div className="ep-rise ep-rise--3 mt-9 flex flex-wrap gap-3">{actions}</div>}
          {children}
        </div>
      </div>
    </header>
  );
}
