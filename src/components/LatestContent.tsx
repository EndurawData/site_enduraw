import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { latestContent } from '../data/latestContent';
import { secondaryBtnClass } from './buttonStyles';

// Home page "newsletter" block: the 3 most recent articles / Instagram posts
const LatestContent: React.FC = () => {
  const { t } = useTranslation();
  const items = latestContent.slice(0, 3);

  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
      <p className="label-enduraw mb-5">{t('homeNews.label')}</p>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <h2 className="text-title-h2 text-white">{t('homeNews.title')}</h2>
        <Link to="/news" className="text-body-uppercase text-[#6CDCFF] hover:text-white transition-colors">
          {t('homeNews.seeAll')} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-8">
        {items.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.03] transition-colors group flex flex-col"
          >
            <span className="text-body-uppercase text-[#6CDCFF] mb-3">{item.source}</span>
            <p className="text-subtitle text-white mb-2">{item.title}</p>
            <p className="text-paragraph text-gray-400 text-xs leading-relaxed mb-5 flex-1">{item.description}</p>
            <span className="text-body-uppercase text-gray-400 group-hover:text-white inline-flex items-center gap-2 transition-colors">
              {t('news.readMore')}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      <a href="https://www.instagram.com/enduraw.data/" target="_blank" rel="noopener noreferrer" className={secondaryBtnClass}>
        {t('news.followHandle')}
      </a>
    </section>
  );
};

export default LatestContent;
