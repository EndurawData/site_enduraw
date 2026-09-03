import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PerformanceCenterForm from '../../components/PerformanceCenterForm';
import '../../styles/fancy.css';

const TrainingCampPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedStage, setSelectedStage] = useState<string>('');

  const stages = [
    {
      id: 'stage1',
      title: '1st IMMERSIVE TRAINING CAMP',
      dates: 'Oct 18–25, 2026',
      duration: t('servicePages.performanceCenter.days'),
      slots: t('servicePages.performanceCenter.slots'),
    },
    {
      id: 'stage2',
      title: '2nd IMMERSIVE TRAINING CAMP',
      dates: 'Oct 25 – Nov 1, 2026',
      duration: t('servicePages.performanceCenter.days'),
      slots: t('servicePages.performanceCenter.slots'),
    },
  ];

  const pillars = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('servicePages.stages.physioData_title'),
      description: t('servicePages.stages.physioData_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('servicePages.stages.terrainTechnique_title'),
      description: t('servicePages.stages.terrainTechnique_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: t('servicePages.stages.kineBiomeca_title'),
      description: t('servicePages.stages.kineBiomeca_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('servicePages.stages.strategy_title'),
      description: t('servicePages.stages.strategy_desc'),
    },
  ];

  const days = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    title: t(`servicePages.stages.day${n}_title`),
    description: t(`servicePages.stages.day${n}_desc`),
  }));

  const highlights = [1, 2, 3, 4, 5, 6].map((n) => t(`servicePages.stages.highlights_li${n}`));
  const team = [1, 2, 3, 4].map((n) => t(`servicePages.stages.team_li${n}`));

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HIGHLIGHTS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.activity_stage_title')}</p>
        <h1 className="text-title-h2 text-white mb-4">
          {t('servicePages.stages.highlightsTitle')}
        </h1>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.stages.formatNote')}
        </p>

        <div>
          {highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-5 py-4 border-b border-white/[0.06] last:border-0">
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

      {/* ── METHOD (4 PILLARS) ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.stages.pillarsLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.stages.pillarsTitle')}
        </h2>

        <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <div className="mb-3">
                <div className="icon-container bg-[#2054A8]">
                  <div className="text-[#6CDCFF]">{pillar.icon}</div>
                </div>
              </div>
              <p className="text-subtitle text-white mb-1.5">{pillar.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DATES ── */}
      <section id="stages" className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.datesLabel')}</p>
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

      {/* ── TEAM ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.stages.teamLabel')}</p>
        <h2 className="text-title-h2 text-white mb-4">
          {t('servicePages.stages.teamTitle')}
        </h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.stages.teamIntro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-10">
          {team.map((item, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-paragraph text-gray-300 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="border border-white/[0.06] rounded-lg p-6">
          <p className="text-body-uppercase text-[#6CDCFF] tracking-widest mb-2">
            {t('servicePages.stages.personalizationTitle')}
          </p>
          <p className="text-paragraph text-gray-300 text-sm leading-relaxed">
            {t('servicePages.stages.personalization_p')}
          </p>
        </div>
      </section>

      {/* ── PROGRAM (DAY BY DAY) ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.stages.programLabel')}</p>
        <h2 className="text-title-h2 text-white mb-4">
          {t('servicePages.stages.programTitle')}
        </h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('servicePages.stages.program_p')}
        </p>

        <div>
          {days.map((day, i) => (
            <div key={i} className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
              <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                <p className="text-[#6CDCFF] text-sm font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  {i + 1}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-subtitle text-white mb-1.5">{day.title}</p>
                <p className="text-paragraph text-gray-400 text-sm leading-relaxed">{day.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.packageLabel')}</p>
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
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('servicePages.performanceCenter.registrationLabel')}</p>
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

export default TrainingCampPage;
