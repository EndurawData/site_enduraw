import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PersonCard from '../../components/PersonCard';
import '../../styles/fancy.css';

const RaceBriefingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <div className="mb-5">
          <Link to="/services" className="inline-flex items-center gap-1 text-body-uppercase text-[#6CDCFF] tracking-widest hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('servicePages.backToServices')}
          </Link>
        </div>
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">RACE BRIEFING</h1>
        <p className="text-paragraph text-gray-300 max-w-md mb-3">{t('servicePages.raceBriefing.subtitle')}</p>
        <p className="text-paragraph text-gray-300 max-w-md">{t('servicePages.raceBriefing.subtitle2')}</p>
      </section>

      {/* Description */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">OVERVIEW</p>
        <div className="space-y-4 text-paragraph text-gray-300 max-w-2xl">
          <p>{t('servicePages.raceBriefing.p1')}</p>
          <p>{t('servicePages.raceBriefing.p2')}</p>
          <p>{t('servicePages.raceBriefing.p3')}</p>
          <p>{t('servicePages.raceBriefing.p4')}</p>
        </div>
      </section>

      {/* Road Race & Trail Race */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">RACE TYPES</p>
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">

          {/* Road Race */}
          <div className="bg-[#020617] p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-4">
              <div className="icon-container bg-[#2054A8] inline-flex">
                <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
            <p className="text-subtitle text-white mb-3">{t('servicePages.raceBriefing.roadRace_title')}</p>
            <p className="text-paragraph text-gray-400 mb-3">{t('servicePages.raceBriefing.takeIntoAccount')}</p>
            <ul className="space-y-2 text-paragraph text-gray-400 mb-4">
              {[
                t('servicePages.raceBriefing.level'),
                t('servicePages.raceBriefing.courseElevation'),
                t('servicePages.raceBriefing.wind'),
                t('servicePages.raceBriefing.temperature'),
                t('servicePages.raceBriefing.raceStrategy'),
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-paragraph text-gray-400 mb-3">{t('servicePages.raceBriefing.toCalculate')}</p>
            <ul className="space-y-2 text-paragraph text-gray-400">
              {[
                t('servicePages.raceBriefing.finalTime'),
                t('servicePages.raceBriefing.splitPace'),
                t('servicePages.raceBriefing.nutritionPlan'),
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Trail Race */}
          <div className="bg-[#020617] p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-4">
              <div className="icon-container bg-[#2054A8] inline-flex">
                <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l6-4 6 4 6-4v14l-6 4-6-4-6 4V7z" />
                </svg>
              </div>
            </div>
            <p className="text-subtitle text-white mb-3">{t('servicePages.raceBriefing.trailRace_title')}</p>
            <p className="text-paragraph text-gray-400 mb-3">{t('servicePages.raceBriefing.takeIntoAccount')}</p>
            <ul className="space-y-2 text-paragraph text-gray-400 mb-4">
              {[
                t('servicePages.raceBriefing.utmbIndex'),
                t('servicePages.raceBriefing.courseElevation'),
                t('servicePages.raceBriefing.wind'),
                t('servicePages.raceBriefing.temperature'),
                t('servicePages.raceBriefing.technicality'),
                t('servicePages.raceBriefing.speedDrift'),
                t('servicePages.raceBriefing.raceStrategy'),
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-paragraph text-gray-400 mb-3">{t('servicePages.raceBriefing.toCalculate')}</p>
            <ul className="space-y-2 text-paragraph text-gray-400">
              {[
                t('servicePages.raceBriefing.finalTime'),
                t('servicePages.raceBriefing.splitPace'),
                t('servicePages.raceBriefing.nutritionPlan'),
                t('servicePages.raceBriefing.whereToWalk'),
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <button className="btn-enduraw">{t('servicePages.raceBriefing.discoverProduct')}</button>
          <p className="text-paragraph text-gray-400 mt-3">{t('servicePages.raceBriefing.availability')}</p>
        </div>
      </section>

      {/* Athletes */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">ATHLETES</p>
        <h2 className="text-title-h2 text-white mb-8">{t('servicePages.raceBriefing.trustUs')}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <PersonCard fullName="Petter Engdahl" age={29} country="Sweden 🇸🇪" sports="Trail, Ultra Trail" achievements="CCC: win, record • Transvulcania win • MMB: 3rd" variant="athlete" />
          <PersonCard fullName="Ruth Croft" country="New Zealand 🇳🇿" sports="Trail, Ultra Trail" achievements="UTMB 2023 • UTMB 2024" variant="athlete" />
          <PersonCard fullName="Duncan Périllat" country="France 🇫🇷" sports="Marathon, Ultra Trail" achievements="Rotterdam Marathon • UTMB 2023" variant="athlete" />
          <PersonCard fullName="Solange Jésus" country="Portugal 🇵🇹" sports="Road Marathon" achievements="Paris Marathon: 9th • World championship • NYC Marathon" variant="athlete" />
          <PersonCard fullName="Guillaume Adam" country="France 🇫🇷" sports="Road Marathon" achievements="NYC Marathon" variant="athlete" />
        </div>
      </section>

      {/* Go Further / Premium */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">PREMIUM</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.raceBriefing.goFurther_title')}</h2>
        <p className="text-paragraph text-gray-400 max-w-md mb-6">{t('servicePages.raceBriefing.goFurther_p1')}</p>
        <p className="text-subtitle text-white mb-2">{t('servicePages.raceBriefing.hyperCustomization')}</p>
        <p className="text-paragraph text-gray-400 mb-8">{t('servicePages.raceBriefing.premiumFeatures')}</p>

        <div>
          {[
            { key: t('servicePages.raceBriefing.stravaAnalysis'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
            { key: t('servicePages.raceBriefing.physiologicalProtocol'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
            { key: t('servicePages.raceBriefing.heartRatePrediction'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> },
            { key: t('servicePages.raceBriefing.sweatProfile'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /> },
            { key: t('servicePages.raceBriefing.nutritionStrategy'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> },
            { key: t('servicePages.raceBriefing.competitorsAnalysis'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
            { key: t('servicePages.raceBriefing.raceStrategyItem'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /> },
            { key: t('servicePages.raceBriefing.realTimeMonitoring'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /> },
            { key: t('servicePages.raceBriefing.fktPreparation'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" /> },
          ].map((item) => (
            <div key={item.key} className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
              <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-paragraph text-gray-300">{item.key}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-paragraph text-gray-400 mt-6">{t('servicePages.raceBriefing.dataTradeoffs')}</p>
        <p className="text-paragraph text-[#6CDCFF] mt-2">{t('servicePages.raceBriefing.contactCta')}</p>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">GET STARTED</p>
        <h2 className="text-title text-white mb-8 max-w-sm">{t('servicePages.raceBriefing.discoverProduct')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-enduraw">
            {t('servicePages.raceBriefing.contactCta')}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150">
            {t('servicePages.backToServices')}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default RaceBriefingPage;
