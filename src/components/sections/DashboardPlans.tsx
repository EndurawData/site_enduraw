import { useTranslation } from "react-i18next";

/**
 * Formules du dashboard. Prix et contenu : boutique du dashboard
 * (backend/subscriptions/catalogue.py), limités à ce que le code accorde
 * vraiment (marketing-pack/plans.md § 2.2). Elite n'est pas en vente : une
 * ligne, sans prix ni promesse.
 */
const PLANS = [
  { id: "free", price: "0", features: ["f1", "f2", "f3", "f4"] },
  { id: "starter", price: "8", features: ["f1", "f2"] },
  { id: "pro", price: "15", features: ["f1", "f2", "f3"] },
] as const;

export function DashboardPlans() {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        {PLANS.map((p) => (
          <div key={p.id} className="border-t border-white/10 pt-6">
            <h3 className="ep-display ep-h3">{t(`dashboardPage.plans.${p.id}.name`)}</h3>
            <p className="mt-4">
              <span className="ep-display text-[22px] tabular-nums">
                {t("dashboardPage.plans.price", { value: p.price })}
              </span>
              {p.price !== "0" && (
                <span className="ml-1.5 text-[14px] text-white/[0.55]">{t("dashboardPage.plans.perMonth")}</span>
              )}
            </p>
            {p.id !== "free" && (
              <p className="mt-5 text-[14px] text-white/[0.55]">{t(`dashboardPage.plans.${p.id}.intro`)}</p>
            )}
            <ul className="ep-body mt-4 space-y-2.5 text-[15px]">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-[0.6em] h-px w-3 shrink-0 bg-white/40" aria-hidden="true" />
                  <span>{t(`dashboardPage.plans.${p.id}.${f}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 text-[14px] text-white/[0.55]">{t("dashboardPage.plans.elite")}</p>
    </>
  );
}
