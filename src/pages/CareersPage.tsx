import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

const CareersPage: React.FC = () => {
  const { t } = useTranslation();

  const spontaneousFormUrl = 'https://forms.gle/jksfSE32JdsRFTnF9';

  return (
    <div className="text-white min-h-screen pt-16">

      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          {t('careers.title')}
        </h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('careers.subtitle')}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">APPLY</p>
        <h2 className="text-title-h2 text-white mb-4">{t('careers.spontTitle')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('careers.spontIntro')}
        </p>

        <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
          <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-subtitle text-white mb-1">{t('careers.applyClick')}</p>
            <a
              href={spontaneousFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-enduraw inline-flex items-center justify-center gap-2 px-6 py-3 mt-4"
            >
              {t('careers.applyBtn')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
