import { Action } from "@/components/ui/Action";

/**
 * Appel final d'une page. Version pleine (`glow`, par défaut) : la zone forte
 * où vit le halo de la charte, réservée à l'accueil et au Dashboard. Version
 * calme (`glow={false}`) : un filet, un titre, un bouton, pour les autres
 * pages, qui ne finissent pas toutes sur le même halo bleu.
 */
export function FinalCta({
  title,
  text,
  action,
  secondary,
  glow = true,
}: {
  title: string;
  text?: string;
  action: { to: string; label: string; onClick?: () => void };
  secondary?: { to: string; label: string };
  glow?: boolean;
}) {
  return (
    <section className={glow ? "ep-glowfield ep-section" : "ep-section ep-rule"}>
      {glow && <span className="ep-glow" aria-hidden="true" />}
      <div className="ep-wrap">
        <div className="max-w-[720px]">
          <span className={glow ? "ep-tiret ep-tiret--sky" : "ep-tiret"} aria-hidden="true" />
          <h2 className={glow ? "ep-display ep-h2 mt-5" : "ep-display ep-h3 mt-5"}>{title}</h2>
          {text && <p className="ep-lead mt-5 max-w-[52ch]">{text}</p>}
          <div className="mt-9 flex flex-wrap gap-3">
            <Action to={action.to} onClick={action.onClick}>
              {action.label}
            </Action>
            {secondary && (
              <Action to={secondary.to} variant="ghost">
                {secondary.label}
              </Action>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
