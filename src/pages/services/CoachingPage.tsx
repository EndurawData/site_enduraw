import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { Laptop } from "@/components/ui/Device";
import { Frame } from "@/components/ui/Frame";
import { FinalCta } from "@/components/sections/FinalCta";
import { EMAILS, mailto } from "@/lib/links";

/* Ce que montre l'analyse d'une séance : seulement ce qui se voit sur la capture. */
const READS = [
  { title: "coachingPage.analysis.items.type.title", description: "coachingPage.analysis.items.type.text" },
  { title: "coachingPage.analysis.items.intensity.title", description: "coachingPage.analysis.items.intensity.text" },
  { title: "coachingPage.analysis.items.reps.title", description: "coachingPage.analysis.items.reps.text" },
  { title: "coachingPage.analysis.items.weather.title", description: "coachingPage.analysis.items.weather.text" },
  { title: "coachingPage.analysis.items.adjusted.title", description: "coachingPage.analysis.items.adjusted.text" },
] as const;

/* Ce que comprend le coaching sur la saison. */
const INCLUDED = [
  { key: "coachingPage.coaching.items.planning" },
  { key: "coachingPage.coaching.items.advice" },
  { key: "coachingPage.coaching.items.feedback" },
  { key: "coachingPage.coaching.items.support" },
  { key: "coachingPage.coaching.items.pacing" },
  { key: "coachingPage.coaching.items.call" },
] as const;

export default function CoachingPage() {
  const { t } = useTranslation();
  const contact = mailto(EMAILS.performance, t("coachingPage.contactSubject"));

  return (
    <>
      <PhotoHero
        image="/images/workshop/workshop5.JPG"
        alt={t("coachingPage.hero.alt")}
        position="center 24%"
        // Le traileur occupe le centre de la photo : le titre s'arrête avant lui.
        title={<span className="block lg:max-w-[600px]">{t("coachingPage.hero.title")}</span>}
        lead={t("coachingPage.hero.lead")}
        actions={
          <>
            <Action to={contact}>{t("coachingPage.hero.cta")}</Action>
            <Action to="#offres" variant="ghost">
              {t("coachingPage.hero.ctaOffers")}
            </Action>
          </>
        }
      />

      {/* D'abord ce que le dashboard lit d'une séance : court, une capture dans l'ordinateur. */}
      <section className="ep-section">
        <div className="ep-wrap grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="ep-reveal">
            <SectionHead title={t("coachingPage.analysis.title")} lead={t("coachingPage.analysis.lead")} />
            <ul className="ep-lines ep-lines--tight mt-10">
              {READS.map((r) => (
                <li key={r.title} className="ep-body text-[15px] leading-relaxed">
                  <span className="font-medium text-white">{t(r.title)}</span> · {t(r.description)}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-4">
              <Action to="/dashboard" variant="link">
                {t("coachingPage.analysis.cta")}
              </Action>
              <p className="ep-body text-[15px]">
                {t("coachingPage.analysis.testing")}{" "}
                <Link to="/services/testing" className="ep-inline-link">
                  {t("coachingPage.analysis.testingCta")}
                </Link>
              </p>
            </div>
          </div>
          <figure className="ep-reveal">
            <Laptop
              src="/images/captures/analyse-fractionne-desktop.png"
              alt={t("coachingPage.analysis.captureAlt")}
              sizes="(min-width: 1360px) 700px, (min-width: 1024px) 52vw, 100vw"
            />
            <figcaption className="mt-5 text-[13px] text-white/[0.55]">{t("coachingPage.analysis.caption")}</figcaption>
          </figure>
        </div>
      </section>

      {/* Pour aller plus loin : deux offres, la photo de terrain à côté, le prix en dernier. */}
      <section id="offres" className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead title={t("coachingPage.offers.title")} lead={t("coachingPage.offers.lead")} />
          <div className="mt-14 grid items-start gap-16 lg:grid-cols-[5fr_7fr]">
            <Frame
              src="/images/photos/cyclist.jpg"
              alt={t("coachingPage.offers.photoAlt")}
              side="left"
              ratio="4 / 5"
              position="center 40%"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />

            <div>
              <article className="ep-reveal ep-rule pt-8">
                <h3 className="ep-display ep-h3">{t("coachingPage.data.title")}</h3>
                <p className="ep-body mt-4 max-w-[60ch] text-[15px] leading-relaxed">{t("coachingPage.data.text")}</p>
                <div className="mt-6">
                  <Action to={mailto(EMAILS.performance, t("coachingPage.data.subject"))} variant="link">
                    {t("coachingPage.data.cta")}
                  </Action>
                </div>
              </article>

              <article id="saison" className="ep-reveal ep-rule mt-14 pt-8">
                <h3 className="ep-display ep-h3">{t("coachingPage.coaching.title")}</h3>
                <p className="ep-body mt-4 max-w-[60ch] text-[15px] leading-relaxed">{t("coachingPage.coaching.text")}</p>
                <ul className="ep-lines ep-lines--tight mt-8">
                  {INCLUDED.map((item) => (
                    <li key={item.key} className="ep-body text-[15px]">
                      {t(item.key)}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 flex flex-wrap items-baseline gap-x-3">
                  <span className="ep-body text-[15px]">{t("coachingPage.coaching.priceLabel")}</span>
                  <span className="ep-display text-[22px] tabular-nums">{t("coachingPage.coaching.price")}</span>
                  <span className="text-[14px] text-white/[0.55]">{t("coachingPage.coaching.period")}</span>
                </p>

                <div className="mt-10">
                  <h4 className="text-[15px] font-medium text-white">{t("coachingPage.elite.title")}</h4>
                  <p className="ep-body mt-2 max-w-[60ch] text-[15px] leading-relaxed">{t("coachingPage.elite.text")}</p>
                  <div className="mt-4">
                    <Action to={mailto(EMAILS.performance, t("coachingPage.elite.subject"))} variant="link">
                      {t("coachingPage.elite.cta")}
                    </Action>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        glow={false}
        title={t("coachingPage.cta.title")}
        text={t("coachingPage.cta.text")}
        action={{ to: contact, label: t("coachingPage.cta.button") }}
      />
    </>
  );
}
