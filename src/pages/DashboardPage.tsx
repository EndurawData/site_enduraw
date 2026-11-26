import { useTranslation } from "react-i18next";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { Capture } from "@/components/ui/Capture";
import { Laptop, Phone } from "@/components/ui/Device";
import { PhoneShots } from "@/components/sections/PhoneShots";
import { FinalCta } from "@/components/sections/FinalCta";
import { DashboardFormulas } from "@/components/sections/DashboardFormulas";
import { DashboardPlans } from "@/components/sections/DashboardPlans";
import { EMAILS, LINKS, mailto } from "@/lib/links";
import { trackLead } from "@/lib/tracking";

const CORRECTIONS = ["heat", "wind", "altitude", "elevation"] as const;
const WEATHER = ["after", "before"] as const;
const PACING_INPUTS = ["target", "course", "altitude"] as const;

/**
 * Le dashboard, en une page : ce qui était réparti entre /dashboard,
 * /services/enduraw-dashboard, /services/pacing-plan, /services/enduraw-report
 * et /services/enduraw-api. Les anciennes URL redirigent vers les ancres
 * #report, #pacing et #api (src/routes/manifest.ts).
 *
 * Premier écran : un titre court à gauche, l'écran du dashboard à droite, dans
 * un ordinateur portable ; au téléphone, l'écran du téléphone. Puis Enduraw
 * report, gratuit, qui ouvre la page ; la météo, avant et après la course ; la
 * Runner Matrix ; le plan de pacing ; les formules ; les modèles, floutés.
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
              <Action to={LINKS.register} onClick={trackLead}>
                {t("dashboardPage.hero.ctaPrimary")}
              </Action>
              <Action to={LINKS.login} variant="ghost">
                {t("dashboardPage.hero.ctaSecondary")}
              </Action>
            </div>
          </div>
          {/* Sur ordinateur, la vue d'ensemble dans l'ordinateur ; au
              téléphone, l'écran du téléphone : réduite à 335 px, la vue
              d'ensemble ne se lisait pas. `sizes` à 1px pour l'appareil
              masqué : le navigateur n'en charge que la plus petite variante. */}
          <Laptop
            src="/images/captures/pacing-parcours-desktop.png"
            alt={t("dashboardPage.hero.alt")}
            sizes="(min-width: 1360px) 740px, (min-width: 1024px) 55vw, 1px"
            priority
            className="ep-rise ep-rise--3 max-lg:hidden"
          />
          <Phone
            src="/images/captures/aujourdhui-mobile.png"
            alt={t("dashboardPage.hero.altMobile")}
            sizes="(min-width: 1024px) 1px, 64vw"
            priority
            className="ep-rise ep-rise--3 mx-auto w-[64%] max-w-[280px] lg:hidden"
          />
        </div>
      </header>

      {/* Enduraw report : gratuit, il ouvre la page. L'analyse d'une sortie
          dans l'ordinateur, les corrections à côté. */}
      <section id="report" className="ep-section">
        <div className="ep-wrap">
          <SectionHead
            title={
              <>
                {t("dashboardPage.report.title")}{" "}
                <span className="ep-badge ml-3 align-middle">
                  <span>{t("dashboardPage.report.free")}</span>
                </span>
              </>
            }
            lead={t("dashboardPage.report.lead")}
            aside={
              <Action to={LINKS.register} onClick={trackLead}>
                {t("dashboardPage.report.cta")}
              </Action>
            }
          />
          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
            <Laptop
              src="/images/captures/analyse-trail-desktop.png"
              alt={t("dashboardPage.report.alt")}
              sizes="(min-width: 1360px) 740px, (min-width: 1024px) 56vw, 100vw"
              className="ep-reveal"
            />
            <div className="ep-reveal">
              <dl className="ep-lines ep-lines--tight">
                {CORRECTIONS.map((key) => (
                  <div key={key}>
                    <dt className="text-[17px] font-medium text-white">{t(`dashboardPage.report.${key}`)}</dt>
                    <dd className="ep-body mt-1 text-[15px]">{t(`dashboardPage.report.${key}Desc`)}</dd>
                  </div>
                ))}
              </dl>
              <p className="ep-body mt-8 text-[15px]">{t("dashboardPage.report.deep")}</p>
              <div className="mt-6">
                <Action to={LINKS.medium} variant="link">
                  {t("dashboardPage.report.article")}
                </Action>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Météo : celle de la sortie, dans l'analyse ; celle du jour J, dans
          le plan de pacing. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead title={t("dashboardPage.weather.title")} lead={t("dashboardPage.weather.lead")} />
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[4fr_8fr] lg:gap-16">
            <dl className="ep-reveal ep-lines ep-lines--tight">
              {WEATHER.map((key) => (
                <div key={key}>
                  <dt className="text-[17px] font-medium text-white">{t(`dashboardPage.weather.${key}Label`)}</dt>
                  <dd className="ep-body mt-1 text-[15px]">{t(`dashboardPage.weather.${key}Text`)}</dd>
                </div>
              ))}
            </dl>
            <Capture
              src="/images/captures/pacing-meteo-parcours.png"
              alt={t("dashboardPage.weather.alt")}
              caption={t("dashboardPage.weather.caption")}
              sizes="(min-width: 1360px) 840px, (min-width: 1024px) 64vw, 100vw"
              className="ep-reveal"
            />
          </div>
        </div>
      </section>

      {/* Runner Matrix. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap grid items-center gap-12 lg:grid-cols-[6fr_6fr] lg:gap-16">
          <PhoneShots
            className="mx-auto w-full max-w-[560px] max-lg:order-2"
            shots={[
              { src: "/images/captures/matrice-mobile.png", alt: t("dashboardPage.matrix.alt") },
              { src: "/images/captures/pacing-apercu-mobile.png", alt: t("dashboardPage.matrix.altPacing") },
            ]}
          />
          <SectionHead title={t("dashboardPage.matrix.title")} lead={t("dashboardPage.matrix.lead")} />
        </div>
      </section>

      {/* Plan de course : le plan de démonstration en premier, le plan dans
          l'ordinateur à côté. */}
      <section id="pacing" className="ep-section pt-0">
        <div className="ep-wrap">
          <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <div>
              <SectionHead title={t("dashboardPage.pacing.title")} lead={t("dashboardPage.pacing.lead")} />
              <div className="ep-reveal mt-8 flex flex-wrap gap-3">
                <Action to={LINKS.pacingDemo}>{t("dashboardPage.pacing.ctaDemo")}</Action>
                <Action to={LINKS.shop} variant="ghost">
                  {t("dashboardPage.pacing.ctaOrder")}
                </Action>
              </div>
            </div>
            <Laptop
              src="/images/captures/pacing-apercu-desktop.png"
              alt={t("dashboardPage.pacing.altLaptop")}
              className="ep-reveal"
            />
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
            <div className="ep-reveal">
              <dl className="ep-lines ep-lines--tight">
                {PACING_INPUTS.map((key) => (
                  <div key={key}>
                    <dt className="text-[17px] font-medium text-white">{t(`dashboardPage.pacing.${key}`)}</dt>
                    <dd className="ep-body mt-1 text-[15px]">{t(`dashboardPage.pacing.${key}Desc`)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="ep-reveal ep-body text-[15px] lg:pt-5">{t("dashboardPage.pacing.delivery")}</p>
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

      {/* Les modèles, floutés, sans titre (voir DashboardFormulas). Une seule
          ligne pour l'API, que le site en ligne annonçait. */}
      <section id="api" className="ep-section pt-0">
        <div className="ep-wrap">
          {/* L'apparition sur un parent : l'animation de défilement et la
              transition du flou ne se disputent pas l'opacité. */}
          <div className="ep-reveal">
            <DashboardFormulas />
          </div>
          <div className="ep-reveal mt-14 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            <p className="ep-body text-[15px]">{t("dashboardPage.api.contact")}</p>
            <Action to={mailto(EMAILS.dashboard, t("dashboardPage.api.subject"))} variant="link">
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
