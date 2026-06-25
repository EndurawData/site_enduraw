import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const AthleteSupportPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          ATHLETES SUPPORT
        </h1>
        <p className="text-paragraph text-gray-300 max-w-md mb-4">
          {t('servicePages.athleteSupport.subtitle')}
        </p>
        <p className="text-paragraph text-gray-300 max-w-md">
          {t('servicePages.athleteSupport.subtitle2')}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">OVERVIEW</p>
        <div className="space-y-5 text-paragraph text-gray-300 max-w-2xl">
          <p>{t('servicePages.athleteSupport.intro_p1')}</p>
          <p>{t('servicePages.athleteSupport.intro_p2')}</p>
          <p>{t('servicePages.athleteSupport.intro_p3')}</p>
          <p className="text-[#6CDCFF] font-semibold">{t('servicePages.athleteSupport.intro_p4')}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">METHODOLOGY</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.athleteSupport.keysTitle')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.trainingAnalysis_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.trainingAnalysis_content')}</p>
          </div>

          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.historicalProfiling_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.historicalProfiling_content')}</p>
          </div>

          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.performanceFactors_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.performanceFactors_content')}</p>
          </div>

          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.nutritionGuidance_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.nutritionGuidance_content')}</p>
          </div>

          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.refuelingStrategy_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.refuelingStrategy_content')}</p>
          </div>

          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.sleepAnalysis_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.sleepAnalysis_content')}</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">OFFERS</p>
        <h2 className="text-title-h2 text-white mb-4">
          {t('servicePages.athleteSupport.offersTitle')}
        </h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.athleteSupport.offers_p')}
        </p>

        <div className="border border-white/[0.06] rounded-lg p-8 mb-8">
          <h3 className="text-title-h2 text-white mb-3">{t('servicePages.athleteSupport.seasonalSupport_title')}</h3>
          <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-[#6CDCFF] mb-6 leading-none">
            <svg className="w-5 h-5 text-[#6CDCFF] mb-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            350<span className="text-paragraph text-gray-400 font-normal not-italic">/month</span>
          </p>
          <div>
            {[
              t('servicePages.athleteSupport.ss_li1'),
              t('servicePages.athleteSupport.ss_li2'),
              t('servicePages.athleteSupport.ss_li3'),
              t('servicePages.athleteSupport.ss_li4'),
              t('servicePages.athleteSupport.ss_li5'),
              t('servicePages.athleteSupport.ss_li6'),
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-4 border-b border-white/[0.06] last:border-0">
                <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-paragraph text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-10">
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.smartTraining_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.smartTraining_p')}</p>
          </div>
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.recoveryFirst_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.recoveryFirst_p')}</p>
          </div>
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.athleteSupport.precisionPacing_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.athleteSupport.precisionPacing_p')}</p>
          </div>
        </div>

        <p className="text-paragraph text-gray-400 mb-6">
          {t('servicePages.athleteSupport.chooseOption')}
        </p>

        <div className="border border-white/[0.06] rounded-lg p-6">
          <p className="text-body-uppercase text-[#6CDCFF] tracking-widest mb-2">
            {t('servicePages.athleteSupport.eliteOffer')}
          </p>
          <p className="text-paragraph text-gray-300 leading-relaxed">
            {t('servicePages.athleteSupport.eliteOffer_p')}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">CONTACT</p>
        <h2 className="text-title text-white mb-8 max-w-sm">{t('servicePages.athleteSupport.cta')}</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:performance@enduraw.co"
            className="btn-enduraw inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span>{t('servicePages.athleteSupport.cta')}</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default AthleteSupportPage;
