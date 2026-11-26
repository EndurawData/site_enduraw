import { Media } from "./Media";
import { cn } from "@/lib/utils";

/**
 * Écrans du dashboard posés dans l'objet qui les affiche : un téléphone, un
 * ordinateur portable. C'est le seul endroit du site où des coins arrondis
 * apparaissent : ce sont ceux de l'appareil, pas de l'interface (charte :
 * angles droits). Tout est en CSS (site.css, `.ep-phone`, `.ep-laptop`).
 * Captures du marketing-pack du dashboard, données fictives.
 */
export function Phone({
  src,
  alt,
  sizes = "(min-width: 1024px) 280px, 46vw",
  priority,
  className,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("ep-phone", className)}>
      <div className="ep-phone__screen">
        <Media src={src} alt={alt} ratio="1170 / 2532" position="center top" sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}

export function Laptop({
  src,
  alt,
  sizes = "(min-width: 1360px) 760px, (min-width: 1024px) 56vw, 100vw",
  priority,
  className,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("ep-laptop", className)}>
      <div className="ep-laptop__lid">
        <div className="ep-laptop__screen">
          <Media src={src} alt={alt} ratio="16 / 10" position="center top" sizes={sizes} priority={priority} />
        </div>
      </div>
      <div className="ep-laptop__base" aria-hidden="true" />
    </div>
  );
}
