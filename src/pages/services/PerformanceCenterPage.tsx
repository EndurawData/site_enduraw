import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PerformanceCenterForm from '../../components/PerformanceCenterForm';
import '../../styles/fancy.css';

const img = (filename: string): string =>
  `/images/epc/${filename.replace(/ /g, '%20')}`;

const PerformanceCenterPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedStage, setSelectedStage] = useState<string>('');

  const stages = [
    {
      id: 'stage1',
      title: '1st IMMERSIVE STAGE',
      dates: 'Sep 30 – Oct 3, 2026',
      duration: t('servicePages.performanceCenter.days'),
      slots: t('servicePages.performanceCenter.slots'),
    },
    {
      id: 'stage2',
      title: '2nd IMMERSIVE STAGE',
      dates: 'Oct 7–10, 2026',
      duration: t('servicePages.performanceCenter.days'),
      slots: t('servicePages.performanceCenter.slots'),
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.eliteCoaching_title'),
      description: t('servicePages.performanceCenter.eliteCoaching_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.performanceTesting_title'),
      description: t('servicePages.performanceCenter.performanceTesting_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.utmbTrails_title'),
      description: t('servicePages.performanceCenter.utmbTrails_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.luxuryAccommodation_title'),
      description: t('servicePages.performanceCenter.luxuryAccommodation_desc'),
    },
  ];

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          ENDURAW PERFORMANCE CENTER
        </h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('servicePages.performanceCenter.subtitle')}
        </p>

        <div className="flex flex-wrap gap-12 sm:gap-20 mb-10">
          <div>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-white mb-1 leading-none">7+</p>
            <p className="text-body-uppercase text-gray-500 mt-1.5">{t('servicePages.performanceCenter.expertCoaches')}</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-white mb-1 leading-none">16</p>
            <p className="text-body-uppercase text-gray-500 mt-1.5">{t('servicePages.performanceCenter.totalSpots')}</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-white mb-1 leading-none">4</p>
            <p className="text-body-uppercase text-gray-500 mt-1.5">{t('servicePages.performanceCenter.daysIntensive')}</p>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('stages')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-enduraw"
        >
          <span>{t('servicePages.performanceCenter.discoverCamps')}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
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

      {/* ── WHY CHOOSE ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">PROGRAM</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.performanceCenter.whyChoose')}
        </h2>

        <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <div className="mb-3">
                <div className="icon-container bg-[#2054A8]">
                  <div className="text-[#6CDCFF]">{benefit.icon}</div>
                </div>
              </div>
              <p className="text-subtitle text-white mb-1.5">{benefit.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECOND IMAGE ROW ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-20">
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

      {/* ── STAGES ── */}
      <section id="stages" className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">DATES</p>
        <h2 className="text-title-h2 text-white mb-4">
          {t('servicePages.performanceCenter.chooseStage')}
        </h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.performanceCenter.limitedSpots')}
        </p>

        <div>
          {stages.map((stage) => {
            const isSelected = selectedStage === stage.id;
            return (
              <button
                key={stage.id}
                className={`flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0 w-full text-left cursor-pointer transition-opacity duration-150 ${
                  isSelected ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => {
                  setSelectedStage(stage.id);
                  setTimeout(() => {
                    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
              >
                <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <p className="text-subtitle text-white">{stage.title}</p>
                    {isSelected && (
                      <span className="flex items-center gap-1.5 text-xs text-body-uppercase text-[#6CDCFF] border border-[#6CDCFF]/40 px-3 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t('servicePages.performanceCenter.selectedStage')}
                      </span>
                    )}
                  </div>
                  <p className="text-[#6CDCFF] mb-0.5" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontStyle: 'italic', fontSize: '1.25rem' }}>
                    {stage.dates}
                  </p>
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <p className="text-paragraph text-gray-400 text-sm">{stage.duration}</p>
                    <span className="inline-flex items-center gap-2 text-xs text-body-uppercase text-[#6CDCFF]">
                      <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                      {stage.slots}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">PACKAGE</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.performanceCenter.whatsIncluded')}
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          <div className="bg-[#020617] p-5 md:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-subtitle text-white">{t('servicePages.performanceCenter.allInclusive')}</p>
            </div>
            <ul className="space-y-3">
              {[
                t('servicePages.performanceCenter.included_li1'),
                t('servicePages.performanceCenter.included_li2'),
                t('servicePages.performanceCenter.included_li3'),
                t('servicePages.performanceCenter.included_li4'),
                t('servicePages.performanceCenter.included_li5'),
                t('servicePages.performanceCenter.included_li6'),
                t('servicePages.performanceCenter.included_li7'),
                t('servicePages.performanceCenter.included_li8'),
                t('servicePages.performanceCenter.included_li9'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-paragraph text-gray-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#020617] p-5 md:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-900/40 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-subtitle text-gray-300">{t('servicePages.performanceCenter.notIncluded_title')}</p>
            </div>
            <ul className="space-y-3">
              {[
                t('servicePages.performanceCenter.notincluded_li1'),
                t('servicePages.performanceCenter.notincluded_li2'),
                t('servicePages.performanceCenter.notincluded_li3'),
                t('servicePages.performanceCenter.notincluded_li4'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-paragraph text-gray-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-paragraph text-gray-400 text-sm mt-8 italic">
              {t('servicePages.performanceCenter.shuttleNote')}
            </p>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section id="booking-form" className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">REGISTRATION</p>
        <h2 className="text-title text-white mb-8 max-w-sm">
          {t('servicePages.performanceCenter.bookSpot')}
        </h2>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {selectedStage
            ? t('servicePages.performanceCenter.bookSelected', {
                stage: stages.find(s => s.id === selectedStage)?.title,
              })
            : t('servicePages.performanceCenter.bookGeneric')}
        </p>
        <div className="glass-card p-8">
          <PerformanceCenterForm
            selectedStage={selectedStage}
            onSubmitSuccess={() => {
              console.log('Training camp request sent successfully!');
            }}
          />
        </div>
      </section>

    </div>
  );
};

export default PerformanceCenterPage;
