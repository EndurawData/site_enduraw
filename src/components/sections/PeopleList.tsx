import { NewTab } from "@/components/sections/ContentRow";
import { cn } from "@/lib/utils";

export type Person = {
  name: string;
  /** Rôle, résultat : la ligne de droite. */
  detail: string;
  /** Lien externe sur le nom (LinkedIn…), ouvert dans un nouvel onglet. */
  href?: string;
  /** Nom accessible du lien quand le nom seul ne suffit pas (« X sur LinkedIn »). */
  linkLabel?: string;
};

/**
 * Liste typographique de personnes : un nom, une ligne de détail. Commune aux
 * athlètes de l'accueil et à l'équipe de la page À propos. Pas de portraits.
 */
export function PeopleList({
  people,
  className,
  labelledBy,
}: {
  people: Person[];
  className?: string;
  labelledBy?: string;
}) {
  return (
    <ul aria-labelledby={labelledBy} className={cn("ep-lines ep-lines--tight", className)}>
      {people.map((p) => (
        <li key={p.name} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ep-display text-[22px] transition-colors hover:text-ep-sky sm:text-[24px]"
            >
              {p.linkLabel ? <span className="sr-only">{p.linkLabel}</span> : null}
              <span aria-hidden={p.linkLabel ? true : undefined}>{p.name}</span>
              <NewTab />
            </a>
          ) : (
            <span className="ep-display text-[22px] sm:text-[24px]">{p.name}</span>
          )}
          <span className="ep-body text-[15px] sm:text-right">{p.detail}</span>
        </li>
      ))}
    </ul>
  );
}
