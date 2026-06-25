import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

interface ServicesPageProps {
  activeSection?: string;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeSection]);

  const services = [
    {
      id: 0,
      title: "Enduraw Dashboard",
      description: t('services.dashboard_desc'),
      link: "/services/enduraw-dashboard",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      id: 1,
      title: "Testing",
      description: t('services.testing_desc'),
      link: "/services/testing",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      id: 2,
      title: "Athletes Support",
      description: t('services.athleteSupport_desc'),
      link: "/services/athlete-support",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      id: 3,
      title: "Enduraw Performance Center",
      description: t('services.performanceCenter_desc'),
      link: "/endurawperformancecenter",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      id: 4,
      title: "Enduraw API",
      description: t('services.api_desc'),
      link: "/services/enduraw-api",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    }
  ];

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero Section */}
      <section
        ref={(el) => { sectionRefs.current['overview'] = el; }}
        className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12"
      >
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          {t('services.ourServices')}
        </h1>
        <p className="text-paragraph text-gray-300 max-w-lg">
          {t('services.description')}
        </p>
      </section>

      {/* Services Row List */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">
          {t('services.ourServices')}
        </p>
        <div>
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0 group hover:opacity-80 transition-opacity"
            >
              <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-subtitle text-white mb-1">{service.title}</p>
                <p className="text-paragraph text-gray-400">{service.description}</p>
              </div>
              <div className="flex-shrink-0 self-center text-gray-500 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">CONTACT</p>
        <h2 className="text-title text-white mb-5 max-w-sm leading-tight">
          {t('services.workTogether')}
        </h2>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">
          {t('services.getInTouch_p')}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-enduraw">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{t('services.contactUs')}</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
