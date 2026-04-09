import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type CareersTab = 'job' | 'spontaneous';

const CareersPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<CareersTab>('job');
  const dataScienceFormUrl = 'https://forms.gle/eCCuYxweHgvoGLMr8';
  const spontaneousFormUrl = 'https://forms.gle/jksfSE32JdsRFTnF9';

  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-6">
            {t('careers.title')}
          </h1>
          <p className="text-paragraph max-w-3xl mx-auto leading-relaxed">
            {t('careers.subtitle')}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="glass-card p-2 inline-flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('job')}
              className={`px-5 py-2 rounded-lg transition-all duration-300 text-body-uppercase ${
                activeTab === 'job'
                  ? 'bg-gradient-to-r from-gradient-blue-light/30 to-gradient-blue-dark/30 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('careers.openPosition')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('spontaneous')}
              className={`px-5 py-2 rounded-lg transition-all duration-300 text-body-uppercase ${
                activeTab === 'spontaneous'
                  ? 'bg-gradient-to-r from-gradient-blue-light/30 to-gradient-blue-dark/30 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {t('careers.spontaneous')}
            </button>
          </div>
        </div>

        {activeTab === 'job' ? (
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wide bg-gradient-to-r from-green-500/30 to-teal-500/30 border border-white/20">
                {t('careers.intern')}
              </span>
              <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wide bg-gradient-to-r from-green-500/30 to-teal-500/30 border border-white/20">
                {t('careers.remoteOnly')}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-5">{t('careers.jobTitle')}</h2>

            <p className="text-paragraph leading-relaxed mb-6">
              {t('careers.jobIntro')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">{t('careers.responsibilities')}</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• {t('careers.resp1')}</li>
                  <li>• {t('careers.resp2')}</li>
                  <li>• {t('careers.resp3')}</li>
                  <li>• {t('careers.resp4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">{t('careers.profile')}</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• {t('careers.prof1')}</li>
                  <li>• {t('careers.prof2')}</li>
                  <li>• {t('careers.prof3')}</li>
                  <li>• {t('careers.prof4')}</li>
                </ul>
              </div>
            </div>

            <p className="text-paragraph mb-4 text-center">{t('careers.applyClick')}</p>
            <div className="flex justify-center">
              <a
                href={dataScienceFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw inline-flex items-center justify-center px-6 py-3"
              >
                {t('careers.applyBtn')}
              </a>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default CareersPage;
