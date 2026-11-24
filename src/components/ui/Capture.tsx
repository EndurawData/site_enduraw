import { Media } from "./Media";

/**
 * Capture du dashboard (données fictives, marketing-pack du dashboard) : un
 * filet, aucun effet. Proportions d'origine, ou un ratio imposé cadré en
 * haut à gauche, là où se trouve l'information.
 */
export function Capture({
  src,
  alt,
  ratio,
  className,
  priority,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  caption,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Légende sous la capture (ex. « données fictives »). */
  caption?: string;
}) {
  return (
    <figure className={className}>
      <div className="ep-capture">
        <Media src={src} alt={alt} ratio={ratio} position={ratio ? "left top" : undefined} sizes={sizes} priority={priority} />
      </div>
      {caption && <figcaption className="mt-3 text-[13px] text-white/[0.55]">{caption}</figcaption>}
    </figure>
  );
}
