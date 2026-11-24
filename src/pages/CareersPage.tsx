import { useTranslation } from "react-i18next";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { LINKS } from "@/lib/links";

const STEPS = ["form", "review", "talk"] as const;

export default function CareersPage() {
  const { t } = useTranslation();

  return (
    <>
      <PhotoHero
        short
        image="/images/epc/web/A7408144.jpg"
        alt={t("careersPage.hero.alt")}
        position="center 60%"
        title={t("careersPage.hero.title")}
        lead={t("careersPage.hero.lead")}
        actions={
          <Action to={LINKS.careersForm} className="max-sm:w-full">
            {t("careersPage.apply")}
          </Action>
        }
      />

      {/* Trois étapes, numérotées parce que c'est une vraie séquence. */}
      <section className="ep-section">
        <div className="ep-wrap grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <SectionHead className="self-start" title={t("careersPage.steps.title")} lead={t("careersPage.steps.text")} />
          <ol className="ep-lines ep-lines--tight lg:mt-12">
            {STEPS.map((key, i) => (
              <li key={key} className="grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-[56px_1fr] sm:gap-6">
                <span className="ep-display text-[22px] leading-none tabular-nums text-white/[0.55]" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-medium text-white">{t(`careersPage.steps.${key}.title`)}</h3>
                  <p className="ep-body mt-2 text-[15px] leading-relaxed">
                    {t(`careersPage.steps.${key}.text`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
