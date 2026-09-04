import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const img = (filename: string): string =>
  `/images/epc/${filename.replace(/ /g, '%20')}`;

const CorporateSeminarPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.seminarFeature1_title'),
      description: t('servicePages.performanceCenter.seminarFeature1_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.seminarFeature2_title'),
      description: t('servicePages.performanceCenter.seminarFeature2_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.seminarFeature3_title'),
      description: t('servicePages.performanceCenter.seminarFeature3_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.seminarFeature4_title'),
      description: t('servicePages.performanceCenter.seminarFeature4_desc'),
    },
  ];

  const formats = [1, 2, 3].map((n) => ({
    title: t(`servicePages.performanceCenter.seminarFormat${n}_title`),
    description: t(`servicePages.performanceCenter.seminarFormat${n}_desc`),
  }));

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.seminarLabel')}</p>
        <h1 className="text-title-h2 text-white mb-4 max-w-2xl">
          {t('servicePages.performanceCenter.seminarTitle')}
        </h1>
        <p className="text-paragraph text-gray-400 max-w-xl">
          {t('servicePages.performanceCenter.seminarP')}
        </p>
      </section>

      {/* ── GALLERY ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <div className="flex gap-2 mb-2">
          <div className="overflow-hidden rounded-xl group" style={{ flex: 7 }}>
            <img
              src={img('Coworking meeting room.png')}
              alt="Salle de réunion équipée"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '340px' }}
            />
          </div>
          <div className="overflow-hidden rounded-xl group" style={{ flex: 5 }}>
            <img
              src={img('Coworking terrace.png')}
              alt="Terrasse avec vue sur le Mont-Blanc"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '340px' }}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('A7408180.jpg')}
              alt="Espace de vie et de récupération"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '200px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('A7408144.jpg')}
              alt="Mezzanine et coin salon"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '200px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('A7408150.jpg')}
              alt="Vue sur le bar depuis la mezzanine"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '200px' }}
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.seminarFeaturesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.performanceCenter.seminarFeaturesTitle')}
        </h2>

        <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <div className="mb-3">
                <div className="icon-container bg-[#2054A8]">
                  <div className="text-[#6CDCFF]">{feature.icon}</div>
                </div>
              </div>
              <p className="text-subtitle text-white mb-1.5">{feature.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORMATS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.seminarFormatsLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.performanceCenter.seminarFormatsTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {formats.map((format, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-white mb-1.5">{format.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{format.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <a href="mailto:performance@enduraw.co" className="btn-enduraw inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{t('servicePages.performanceCenter.seminarCta')}</span>
        </a>
      </section>

    </div>
  );
};

export default CorporateSeminarPage;
