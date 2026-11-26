import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { Media } from "@/components/ui/Media";
import { Frame } from "@/components/ui/Frame";
import { Phone } from "@/components/ui/Device";
import { FinalCta } from "@/components/sections/FinalCta";
import { ADDRESS, EMAILS, LINKS, mailto } from "@/lib/links";
import { cn } from "@/lib/utils";

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

/** Adresse de la salle Rune, où Enduraw loue un tapis le temps du test (CGV du dashboard). */
const RUNE_ADDRESS = "14 rue Martel, 75010 Paris";

/**
 * Une étape du test : le numéro, le titre, le texte, et la photo réelle de
 * l'étape. `flip` met le visuel à gauche sur desktop (alternance).
 */
function Step({
  n,
  title,
  text,
  visual,
  flip = false,
  children,
}: {
  n: number;
  title: string;
  text: string;
  visual: ReactNode;
  flip?: boolean;
  children?: ReactNode;
}) {
  return (
    <li className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className={cn("ep-reveal", flip && "lg:order-2")}>
        <span className="ep-num ep-num--sm block text-white/40 tabular-nums" aria-hidden="true">
          {String(n).padStart(2, "0")}
        </span>
        <h3 className="ep-display ep-h3 mt-4">{title}</h3>
        <p className="ep-body mt-4 max-w-[52ch] text-[15px] leading-relaxed">{text}</p>
        {children}
      </div>
      <div className={cn(flip && "lg:order-1")}>{visual}</div>
    </li>
  );
}

export default function LabPage() {
  const { t } = useTranslation();
  const step = (key: string) => `labPage.process.steps.${key}`;

  return (
    <>
      <PhotoHero
        side="left"
        image="/images/testing/vo2-mask-treadmill.jpg"
        alt={t("labPage.hero.alt")}
        position="45% center"
        title={t("labPage.hero.title")}
        lead={t("labPage.hero.lead")}
        actions={
          <>
            <Action to={LINKS.shopTesting}>{t("labPage.book")}</Action>
            <Action to="#tests" variant="ghost">
              {t("labPage.hero.seeTests")}
            </Action>
          </>
        }
      />

      {/* Le déroulé d'un test : une vraie séquence, une photo réelle par étape, en alternance. */}
      <section id="deroule" className="ep-section">
        <div className="ep-wrap">
          <SectionHead title={t("labPage.process.title")} lead={t("labPage.process.lead")} />
          <ol className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
            <Step
              n={1}
              title={t(`${step("book")}.title`)}
              text={t(`${step("book")}.text`)}
              visual={
                <div className="grid grid-cols-2 items-start gap-8 sm:gap-12">
                  <Frame
                    src="/images/epc/web/A7408201.jpg"
                    alt={t(`${step("book")}.altChamonix`)}
                    caption={t(`${step("book")}.captionChamonix`)}
                    side="left"
                    ratio="4 / 5"
                    position="72% center"
                    sizes="(min-width: 1024px) 24vw, 46vw"
                  />
                  <Frame
                    src="/images/testing/rune-salle-paris.jpg"
                    alt={t(`${step("book")}.altParis`)}
                    caption={t(`${step("book")}.captionParis`)}
                    ratio="4 / 5"
                    position="center"
                    sizes="(min-width: 1024px) 24vw, 46vw"
                    className="mt-12 sm:mt-20"
                  />
                </div>
              }
            >
              <dl className="ep-lines ep-lines--tight mt-8 max-w-[52ch] text-[15px]">
                <div className="grid gap-1 sm:grid-cols-[96px_1fr] sm:gap-6">
                  <dt className="font-medium text-white">{t(`${step("book")}.chamonix`)}</dt>
                  <dd className="ep-body">
                    {t(`${step("book")}.chamonixText`)}{" "}
                    <a href="#performance-center" className="ep-inline-link">
                      {t(`${step("book")}.chamonixLink`)}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[96px_1fr] sm:gap-6">
                  <dt className="font-medium text-white">{t(`${step("book")}.paris`)}</dt>
                  <dd className="ep-body">{t(`${step("book")}.parisText`, { address: RUNE_ADDRESS })}</dd>
                </div>
              </dl>
            </Step>

            <Step
              n={2}
              flip
              title={t(`${step("fitting")}.title`)}
              text={t(`${step("fitting")}.text`)}
              visual={
                <Frame
                  src="/images/testing/mask-fitting.jpg"
                  alt={t(`${step("fitting")}.alt`)}
                  side="left"
                  ratio="3 / 2"
                  position="center 35%"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              }
            />

            <Step
              n={3}
              title={t(`${step("test")}.title`)}
              text={t(`${step("test")}.text`)}
              visual={
                <Frame
                  src="/images/testing/rune-vo2-masque-tapis.jpg"
                  alt={t(`${step("test")}.alt`)}
                  caption={t(`${step("test")}.caption`)}
                  ratio="3 / 2"
                  position="40% center"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              }
            >
              <dl className="mt-8 max-w-[52ch] space-y-5">
                {PROTOCOLS.map((p) => (
                  <div key={p}>
                    <dt className="text-[15px] font-medium text-white">{t(`${step("test")}.${p}.title`)}</dt>
                    <dd className="ep-body mt-1.5 text-[15px] leading-relaxed">{t(`${step("test")}.${p}.items`)}</dd>
                  </div>
                ))}
              </dl>
            </Step>

            <Step
              n={4}
              flip
              title={t(`${step("debrief")}.title`)}
              text={t(`${step("debrief")}.text`)}
              visual={
                <Frame
                  src="/images/testing/rune-tapis-coach.jpg"
                  alt={t(`${step("debrief")}.alt`)}
                  side="left"
                  ratio="3 / 2"
                  position="center 30%"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              }
            />

            <Step
              n={5}
              title={t(`${step("report")}.title`)}
              text={t(`${step("report")}.text`)}
              visual={
                <figure className="ep-reveal mx-auto w-full max-w-[560px]">
                  <div className="grid grid-cols-[1.3fr_1fr] items-start gap-6 sm:gap-10">
                    <Media
                      src="/images/testing/rendu-synthese-pdf.webp"
                      alt={t(`${step("report")}.altPdf`)}
                      ratio="1120 / 1600"
                      sizes="(min-width: 1024px) 300px, 54vw"
                    />
                    <Phone
                      src="/images/captures/testing-resultats-mobile.png"
                      alt={t(`${step("report")}.altPhone`)}
                      sizes="(min-width: 1024px) 230px, 40vw"
                      className="mt-12 sm:mt-20"
                    />
                  </div>
                  <figcaption className="mt-5 text-[13px] text-white/50">{t(`${step("report")}.caption`)}</figcaption>
                </figure>
              }
            />
          </ol>
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
          <div className="ep-reveal">
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

        {/* Ses usages : une rangée chacun, pas de cartes ; deux colonnes sur desktop pour rester court. */}
        <div className="ep-wrap mt-16">
          <ul className="ep-lines lg:grid lg:grid-cols-2 lg:gap-x-12 lg:[&>*:nth-last-child(2)]:border-b lg:[&>*:nth-last-child(2)]:border-[color:var(--ep-line)]">
            {USES.map((use) => (
              <li
                key={use.id}
                id={use.id}
                className="grid grid-cols-[96px_1fr] items-start gap-5 sm:grid-cols-[176px_1fr] sm:gap-8 lg:grid-cols-[144px_1fr] lg:gap-6"
              >
                <Media
                  src={use.image}
                  alt={t(`labPage.uses.${use.key}.alt`)}
                  ratio="4 / 3"
                  sizes="(min-width: 1024px) 144px, (min-width: 640px) 176px, 96px"
                  position={use.position}
                />
                <div>
                  <h3 className="text-[17px] font-medium text-white">{t(`labPage.uses.${use.key}.title`)}</h3>
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
