import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

const MentionsLegalesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 text-center">
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">
            {t('mentions.title')}
          </h1>
        </div>

        <div className="space-y-8 text-paragraph">
          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              {t('mentions.publisher_title')}
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.publisher_1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.publisher_2')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.publisher_3')}</p>
            <p className="text-white/80 leading-relaxed mb-2">
              {t('mentions.publisher_4')} <a href="mailto:communication@enduraw.co" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">communication@enduraw.co</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.publisher_5')}</p>
            <p className="text-white/80 leading-relaxed">{t('mentions.publisher_6')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              {t('mentions.hosting_title')}
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.hosting_1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.hosting_2')}</p>
            <p className="text-white/80 leading-relaxed">
              <a href="https://www.hostinger.fr/contact" target="_blank" rel="noopener noreferrer" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">
                https://www.hostinger.fr/contact
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              {t('mentions.ip_title')}
            </h2>
            <p className="text-white/80 leading-relaxed">{t('mentions.ip_p')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              {t('mentions.links_title')}
            </h2>
            <p className="text-white/80 leading-relaxed">{t('mentions.links_p')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              {t('mentions.liability_title')}
            </h2>
            <p className="text-white/80 leading-relaxed">{t('mentions.liability_p')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              {t('mentions.vuln_title')}
            </h2>
            <p className="text-white/80 leading-relaxed">
              {t('mentions.vuln_p')} <a href="mailto:communication@enduraw.co" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">communication@enduraw.co</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;
