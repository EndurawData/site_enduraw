import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const EndurawDashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const [currentArchitectSlide, setCurrentArchitectSlide] = useState(0);

  const architects = [
    {
      id: 1,
      name: "Alodie Boissonet",
      country: "France 🇫🇷",
      education: "X - Cambridge",
      position: "Software Engineer",
      company: "@Mistral AI",
      image: "/images/alodie.png"
    },
    {
      id: 2,
      name: "Joseph Mestrallet",
      country: "France 🇫🇷",
      education: "X - HEC Berkeley ENSEA",
      position: "Performance Scientist",
      company: "@Enduraw",
      image: "/images/team/joseph.png"
    },
    {
      id: 3,
      name: "Aymeric Roucher",
      country: "France 🇫🇷",
      education: "X - Cambridge",
      position: "Project Lead - Agents",
      company: "@Hugging Face",
      image: "/images/aymeric.jpg"
    },
    {
      id: 4,
      name: "Valentin Templé",
      country: "France 🇫🇷",
      education: "ESILV Data science & IA",
      position: "Data Scientist Intern",
      company: "@Enduraw",
      image: "/images/team/valentin.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArchitectSlide(
        (prev) => (prev + 1) % Math.ceil(architects.length / 2)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [architects.length]);

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          ENDURAW DASHBOARD
        </h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('servicePages.endurawDashboard.stravaIntegration_sub')}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://enduraw-report-strava.onrender.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead');
              }
            }}
          >
            <span>{t('servicePages.endurawDashboard.activateReport')}</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">STATS</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.endurawDashboard.inFigures')}
        </h2>
        <div className="flex flex-wrap gap-12 sm:gap-20">
          <div>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-white mb-1 leading-none">
              12,010
            </p>
            <p className="text-body-uppercase text-gray-500 mt-1.5">
              {t('servicePages.endurawDashboard.users_p')}
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-white mb-1 leading-none">
              1,234,090
            </p>
            <p className="text-body-uppercase text-gray-500 mt-1.5">
              {t('servicePages.endurawDashboard.activities_p')}
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontStyle: 'italic', fontSize: '2rem', fontWeight: 700 }} className="text-white mb-1 leading-none">
              10.882M km
            </p>
            <p className="text-body-uppercase text-gray-500 mt-1.5">
              {t('servicePages.endurawDashboard.distance_p')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">ABOUT</p>
        <h2 className="text-title-h2 text-white mb-4">
          {t('servicePages.endurawDashboard.stravaIntegration_title')}
        </h2>
        <div className="space-y-5 text-gray-300 mb-10">
          <p className="text-paragraph italic">{t('servicePages.endurawDashboard.quote')}</p>
          <p className="text-paragraph">{t('servicePages.endurawDashboard.p1')}</p>
          <p className="text-paragraph">{t('servicePages.endurawDashboard.p2')}</p>
          <p className="text-paragraph">{t('servicePages.endurawDashboard.p3')}</p>
          <p className="text-paragraph">{t('servicePages.endurawDashboard.p4')}</p>
        </div>

        <div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawDashboard.heat')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.endurawDashboard.heat_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawDashboard.wind')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.endurawDashboard.wind_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06]">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawDashboard.altitude')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.endurawDashboard.altitude_desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
            <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-subtitle text-white mb-1">{t('servicePages.endurawDashboard.elevationGain')}</p>
              <p className="text-paragraph text-gray-400">{t('servicePages.endurawDashboard.elevationGain_desc')}</p>
            </div>
          </div>
        </div>

        <p className="text-paragraph text-gray-300 mt-8 mb-10">{t('servicePages.endurawDashboard.p5')}</p>

        <a
          href="https://medium.com/@josephmestrallet/enduraw-report-api-a-powerful-tool-to-enhance-your-activity-interpretation-with-external-7273edbf9653"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
        >
          {t('servicePages.endurawDashboard.readMoreTech')}
        </a>
      </section>

      {/* Releases Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">CHANGELOG</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.endurawDashboard.releases')}
        </h2>
        <div>
          {[
            'release_1',
            'release_2',
            'release_3',
            'release_4',
            'release_8',
            'release_9',
            'release_5',
            'release_6',
            'release_7',
          ].map((key, i, arr) => (
            <div
              key={key}
              className={`flex items-start gap-4 py-4 ${i < arr.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
            >
              <svg className="w-2 h-2 text-[#6CDCFF] mt-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" /></svg>
              <p className="text-paragraph text-gray-300">
                {t(`servicePages.endurawDashboard.${key}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architects Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">TEAM</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('servicePages.endurawDashboard.architects')}
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentArchitectSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(architects.length / 2) }).map(
              (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
                    {architects
                      .slice(slideIndex * 2, (slideIndex + 1) * 2)
                      .map((architect) => (
                        <div
                          key={architect.id}
                          className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors"
                        >
                          <div className="flex flex-col items-center text-center">
                            <img
                              src={architect.image}
                              alt={architect.name}
                              className="w-16 h-16 rounded-full object-cover mb-4"
                            />
                            <p className="text-subtitle text-white mb-1">
                              {architect.name}
                            </p>
                            <p className="text-paragraph text-gray-400 mb-1">
                              {architect.country}
                            </p>
                            <p className="text-xs text-[#6CDCFF] font-medium mb-1">
                              {architect.education}
                            </p>
                            <p className="text-paragraph text-white font-semibold mb-1">
                              {architect.position}
                            </p>
                            <p className="text-xs text-[#6CDCFF] font-medium">
                              {architect.company}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(architects.length / 2) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentArchitectSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentArchitectSlide
                    ? 'bg-[#6CDCFF]'
                    : 'bg-gray-500'
                }`}
              />
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">CONTACT</p>
        <h2 className="text-title text-white mb-4 max-w-md">
          {t('servicePages.endurawDashboard.interested_title')}
        </h2>
        <p className="text-paragraph text-gray-400 mb-8">
          {t('servicePages.endurawDashboard.interested_p')}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-enduraw">
            {t('servicePages.endurawDashboard.contactUs')}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <a
            href="https://enduraw-report-strava.onrender.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead');
              }
            }}
          >
            {t('servicePages.endurawDashboard.activateReport')}
          </a>
        </div>
      </section>

    </div>
  );
};

export default EndurawDashboardPage;
