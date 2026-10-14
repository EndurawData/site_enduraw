import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';
import PageHero from '../components/PageHero';

const spontaneousFormUrl = 'https://forms.gle/jksfSE32JdsRFTnF9';

const CareersPage: React.FC = () => {
  const { t } = useTranslation();

  const steps = [1, 2, 3].map((n) => ({
    title: t(`careers.step${n}_title`),
    description: t(`careers.step${n}_desc`),
  }));

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <PageHero
        label={t('nav.careers')}
        title={t('careers.spontTitle')}
        text={t('careers.spontIntro')}
        primary={{ label: t('careers.applyBtn'), href: spontaneousFormUrl }}
      />

      {/* ── HOW IT WORKS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('careers.stepsLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('careers.stepsTitle')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-body-uppercase text-[#6CDCFF] mb-3">0{i + 1}</p>
              <p className="text-subtitle text-white mb-1.5">{step.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
