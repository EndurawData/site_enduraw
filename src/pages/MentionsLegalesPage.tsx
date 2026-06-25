import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

const MentionsLegalesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16 relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <div className="mb-12 text-center">
          <h1 className="text-title text-white mb-8">
            {t('mentions.title')}
          </h1>
        </div>

        <div className="space-y-8 text-paragraph">
          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">
              {t('mentions.publisher_title')}
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.publisher_1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.publisher_2')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.publisher_3')}</p>
            <p className="text-white/80 leading-relaxed mb-2">
              {t('mentions.publisher_4')} <a href="mailto:communication@enduraw.co" className="text-[#6CDCFF] hover:text-white transition-colors underline">communication@enduraw.co</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.publisher_5')}</p>
            <p className="text-white/80 leading-relaxed">{t('mentions.publisher_6')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">
              {t('mentions.hosting_title')}
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.hosting_1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('mentions.hosting_2')}</p>
            <p className="text-white/80 leading-relaxed">
              <a href="https://www.hostinger.fr/contact" target="_blank" rel="noopener noreferrer" className="text-[#6CDCFF] hover:text-white transition-colors underline">
                https://www.hostinger.fr/contact
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">
              {t('mentions.ip_title')}
            </h2>
            <p className="text-white/80 leading-relaxed">{t('mentions.ip_p')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">
              {t('mentions.links_title')}
            </h2>
            <p className="text-white/80 leading-relaxed">{t('mentions.links_p')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">
              {t('mentions.liability_title')}
            </h2>
            <p className="text-white/80 leading-relaxed">{t('mentions.liability_p')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">
              {t('mentions.vuln_title')}
            </h2>
            <p className="text-white/80 leading-relaxed">
              {t('mentions.vuln_p')} <a href="mailto:communication@enduraw.co" className="text-[#6CDCFF] hover:text-white transition-colors underline">communication@enduraw.co</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;
