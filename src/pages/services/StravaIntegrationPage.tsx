import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PersonCard from '../../components/PersonCard';
import '../../styles/fancy.css';

const StravaIntegrationPage: React.FC = () => {
  const { t } = useTranslation();
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToObserve = document.querySelectorAll('[id^="animate-"]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header 
          id="animate-title"
          className={`text-center mb-16 transform transition-all duration-1000 ${animatedElements.has('animate-title') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">ENDURAW REPORT</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">{t('servicePages.stravaIntegration.subtitle')}</p>
          <p className="text-lg text-gray-300">{t('servicePages.stravaIntegration.subtitle2')}</p>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <img
            src="/images/strava_logo-fi35603244x260.png"
            alt="Strava logo"
            className="h-40 object-contain"
            loading="lazy"
          />
          <img
            src="/images/logo_enduraw%20blanc-fi35471045x140.png"
            alt="Enduraw logo"
            className="h-40 object-contain"
            loading="lazy"
          />
        </div>

        {/* Problem statement + sample report side-by-side */}
        <section className="mb-12 grid gap-8 md:grid-cols-2 items-start">
          {/* Left: portrait sample screenshot */}
          <div className="order-2 md:order-1">
            <img
              src="/images/IMG_2313-fi35687493x330.PNG"
              alt="Enduraw Report sample screenshot"
              className="w-full rounded-lg border border-gray-800"
              loading="lazy"
            />
          </div>

          {/* Right: text */}
          <div className="order-1 md:order-2 space-y-6 text-paragraph text-gray-200 leading-relaxed">
            <p>{t('servicePages.stravaIntegration.p1')}</p>
            <p>{t('servicePages.stravaIntegration.p2')}</p>
            <p>{t('servicePages.stravaIntegration.p3')}</p>
            <p>{t('servicePages.stravaIntegration.p4')}</p>
            <p>{t('servicePages.stravaIntegration.p5')}</p>
            <p>{t('servicePages.stravaIntegration.p6')}</p>
          </div>
        </section>

        <section className="mb-12 grid gap-8 sm:grid-cols-2">
          <div className="glass-card p-8 text-center border-white/20 animate-float">
            <p className="text-5xl font-extrabold text-gradient-blue-light mb-2">1047</p>
            <p className="text-paragraph text-gray-300">{t('servicePages.stravaIntegration.users')}</p>
          </div>
          <div className="glass-card p-8 text-center border-white/20 animate-float-slow">
            <p className="text-5xl font-extrabold text-gradient-blue-light mb-2">72,861</p>
            <p className="text-paragraph text-gray-300">{t('servicePages.stravaIntegration.activitiesAnalyzed')}</p>
          </div>
        </section>

        <div className="mb-16 text-center">
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

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-custom-gradient mb-8">{t('servicePages.stravaIntegration.howItWorks')}</h2>
          <div className="glass-card p-8 border-white/20 animate-float">
            <ol className="list-decimal list-inside space-y-4 text-paragraph text-gray-200 leading-relaxed">
              <li>{t('servicePages.stravaIntegration.step1')}</li>
              <li>{t('servicePages.stravaIntegration.step2')}</li>
              <li>{t('servicePages.stravaIntegration.step3')}</li>
              <li>{t('servicePages.stravaIntegration.step4')}</li>
              <li>{t('servicePages.stravaIntegration.step5')}</li>
              <li>{t('servicePages.stravaIntegration.step6')}</li>
              <li>{t('servicePages.stravaIntegration.step7')}</li>
              <li className="text-yellow-300">{t('servicePages.stravaIntegration.step8')}</li>
              <li>{t('servicePages.stravaIntegration.step9')}</li>
            </ol>
            <p className="text-sm text-gray-400 mt-6">{t('servicePages.stravaIntegration.ps')}</p>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold">{t('servicePages.stravaIntegration.techBehind')}</h3>
          <p className="text-gray-400">{t('servicePages.stravaIntegration.techBehindSub')}</p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold">{t('servicePages.stravaIntegration.sponsors')}</h3>
          <p className="text-gray-400">{t('servicePages.stravaIntegration.sponsorsSub')}</p>
        </section>

        <section className="mb-4">
          <h3 className="text-2xl font-bold mb-4">{t('servicePages.stravaIntegration.builders')}</h3>
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

        {/* Contact Section */}
        <section className="mt-16">
          <div className="glass-card p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-gradient-blue-light">{t('servicePages.stravaIntegration.wantAccess_title')}</h2>
            <p className="text-paragraph mb-6">{t('servicePages.stravaIntegration.wantAccess_p')}</p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('servicePages.stravaIntegration.contactUs')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StravaIntegrationPage;
