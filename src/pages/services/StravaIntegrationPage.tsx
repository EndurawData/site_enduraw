import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PersonCard from '../../components/PersonCard';
import '../../styles/fancy.css';

const StravaIntegrationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">ENDURAW REPORT</h1>
        <p className="text-paragraph text-gray-300 max-w-md mb-4">{t('servicePages.stravaIntegration.subtitle')}</p>
        <p className="text-paragraph text-gray-300 max-w-md">{t('servicePages.stravaIntegration.subtitle2')}</p>
      </section>

      {/* Logos + Stats */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">OVERVIEW</p>

        <div className="flex flex-wrap items-center gap-8 mb-16">
          <img
            src="/images/strava_logo-fi35603244x260.png"
            alt="Strava logo"
            className="h-20 object-contain"
            loading="lazy"
          />
          <img
            src="/images/logo_enduraw%20blanc-fi35471045x140.png"
            alt="Enduraw logo"
            className="h-20 object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap gap-12 sm:gap-20">
          <div>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-white mb-1 leading-none">1047</p>
            <p className="text-body-uppercase text-gray-500 mt-1.5">{t('servicePages.stravaIntegration.users')}</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-white mb-1 leading-none">72,861</p>
            <p className="text-body-uppercase text-gray-500 mt-1.5">{t('servicePages.stravaIntegration.activitiesAnalyzed')}</p>
          </div>
        </div>
      </section>

      {/* About + screenshot */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">ABOUT</p>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-5 text-paragraph text-gray-300 leading-relaxed">
            <p>{t('servicePages.stravaIntegration.p1')}</p>
            <p>{t('servicePages.stravaIntegration.p2')}</p>
            <p>{t('servicePages.stravaIntegration.p3')}</p>
            <p>{t('servicePages.stravaIntegration.p4')}</p>
            <p>{t('servicePages.stravaIntegration.p5')}</p>
            <p>{t('servicePages.stravaIntegration.p6')}</p>
          </div>
          <div>
            <img
              src="/images/IMG_2313-fi35687493x330.PNG"
              alt="Enduraw Report sample screenshot"
              className="w-full rounded-lg border border-white/10"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://enduraw-report-strava.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw"
          >
            <span>{t('servicePages.stravaIntegration.cta')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">PROCESS</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.stravaIntegration.howItWorks')}</h2>

        <div>
          {([
            { key: 'step1', accent: false },
            { key: 'step2', accent: false },
            { key: 'step3', accent: false },
            { key: 'step4', accent: false },
            { key: 'step5', accent: false },
            { key: 'step6', accent: false },
            { key: 'step7', accent: false },
            { key: 'step8', accent: true },
            { key: 'step9', accent: false },
          ] as { key: string; accent: boolean }[]).map((item, index) => (
            <div key={item.key} className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
              <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5 flex items-center justify-center">
                <span className="text-[#6CDCFF] text-xs font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{index + 1}</span>
              </div>
              <div className="flex-1">
                <p className={`text-paragraph leading-relaxed ${item.accent ? 'text-[#6CDCFF]' : 'text-gray-300'}`}>
                  {t(`servicePages.stravaIntegration.${item.key}`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-paragraph text-gray-400 mt-8 text-sm">{t('servicePages.stravaIntegration.ps')}</p>
      </section>

      {/* Tech behind */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">TECHNOLOGY</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.stravaIntegration.techBehind')}</h2>
        <p className="text-paragraph text-gray-300 max-w-2xl">{t('servicePages.stravaIntegration.techBehindSub')}</p>
      </section>

      {/* Sponsors */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">PARTNERS</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.stravaIntegration.sponsors')}</h2>
        <p className="text-paragraph text-gray-300 max-w-2xl">{t('servicePages.stravaIntegration.sponsorsSub')}</p>
      </section>

      {/* Builders */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">TEAM</p>
        <h2 className="text-title-h2 text-white mb-8">{t('servicePages.stravaIntegration.builders')}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <PersonCard
            fullName="Alodie Boissonnet"
            country="France 🇫🇷"
            job="Software Engineer"
            sports="Triathlon"
            credentials="X - Cambridge"
            imageUrl="/images/alodie2-fi35697586x210.png"
          />
          <PersonCard
            fullName="Joseph Mestrallet"
            country="France 🇫🇷"
            job="Performance Scientist"
            sports="Trail Running"
            credentials="X-HEC Berkeley ENSEA"
            imageUrl="/images/joseph-fi35687529x212.png"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">GET STARTED</p>
        <h2 className="text-title text-white mb-8 max-w-sm">{t('servicePages.stravaIntegration.wantAccess_title')}</h2>
        <p className="text-paragraph text-gray-300 max-w-xl mb-8">{t('servicePages.stravaIntegration.wantAccess_p')}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-enduraw">
            {t('servicePages.stravaIntegration.contactUs')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="https://enduraw-report-strava.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
          >
            {t('servicePages.stravaIntegration.cta')}
          </a>
        </div>
      </section>

    </div>
  );
};

export default StravaIntegrationPage;
