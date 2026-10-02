import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TeamCarousel from '../components/TeamCarousel';
import { secondaryBtnClass } from '../components/buttonStyles';
import '../styles/fancy.css';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── WHO WE ARE ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <p className="label-enduraw mb-6">{t('homeV2.about_label')}</p>
        <h1 className="text-title text-white mb-5 max-w-2xl leading-tight">{t('home.tagline')}</h1>
        <p className="text-paragraph text-gray-300 max-w-xl">{t('services.description')}</p>
      </section>

      {/* ── TEAM ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade">
        <p className="label-enduraw mb-5">{t('homeV2.about_team')}</p>
        <div className="mt-5">
          <TeamCarousel />
        </div>
        <div className="mt-10">
          <Link to="/careers" className={secondaryBtnClass}>
            {t('homeV2.about_careers')}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
