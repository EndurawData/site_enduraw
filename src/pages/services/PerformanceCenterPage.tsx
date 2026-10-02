import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';
import PageHero from '../../components/PageHero';

// Web-optimized copies (max 2000px JPEG) of the originals in /images/epc
const img = (filename: string): string =>
  `/images/epc/web/${filename.replace(/\.\w+$/, '.jpg').replace(/ /g, '%20')}`;

const PerformanceCenterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <PageHero
        label={t('hero.epc_label')}
        title={t('hero.epc_title')}
        text={t('hero.epc_text')}
        primary={{ label: t('hero.epc_primary'), href: '#activities' }}
        contactEmail="performance@enduraw.co"
      />

      {/* ── ACTIVITIES ── */}
      <section id="activities" className="scroll-mt-20 max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('servicePages.performanceCenter.activitiesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10 max-w-2xl">
          {t('servicePages.performanceCenter.activitiesTitle')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          <Link
            to="/epc/trainingcamp"
            className="bg-[#020617] p-6 text-left hover:bg-white/[0.015] transition-colors"
          >
            <div className="icon-container bg-[#2054A8] mb-4">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.performanceCenter.activity_stage_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.performanceCenter.activity_stage_desc')}</p>
          </Link>

          <Link
            to="/epc/corporateseminar"
            className="bg-[#020617] p-6 text-left hover:bg-white/[0.015] transition-colors"
          >
            <div className="icon-container bg-[#2054A8] mb-4">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.performanceCenter.activity_seminar_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.performanceCenter.activity_seminar_desc')}</p>
          </Link>

          <Link
            to="/epc/coworking"
            className="bg-[#020617] p-6 text-left hover:bg-white/[0.015] transition-colors"
          >
            <div className="icon-container bg-[#2054A8] mb-4">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.performanceCenter.activity_coworking_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.performanceCenter.activity_coworking_desc')}</p>
          </Link>

          <Link
            to="/epc/podcaststudio"
            className="bg-[#020617] p-6 text-left hover:bg-white/[0.015] transition-colors"
          >
            <div className="icon-container bg-[#2054A8] mb-4">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('podcastStudio.activity_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('podcastStudio.activity_desc')}</p>
          </Link>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade pb-24">
        <div className="flex gap-2 mb-2">
          <div className="overflow-hidden rounded-xl group" style={{ flex: 7 }}>
            <img
              src={img('A7408097.jpg')}
              alt="Espace détente et coworking sous les toits"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '360px' }}
            />
          </div>
          <div className="overflow-hidden rounded-xl group" style={{ flex: 5 }}>
            <img
              loading="lazy"
              decoding="async"
              src={img('A7408183.jpg')}
              alt="Espace de vie et de récupération"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '360px' }}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              loading="lazy"
              decoding="async"
              src={img('A7408129.jpg')}
              alt="Mezzanine et coin salon"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              loading="lazy"
              decoding="async"
              src={img('A7408174.jpg')}
              alt="Bar de l'Enduraw Performance Center"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              loading="lazy"
              decoding="async"
              src={img('A7408195.jpg')}
              alt="Espace training et tests physiologiques"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default PerformanceCenterPage;
