import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const img = (filename: string): string =>
  `/images/epc/${filename.replace(/ /g, '%20')}`;

const CoworkingPage: React.FC = () => {
  const { t } = useTranslation();

  const spaceFeatures = [1, 2].map((n) => ({
    title: t(`servicePages.performanceCenter.coworkingSpace${n}_title`),
    description: t(`servicePages.performanceCenter.coworkingSpace${n}_desc`),
  }));

  const extraFeatures = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h12a2 2 0 012 2v9a4 4 0 01-4 4H7zm0 0a4 4 0 004-4V8" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.coworkingExtra1_title'),
      description: t('servicePages.performanceCenter.coworkingExtra1_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.coworkingExtra2_title'),
      description: t('servicePages.performanceCenter.coworkingExtra2_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.coworkingExtra3_title'),
      description: t('servicePages.performanceCenter.coworkingExtra3_desc'),
    },
  ];

  const locationFeatures = [1, 2].map((n) => ({
    title: t(`servicePages.performanceCenter.coworkingLocation${n}_title`),
    description: t(`servicePages.performanceCenter.coworkingLocation${n}_desc`),
  }));

  const logistics = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => t(`servicePages.performanceCenter.coworkingLogistics_li${n}`));

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.coworkingLabel')}</p>
        <h1 className="text-title-h2 text-white mb-4 max-w-2xl">
          {t('servicePages.performanceCenter.coworkingTitle')}
        </h1>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.performanceCenter.coworkingP')}
        </p>

        <div className="overflow-hidden rounded-xl group">
          <img
            src={img('Coworking terrace.png')}
            alt="Vue sur le Mont-Blanc depuis l'Enduraw Performance Center"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ height: '360px' }}
          />
        </div>
      </section>

      {/* ── COWORKING SPACE ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.coworkingSpaceLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.performanceCenter.coworkingSpaceTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-6">
          {spaceFeatures.map((feature, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-white mb-1.5">{feature.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('Coworking meeting room.png')}
              alt="Salle de réunion"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '260px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('A7408093.jpg')}
              alt="Espace de coworking équipé"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '260px' }}
            />
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.coworkingOfficesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-4">
          {t('servicePages.performanceCenter.coworkingOfficesTitle')}
        </h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.performanceCenter.coworkingOfficesP')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="overflow-hidden rounded-xl group">
            <img
              src={img('A7408103.jpg')}
              alt="Coin de travail au calme, près de la cheminée"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="overflow-hidden rounded-xl group">
            <img
              src={img('A7408129.jpg')}
              alt="Coin de travail calme"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="overflow-hidden rounded-xl group">
            <img
              src={img('A7408092.jpg')}
              alt="Espace de travail sous les toits"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
        </div>
      </section>

      {/* ── EXTRA-WORK POSSIBILITIES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.coworkingExtraLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.performanceCenter.coworkingExtraTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-6">
          {extraFeatures.map((feature, i) => (
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

        <div className="overflow-hidden rounded-xl group">
          <img
            src={img('A7408177.jpg')}
            alt="Bar et lounge"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ height: '260px' }}
          />
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.coworkingLocationLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10 max-w-2xl">
          {t('servicePages.performanceCenter.coworkingLocationTitle')}
        </h2>

        <div className="flex gap-2 mb-10">
          <div className="overflow-hidden rounded-xl group" style={{ flex: 6 }}>
            <img
              src={img('EPC location map.png')}
              alt="Localisation de l'Enduraw Performance Center"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '320px' }}
            />
          </div>
          <div className="flex flex-col gap-2" style={{ flex: 6 }}>
            {locationFeatures.map((feature, i) => (
              <div key={i} className="flex-1 bg-[#020617] border border-white/[0.06] rounded-lg p-5 md:p-6">
                <p className="text-subtitle text-white mb-1.5">{feature.title}</p>
                <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-subtitle text-white mb-4">{t('servicePages.performanceCenter.coworkingLogisticsTitle')}</p>
        <div>
          {logistics.map((item, i) => (
            <div key={i} className="flex items-start gap-5 py-3 border-b border-white/[0.06] last:border-0">
              <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-paragraph text-gray-300 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-paragraph text-gray-400 max-w-xl mb-6">
          {t('servicePages.performanceCenter.coworkingContactNote')}
        </p>
        <a href="mailto:communication@enduraw.co" className="btn-enduraw inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{t('servicePages.performanceCenter.coworkingCta')}</span>
        </a>
      </section>

    </div>
  );
};

export default CoworkingPage;
