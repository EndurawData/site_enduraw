import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const PacingPlanPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">PACING PLAN</h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('servicePages.pacingPlan.subtitle')}<br />{t('servicePages.pacingPlan.subtitle2')}
        </p>
      </section>

      {/* Experience the Power */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">DEMO</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.pacingPlan.experiencePower')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.pacingPlan.experiencePower_p')}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://enduraw-report-strava.onrender.com/pacingplan?demo=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw"
          >
            <span>{t('servicePages.pacingPlan.checkDemo')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* About the Plan */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">OVERVIEW</p>
        <p className="text-paragraph text-gray-300 max-w-2xl mb-8">
          {t('servicePages.pacingPlan.raceDay_p1')}
        </p>
        <p className="text-subtitle text-white font-bold mb-8">
          {t('servicePages.pacingPlan.endurawHere')}
        </p>
        <p className="text-paragraph text-gray-400 max-w-2xl">
          {t('servicePages.pacingPlan.expertise_p')}
        </p>
      </section>

      {/* By Analyzing */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">INPUTS</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.pacingPlan.byAnalyzing')}</h2>
        <div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.pacingPlan.yourLevel')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.pacingPlan.yourLevel_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.pacingPlan.courseProfile')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.pacingPlan.courseProfile_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.pacingPlan.envConditions')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.pacingPlan.envConditions_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.pacingPlan.mechanicalDrift')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.pacingPlan.mechanicalDrift_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* We Compute */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">OUTPUTS</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.pacingPlan.weCompute')}</h2>
        <div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.pacingPlan.pacingPerStation')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.pacingPlan.pacingPerStation_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.pacingPlan.weatherAtStations')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.pacingPlan.weatherAtStations_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.pacingPlan.splitPace')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.pacingPlan.splitPace_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.pacingPlan.nutritionPlan')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.pacingPlan.nutritionPlan_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Tech */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">TECHNOLOGY</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.pacingPlan.learnMoreTech')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.pacingPlan.learnMoreTech_p')}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/pulse/petter-engdahls-pacing-strategy-mont-blanc-marathon-joseph-mestrallet/?trackingId=f1aj2RJkQuaMFK%2FBsmgwVA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw"
          >
            <span>{t('servicePages.pacingPlan.learnMoreLink')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">GET STARTED</p>
        <h2 className="text-title text-white mb-8 max-w-md">{t('servicePages.pacingPlan.readyToOptimize')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.pacingPlan.readyToOptimize_p')}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://hg1xgb-km.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw"
          >
            <span>{t('servicePages.pacingPlan.getPacingPlan')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </a>
        </div>
      </section>

    </div>
  );
};

export default PacingPlanPage;
