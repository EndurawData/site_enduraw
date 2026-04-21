import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PhysiologicalTestingPage: React.FC = () => {
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
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">PHYSIOLOGICAL TESTING</h1>
          <p className="text-xl text-gray-300">{t('servicePages.physiologicalTesting.subtitle')}</p>
        </header>

        <div className="mb-8">
          <img
            src="/images/IMG_0001%20copie-fi35702592x2000.JPG"
            alt="Physiological testing lab setup"
            className="w-full h-[24rem] object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-3">{t('servicePages.physiologicalTesting.protocols_title')}</h2>
          <p className="text-gray-200 mb-3">{t('servicePages.physiologicalTesting.protocols_p1')}</p>
          <p className="text-gray-200">{t('servicePages.physiologicalTesting.protocols_p2')}</p>
        </section>

        <section className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="bg-dark-secondary rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">{t('servicePages.physiologicalTesting.vo2max_title')}</h3>
            <p className="text-gray-300 mb-2">{t('servicePages.physiologicalTesting.measure')}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>FC max</li>
              <li>VO2max</li>
              <li>Ventilatory thresholds 1 & 2</li>
              <li>MAS (Maximum Aerobic speed - VMA)</li>
              <li>Training zones</li>
              <li>Muscle oxygen</li>
              <li>Core Body Temp</li>
              <li>Lactate testing (optional)</li>
            </ul>
            <div className="mt-4 text-gray-300">
              <p>{t('servicePages.physiologicalTesting.protocol')}</p>
              <p>{t('servicePages.physiologicalTesting.location')}</p>
              <p className="text-accent font-semibold">{t('servicePages.physiologicalTesting.price_vo2')}</p>
            </div>
          </div>

          <div className="bg-dark-secondary rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">{t('servicePages.physiologicalTesting.walkRun_title')}</h3>
            <p className="text-gray-300 mb-2">{t('servicePages.physiologicalTesting.walkRun_goal')}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>{t('servicePages.physiologicalTesting.runningEconomy')}</li>
              <li>{t('servicePages.physiologicalTesting.walkingEconomy')}</li>
              <li>{t('servicePages.physiologicalTesting.polesEconomy')}</li>
            </ul>
            <p className="text-gray-200 mt-2">{t('servicePages.physiologicalTesting.walkRun_p')}</p>
            <div className="mt-4 text-gray-300">
              <p>{t('servicePages.physiologicalTesting.walkRun_measure')}</p>
              <p>{t('servicePages.physiologicalTesting.walkRun_protocol')}</p>
              <p>{t('servicePages.physiologicalTesting.walkRun_location')}</p>
              <p className="text-accent font-semibold">{t('servicePages.physiologicalTesting.price_walkrun')}</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3">{t('servicePages.physiologicalTesting.interested_title')}</h3>
          <p className="text-gray-300">{t('servicePages.physiologicalTesting.interested_p')}</p>
          <a href="mailto:performance@enduraw.co" className="inline-block mt-3 bg-accent hover:bg-accent-light text-white px-6 py-2 rounded-lg font-semibold">{t('servicePages.physiologicalTesting.contactBtn')}</a>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">{t('servicePages.physiologicalTesting.sensors_title')}</h2>
          <p className="text-gray-400 mb-6">{t('servicePages.physiologicalTesting.sensors_soon')}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://vo2master.com/" target="_blank" rel="noreferrer" className="bg-dark-secondary rounded-lg p-6 flex flex-col items-center hover:bg-gray-700/40 transition-colors">
              <img src="/images/vo2_master_-_dc_-_main_left_-_full_colour_-_transparent.png__664x0_q85_subsampling-2-fi35703783x310.png" alt="VO2master analyzer" className="h-12 object-contain mb-3" loading="lazy" />
              <h4 className="text-lg font-semibold">VO2master analyzer</h4>
              <p className="text-gray-300 text-sm">VO2, VE, FeO2, EqO2</p>
              <p className="text-gray-400 text-xs">In partnership with Mauna.ai</p>
            </a>
            <a href="https://mauna.ai/" target="_blank" rel="noreferrer" className="bg-dark-secondary rounded-lg p-6 flex flex-col items-center hover:bg-gray-700/40 transition-colors">
              <img src="/images/ai_mauna_logo-fi35703946x130.png" alt="Mauna.ai" className="h-10 object-contain mb-3" loading="lazy" />
              <h4 className="text-lg font-semibold">Mauna.ai</h4>
              <p className="text-gray-300 text-sm">{t('servicePages.physiologicalTesting.mauna_desc')}</p>
            </a>
            <a href="https://www.polar.com/en/products/accessories/h10_heart_rate_sensor" target="_blank" rel="noreferrer" className="bg-dark-secondary rounded-lg p-6 flex flex-col items-center hover:bg-gray-700/40 transition-colors">
              <img src="/images/polar-logo-fi35703774x170.png" alt="Polar H10" className="h-10 object-contain mb-3" loading="lazy" />
              <h4 className="text-lg font-semibold">Polar H10</h4>
              <p className="text-gray-300 text-sm">{t('servicePages.physiologicalTesting.polar_desc')}</p>
            </a>
            <a href="https://trainred.com/" target="_blank" rel="noreferrer" className="bg-dark-secondary rounded-lg p-6 flex flex-col items-center hover:bg-gray-700/40 transition-colors">
              <img src="/images/TrainRed-logo-2-fi35703796x130.png" alt="Train.Red FYER" className="h-10 object-contain mb-3" loading="lazy" />
              <h4 className="text-lg font-semibold">Train.Red FYER</h4>
              <p className="text-gray-300 text-sm">{t('servicePages.physiologicalTesting.trainred_desc')}</p>
            </a>
            <a href="https://corebodytemp.com/" target="_blank" rel="noreferrer" className="bg-dark-secondary rounded-lg p-6 flex flex-col items-center hover:bg-gray-700/40 transition-colors">
              <img src="/images/Core-logo-fi35703773x100.png" alt="Core Body Temperature" className="h-10 object-contain mb-3" loading="lazy" />
              <h4 className="text-lg font-semibold">Core Body Temperature</h4>
              <p className="text-gray-300 text-sm">{t('servicePages.physiologicalTesting.core_desc')}</p>
            </a>
            <a href="https://www.stryd.com/" target="_blank" rel="noreferrer" className="bg-dark-secondary rounded-lg p-6 flex flex-col items-center hover:bg-gray-700/40 transition-colors">
              <img src="/images/stryd-fi35703791x200.png" alt="Stryd Pod" className="h-10 object-contain mb-3" loading="lazy" />
              <h4 className="text-lg font-semibold">Stryd pod</h4>
              <p className="text-gray-300 text-sm">{t('servicePages.physiologicalTesting.stryd_desc')}</p>
            </a>
            <a href="https://www.supersapiens.com/" target="_blank" rel="noreferrer" className="bg-dark-secondary rounded-lg p-6 flex flex-col items-center hover:bg-gray-700/40 transition-colors">
              <img src="/images/5e3782b4-f6d8-434b-a5ec-a6459473a619-fi35703631x150.png" alt="Supersapiens" className="h-10 object-contain mb-3" loading="lazy" />
              <h4 className="text-lg font-semibold">Supersapiens sensor</h4>
              <p className="text-gray-300 text-sm">{t('servicePages.physiologicalTesting.supersapiens_desc')}</p>
            </a>
            <a href="https://www.nixbiosensors.com/" target="_blank" rel="noreferrer" className="bg-dark-secondary rounded-lg p-6 flex flex-col items-center hover:bg-gray-700/40 transition-colors">
              <img src="/images/Nix-logo-fi35703775x110.png" alt="Nix patch" className="h-10 object-contain mb-3" loading="lazy" />
              <h4 className="text-lg font-semibold">Nix patch</h4>
              <p className="text-gray-300 text-sm">{t('servicePages.physiologicalTesting.nix_desc')}</p>
            </a>
          </div>
          <p className="text-gray-400 mt-6">{t('servicePages.physiologicalTesting.sensors_linkedin')}</p>
        </section>

        
      </div>
    </div>
  );
};

export default PhysiologicalTestingPage;
