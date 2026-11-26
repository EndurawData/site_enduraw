import type { CSSProperties } from "react";
import { imageEntry } from "@/lib/images";
import { cn } from "@/lib/utils";

/**
 * Image du site : dimensions, variantes et chargement réglés une fois.
 *
 * - `width`/`height` viennent du manifeste généré par `scripts/images.mjs` :
 *   le navigateur réserve la place, la mise en page ne saute pas (CLS).
 * - `srcset` WebP de 400 à 1 920 px (sept paliers) ; `sizes` décrit l'emplacement réel.
 * - `ratio` fixe la boîte en `aspect-ratio`, jamais une hauteur en pixels :
 *   l'image se recadre (`object-cover`) au lieu de se déformer.
 * - Paresseuse par défaut. `priority` pour l'image du premier écran — elle
 *   passe en `fetchpriority="high"` et le prérendu la précharge.
 * - Traitement de la charte : légère désaturation, ou noir et blanc.
 */
export function Media({
  src,
  alt,
  ratio,
  sizes = "100vw",
  priority = false,
  treatment = "none",
  fit = "cover",
  position,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  /** « 16/9 », « 4/3 », « 3/4 »… Absent : le ratio d'origine de l'image. */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  treatment?: "none" | "muted" | "mono";
  fit?: "cover" | "contain";
  /** `object-position`, pour garder le sujet dans le cadre recadré. */
  position?: string;
  className?: string;
  imgClassName?: string;
}) {
  const entry = imageEntry(src);
  const box: CSSProperties = { aspectRatio: ratio ?? (entry ? `${entry.w} / ${entry.h}` : undefined) };
  return (
    <div className={cn("ep-media", className)} style={box}>
      <img
        src={entry?.fallback ?? src}
        srcSet={entry?.srcset}
        sizes={entry ? sizes : undefined}
        width={entry?.w}
        height={entry?.h}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        // Jamais « sync », même pour l'image du premier écran : le navigateur
        // retenait alors toute la première peinture jusqu'à l'arrivée et au
        // décodage de la photo (mesuré : FCP 0,8 s → 2,7 s sur les pages à
        // photo de tête).
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        className={cn(
          "h-full w-full",
          fit === "cover" ? "object-cover" : "object-contain",
          treatment === "muted" && "saturate-[0.9]",
          treatment === "mono" && "grayscale",
          imgClassName,
        )}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
