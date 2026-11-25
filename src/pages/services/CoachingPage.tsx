import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { Capture } from "@/components/ui/Capture";
import { FinalCta } from "@/components/sections/FinalCta";
import { EMAILS, mailto } from "@/lib/links";

/* Ce que nous suivons, au-delà du plan. */
const AREAS = [
  { title: "coachingPage.areas.training.title", description: "coachingPage.areas.training.text" },
  { title: "coachingPage.areas.history.title", description: "coachingPage.areas.history.text" },
  { title: "coachingPage.areas.factors.title", description: "coachingPage.areas.factors.text" },
  { title: "coachingPage.areas.nutrition.title", description: "coachingPage.areas.nutrition.text" },
  { title: "coachingPage.areas.refueling.title", description: "coachingPage.areas.refueling.text" },
  { title: "coachingPage.areas.sleep.title", description: "coachingPage.areas.sleep.text" },
] as const;

/* Ce que comprend le support saisonnier. */
const INCLUDED = [
  { key: "coachingPage.season.items.planning" },
  { key: "coachingPage.season.items.advice" },
  { key: "coachingPage.season.items.feedback" },
  { key: "coachingPage.season.items.support" },
  { key: "coachingPage.season.items.pacing" },
  { key: "coachingPage.season.items.call" },
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
            <Action to={contact}>
              {t("coachingPage.hero.cta")}
            </Action>
            <Action to="#saison" variant="ghost">
              {t("coachingPage.hero.ctaSeason")}
            </Action>
          </>
        }
      />

      {/* La performance en entier, tous niveaux : une liste simple et l'analyse d'une séance. */}
      <section className="ep-section">
        <div className="ep-wrap grid items-start gap-12 lg:grid-cols-[6fr_6fr] lg:gap-16">
          <div>
            <SectionHead title={t("coachingPage.areas.title")} lead={t("coachingPage.areas.lead")} />
            <ul className="ep-lines ep-lines--tight mt-10">
              {AREAS.map((a) => (
                <li key={a.title} className="ep-body text-[15px] leading-relaxed">
                  <span className="font-medium text-white">{t(a.title)}</span> · {t(a.description)}
                </li>
              ))}
            </ul>
            <p className="ep-body mt-8 text-[15px]">
              {t("coachingPage.areas.testing")}{" "}
              <Link to="/services/testing" className="ep-inline-link">
                {t("coachingPage.areas.testingCta")}
              </Link>
            </p>
          </div>
          <Capture
            src="/images/captures/analyse-analyse-fractionne-panneau.png"
            alt={t("coachingPage.areas.captureAlt")}
            caption={t("coachingPage.areas.caption")}
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>
      </section>

      {/* Le contenu de la saison et son prix ; l'accompagnement élite à côté. */}
      <section id="saison" className="ep-section pt-0">
        <div className="ep-wrap grid items-start gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <SectionHead title={t("coachingPage.season.title")} lead={t("coachingPage.season.lead")} />
            <ul className="ep-lines ep-lines--tight mt-10">
              {INCLUDED.map((item) => (
                <li key={item.key} className="ep-body text-[15px]">
                  {t(item.key)}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-3">
              <span className="ep-body text-[15px]">{t("coachingPage.season.priceLabel")}</span>
              <span className="ep-display text-[22px] tabular-nums">{t("coachingPage.season.price")}</span>
              <span className="text-[14px] text-white/[0.55]">{t("coachingPage.season.period")}</span>
            </p>
          </div>

          <div className="ep-rule pt-8 lg:mt-[120px]">
            <h3 className="text-[17px] font-medium text-white">{t("coachingPage.elite.title")}</h3>
            <p className="ep-body mt-2 max-w-[60ch] text-[15px] leading-relaxed">{t("coachingPage.elite.text")}</p>
            <div className="mt-5">
              <Action to={mailto(EMAILS.performance, t("coachingPage.elite.subject"))} variant="link">
                {t("coachingPage.elite.cta")}
              </Action>
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
