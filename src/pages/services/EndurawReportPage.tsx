import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const EndurawReportPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">{t('servicePages.endurawReport.analytics_title')}</h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">{t('servicePages.endurawReport.analytics_p')}</p>
      </section>

      {/* Data Integration & Insights */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">DATA</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.endurawReport.dataIntegration_title')}</h2>
        <div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-paragraph text-gray-300">{t('servicePages.endurawReport.di_li1')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-paragraph text-gray-300">{t('servicePages.endurawReport.di_li2')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-paragraph text-gray-300">{t('servicePages.endurawReport.di_li3')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-paragraph text-gray-300">{t('servicePages.endurawReport.di_li4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Recommendations */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">INSIGHTS</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.endurawReport.insightsRec_title')}</h2>
        <div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-paragraph text-gray-300">{t('servicePages.endurawReport.ir_li1')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-paragraph text-gray-300">{t('servicePages.endurawReport.ir_li2')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-paragraph text-gray-300">{t('servicePages.endurawReport.ir_li3')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-paragraph text-gray-300">{t('servicePages.endurawReport.ir_li4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Features */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">FEATURES</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.endurawReport.reportFeatures_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.endurawReport.dataViz_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.endurawReport.dataViz_p')}</p>
          </div>
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.endurawReport.actionableInsights_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.endurawReport.actionableInsights_p')}</p>
          </div>
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5">{t('servicePages.endurawReport.progressTracking_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{t('servicePages.endurawReport.progressTracking_p')}</p>
          </div>
        </div>
      </section>

      {/* Sample Sections */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">SAMPLE SECTIONS</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.endurawReport.sampleSections_title')}</h2>
        <div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawReport.trainingLoad_title')}</p>
              <p className="text-paragraph text-gray-400 mb-3">{t('servicePages.endurawReport.trainingLoad_p')}</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-400">{t('servicePages.endurawReport.tl_li1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-400">{t('servicePages.endurawReport.tl_li2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-400">{t('servicePages.endurawReport.tl_li3')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawReport.performancePred_title')}</p>
              <p className="text-paragraph text-gray-400 mb-3">{t('servicePages.endurawReport.performancePred_p')}</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-400">{t('servicePages.endurawReport.pp_li1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-400">{t('servicePages.endurawReport.pp_li2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-gray-400">{t('servicePages.endurawReport.pp_li3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">GET STARTED</p>
        <h2 className="text-title text-white mb-8 max-w-sm">{t('servicePages.endurawReport.getReport_title')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-8">{t('servicePages.endurawReport.getReport_p')}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-enduraw">
            {t('servicePages.endurawReport.contactUs')}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EndurawReportPage;
