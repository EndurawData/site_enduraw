import { useTranslation } from "react-i18next";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { TeamMarquee } from "@/components/sections/TeamMarquee";

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

/** L'équipe du site en ligne. Portraits LinkedIn carrés (`/images/equipe/`) ; Kyllian sans photo : ses initiales. */
const TEAM: readonly { name: string; key: string; linkedin: string; photo?: string }[] = [
  { name: "Joseph Mestrallet", key: "joseph", linkedin: "https://www.linkedin.com/in/joseph-mestrallet-770279a7/", photo: "/images/equipe/joseph.jpg" },
  { name: "Anthony Saliou", key: "anthony", linkedin: "https://www.linkedin.com/in/anthony-saliou-085286158/", photo: "/images/equipe/anthony.jpg" },
  { name: "Valentin Templé", key: "valentin", linkedin: "https://www.linkedin.com/in/valentin-templ%C3%A9/", photo: "/images/equipe/valentin.jpg" },
  { name: "Lucas Guillot", key: "lucas", linkedin: "https://www.linkedin.com/in/lucas-guillot01/", photo: "/images/equipe/lucas.jpg" },
  { name: "Kyllian Gricourt", key: "kyllian", linkedin: "https://www.linkedin.com/in/kyllian-gricourt-candelier-57856b25a/" },
  { name: "Charline Batel", key: "charline", linkedin: "https://www.linkedin.com/in/charline-batel/", photo: "/images/equipe/charline.jpg" },
  { name: "Antoine Figula", key: "antoine", linkedin: "https://www.linkedin.com/in/antoine-figula-b518192b1/", photo: "/images/equipe/antoine.jpg" },
  { name: "Alexandre Pichon", key: "alex", linkedin: "https://www.linkedin.com/in/alexandre-pichon1/", photo: "/images/equipe/alex.jpg" },
];

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const month = new Intl.DateTimeFormat(i18n.language, { month: "short", year: "numeric", timeZone: "UTC" });

  return (
    <>
      <PhotoHero
        side="left"
        image="/images/photos/team-asics.jpg"
        alt={t("aboutPage.hero.alt")}
        position="center 25%"
        title={t("aboutPage.hero.title")}
        lead={t("aboutPage.hero.lead")}
        actions={
          <Action to="/services" variant="ghost">
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

      {/* Équipe : par pages de quatre, qui se succèdent. */}
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
        </div>
        <div className="ep-wrap ep-reveal mt-12">
          <TeamMarquee
            label={t("aboutPage.team.label")}
            members={TEAM.map((p) => ({
              name: p.name,
              role: t(`aboutPage.team.roles.${p.key}`),
              bio: t(`aboutPage.team.bios.${p.key}`),
              photo: p.photo,
              linkedin: p.linkedin,
            }))}
          />
        </div>
      </section>
    </>
  );
}
