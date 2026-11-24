import images from "@/data/images.generated.json";

/** Entrée du manifeste généré par `scripts/images.mjs`. */
export type ImageEntry = { w: number; h: number; srcset: string; fallback?: string };

const MANIFEST = images as Record<string, ImageEntry>;

export function imageEntry(src: string): ImageEntry | undefined {
  return MANIFEST[src];
}

/** Dimensions intrinsèques d'une image du manifeste (pour un `<img>` maison). */
export function imageSize(src: string) {
  const entry = MANIFEST[src];
  return entry ? { width: entry.w, height: entry.h } : undefined;
}
