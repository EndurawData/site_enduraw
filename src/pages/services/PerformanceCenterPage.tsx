import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const img = (filename: string): string =>
  `/images/epc/${filename.replace(/ /g, '%20')}`;

const PerformanceCenterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── TITLE ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white leading-tight">
          ENDURAW PERFORMANCE CENTER
        </h1>
      </section>

      {/* ── ACTIVITIES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-20">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.activitiesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10 max-w-2xl">
          {t('servicePages.performanceCenter.activitiesTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
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
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <div className="flex gap-2 mb-2">
          <div className="overflow-hidden rounded-xl group" style={{ flex: 7 }}>
            <img
              src={img('13 mai 2026, 14_01_48.png')}
              alt="Terrace & Pool"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '360px' }}
            />
          </div>
          <div className="overflow-hidden rounded-xl group" style={{ flex: 5 }}>
            <img
              src={img('Image 13 mai 2026, 17_18_11.png')}
              alt="Conference Room"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '360px' }}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('13 mai 2026, 14_36_02.png')}
              alt="Analysis Studio"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('13 mai 2026, 14_44_13.png')}
              alt="Dining Room"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('Image 13 mai 2026, 17_20_47.png')}
              alt="Physio Lab — Cabinet Kiné"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
        </div>
      </section>

      {/* ── SECOND IMAGE ROW ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-24">
        <div className="flex gap-2">
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('Image 13 mai 2026, 14_51_11.png')}
              alt="Lounge"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '200px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              src={img('Image 13 mai 2026, 14_48_19.png')}
              alt="Private Suite"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '200px' }}
            />
          </div>
          <div className="overflow-hidden rounded-xl group" style={{ flex: 2 }}>
            <img
              src={img('Image 15 mai 2026, 11_00_52.png')}
              alt="Outdoor Terrace"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '200px' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default PerformanceCenterPage;
