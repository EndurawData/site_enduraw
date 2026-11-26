import { useTranslation } from "react-i18next";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Frame } from "@/components/ui/Frame";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContentLink, ContentList, ContentMeta, ContentRow, NewTab } from "@/components/sections/ContentRow";
import { latestContent } from "@/data/latestContent";
import { EMAILS, LINKS, mailto } from "@/lib/links";

const lead = latestContent.find((item) => item.featured) ?? latestContent[0];
const others = latestContent.filter((item) => item !== lead);

export default function MediaPage() {
  const { t } = useTranslation();

  return (
    <>
      <PhotoHero
        short
        side="left"
        image="/images/epc/web/podcast.jpg"
        alt={t("mediaPage.hero.alt")}
        position="60% center"
        title={t("mediaPage.hero.title")}
        lead={t("mediaPage.hero.lead")}
      />

      {/* À la une : une grande image, un titre, un chapô. */}
      <section className="ep-section pt-12 md:pt-16">
        <div className="ep-wrap">
          <article className="group relative grid items-center gap-8 lg:grid-cols-[7fr_5fr] lg:gap-16">
            {lead.image && (
              <Frame
                side="left"
                src={lead.image}
                alt=""
                ratio="16 / 10"
                sizes="(min-width: 1024px) 58vw, 100vw"
                position={lead.imagePosition}
              />
            )}
            <div className={lead.image ? undefined : "lg:col-span-2 max-w-[720px]"}>
              <h2 className="ep-display ep-h3 transition-colors group-hover:text-ep-sky">
                <ContentLink item={lead} />
              </h2>
              <p className="ep-lead mt-5 max-w-[52ch]">{t(`content.items.${lead.key}`)}</p>
              <ContentMeta item={lead} className="mt-6" />
            </div>
          </article>
        </div>
      </section>

      {/* Tous les contenus : section claire, rangées de presse. */}
      <section className="ep-invert py-16 md:py-24">
        <div className="ep-wrap">
          <SectionHead
            tone="dark"
            title={t("mediaPage.all.title")}
            aside={
              <p className="ep-body text-[14px]">
                {t("mediaPage.all.follow")}{" "}
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="ep-inline-link">
                  @enduraw.data
                  <NewTab />
                </a>
              </p>
            }
          />

          <ContentList tone="light" className="mt-10">
            {others.map((item) => (
              <ContentRow key={item.url} item={item} tone="light" />
            ))}
          </ContentList>
        </div>
      </section>

      <FinalCta
        glow={false}
        title={t("mediaPage.cta.title")}
        text={t("mediaPage.cta.text")}
        action={{ to: mailto(EMAILS.media, t("mediaPage.cta.subject")), label: t("mediaPage.cta.button") }}
      />
    </>
  );
}
