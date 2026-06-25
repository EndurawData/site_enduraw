import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const TestingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          TESTING SERVICES
        </h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('servicePages.testing.subtitle')}
        </p>
      </section>

      {/* Testing Locations */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">PROTOCOLS</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.testing.testingLocations_title')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.testing.testingLocations_p')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {/* VO2Max Protocol */}
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.testing.vo2max_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed mb-4">{t('servicePages.testing.vo2max_location')}</p>
            <div className="space-y-2">
              {[
                t('servicePages.testing.vo2max_fcMax'),
                t('servicePages.testing.vo2max_vo2max'),
                t('servicePages.testing.vo2max_ventilatoryThresholds'),
                t('servicePages.testing.vo2max_mas'),
                t('servicePages.testing.vo2max_trainingZones'),
                t('servicePages.testing.vo2max_muscleOxygen'),
                t('servicePages.testing.vo2max_coreBody'),
                t('servicePages.testing.vo2max_lactateTesting'),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#6CDCFF] rounded-full flex-shrink-0"></span>
                  <span className="text-paragraph text-gray-300 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Run/Walk Protocol */}
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.testing.walkRun_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed mb-4">{t('servicePages.testing.walkRun_location')}</p>
            <div className="space-y-2">
              {[
                t('servicePages.testing.runningEconomy'),
                t('servicePages.testing.walkingEconomy'),
                t('servicePages.testing.polesEconomy'),
                t('servicePages.testing.criticalWalkingGradient'),
                t('servicePages.testing.criticalRunningSpeed'),
                'VO2, VE',
                'FC',
                t('servicePages.testing.energeticOutputs'),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#6CDCFF] rounded-full flex-shrink-0"></span>
                  <span className="text-paragraph text-gray-300 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="https://juvenile-tennis-62a.notion.site/Offre-Profilage-Enduraw-33cd97cda6d380b0965ac7beef5a53ca?pvs=74"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{t('servicePages.testing.seeFullOffer')}</span>
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">PROCESS</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.testing.whatsIncluded')}</h2>

        <div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.testing.preTestConsultation')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.testing.preTestConsultation_p')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.testing.labTesting')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.testing.labTesting_p')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.testing.detailedReport')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.testing.detailedReport_p')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Booking */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">BOOKING</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.testing.onlineBooking')}</h2>

        <div className="glass-card p-8">
          <div className="mb-6">
            <div className="icon-container bg-[#2054A8] mb-4">
              <svg className="w-6 h-6 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-paragraph text-gray-300 mb-4 leading-relaxed">
              {t('servicePages.testing.bookNow_p')}
            </p>
            <p className="text-paragraph text-gray-400 mb-6">
              {t('servicePages.testing.bookNow_p2')}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://hg1xgb-km.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-enduraw"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10M5 7h14l-1 12H6L5 7z" />
              </svg>
              <span>{t('servicePages.testing.bookNow')}</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{t('servicePages.testing.contactUs')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* No Slots */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">WAITING LIST</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.testing.noSlots')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.testing.noSlots_p')}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="btn-enduraw"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{t('servicePages.testing.contactUs')}</span>
          </a>
          <a
            href="https://hg1xgb-km.myshopify.com/pages/lab-waiting-list"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>{t('servicePages.testing.keepUpdated')}</span>
          </a>
        </div>
      </section>

      {/* Testing for Business */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">BUSINESS</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.testing.testingBusiness_title')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.testing.testingBusiness_p')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-10">
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.testing.teamPackages')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.testing.teamPackages_p')}</p>
          </div>
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.testing.companyReports')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.testing.companyReports_p')}</p>
          </div>
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.testing.flexibleScheduling')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.testing.flexibleScheduling_p')}</p>
          </div>
        </div>

        <a
          href="/contact"
          className="btn-enduraw inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{t('servicePages.testing.requestQuote')}</span>
        </a>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">GET STARTED</p>
        <h2 className="text-title text-white mb-8 max-w-sm">{t('servicePages.testing.bookNow')}</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://hg1xgb-km.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10M5 7h14l-1 12H6L5 7z" />
            </svg>
            <span>{t('servicePages.testing.bookNow')}</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
          >
            {t('servicePages.testing.contactUs')}
          </a>
        </div>
      </section>

    </div>
  );
};

export default TestingPage;
