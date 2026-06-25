import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/fancy.css';

const NewsPage: React.FC = () => {
  const { t } = useTranslation();

  const latestContent = [
    {
      title: "What makes Paris 2024 a race to records",
      url: "https://worldathletics.org/waendurancemedicine/news/what-makes-paris-2024-a-race-to-records",
      source: "World Athletics",
      description: "Analysis of the performance factors behind the record-breaking performances at Paris 2024 Olympics."
    },
    {
      title: "Trail Running Classement Trimestre 1 Teams Trail 2025",
      url: "https://distances.plus/athletes/trail-running-classement-trimestre-1-teams-trail-2025/",
      source: "Distances Plus",
      description: "First quarter rankings for trail running teams in 2025 season."
    },
    {
      title: "Mathieu Blanchard Athlete Highlight",
      url: "https://www.instagram.com/p/DD7UHw6tQec/?img_index=1",
      source: "Instagram",
      description: "Mathieu Blanchard Performance"
    }
  ];

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">{t('news.title')}</h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">{t('news.subtitle')}</p>
      </section>

      {/* Instagram Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">Instagram</p>
        <h2 className="text-title-h2 text-white mb-4">{t('news.followLatest')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">{t('news.instagram_p')}</p>
        <a
          href="https://www.instagram.com/enduraw.data/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-enduraw"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.452.204 4.896.388a7.233 7.233 0 00-2.62 1.99A7.233 7.233 0 00.388 4.896C.204 5.452.082 6.094.048 7.041.013 7.989 0 8.396 0 12.017c0 3.624.013 4.09.048 5.016.034.947.156 1.589.34 2.145a7.233 7.233 0 001.99 2.62 7.233 7.233 0 002.62 1.99c.556.184 1.198.306 2.145.34.926.035 1.392.048 5.016.048 3.624 0 4.09-.013 5.016-.048.947-.034 1.589-.156 2.145-.34a7.233 7.233 0 002.62-1.99 7.233 7.233 0 001.99-2.62c.184-.556.306-1.198.34-2.145.035-.926.048-1.392.048-5.016 0-3.624-.013-4.09-.048-5.016-.034-.947-.156-1.589-.34-2.145a7.233 7.233 0 00-1.99-2.62A7.233 7.233 0 0019.061.388c-.556-.184-1.198-.306-2.145-.34C15.99.013 15.624 0 12.017 0zM12.017 2.156c3.557 0 3.98.013 5.386.048.866.04 1.337.184 1.65.305.415.161.712.353 1.023.664.311.311.503.608.664 1.023.121.313.265.784.305 1.65.035 1.406.048 1.829.048 5.386 0 3.557-.013 3.98-.048 5.386-.04.866-.184 1.337-.305 1.65-.161.415-.353.712-.664 1.023a2.75 2.75 0 01-1.023.664c-.313.121-.784.265-1.65.305-1.406.035-1.829.048-5.386.048-3.557 0-3.98-.013-5.386-.048-.866-.04-1.337-.184-1.65-.305a2.75 2.75 0 01-1.023-.664 2.75 2.75 0 01-.664-1.023c-.121-.313-.265-.784-.305-1.65-.035-1.406-.048-1.829-.048-5.386 0-3.557.013-3.98.048-5.386.04-.866.184-1.337.305-1.65.161-.415.353-.712.664-1.023a2.75 2.75 0 011.023-.664c.313-.121.784-.265 1.65-.305 1.406-.035 1.829-.048 5.386-.048z"/>
            <path d="M12.017 5.838a6.18 6.18 0 100 12.359 6.18 6.18 0 000-12.36zM12.017 16a4 4 0 110-8 4 4 0 010 8zM18.408 4.155a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
          </svg>
          <span>{t('news.followHandle')}</span>
        </a>
      </section>

      {/* Latest Content */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">Articles</p>
        <h2 className="text-title-h2 text-white mb-10">{t('news.latestContent')}</h2>
        <div>
          {latestContent.map((item, index) => (
            <div key={index} className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
              <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-subtitle text-white mb-1">{item.title}</p>
                <p className="text-paragraph text-gray-400 mb-3">{item.description}</p>
                <span className="text-body-uppercase text-[#6CDCFF] tracking-widest">{item.source}</span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150 flex-shrink-0 self-center"
              >
                <span>{t('news.readMore')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Media Expertise CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('news.expertise_label')}</p>
        <h2 className="text-title text-white mb-5 max-w-sm leading-tight">{t('news.expertise_title')}</h2>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">{t('news.expertise_p')}</p>
        <Link to="/contact" className="btn-enduraw">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{t('news.expertise_cta')}</span>
        </Link>
      </section>

    </div>
  );
};

export default NewsPage;
