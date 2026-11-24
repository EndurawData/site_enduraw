import { useTranslation } from "react-i18next";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { PeopleList } from "@/components/sections/PeopleList";

/** Jalons repris des « mises à jour » de l'ancienne page Enduraw Dashboard. */
const MILESTONES = [
  { date: "2023-07", key: "idea" },
  { date: "2023-11", key: "launch" },
  { date: "2024-06", key: "v2" },
  { date: "2025-06", key: "dashboard" },
  { date: "2025-08", key: "pacing" },
  { date: "2026-02", key: "testing" },
  { date: "2026-04", key: "matrix" },
] as const;

/** L'équipe du site en ligne. Pas de portraits détourés : des noms et des rôles. */
const TEAM = [
  { name: "Joseph Mestrallet", key: "joseph", linkedin: "https://www.linkedin.com/in/joseph-mestrallet-770279a7/" },
  { name: "Anthony Saliou", key: "anthony", linkedin: "https://www.linkedin.com/in/anthony-saliou-085286158/" },
  { name: "Lucas Guillot", key: "lucas", linkedin: "https://www.linkedin.com/in/lucas-guillot01/" },
  { name: "Valentin Templé", key: "valentin", linkedin: "https://www.linkedin.com/in/valentin-templ%C3%A9/" },
  { name: "Kyllian Gricourt", key: "kyllian", linkedin: "https://www.linkedin.com/in/kyllian-gricourt-candelier-57856b25a/" },
  { name: "Charline Batel", key: "charline", linkedin: "https://www.linkedin.com/in/charline-batel/" },
  { name: "Antoine Figula", key: "antoine", linkedin: "https://www.linkedin.com/in/antoine-figula-b518192b1/" },
  { name: "Alexandre Pichon", key: "alex", linkedin: "https://www.linkedin.com/in/alexandre-pichon1/" },
] as const;

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const month = new Intl.DateTimeFormat(i18n.language, { month: "short", year: "numeric", timeZone: "UTC" });

  return (
    <>
      <PhotoHero
        image="/images/photos/team-asics.jpg"
        alt={t("aboutPage.hero.alt")}
        position="center 25%"
        title={t("aboutPage.hero.title")}
        lead={t("aboutPage.hero.lead")}
        actions={
          <Action to="/services" variant="ghost" className="max-sm:w-full">
            {t("aboutPage.hero.cta")}
          </Action>
        }
      />

      {/* Histoire : une phrase d'origine, puis les jalons datés. */}
      <section className="ep-section">
        <div className="ep-wrap grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--ep-nav-h)+40px)] lg:self-start">
            <SectionHead title={t("aboutPage.story.title")} lead={t("aboutPage.story.text")} />
          </div>
          <ol className="ep-lines ep-lines--tight lg:mt-12">
            {MILESTONES.map((m) => (
              <li key={m.key} className="grid grid-cols-[96px_1fr] gap-6 sm:grid-cols-[120px_1fr]">
                <time dateTime={m.date} className="text-[14px] tabular-nums text-white/[0.55]">
                  {month.format(new Date(`${m.date}-01T00:00:00Z`))}
                </time>
                <span className="text-[16px] font-light text-white">{t(`aboutPage.story.milestones.${m.key}`)}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Équipe : une liste typographique, le lien vers le recrutement en regard. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead
            title={t("aboutPage.team.title")}
            lead={t("aboutPage.team.text")}
            aside={
              <Action to="/careers" variant="link">
                {t("aboutPage.team.careers")}
              </Action>
            }
          />
          <PeopleList
            className="mt-12"
            people={TEAM.map((p) => ({
              name: p.name,
              detail: t(`aboutPage.team.roles.${p.key}`),
              href: p.linkedin,
              linkLabel: t("aboutPage.team.linkedin", { name: p.name }),
            }))}
          />
        </div>
      </section>
    </>
  );
}
