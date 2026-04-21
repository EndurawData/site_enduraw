import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PersonCard from '../../components/PersonCard';

const RaceBriefingPage: React.FC = () => {
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
    <div className="pt-16 pb-16 bg-dark-bg text-white font-sans relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-4">
          <Link to="/services" className="inline-flex items-center text-accent hover:text-accent-light font-semibold">{t('servicePages.backToServices')}</Link>
        </div>
        <header
          id="animate-title"
          className={`text-center mb-10 font-sans transform transition-all duration-1000 ${animatedElements.has('animate-title') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">RACE BRIEFING</h1>
          <p className="text-xl text-gray-300">{t('servicePages.raceBriefing.subtitle')}</p>
          <p className="text-lg text-gray-400">{t('servicePages.raceBriefing.subtitle2')}</p>
        </header>

        <section className="mb-8 space-y-4 text-gray-200">
          <p>{t('servicePages.raceBriefing.p1')}</p>
          <p>{t('servicePages.raceBriefing.p2')}</p>
          <p>{t('servicePages.raceBriefing.p3')}</p>
          <p>{t('servicePages.raceBriefing.p4')}</p>
        </section>

        <section className="mb-8 grid md:grid-cols-2 gap-6">
          <div className="bg-dark-secondary rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">{t('servicePages.raceBriefing.roadRace_title')}</h3>
            <p className="text-gray-300 mb-2">{t('servicePages.raceBriefing.takeIntoAccount')}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>{t('servicePages.raceBriefing.level')}</li>
              <li>{t('servicePages.raceBriefing.courseElevation')}</li>
              <li>{t('servicePages.raceBriefing.wind')}</li>
              <li>{t('servicePages.raceBriefing.temperature')}</li>
              <li>{t('servicePages.raceBriefing.raceStrategy')}</li>
            </ul>
            <p className="mt-3 text-gray-300">{t('servicePages.raceBriefing.toCalculate')}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>{t('servicePages.raceBriefing.finalTime')}</li>
              <li>{t('servicePages.raceBriefing.splitPace')}</li>
              <li>{t('servicePages.raceBriefing.nutritionPlan')}</li>
            </ul>
          </div>
          <div className="bg-dark-secondary rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">{t('servicePages.raceBriefing.trailRace_title')}</h3>
            <p className="text-gray-300 mb-2">{t('servicePages.raceBriefing.takeIntoAccount')}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>{t('servicePages.raceBriefing.utmbIndex')}</li>
              <li>{t('servicePages.raceBriefing.courseElevation')}</li>
              <li>{t('servicePages.raceBriefing.wind')}</li>
              <li>{t('servicePages.raceBriefing.temperature')}</li>
              <li>{t('servicePages.raceBriefing.technicality')}</li>
              <li>{t('servicePages.raceBriefing.speedDrift')}</li>
              <li>{t('servicePages.raceBriefing.raceStrategy')}</li>
            </ul>
            <p className="mt-3 text-gray-300">{t('servicePages.raceBriefing.toCalculate')}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>{t('servicePages.raceBriefing.finalTime')}</li>
              <li>{t('servicePages.raceBriefing.splitPace')}</li>
              <li>{t('servicePages.raceBriefing.nutritionPlan')}</li>
              <li>{t('servicePages.raceBriefing.whereToWalk')}</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 text-center">
          <button className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-lg font-semibold">{t('servicePages.raceBriefing.discoverProduct')}</button>
          <p className="text-gray-400 mt-2">{t('servicePages.raceBriefing.availability')}</p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">{t('servicePages.raceBriefing.trustUs')}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-200">
            <PersonCard
              fullName="Petter Engdahl"
              age={29}
              country="Sweden 🇸🇪"
              sports="Trail, Ultra Trail"
              achievements="CCC: win, record • Transvulcania win • MMB: 3rd"
              variant="athlete"
            />
            <PersonCard
              fullName="Ruth Croft"
              country="New Zealand 🇳🇿"
              sports="Trail, Ultra Trail"
              achievements="UTMB 2023 • UTMB 2024"
              variant="athlete"
            />
            <PersonCard
              fullName="Duncan Périllat"
              country="France 🇫🇷"
              sports="Marathon, Ultra Trail"
              achievements="Rotterdam Marathon • UTMB 2023"
              variant="athlete"
            />
            <PersonCard
              fullName="Solange Jésus"
              country="Portugal 🇵🇹"
              sports="Road Marathon"
              achievements="Paris Marathon: 9th • World championship • NYC Marathon"
              variant="athlete"
            />
            <PersonCard
              fullName="Guillaume Adam"
              country="France 🇫🇷"
              sports="Road Marathon"
              achievements="NYC Marathon"
              variant="athlete"
            />
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-2">{t('servicePages.raceBriefing.goFurther_title')}</h3>
          <p className="text-gray-300 mb-3">{t('servicePages.raceBriefing.goFurther_p1')}</p>
          <p className="text-gray-200 font-semibold mb-2">{t('servicePages.raceBriefing.hyperCustomization')}</p>
          <p className="text-gray-200 mb-3">{t('servicePages.raceBriefing.premiumFeatures')}</p>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>{t('servicePages.raceBriefing.stravaAnalysis')}</li>
            <li>{t('servicePages.raceBriefing.physiologicalProtocol')}</li>
            <li>{t('servicePages.raceBriefing.heartRatePrediction')}</li>
            <li>{t('servicePages.raceBriefing.sweatProfile')}</li>
            <li>{t('servicePages.raceBriefing.nutritionStrategy')}</li>
            <li>{t('servicePages.raceBriefing.competitorsAnalysis')}</li>
            <li>{t('servicePages.raceBriefing.raceStrategyItem')}</li>
            <li>{t('servicePages.raceBriefing.realTimeMonitoring')}</li>
            <li>{t('servicePages.raceBriefing.fktPreparation')}</li>
          </ul>
          <p className="text-gray-300 mt-3">{t('servicePages.raceBriefing.dataTradeoffs')}</p>
          <p className="text-accent mt-2">{t('servicePages.raceBriefing.contactCta')}</p>
        </section>


      </div>
    </div>
  );
};

export default RaceBriefingPage;
