import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../../styles/fancy.css';

const EndurawAPIPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">ENDURAW API</h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('servicePages.endurawAPI.subtitle')}
        </p>
      </section>

      {/* Intelligence Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">CORE ENGINE</p>
        <h2 className="text-title-h2 text-white mb-4">
          {t('servicePages.endurawAPI.intelligence_title')}
        </h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.endurawAPI.intelligence_p')}
        </p>

        {/* Mathematical Models â€” row list */}
        <div>
          {/* Weather-Adjusted Time Modeling */}
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawAPI.weatherModel_title')}</p>
              <p className="font-mono text-sm text-[#6CDCFF] mb-2 tracking-wide">
                t<sub className="text-xs text-cyan-300">adjusted</sub> = t<sub className="text-xs text-cyan-300">raw</sub>
                {' '}+ Δt<sub className="text-xs text-cyan-300">wind</sub>
                {' '}+ Δt<sub className="text-xs text-cyan-300">temp</sub>
                {' '}+ Δt<sub className="text-xs text-cyan-300">altitude</sub>
                {' '}+ Δt<sub className="text-xs text-cyan-300">elevation</sub>
              </p>
              <p className="text-paragraph text-gray-400">{t('servicePages.endurawAPI.weatherModel_p')}</p>
            </div>
          </div>

          {/* Physiological Profiling */}
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawAPI.physioProfile_title')}</p>
              <p className="font-mono text-sm text-[#6CDCFF] mb-2 tracking-wide">
                Profile<sub className="text-xs text-emerald-300">athlete</sub> = f(strava<sub className="text-xs text-emerald-300">account</sub>)
              </p>
              <p className="text-paragraph text-gray-400">{t('servicePages.endurawAPI.physioProfile_p')}</p>
            </div>
          </div>

          {/* Equipment & Morphometric Impact */}
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawAPI.equipmentImpact_title')}</p>
              <p className="font-mono text-sm text-[#6CDCFF] mb-2 tracking-wide">
                Δt<sub className="text-xs text-purple-300">wind</sub> = f(height, weight, GPX<sub className="text-xs text-purple-300">route</sub>, wind<sub className="text-xs text-purple-300">vector</sub>)
              </p>
              <p className="text-paragraph text-gray-400">{t('servicePages.endurawAPI.equipmentImpact_p')}</p>
            </div>
          </div>

          {/* Performance Discrepancy */}
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawAPI.discrepancy_title')}</p>
              <p className="font-mono text-sm text-[#6CDCFF] mb-2 tracking-wide">
                δ<sub className="text-xs text-violet-300">perf</sub> = f(temperature, humidity, previous<sub className="text-xs text-violet-300">best</sub>)
              </p>
              <p className="text-paragraph text-gray-400">{t('servicePages.endurawAPI.discrepancy_p')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Validation & Tech Integration â€” gap-grid */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">FOUNDATIONS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {/* Scientific Validation */}
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5 uppercase">{t('servicePages.endurawAPI.scientificValidation_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed mb-4">
              {t('servicePages.endurawAPI.scientificValidation_p')}
            </p>
            <ul className="text-gray-400 text-xs space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-3 h-3 text-[#6CDCFF] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                <span>{t('servicePages.endurawAPI.sv_li1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3 h-3 text-[#6CDCFF] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                <span>{t('servicePages.endurawAPI.sv_li2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3 h-3 text-[#6CDCFF] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                <span>{t('servicePages.endurawAPI.sv_li3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3 h-3 text-[#6CDCFF] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                <span>{t('servicePages.endurawAPI.sv_li4')}</span>
              </li>
            </ul>
          </div>

          {/* Tech Integration */}
          <div className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <div className="mb-3">
              <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <p className="text-subtitle text-white mb-1.5 uppercase">{t('servicePages.endurawAPI.techIntegration_title')}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed mb-4">
              {t('servicePages.endurawAPI.techIntegration_p')}
            </p>
            <ul className="text-gray-400 text-xs space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-3 h-3 text-[#6CDCFF] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                <span>{t('servicePages.endurawAPI.ti_li1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3 h-3 text-[#6CDCFF] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                <span>{t('servicePages.endurawAPI.ti_li2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3 h-3 text-[#6CDCFF] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                <span>{t('servicePages.endurawAPI.ti_li3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3 h-3 text-[#6CDCFF] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                <span>{t('servicePages.endurawAPI.ti_li4')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">GET STARTED</p>
        <h2 className="text-title text-white mb-8 max-w-sm">
          {t('servicePages.endurawAPI.interested')}
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-enduraw">
            <span>{t('servicePages.endurawAPI.contactUs')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
          >
            <span>{t('servicePages.endurawAPI.exploreServices')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EndurawAPIPage;
