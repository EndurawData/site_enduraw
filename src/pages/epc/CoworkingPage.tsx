import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const img = (filename: string): string =>
  `/images/epc/${filename.replace(/ /g, '%20')}`;

const CoworkingPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M4.929 12.929a9 9 0 0114.142 0M2 9.5a13 13 0 0120 0" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.coworkingFeature1_title'),
      description: t('servicePages.performanceCenter.coworkingFeature1_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.coworkingFeature2_title'),
      description: t('servicePages.performanceCenter.coworkingFeature2_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.coworkingFeature3_title'),
      description: t('servicePages.performanceCenter.coworkingFeature3_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.coworkingFeature4_title'),
      description: t('servicePages.performanceCenter.coworkingFeature4_desc'),
    },
  ];

  const plans = [1, 2, 3].map((n) => ({
    title: t(`servicePages.performanceCenter.coworkingPlan${n}_title`),
    description: t(`servicePages.performanceCenter.coworkingPlan${n}_desc`),
  }));

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
            src={img('Image 13 mai 2026, 15_03_38.png')}
            alt="Espace de travail face au Mont-Blanc"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ height: '360px' }}
          />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.coworkingFeaturesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.performanceCenter.coworkingFeaturesTitle')}
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

      {/* ── GALLERY ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-20">
        <div className="flex gap-2">
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('13 mai 2026, 14_08_09.png')}
              alt="Bar"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('Image 15 mai 2026, 10_43_19.png')}
              alt="Terrasse"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.coworkingPlansLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.performanceCenter.coworkingPlansTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {plans.map((plan, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-white mb-1.5">{plan.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{plan.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-paragraph text-gray-400 max-w-xl mb-6">
          {t('servicePages.performanceCenter.coworkingContactNote')}
        </p>
        <a href="mailto:performance@enduraw.co" className="btn-enduraw inline-flex items-center gap-2">
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
