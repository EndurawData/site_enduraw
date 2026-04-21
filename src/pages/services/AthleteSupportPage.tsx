import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const AthleteSupportPage: React.FC = () => {
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <header
          id="animate-title"
          className={`text-center mb-16 transform transition-all duration-1000 ${animatedElements.has('animate-title') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">
            ATHLETES SUPPORT
          </h1>
          <p className="text-xl text-gradient-blue-light max-w-3xl mx-auto mb-4">
            {t('servicePages.athleteSupport.subtitle')}
          </p>
          <p className="text-xl text-gray-300">{t('servicePages.athleteSupport.subtitle2')}</p>
        </header>

        <section className="mb-16">
          <div className="glass-card p-10 border-white/20 animate-float">
            <div className="text-paragraph text-gray-200 space-y-6 leading-relaxed">
              <p>{t('servicePages.athleteSupport.intro_p1')}</p>
              <p>{t('servicePages.athleteSupport.intro_p2')}</p>
              <p>
                {t('servicePages.athleteSupport.intro_p3')}
              </p>
              <p className="text-xl text-gradient-blue-light font-semibold">
                {t('servicePages.athleteSupport.intro_p4')}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-custom-gradient uppercase">
            {t('servicePages.athleteSupport.keysTitle')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('servicePages.athleteSupport.trainingAnalysis_title'),
                content: t('servicePages.athleteSupport.trainingAnalysis_content'),
                icon: "📊",
                color: "from-blue-400 to-cyan-400"
              },
              {
                title: t('servicePages.athleteSupport.historicalProfiling_title'),
                content: t('servicePages.athleteSupport.historicalProfiling_content'),
                icon: "📈",
                color: "from-purple-400 to-pink-400"
              },
              {
                title: t('servicePages.athleteSupport.performanceFactors_title'),
                content: t('servicePages.athleteSupport.performanceFactors_content'),
                icon: "🏆",
                color: "from-green-400 to-teal-400"
              },
              {
                title: t('servicePages.athleteSupport.nutritionGuidance_title'),
                content: t('servicePages.athleteSupport.nutritionGuidance_content'),
                icon: "🥗",
                color: "from-cyan-400 to-blue-400"
              },
              {
                title: t('servicePages.athleteSupport.refuelingStrategy_title'),
                content: t('servicePages.athleteSupport.refuelingStrategy_content'),
                icon: "💧",
                color: "from-cyan-400 to-blue-400"
              },
              {
                title: t('servicePages.athleteSupport.sleepAnalysis_title'),
                content: t('servicePages.athleteSupport.sleepAnalysis_content'),
                icon: "💤",
                color: "from-indigo-400 to-purple-400"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 text-center border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gradient-blue-light mb-4">
                  {service.title}
                </h3>
                <p className="text-paragraph text-gray-200 leading-relaxed">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-custom-gradient uppercase">
            {t('servicePages.athleteSupport.offersTitle')}
          </h2>

          <div className="glass-card p-10 border-white/20 animate-float-slow">
            <p className="text-paragraph text-gray-200 leading-relaxed mb-8">
              {t('servicePages.athleteSupport.offers_p')}
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 border-white/20 hover:border-white/40 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-blue-light/10 to-transparent pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-gradient-blue-light mb-4">{t('servicePages.athleteSupport.seasonalSupport_title')}</h3>
                <p className="text-3xl font-bold text-gradient-blue-light mb-6">€350<span className="text-lg text-gray-300">/month</span></p>
                <ul className="space-y-2 text-gray-200 leading-relaxed">
                  <li>• {t('servicePages.athleteSupport.ss_li1')}</li>
                  <li>• {t('servicePages.athleteSupport.ss_li2')}</li>
                  <li>• {t('servicePages.athleteSupport.ss_li3')}</li>
                  <li>• {t('servicePages.athleteSupport.ss_li4')}</li>
                  <li>• {t('servicePages.athleteSupport.ss_li5')}</li>
                  <li>• {t('servicePages.athleteSupport.ss_li6')}</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass-card p-6 border-white/20">
                <h3 className="text-lg font-bold text-gradient-blue-light mb-3">{t('servicePages.athleteSupport.smartTraining_title')}</h3>
                <p className="text-paragraph text-gray-200 leading-relaxed">
                  {t('servicePages.athleteSupport.smartTraining_p')}
                </p>
              </div>

              <div className="glass-card p-6 border-white/20">
                <h3 className="text-lg font-bold text-gradient-blue-light mb-3">{t('servicePages.athleteSupport.recoveryFirst_title')}</h3>
                <p className="text-paragraph text-gray-200 leading-relaxed">
                  {t('servicePages.athleteSupport.recoveryFirst_p')}
                </p>
              </div>

              <div className="glass-card p-6 border-white/20">
                <h3 className="text-lg font-bold text-gradient-blue-light mb-3">{t('servicePages.athleteSupport.precisionPacing_title')}</h3>
                <p className="text-paragraph text-gray-200 leading-relaxed">
                  {t('servicePages.athleteSupport.precisionPacing_p')}
                </p>
              </div>
            </div>

            <p className="text-paragraph text-gray-200 leading-relaxed text-center mt-10 mb-6">
              {t('servicePages.athleteSupport.chooseOption')}
            </p>

            <div className="glass-card p-6 border-white/40 bg-gradient-to-r from-gradient-blue-light/10 to-gradient-blue-dark/10 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse pointer-events-none"></div>
              <p className="text-center text-sm uppercase tracking-wide text-gradient-blue-light font-semibold mb-2">
                {t('servicePages.athleteSupport.eliteOffer')}
              </p>
              <p className="text-paragraph text-gray-100 leading-relaxed text-center">
                {t('servicePages.athleteSupport.eliteOffer_p')}
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="mailto:performance@enduraw.co"
                className="btn-enduraw inline-flex items-center justify-center text-center px-6 py-3 break-all shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">✉️</span>
                <span>{t('servicePages.athleteSupport.cta')}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AthleteSupportPage;