import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SponsorsSlider from './SponsorsSlider';
import { ProductFrame, SHOWCASE_ITEMS } from './HomeShowcase';

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

/** Photo pleine largeur du hero : des coureurs en course, texte sur le voile sombre à gauche. */
export const HomeHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden">
      <img
        src="/images/home/marathon.webp"
        alt="Coureurs d'élite sur un marathon à Paris"
        className="absolute inset-0 w-full h-full object-cover object-[50%_35%]"
        fetchPriority="high"
      />
      {/* Voile : lisibilité du texte, et fondu vers le noir de la page */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.1) 100%), linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%, #000 100%)' }}
      />
      <div className="relative w-full max-w-5xl mx-auto px-6 sm:px-8 pt-36 pb-16 sm:pb-24">
        <h1 className="font-title italic font-bold text-white leading-[1.05] text-[clamp(2.4rem,6.2vw,5rem)] max-w-3xl mb-6">
          {t('home.tagline')}
        </h1>
        <p className="text-paragraph text-gray-200 max-w-xl mb-9 text-base sm:text-lg">
          {t('allLevels.homeSub')}
        </p>
        <Link to="/dashboard" className="btn-enduraw">
          {t('homeShowcase.discover_dashboard')}
          <ArrowIcon />
        </Link>
      </div>
      {/* Repère : invite à descendre, puisque le hero n'a pas de bouton */}
      <a
        href="#tools"
        aria-label={t('a11y.scrollDown')}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors motion-safe:animate-bounce"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
      </a>
    </section>
  );
};

/** Chiffres clés, puis partenaires. */
export const ProofBand: React.FC = () => {
  const { t } = useTranslation();
  const figures = [
    { value: '15 460', label: t('servicePages.endurawDashboard.users_p') },
    { value: '6,7 M', label: t('servicePages.endurawDashboard.activities_p') },
    { value: '11,3 M km', label: t('homeV2.proof_distance') },
  ];
  return (
    <section className="border-y border-white/10 bg-[#0a0b0c]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-3 gap-4 text-center">
          {figures.map((f) => (
            <div key={f.value}>
              <p className="font-title italic font-bold text-white leading-none mb-3 text-[clamp(1.6rem,4.2vw,3.2rem)]">{f.value}</p>
              <p className="text-body-uppercase text-gray-500">{f.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <SponsorsSlider bare />
        </div>
      </div>
    </section>
  );
};

/** Les outils du dashboard, une vue à la fois (le testing a sa propre section plus bas). */
const TOOL_ITEMS = SHOWCASE_ITEMS.filter((i) => i.key !== 'testing');

export const FeatureTabs: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const { key } = TOOL_ITEMS[active];

  // Les autres vues sont téléchargées d'avance : un clic sur un outil change l'image sans attente.
  useEffect(() => {
    const id = window.setTimeout(() => {
      TOOL_ITEMS.forEach((item) => { const img = new Image(); img.src = `/images/dashboard/${item.key}.webp`; });
    }, 2000);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section id="tools" className="scroll-mt-20 max-w-5xl mx-auto px-6 sm:px-8 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:min-h-[26rem]">
        {/* Liste des outils : l'actif se déplie sous son nom (pas de bandeau d'onglets) */}
        <div role="tablist" aria-orientation="vertical" className="lg:col-span-4 flex flex-col">
          {TOOL_ITEMS.map((item, i) => {
            const open = i === active;
            return (
              <div key={item.key} className="border-l border-white/10 data-[open=true]:border-[#6CDCFF]" data-open={open}>
                <button
                  role="tab"
                  aria-selected={open}
                  onClick={() => setActive(i)}
                  className={`w-full text-left pl-5 py-3 text-[12px] font-medium uppercase tracking-[0.15em] transition-colors ${
                    open ? 'text-white' : 'text-white/[0.55] hover:text-white'
                  }`}
                >
                  {t(`homeShowcase.${item.key}_tag`)}
                </button>
                {open && (
                  <div className="pl-5 pb-4">
                    <h3 className="text-title-h2 text-white mb-3">{t(`homeShowcase.${item.key}_title`)}</h3>
                    <p className="text-paragraph text-gray-300">{t(`homeShowcase.${item.key}_desc`)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-8">
          <ProductFrame key={key} src={`/images/dashboard/${key}.webp`} alt={t(`homeShowcase.${key}_title`)} ratio="16 / 10" eager />
        </div>
      </div>
    </section>
  );
};

/** Bloc photo + texte, utilisé pour le testing, le terrain et l'EPC. */
const PhotoSplit: React.FC<{
  id?: string;
  label: string;
  title: string;
  text: string;
  paragraphs?: string[];
  cta: { to: string; label: string };
  photo: string;
  alt: string;
  reverse?: boolean;
  overlay?: React.ReactNode;
  eager?: boolean;
}> = ({ id, label, title, text, paragraphs = [], cta, photo, alt, reverse, overlay, eager }) => (
  <section id={id} className="max-w-5xl mx-auto px-6 sm:px-8 py-14 section-fade">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
        <p className="label-enduraw mb-5">{label}</p>
        <h2 className="text-title-h2 text-white mb-4">{title}</h2>
        <p className="text-paragraph text-gray-300 mb-4">{text}</p>
        {paragraphs.map((p) => (
          <p key={p} className="text-paragraph text-gray-400 mb-4">{p}</p>
        ))}
        <Link to={cta.to} className="btn-enduraw mt-4">
          {cta.label}
          <ArrowIcon />
        </Link>
      </div>
      <div className={`lg:col-span-7 relative ${reverse ? 'lg:order-1' : ''}`}>
        <img src={photo} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className="block w-full h-auto" />
        {overlay}
      </div>
    </div>
  </section>
);

/** Testing : la photo du labo, avec le résultat du test qui la chevauche. */
export const TestingSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PhotoSplit
      label={t('homeShowcase.testing_label')}
      title={t('homeShowcase.testing_home_title')}
      text={t('homeShowcase.testing_desc')}
      cta={{ to: '/services/testing', label: t('homeShowcase.testing_cta') }}
      eager
      photo="/images/home/testing.webp"
      alt="Athlète en test d'effort avec masque d'analyse des échanges gazeux"
      overlay={
        <div className="hidden sm:block absolute -bottom-8 -right-4 lg:-right-8 w-[58%]">
          <ProductFrame src="/images/dashboard/testing.webp" alt={t('homeShowcase.testing_title')} eager />
        </div>
      }
    />
  );
};

/** Sur le terrain : le suivi des athlètes d'élite en course. */
export const FieldSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-14 section-fade">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <img loading="lazy" decoding="async" src="/images/home/lactate.webp" alt="Tom Evans à l'arrivée d'une course, prélèvement de lactate" className="block w-full h-auto" />
        </div>
        <div className="lg:col-span-5">
          <p className="label-enduraw mb-5">{t('homeShowcase.field_label')}</p>
          <h2 className="text-title-h2 text-white mb-4">{t('home.eliteExigence')}</h2>
          <p className="text-paragraph text-gray-300 mb-4">{t('home.eliteExigence_p1')}</p>
          <p className="text-paragraph text-gray-400 mb-6">{t('home.eliteExigence_p2')}</p>
          <Link to="/services/coaching" className="btn-enduraw">
            {t('homeShowcase.field_cta')}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

/** Enduraw Performance Center, à Chamonix. */
export const EpcSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PhotoSplit
      reverse
      label={t('homeShowcase.epc_label')}
      title="Enduraw Performance Center"
      text={t('homeV2.epc_line')}
      cta={{ to: '/endurawperformancecenter', label: t('homeV2.epc_cta') }}
      photo="/images/home/epc.webp"
      alt="Espace d'entraînement de l'Enduraw Performance Center, à Chamonix, avec tapis de course"
    />
  );
};
