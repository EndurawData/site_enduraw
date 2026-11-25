import { useTranslation } from "react-i18next";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Action } from "@/components/ui/Action";
import { Media } from "@/components/ui/Media";
import { Frame } from "@/components/ui/Frame";
import { FinalCta } from "@/components/sections/FinalCta";
import { EMAILS, mailto } from "@/lib/links";
import { cn } from "@/lib/utils";

/** `w`/`h` : dimensions du fichier, pour réserver la place (pas de décalage). */
type Org = { name: string; logo: string; w: number; h: number };

/* Écoles de Joseph Mestrallet. */
const SCHOOLS: Org[] = [
  { name: "ENSEA", logo: "ensea.png", w: 145, h: 160 },
  { name: "École polytechnique", logo: "polytechnique.png", w: 366, h: 160 },
  { name: "HEC Paris", logo: "hec.svg", w: 193, h: 101 },
];

/* Organisations qui ont invité Joseph Mestrallet, reprises du site en ligne.
   Data Players reste : les photos de la page montrent ses conférences
   (« Device (in)dépendant ? », « Secrets de compétition »). HEC Paris figure
   déjà dans ses écoles : pas répété ici. */
const HOSTS: Org[] = [
  { name: "Vinci", logo: "vinci.png", w: 480, h: 123 },
  { name: "Candriam", logo: "candriam.png", w: 480, h: 98 },
  { name: "DevFest", logo: "devfest-white.png", w: 232, h: 160 },
  {
    name: "Les Étoiles du Sport",
    logo: "etoiles-du-sport.png",
    w: 348,
    h: 152,
  },
  { name: "Nike", logo: "nike.png", w: 391, h: 138 },
  { name: "Ravanel", logo: "ravanel.png", w: 480, h: 118 },
  { name: "Coros", logo: "coros.png", w: 480, h: 117 },
  { name: "Garmin", logo: "garmin.png", w: 480, h: 129 },
  { name: "SII", logo: "sii-white.png", w: 246, h: 160 },
  { name: "Data Players", logo: "dataplayers.png", w: 480, h: 81 },
  { name: "Asics", logo: "asics.png", w: 480, h: 152 },
  { name: "OC Sport", logo: "ocsport.png", w: 480, h: 64 },
  { name: "Artefact", logo: "artefact.png", w: 480, h: 146 },
  { name: "Compressport", logo: "compressport-white.png", w: 271, h: 90 },
  { name: "Strava", logo: "strava.png", w: 194, h: 160 },
];

const THEMES = [1, 2, 3, 4, 5, 6].map((n) => ({
  title: `conferencesPage.themes.t${n}.title`,
  description: `conferencesPage.themes.t${n}.text`,
}));

const ROLES = [1, 2, 3, 4, 5].map((n) => `conferencesPage.experts.role${n}`);

const FORMATS = [1, 2, 3, 4].map((n) => ({
  title: `conferencesPage.formats.f${n}.title`,
  description: `conferencesPage.formats.f${n}.text`,
}));

/* Typo de la bande Figures (src/components/sections/Figures.tsx), reprise
   telle quelle : la bande, elle, porte ses propres chiffres. */
const STAT_LABEL = "text-[14px] font-light text-white/[0.62]";
const STAT_VALUE = "ep-display text-[clamp(2rem,4vw,3rem)] leading-none tabular-nums";
const STAT_UNIT = "ml-1.5 font-sans text-[0.45em] font-medium not-italic text-white/[0.62]";

/** Logo en blanc, sans tuile : une bande sobre. */
function Logo({ org, className }: { org: Org; className?: string }) {
  return (
    <img
      src={`/images/conferences/logos/${org.logo}`}
      alt={org.name}
      width={org.w}
      height={org.h}
      loading="lazy"
      decoding="async"
      className={cn("w-auto max-w-[min(120px,100%)] object-contain opacity-80 brightness-0 invert", className)}
    />
  );
}

export default function ConferencesPage() {
  const { t } = useTranslation();
  const contact = mailto(EMAILS.communication, t("conferencesPage.subject"));

  return (
    <>
      {/* Photo à gauche, titre à droite sur le noir : l'écran rouge de la
          scène reste dans la photo, loin du titre. */}
        <PhotoHero
          side="left"
          image="/images/conferences/web/candriam_chamonix.jpg"
          alt={t("conferencesPage.hero.alt")}
          position="60% center"
          title={t("conferencesPage.hero.title")}
          lead={t("conferencesPage.hero.lead")}
          actions={
            <>
              <Action to={contact}>
                {t("conferencesPage.hero.cta")}
              </Action>
              <Action to="#themes" variant="ghost">
                {t("conferencesPage.hero.ctaThemes")}
              </Action>
            </>
          }
        >
          <p className="ep-rise ep-rise--3 mt-8 text-[14px] font-light text-white/[0.62]">
            {t("conferencesPage.hero.audiences")}
          </p>
        </PhotoHero>
      

      {/* L'intervenant phare : photo, présentation, chiffres sur filets, logos en bande. */}
      <section className="ep-section pt-16 lg:pt-20">
        <div className="ep-wrap">
          <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <Frame
              side="left"
              src="/images/conferences/web/joseph_eds.jpg"
              alt={t("conferencesPage.joseph.alt")}
              ratio="4 / 5"
              sizes="(min-width: 1024px) 40vw, 100vw"
              position="38% center"
            />
            <div>
              <span className="ep-tiret" aria-hidden="true" />
              <h2 className="ep-display ep-h2 mt-5">Joseph Mestrallet</h2>
              <p className="ep-body mt-3 text-[15px]">{t("conferencesPage.joseph.role")}</p>
              <p className="ep-lead mt-5 max-w-[56ch]">{t("conferencesPage.joseph.text")}</p>

              {/* Même motif que la bande Figures (accueil) : filets haut et bas,
                  séparateur vertical, valeur en display, libellé dessous. */}
              <dl className="mt-10 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="flex flex-col-reverse gap-2 py-8 sm:pr-8">
                  <dt className={STAT_LABEL}>{t("conferencesPage.joseph.stat1Label")}</dt>
                  <dd className={STAT_VALUE}>
                    <span className={cn(STAT_UNIT, "ml-0 mr-1.5")}>{t("conferencesPage.joseph.stat1Prefix")}</span>
                    {t("conferencesPage.joseph.stat1Value")}
                  </dd>
                </div>
                <div className="flex flex-col-reverse gap-2 py-8 sm:pl-8">
                  <dt className={STAT_LABEL}>{t("conferencesPage.joseph.stat2Label")}</dt>
                  <dd className={STAT_VALUE}>
                    {t("conferencesPage.joseph.stat2Value")}
                    <span className={STAT_UNIT}>{t("conferencesPage.joseph.stat2Unit")}</span>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <p className="ep-label w-full sm:w-auto">{t("conferencesPage.joseph.education")}</p>
                {SCHOOLS.map((org) => (
                  <Logo key={org.name} org={org} className="h-7" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="ep-label">{t("conferencesPage.joseph.invited")}</p>
            <ul className="mt-8 grid grid-cols-3 items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
              {HOSTS.map((org) => (
                <li key={org.name} className="flex h-8 items-center justify-center">
                  <Logo org={org} className="max-h-7" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Thèmes : une photo de salle, six sujets sur filets. */}
      <section id="themes" className="ep-section scroll-mt-[calc(var(--ep-nav-h)+20px)] pt-0">
        <div className="ep-wrap">
          <SectionHead title={t("conferencesPage.themes.title")} lead={t("conferencesPage.themes.lead")} />
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <Frame
              side="left"
              src="/images/conferences/web/charline_epc.jpg"
              alt={t("conferencesPage.themes.alt")}
              ratio="4 / 3"
              sizes="(min-width: 1024px) 40vw, 100vw"
              position="62% center"
            />
            <dl className="grid gap-x-10 sm:grid-cols-2">
              {THEMES.map((theme) => (
                <div key={theme.title} className="border-t border-white/10 py-5">
                  <dt className="text-[16px] font-medium text-white">{t(theme.title)}</dt>
                  <dd className="ep-body mt-1.5 text-[15px] leading-relaxed">{t(theme.description)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Les intervenants : qui ils sont, ce qu'ils apportent, deux photos de scène. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <SectionHead title={t("conferencesPage.experts.title")} lead={t("conferencesPage.experts.text")} />
            <ul className="ep-body mt-6 flex flex-wrap gap-x-2 gap-y-1 text-[15px]">
              {ROLES.map((role, i) => (
                <li key={role}>
                  {t(role)}
                  {i < ROLES.length - 1 && (
                    <span className="ml-2 text-white/[0.36]" aria-hidden="true">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Media
              src="/images/conferences/web/joseph_dp.jpg"
              alt={t("conferencesPage.experts.altJoseph")}
              ratio="2 / 3"
              sizes="(min-width: 1024px) 20vw, 50vw"
            />
            <Media
              src="/images/conferences/web/valentin_dp.jpg"
              alt={t("conferencesPage.experts.altValentin")}
              ratio="2 / 3"
              sizes="(min-width: 1024px) 20vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Formats : quatre colonnes sur filets, puis une photo de scène pleine largeur. */}
      <section className="ep-section pt-0">
        <div className="ep-wrap">
          <SectionHead title={t("conferencesPage.formats.title")} />
          <dl className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {FORMATS.map((f) => (
              <div key={f.title} className="border-t border-white/10 py-5">
                <dt className="text-[16px] font-medium text-white">{t(f.title)}</dt>
                <dd className="ep-body mt-1.5 text-[15px] leading-relaxed">{t(f.description)}</dd>
              </div>
            ))}
          </dl>
          <Frame
            side="right"
            src="/images/conferences/web/anthony_dataplayers.jpg"
            alt={t("conferencesPage.formats.alt")}
            ratio="21 / 9"
            sizes="(min-width: 1280px) 1200px, 100vw"
            position="center 55%"
            className="mt-12"
          />
        </div>
      </section>

      <FinalCta
        title={t("conferencesPage.cta.title")}
        text={t("conferencesPage.cta.text")}
        action={{ to: contact, label: t("conferencesPage.cta.button") }}
        glow={false}
      />
    </>
  );
}
