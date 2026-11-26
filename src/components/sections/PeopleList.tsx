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
 * athlètes de l'accueil et à l'équipe de la page À propos. Pas de portraits,
 * pas de capitales : un nom se lit, il ne s'affiche pas.
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
              className="text-[17px] font-medium text-white transition-colors hover:text-ep-sky"
            >
              {p.linkLabel ? <span className="sr-only">{p.linkLabel}</span> : null}
              <span aria-hidden={p.linkLabel ? true : undefined}>{p.name}</span>
              <NewTab />
            </a>
          ) : (
            <span className="text-[17px] font-medium text-white">{p.name}</span>
          )}
          <span className="ep-body text-[14px] sm:text-right">{p.detail}</span>
        </li>
      ))}
    </ul>
  );
}
