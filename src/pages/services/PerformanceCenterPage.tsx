import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PerformanceCenterForm from '../../components/PerformanceCenterForm';
import '../../styles/fancy.css';

const PerformanceCenterPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedStage, setSelectedStage] = useState<string>('');
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

  const stages = [
    {
      id: 'stage1',
      title: "1st IMMERSIVE STAGE",
      dates: "May 9-12, 2025",
      duration: t('servicePages.performanceCenter.days'),
      slots: t('servicePages.performanceCenter.slots'),
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 'stage2',
      title: "2nd IMMERSIVE STAGE",
      dates: "May 14-17, 2025",
      duration: t('servicePages.performanceCenter.days'),
      slots: t('servicePages.performanceCenter.slots'),
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.eliteCoaching_title'),
      description: t('servicePages.performanceCenter.eliteCoaching_desc')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.performanceTesting_title'),
      description: t('servicePages.performanceCenter.performanceTesting_desc')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.utmbTrails_title'),
      description: t('servicePages.performanceCenter.utmbTrails_desc')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.luxuryAccommodation_title'),
      description: t('servicePages.performanceCenter.luxuryAccommodation_desc')
    }
  ];

  return (
    <div className="bg-dark-bg text-white min-h-screen relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <img
              src="/images/LOGO_ENDURAW_WHITE.png"
              alt="Enduraw"
              className="h-24 mx-auto opacity-95"
            />
          </div>

          {/* Main Title */}
          <div
            id="animate-title"
            className={`transform transition-all duration-1000 ${animatedElements.has('animate-title') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">
              ENDURAW PERFORMANCE CENTER
            </h1>

            <p className="text-2xl text-paragraph text-cyan-400 mb-4 font-light">
              {t('servicePages.performanceCenter.location')}
            </p>

            <p className="text-xl text-paragraph text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('servicePages.performanceCenter.subtitle')}
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById('stages')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-enduraw text-lg"
          >
            <span>{t('servicePages.performanceCenter.discoverCamps')}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-dark-bg to-dark-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-h2 text-center mb-20 bg-clip-text text-transparent bg-custom-gradient">
            {t('servicePages.performanceCenter.whyChoose')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`glass-card p-8 text-center group hover:scale-105 transition-all duration-300 ${
                  index % 4 === 0 ? 'animate-float' : index % 4 === 1 ? 'animate-float-slow' : index % 4 === 2 ? 'animate-float-fast' : 'animate-float'
                }`}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-subtitle text-cyan-400 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-paragraph text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="stages" className="py-32 relative z-10">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-title-h2 text-center mb-8 bg-clip-text text-transparent bg-custom-gradient">
            {t('servicePages.performanceCenter.chooseStage')}
          </h2>
          <p className="text-paragraph text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            {t('servicePages.performanceCenter.limitedSpots')}
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className={`glass-card p-10 relative overflow-hidden group cursor-pointer transition-all duration-500 ${
                  index % 2 === 0 ? 'animate-float' : 'animate-float-slow'
                } ${
                  selectedStage === stage.id
                    ? 'ring-4 ring-cyan-400 shadow-2xl shadow-cyan-400/50 scale-105'
                    : 'hover:scale-105'
                }`}
                onClick={() => {
                  setSelectedStage(stage.id);
                  setTimeout(() => {
                    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${stage.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <h3 className="text-subtitle text-cyan-400 mb-4 text-body-uppercase">
                    {stage.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <p className="text-2xl font-bold text-white">
                      {stage.dates}
                    </p>
                    <p className="text-paragraph text-gray-300">
                      {stage.duration}
                    </p>
                    <div className="inline-block px-6 py-2 bg-cyan-400/20 rounded-full border border-cyan-400/50">
                      <p className="text-cyan-400 font-semibold">
                        {stage.slots}
                      </p>
                    </div>
                  </div>

                  <button className={`mt-4 px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedStage === stage.id
                      ? 'bg-cyan-400 text-black scale-110'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    {selectedStage === stage.id ? t('servicePages.performanceCenter.selectedStage') : t('servicePages.performanceCenter.selectStage')}
                  </button>
                </div>

                {/* Selected indicator */}
                {selectedStage === stage.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-32 bg-gradient-to-b from-dark-secondary to-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-h2 text-center mb-20 bg-clip-text text-transparent bg-custom-gradient">
            {t('servicePages.performanceCenter.whatsIncluded')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Included */}
            <div className="glass-card p-8 animate-float">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-subtitle text-cyan-400">{t('servicePages.performanceCenter.allInclusive')}</h3>
              </div>

              <div className="space-y-4">
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
                  t('servicePages.performanceCenter.included_li10'),
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-paragraph text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Included */}
            <div className="glass-card p-8 animate-float-slow">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-rose-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-subtitle text-gray-400">{t('servicePages.performanceCenter.notIncluded_title')}</h3>
              </div>

              <div className="space-y-4">
                {[
                  t('servicePages.performanceCenter.notincluded_li1'),
                  t('servicePages.performanceCenter.notincluded_li2'),
                  t('servicePages.performanceCenter.notincluded_li3'),
                  t('servicePages.performanceCenter.notincluded_li4'),
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-paragraph text-gray-400">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-paragraph text-gray-500 mt-8 italic">
                {t('servicePages.performanceCenter.shuttleNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-32 relative z-10">        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-title-h2 mb-6 bg-clip-text text-transparent bg-custom-gradient">
              {t('servicePages.performanceCenter.bookSpot')}
            </h2>
            <p className="text-paragraph text-gray-300 max-w-2xl mx-auto">
              {selectedStage
                ? t('servicePages.performanceCenter.bookSelected', { stage: stages.find(s => s.id === selectedStage)?.title })
                : t('servicePages.performanceCenter.bookGeneric')
              }
            </p>
          </div>

          <PerformanceCenterForm
            selectedStage={selectedStage}
            onSubmitSuccess={() => {
              console.log('Training camp request sent successfully!');
            }}
          />
        </div>
      </section>

      {/* Social Proof / Trust Section */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 animate-float">
            <h3 className="text-subtitle text-cyan-400 mb-6">
              {t('servicePages.performanceCenter.trustedTitle')}
            </h3>
            <p className="text-paragraph text-gray-300 mb-8 leading-relaxed">
              {t('servicePages.performanceCenter.trusted_p')}
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">7+</p>
                <p className="text-sm text-paragraph">{t('servicePages.performanceCenter.expertCoaches')}</p>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">16</p>
                <p className="text-sm text-paragraph">{t('servicePages.performanceCenter.totalSpots')}</p>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">4</p>
                <p className="text-sm text-paragraph">{t('servicePages.performanceCenter.daysIntensive')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceCenterPage;
