import { useTranslation } from "react-i18next";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { Frame } from "@/components/ui/Frame";
import { FinalCta } from "@/components/sections/FinalCta";
import { Figures } from "@/components/sections/Figures";
import { PhoneShots } from "@/components/sections/PhoneShots";
import { ContentList, ContentRow, NewTab } from "@/components/sections/ContentRow";
import { PeopleList } from "@/components/sections/PeopleList";
import { latestContent } from "@/data/latestContent";
import { LINKS } from "@/lib/links";
import { trackLead } from "@/lib/tracking";

const ATHLETES = [
  { name: "Tom Evans", key: "tom" },
  { name: "Petter Engdahl", key: "petter" },
  { name: "Casimir Moine", key: "casimir" },
  { name: "Théo Detienne", key: "theo" },
  { name: "Duncan Perrillat", key: "duncan" },
] as const;

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <PhotoHero
        image="/images/workshop/workshop1.jpg"
        alt={t("home.hero.alt")}
        position="50% 30%"
        title={
          // Le slogan de la marque reste en anglais dans toutes les langues.
          <span lang="en">
            <span className="block">{t("home.hero.line1")}</span> <span className="block">{t("home.hero.line2")}</span>{" "}
            <span className="block">{t("home.hero.line3")}</span>
          </span>
        }
        lead={t("home.hero.lead")}
        actions={
          <>
            <Action to="/dashboard">
              {t("home.hero.ctaDashboard")}
            </Action>
            <Action to="/services" variant="ghost">
              {t("home.hero.ctaServices")}
            </Action>
          </>
        }
      />

      <Figures />

      {/* Dashboard : titre, texte, lien, une capture. */}
      <section className="ep-section">
        <div className="ep-wrap grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="ep-reveal">
            <SectionHead title={t("home.dashboard.title")} lead={t("home.dashboard.text")} />
            <div className="mt-8">
              <Action to="/dashboard" variant="link">
                {t("home.dashboard.cta")}
              </Action>
            </div>
          </div>
          <PhoneShots
            className="mx-auto w-full max-w-[560px]"
            shots={[
              { src: "/images/captures/aujourdhui-mobile.png", alt: t("home.dashboard.altToday") },
              { src: "/images/captures/matrice-mobile.png", alt: t("home.dashboard.altMatrix") },
            ]}
          />
        </div>
      </section>

      {/* Tests : la photo de l'athlète porte la section, pas une capture. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <Frame
            src="/images/workshop/workshop2.JPG"
            alt={t("home.testing.alt")}
            caption={t("home.testing.caption")}
            side="left"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 58vw, 100vw"
            position="70% center"
            className="max-lg:order-2"
          />
          <div className="ep-reveal">
            <SectionHead title={t("home.testing.title")} lead={t("home.testing.text")} />
            <div className="mt-8">
              <Action to="/services/testing" variant="link">
                {t("home.testing.cta")}
              </Action>
            </div>
          </div>
        </div>
      </section>

      {/* Sur le terrain : un seul point d'attention, la photo. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap">
          <div className="grid items-end gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <div className="ep-reveal">
              <SectionHead title={t("home.field.title")} lead={t("home.field.text")} />
              <div className="mt-8">
                <Action to="/services/coaching" variant="link">
                  {t("home.field.cta")}
                </Action>
              </div>
            </div>
            <Frame
              src="/images/photos/tom-lactate.jpg"
              alt={t("home.field.alt")}
              caption={t("home.field.caption")}
              ratio="16 / 10"
              sizes="(min-width: 1024px) 58vw, 100vw"
              position="center 30%"
            />
          </div>

          {/* Athlètes : des noms et des résultats, pas des silhouettes détourées. */}
          <div className="ep-reveal mt-24">
            <h3 id="athletes" className="ep-label">{t("home.athletes.label")}</h3>
            <PeopleList
              labelledBy="athletes"
              className="mt-6"
              people={ATHLETES.map((a) => ({ name: a.name, detail: t(`home.athletes.${a.key}`) }))}
            />
          </div>
        </div>
      </section>

      {/* Derniers contenus : rangées éditoriales. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead
            title={t("home.latest.title")}
            aside={
              <Action to="/media" variant="link">
                {t("home.latest.all")}
              </Action>
            }
          />
          <ContentList className="mt-12">
            {latestContent.slice(0, 3).map((item) => (
              <ContentRow key={item.url} item={item} />
            ))}
          </ContentList>
          <p className="ep-body mt-6 text-[14px]">
            {t("home.latest.follow")}{" "}
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="ep-inline-link">
              @enduraw.data
              <NewTab />
            </a>
          </p>
        </div>
      </section>

      <FinalCta
        title={t("home.cta.title")}
        text={t("home.cta.text")}
        action={{ to: LINKS.register, label: t("home.cta.button"), onClick: trackLead }}
      />
    </>
  );
}
