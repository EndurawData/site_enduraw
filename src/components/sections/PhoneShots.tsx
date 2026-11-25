import { Capture } from "@/components/ui/Capture";
import { cn } from "@/lib/utils";

/**
 * Écrans du dashboard sur téléphone (80 % des sessions s'y font), posés côte à
 * côte et décalés en hauteur : une composition plutôt qu'une capture posée
 * brute. Captures du marketing-pack, données fictives.
 */
export function PhoneShots({
  shots,
  className,
}: {
  shots: { src: string; alt: string }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 items-start gap-4 sm:gap-6", className)}>
      {shots.map((s, i) => (
        <Capture
          key={s.src}
          src={s.src}
          alt={s.alt}
          ratio="9 / 18"
          sizes="(min-width: 1024px) 280px, 46vw"
          className={cn("ep-reveal", i % 2 === 1 && "mt-12 sm:mt-20")}
        />
      ))}
    </div>
  );
}
