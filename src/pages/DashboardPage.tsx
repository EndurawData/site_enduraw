import { useTranslation } from "react-i18next";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { Capture } from "@/components/ui/Capture";
import { FinalCta } from "@/components/sections/FinalCta";
import { DashboardFormulas } from "@/components/sections/DashboardFormulas";
import { DashboardPlans } from "@/components/sections/DashboardPlans";
import { EMAILS, LINKS, mailto } from "@/lib/links";
import { trackLead } from "@/lib/tracking";

const CORRECTIONS = ["heat", "wind", "altitude", "elevation"] as const;
const PACING_INPUTS = ["target", "course", "altitude", "weather"] as const;

/**
 * Le dashboard, en une page : ce qui était réparti entre /dashboard,
 * /services/enduraw-dashboard, /services/pacing-plan, /services/enduraw-report
 * et /services/enduraw-api. Les anciennes URL redirigent vers les ancres
 * #report, #pacing et #api (src/routes/manifest.ts).
 *
 * Premier écran : un titre court à gauche, la capture de la vue d'ensemble à
 * droite, assez basse pour laisser voir le haut de la section suivante. Le
 * produit est le sujet de la page ; une photo de tête l'aurait repoussé sous
 * la ligne de flottaison.
 */
export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <>
      <header className="pt-[calc(var(--ep-nav-h)+56px)] lg:pt-[calc(var(--ep-nav-h)+64px)]">
        <div className="ep-wrap grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-14">
          <div>
            <span className="ep-tiret ep-tiret--sky ep-rise" aria-hidden="true" />
            <h1 className="ep-display ep-h1 ep-rise ep-rise--2 mt-6">{t("dashboardPage.hero.title")}</h1>
            <p className="ep-lead ep-rise ep-rise--3 mt-6 max-w-[46ch]">{t("dashboardPage.hero.lead")}</p>
            <div className="ep-rise ep-rise--3 mt-8 flex flex-wrap gap-3">
              <Action to={LINKS.register} onClick={trackLead} className="max-sm:w-full">
                {t("dashboardPage.hero.ctaPrimary")}
              </Action>
              <Action to={LINKS.login} variant="ghost" className="max-sm:w-full">
                {t("dashboardPage.hero.ctaSecondary")}
              </Action>
            </div>
          </div>
          <Capture
            src="/images/captures/dashboard-vue-ensemble-desktop.png"
            alt={t("dashboardPage.hero.alt")}
            sizes="(min-width: 1360px) 740px, (min-width: 1024px) 55vw, 100vw"
            priority
            className="ep-rise ep-rise--3"
          />
        </div>
      </header>

      {/* Enduraw report : l'allure corrigée, puis l'analyse approfondie. */}
      <section id="report" className="ep-section">
        <div className="ep-wrap">
          <SectionHead title={t("dashboardPage.report.title")} lead={t("dashboardPage.report.lead")} />
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <dl className="ep-lines ep-lines--tight">
              {CORRECTIONS.map((key) => (
                <div key={key}>
                  <dt className="text-[17px] font-medium text-white">{t(`dashboardPage.report.${key}`)}</dt>
                  <dd className="ep-body mt-1 text-[15px]">{t(`dashboardPage.report.${key}Desc`)}</dd>
                </div>
              ))}
            </dl>
            <div>
              <Capture
                src="/images/captures/analyse-analyse-trail-graphe-1.png"
                alt={t("dashboardPage.report.alt")}
                sizes="(min-width: 1024px) 700px, 100vw"
              />
              <p className="ep-body mt-6 max-w-[60ch] text-[15px]">{t("dashboardPage.report.deep")}</p>
              <div className="mt-6">
                <Action to={LINKS.medium} variant="link">
                  {t("dashboardPage.report.article")}
                </Action>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Runner Matrix. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap grid items-center gap-12 lg:grid-cols-[6fr_6fr] lg:gap-16">
          <Capture
            src="/images/captures/matrice-radar-profil-athletique.png"
            alt={t("dashboardPage.matrix.alt")}
            sizes="(min-width: 1024px) 620px, 100vw"
            className="max-lg:order-2"
          />
          <SectionHead title={t("dashboardPage.matrix.title")} lead={t("dashboardPage.matrix.lead")} />
        </div>
      </section>

      {/* Plan de course : la courbe d'allure porte la section. */}
      <section id="pacing" className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead title={t("dashboardPage.pacing.title")} lead={t("dashboardPage.pacing.lead")} />
          <Capture
            src="/images/captures/pacing-courbe-allure-altitude.png"
            alt={t("dashboardPage.pacing.alt")}
            sizes="(min-width: 1360px) 1280px, 100vw"
            className="mt-12"
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
            <div>
              <p className="ep-label">{t("dashboardPage.pacing.inputsLabel")}</p>
              <dl className="ep-lines ep-lines--tight mt-5">
                {PACING_INPUTS.map((key) => (
                  <div key={key}>
                    <dt className="text-[17px] font-medium text-white">{t(`dashboardPage.pacing.${key}`)}</dt>
                    <dd className="ep-body mt-1 text-[15px]">{t(`dashboardPage.pacing.${key}Desc`)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:pt-9">
              <p className="ep-body text-[15px]">{t("dashboardPage.pacing.delivery")}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Action to={LINKS.pacingDemo} className="max-sm:w-full">
                  {t("dashboardPage.pacing.ctaDemo")}
                </Action>
                <Action to={LINKS.shop} variant="ghost" className="max-sm:w-full">
                  {t("dashboardPage.pacing.ctaOrder")}
                </Action>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formules : tard, sobres. */}
      <section id="formules" className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead
            title={t("dashboardPage.plans.title")}
            lead={t("dashboardPage.plans.lead")}
            aside={
              <Action to={LINKS.shop} variant="link">
                {t("dashboardPage.plans.cta")}
              </Action>
            }
          />
          <div className="mt-12">
            <DashboardPlans />
          </div>
        </div>
      </section>

      {/* API : les modèles, écrits en clair. */}
      <section id="api" className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead title={t("dashboardPage.api.title")} lead={t("dashboardPage.api.lead")} />
          <div className="mt-12">
            <DashboardFormulas />
          </div>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="ep-body max-w-[60ch] text-[15px]">{t("dashboardPage.api.contact")}</p>
            <Action
              to={mailto(EMAILS.dashboard, t("dashboardPage.api.subject"))}
              variant="ghost"
              className="shrink-0 max-sm:w-full"
            >
              {t("dashboardPage.api.cta")}
            </Action>
          </div>
        </div>
      </section>

      <FinalCta
        title={t("dashboardPage.cta.title")}
        text={t("dashboardPage.cta.text")}
        action={{
          to: LINKS.register,
          label: t("dashboardPage.cta.button"),
          onClick: trackLead,
        }}
      />
    </>
  );
}
