import { useTranslation } from "react-i18next";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { PhoneShots } from "@/components/sections/PhoneShots";
import { Media } from "@/components/ui/Media";
import { Frame } from "@/components/ui/Frame";
import { FinalCta } from "@/components/sections/FinalCta";
import { ADDRESS, EMAILS, LINKS, mailto } from "@/lib/links";

/** Une séance en trois temps. */
const STEPS = ["before", "during", "after"] as const;

/** Les deux protocoles : ce que chacun mesure, en une phrase. */
const PROTOCOLS = ["vo2", "runWalk"] as const;

/** Les tests du site en ligne, prix compris. Les deux derniers se font sur demande. */
const TESTS = [
  { key: "flat", bookable: true, lactate: true },
  { key: "uphill", bookable: true, lactate: true },
  { key: "runwalk", bookable: true, lactate: false },
  { key: "durability", bookable: false, lactate: false },
  { key: "premium", bookable: false, lactate: false },
] as const;

/**
 * Les usages du Performance Center. Les `id` sont des cibles de redirection
 * des anciennes pages EPC (`/epc/*`) : ne pas les renommer.
 */
const USES = [
  { id: "training-camp", key: "camp", image: "/images/epc/web/Coworking terrace.jpg", position: "center 62%" },
  { id: "seminars", key: "seminar", image: "/images/epc/web/Coworking meeting room.jpg", position: "center 58%" },
  { id: "coworking", key: "coworking", image: "/images/epc/web/A7408092.jpg", position: "center" },
  { id: "podcast", key: "podcast", image: "/images/epc/web/podcast2.jpg", position: "center 60%" },
] as const;

export default function LabPage() {
  const { t } = useTranslation();

  return (
    <>
      <PhotoHero
        side="left"
        image="/images/epc/web/A7408201.jpg"
        alt={t("labPage.hero.alt")}
        position="70% center"
        title={t("labPage.hero.title")}
        lead={t("labPage.hero.lead")}
        actions={
          <>
            <Action to={LINKS.shopTesting}>
              {t("labPage.book")}
            </Action>
            <Action to="#tests" variant="ghost">
              {t("labPage.hero.seeTests")}
            </Action>
          </>
        }
      />

      {/* Un test : la séance en trois temps, les deux protocoles, le compte rendu. */}
      <section className="ep-section">
        <div className="ep-wrap grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <SectionHead title={t("labPage.measure.title")} lead={t("labPage.measure.lead")} />
            <ol className="ep-lines ep-lines--tight mt-10">
              {STEPS.map((step) => (
                <li key={step} className="grid gap-1 sm:grid-cols-[88px_1fr] sm:gap-6">
                  <span className="ep-label pt-1">{t(`labPage.measure.steps.${step}.label`)}</span>
                  <p className="ep-body text-[15px]">{t(`labPage.measure.steps.${step}.text`)}</p>
                </li>
              ))}
            </ol>
            <dl className="mt-10 space-y-5">
              {PROTOCOLS.map((p) => (
                <div key={p}>
                  <dt className="text-[15px] font-medium text-white">{t(`labPage.measure.${p}.title`)}</dt>
                  <dd className="ep-body mt-1.5 text-[15px] leading-relaxed">{t(`labPage.measure.${p}.items`)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="lg:sticky lg:top-[calc(var(--ep-nav-h)+40px)]">
            <PhoneShots
              className="mx-auto w-full max-w-[560px]"
              shots={[
                { src: "/images/captures/testing-resultats-mobile.png", alt: t("labPage.measure.captureAlt") },
                { src: "/images/captures/testing-evolution-mobile.png", alt: t("labPage.measure.altEvolution") },
              ]}
            />
            <figcaption className="mx-auto mt-4 max-w-[560px] text-[13px] text-white/50">{t("labPage.measure.caption")}</figcaption>
          </figure>
        </div>
      </section>

      {/* Tests et tarifs : une liste serrée, un seul lien boutique. */}
      <section id="tests" className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead
            title={t("labPage.offer.title")}
            lead={t("labPage.offer.lead")}
            aside={
              <Action to={LINKS.shopTesting} variant="link">
                {t("labPage.book")}
              </Action>
            }
          />
          <ul className="ep-lines ep-lines--tight mt-10">
            {TESTS.map((test) => (
              <li key={test.key} className="grid gap-2 md:grid-cols-[minmax(0,1fr)_240px] md:items-baseline md:gap-10">
                <div>
                  <h3 className="text-[17px] font-medium text-white">{t(`labPage.offer.tests.${test.key}.name`)}</h3>
                  <p className="ep-body mt-1 text-[15px]">{t(`labPage.offer.tests.${test.key}.short`)}</p>
                </div>
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 md:justify-end">
                  <span className="ep-display text-[22px] tabular-nums">{t(`labPage.offer.tests.${test.key}.price`)}</span>
                  {test.lactate && <span className="text-[14px] text-white/[0.55]">{t("labPage.offer.lactate")}</span>}
                  {!test.bookable && (
                    <a
                      href={mailto(EMAILS.performance, t(`labPage.offer.tests.${test.key}.name`))}
                      className="ep-inline-link text-[14px]"
                    >
                      {t("labPage.offer.onRequest")}
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ul>
          <p className="ep-body mt-8 max-w-[72ch] text-[15px]">
            {t("labPage.offer.business")}{" "}
            <a href={mailto(EMAILS.performance, t("labPage.offer.businessSubject"))} className="ep-inline-link">
              {t("labPage.offer.businessCta")}
            </a>
          </p>
        </div>
      </section>

      {/* Le lieu : une photo, deux paragraphes, l'accès en une ligne. */}
      <section id="performance-center" className="ep-section pt-0">
        <div className="ep-wrap grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <SectionHead title={t("labPage.place.title")} />
            <p className="ep-lead mt-5 max-w-[56ch]">{t("labPage.place.p1")}</p>
            <p className="ep-body mt-4 max-w-[56ch] text-[15px] leading-relaxed">{t("labPage.place.p2")}</p>
            <address className="ep-body mt-6 text-[15px] not-italic">
              <span className="text-white">{ADDRESS.display}</span> · {t("labPage.place.access")}
            </address>
          </div>
          <Frame
            side="right"
            src="/images/epc/web/A7408183.jpg"
            alt={t("labPage.place.alt")}
            ratio="16 / 10"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>

        {/* Ses usages : une rangée chacun, pas de cartes. */}
        <div className="ep-wrap mt-14">
          <ul className="ep-lines">
            {USES.map((use) => (
              <li
                key={use.id}
                id={use.id}
                className="grid grid-cols-[96px_1fr] items-start gap-5 sm:grid-cols-[176px_1fr] sm:gap-8"
              >
                <Media
                  src={use.image}
                  alt={t(`labPage.uses.${use.key}.alt`)}
                  ratio="4 / 3"
                  sizes="(min-width: 640px) 176px, 96px"
                  position={use.position}
                />
                <div>
                  <h3 className="text-[17px] font-medium text-white">
                    {t(`labPage.uses.${use.key}.title`)}
                  </h3>
                  <p className="ep-body mt-2 max-w-[64ch] text-[15px] leading-relaxed">{t(`labPage.uses.${use.key}.text`)}</p>
                  <div className="mt-3">
                    <Action to={mailto(EMAILS.performance, t(`labPage.uses.${use.key}.subject`))} variant="link">
                      {t(`labPage.uses.${use.key}.cta`)}
                    </Action>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        glow={false}
        title={t("labPage.cta.title")}
        text={t("labPage.cta.text")}
        action={{ to: LINKS.shopTesting, label: t("labPage.book") }}
        secondary={{ to: mailto(EMAILS.performance, t("labPage.cta.subject")), label: t("labPage.cta.secondary") }}
      />
    </>
  );
}
