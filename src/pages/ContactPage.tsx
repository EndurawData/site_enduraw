import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          {t('contact.title')}
        </h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('contact.subtitle')}
        </p>
      </section>

      {/* Email Categories */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">CHANNELS</p>
        <div>
          {/* Performance & Training */}
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('contact.performance_title')}</p>
              <p className="text-paragraph text-gray-400 mb-4">{t('contact.performance_p')}</p>
              <a
                href="mailto:performance@enduraw.co"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                performance@enduraw.co
              </a>
            </div>
          </div>

          {/* Dashboard & Technology */}
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('contact.dashboard_title')}</p>
              <p className="text-paragraph text-gray-400 mb-4">{t('contact.dashboard_p')}</p>
              <a
                href="mailto:dashboard@enduraw.co"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                dashboard@enduraw.co
              </a>
            </div>
          </div>

          {/* General & Communication */}
          <div className="flex items-start gap-5 py-5 last:border-0">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('contact.communication_title')}</p>
              <p className="text-paragraph text-gray-400 mb-4">{t('contact.communication_p')}</p>
              <a
                href="mailto:communication@enduraw.co"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                communication@enduraw.co
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
