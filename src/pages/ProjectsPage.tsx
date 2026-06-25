import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('projects.p1_title'),
      description: t('projects.p1_desc'),
      details: t('projects.p1_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('projects.p2_title'),
      description: t('projects.p2_desc'),
      details: t('projects.p2_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('projects.p3_title'),
      description: t('projects.p3_desc'),
      details: t('projects.p3_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('projects.p4_title'),
      description: t('projects.p4_desc'),
      details: t('projects.p4_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7 13.828h4.917" />
        </svg>
      ),
      title: t('projects.p5_title'),
      description: t('projects.p5_desc'),
      details: t('projects.p5_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t('projects.p6_title'),
      description: t('projects.p6_desc'),
      details: t('projects.p6_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('projects.p7_title'),
      description: t('projects.p7_desc'),
      details: t('projects.p7_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('projects.p8_title'),
      description: t('projects.p8_desc'),
      details: t('projects.p8_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: t('projects.p9_title'),
      description: t('projects.p9_desc'),
      details: t('projects.p9_details'),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('projects.p10_title'),
      description: t('projects.p10_desc'),
      details: t('projects.p10_details'),
    },
  ];

  return (
    <div className="text-white min-h-screen pt-16">

      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          {t('projects.title')}
        </h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('projects.subtitle')}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">{t('projects.expertise')}</p>
        <h2 className="text-title-h2 text-white mb-4">{t('projects.areasOfWork')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('projects.areasOfWork_p')}
        </p>

        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0"
            >
              <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                {project.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-subtitle text-white mb-1">{project.title}</p>
                <p className="text-paragraph text-gray-400 mb-1.5 leading-relaxed">{project.description}</p>
                <p className="text-paragraph text-gray-500 text-xs leading-relaxed">{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">GET STARTED</p>
        <h2 className="text-title text-white mb-8 max-w-sm">{t('projects.cta_title')}</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/services" className="btn-enduraw">
            {t('projects.exploreServices')}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
          >
            {t('projects.contactUs')}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
