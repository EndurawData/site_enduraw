import { useTranslation } from "react-i18next";

/**
 * Les chiffres d'usage du dashboard, repris du site en ligne. À mettre à jour
 * depuis la base (skill `/update`) avant chaque mise en ligne.
 *
 * Bande à filets plutôt que les `ep-kpi` du dashboard : ceux-ci ont un cadre
 * et un fond s1, la bande garde la page sans conteneur.
 */
export const FIGURES = [
  { value: 15460, digits: 0, unit: "", key: "users" },
  { value: 6.7, digits: 1, unit: "M", key: "activities" },
  { value: 11.3, digits: 1, unit: "M km", key: "distance" },
] as const;

export function Figures() {
  const { t, i18n } = useTranslation();
  const format = (v: number, digits: number) =>
    new Intl.NumberFormat(i18n.language, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v);
  return (
    <section aria-label={t("figures.aria")} className="border-y border-white/10">
      <dl className="ep-wrap grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {FIGURES.map((f) => (
          <div key={f.key} className="flex flex-col-reverse gap-2 py-8 sm:px-8 sm:first:pl-0">
            <dt className="text-[14px] font-light text-white/[0.62]">{t(`figures.${f.key}`)}</dt>
            <dd className="ep-display text-[clamp(2rem,4vw,3rem)] leading-none tabular-nums">
              {format(f.value, f.digits)}
              {f.unit && <span className="ml-1.5 font-sans text-[0.45em] font-medium not-italic text-white/[0.62]">{f.unit}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
