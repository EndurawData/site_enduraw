import { Phone } from "@/components/ui/Device";
import { cn } from "@/lib/utils";

/**
 * Écrans du dashboard sur téléphone (80 % des sessions s'y font), dans leur
 * téléphone, posés côte à côte et décalés en hauteur.
 */
export function PhoneShots({
  shots,
  className,
}: {
  shots: { src: string; alt: string }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 items-start gap-4 sm:gap-8", className)}>
      {shots.map((s, i) => (
        <Phone key={s.src} src={s.src} alt={s.alt} className={cn("ep-reveal", i % 2 === 1 && "mt-12 sm:mt-20")} />
      ))}
    </div>
  );
}
