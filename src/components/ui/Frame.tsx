import type { ComponentProps } from "react";
import { Media } from "./Media";
import { cn } from "@/lib/utils";

/**
 * Photo habillée : un filet décalé derrière l'image, deux croix de repère de
 * la charte aux coins opposés, une légende ouverte par le tiret. L'image
 * entre au défilement (léger recul du zoom) là où le navigateur le permet.
 * `side` : côté de la page où se trouve la photo, le filet part vers le
 * centre de la page.
 */
export function Frame({
  caption,
  side = "right",
  className,
  ...media
}: ComponentProps<typeof Media> & { caption?: string; side?: "left" | "right" }) {
  return (
    <figure className={cn("ep-frame", side === "left" && "ep-frame--left", className)}>
      <div className="ep-frame__box">
        <span className="ep-cross ep-frame__cross-a" aria-hidden="true" />
        <Media {...media} />
        <span className="ep-cross ep-frame__cross-b" aria-hidden="true" />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
