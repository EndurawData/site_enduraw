import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CareersPage: React.FC = () => {
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

  const spontaneousFormUrl = 'https://forms.gle/jksfSE32JdsRFTnF9';

  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          id="animate-title"
          className={`text-center mb-12 transform transition-all duration-1000 ${animatedElements.has('animate-title') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-6">
            {t('careers.title')}
          </h1>
          <p className="text-paragraph max-w-3xl mx-auto leading-relaxed">
            {t('careers.subtitle')}
          </p>
        </div>

        <div className="glass-card p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">{t('careers.spontTitle')}</h2>
          <p className="text-paragraph leading-relaxed mb-6">
            {t('careers.spontIntro')}
          </p>

          <p className="text-paragraph mb-4 text-center">{t('careers.applyClick')}</p>
          <div className="flex justify-center">
            <a
              href={spontaneousFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-enduraw inline-flex items-center justify-center px-6 py-3"
            >
              {t('careers.applyBtn')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
