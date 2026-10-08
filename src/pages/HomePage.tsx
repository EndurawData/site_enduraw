import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SponsorsSlider from '../components/SponsorsSlider';
import LatestContent from '../components/LatestContent';
import { useSwipe } from '../hooks/useSwipe';
import { secondaryBtnClass } from '../components/buttonStyles';
import '../styles/fancy.css';

interface HomePageProps {
  activeSection?: string;
}

const DASHBOARD_URL = 'https://enduraw-report-strava.onrender.com/dashboard';

const trackLead = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
};

const HomePage: React.FC<HomePageProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [currentAthleteSlide, setCurrentAthleteSlide] = useState(0);

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  const athletes = [
    { name: 'Tom Evans', title: t('home.tom_title'), img: '/images/athletes/tomevans.png' },
    { name: 'Ruth Croft', title: t('home.ruth_title'), img: '/images/athletes/ruthcroft.png' },
    { name: 'Nicolas Navarro', title: t('home.nicolas_title'), img: '/images/athletes/niconavarro.png' },
    { name: 'Meline Rollin', title: t('home.meline_title'), img: '/images/athletes/meline.png' },
    { name: 'Petter Engdahl', title: t('home.petter_title'), img: '/images/athletes/petterengdahl.png' },
    { name: 'Duncan Perrillat', title: t('home.duncan_title'), img: '/images/athletes/duncan.png' },
  ];

  const ecosystem = [
    {
      step: 'Dashboard',
      verb: t('homeV2.verb_dashboard'),
      link: '/services/enduraw-dashboard',
      desc: t('home.eco_dashboard'),
      icon: (
        <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      step: 'Coaching',
      verb: t('homeV2.verb_coaching'),
      link: '/services/coaching',
      desc: t('home.eco_support'),
      icon: (
        <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      step: 'Testing',
      verb: t('homeV2.verb_testing'),
      link: '/services/testing',
      desc: t('home.eco_testing'),
      icon: (
        <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: 'Pacing Plan',
      verb: t('homeV2.verb_pp'),
      link: '/services/pacing-plan',
      desc: t('home.eco_pacing'),
      icon: (
        <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
  ];

  // Same figures as the Dashboard page
  const figures = [
    { value: '12 010', label: t('servicePages.endurawDashboard.users_p') },
    { value: '1,2 M', label: t('servicePages.endurawDashboard.activities_p') },
    { value: '10,9 M km', label: t('homeV2.proof_distance') },
  ];

  const scrollToOffers = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const athleteSlides = Math.ceil(athletes.length / 3);

  // currentXSlide in deps: autoplay timer restarts after a manual swipe/click
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAthleteSlide((prev) => (prev + 1) % athleteSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [athleteSlides, currentAthleteSlide]);

  const athleteSwipe = useSwipe(
    () => setCurrentAthleteSlide((prev) => (prev - 1 + athleteSlides) % athleteSlides),
    () => setCurrentAthleteSlide((prev) => (prev + 1) % athleteSlides),
  );

  return (
    <div className="text-white min-h-screen">

      {/* ── HERO: who we are + main entry point (free Dashboard) ── */}
      <section
        ref={(el) => { sectionRefs.current['hero'] = el; }}
        className="min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center relative"
      >
        <img
          id="hero-logo"
          src="/images/LOGO_ENDURAW_WHITE.png"
          alt="Enduraw"
          className="h-20 md:h-24 mx-auto mb-10 opacity-95"
        />
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          {t('home.tagline')}
        </h1>
        <p className="text-paragraph text-gray-300 max-w-md mb-10 leading-relaxed">
          {t('allLevels.homeSub')}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw"
            onClick={trackLead}
          >
            {t('homeV2.cta_dashboard')}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#offers" onClick={scrollToOffers} className={secondaryBtnClass}>
            {t('homeV2.cta_offers')}
          </a>
        </div>
      </section>

      {/* ── WHAT WE DO: the 4 products as one journey ── */}
      <section id="offers" className="scroll-mt-20 max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade">
        <p className="label-enduraw mb-5">
          {t('home.ecosystem_label')}
        </p>
        <h2 className="text-title-h2 text-white mb-10">{t('home.ecosystem_title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-6">
          {ecosystem.map((item, i) => (
            <Link key={item.link} to={item.link} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.03] transition-colors duration-150 group flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <span className="text-body-uppercase text-gray-500">0{i + 1} · {item.verb}</span>
              </div>
              <p className="text-subtitle text-white mb-1.5">{item.step}</p>
              <p className="text-paragraph text-gray-300 text-xs leading-relaxed mb-4 flex-1">{item.desc}</p>
              <span className="text-body-uppercase text-[#6CDCFF] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                {t('homeV2.discover')}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <Link to="/endurawperformancecenter" className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-lg border border-white/[0.06] p-5 hover:border-[#6CDCFF]/40 transition-colors group">
          <p className="text-paragraph text-gray-300 flex-1">{t('homeV2.epc_line')}</p>
          <span className="text-body-uppercase text-[#6CDCFF] inline-flex items-center gap-2 flex-shrink-0">
            {t('homeV2.epc_cta')}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
      </section>

      {/* ── PROOF: figures, athletes and partners in one band ── */}
      <section
        ref={(el) => { sectionRefs.current['athletes'] = el; }}
        className="max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade"
      >
        <p className="label-enduraw mb-8">
          {t('homeV2.proof_label')}
        </p>
        <div className="grid grid-cols-3 gap-4 mb-10">
          {figures.map((f) => (
            <div key={f.value}>
              <p className="text-title-h2 text-white leading-none mb-2">{f.value}</p>
              <p className="text-body-uppercase text-gray-500">{f.label}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing" {...athleteSwipe}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentAthleteSlide * 100}%)` }}
          >
            {Array.from({ length: athleteSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
                  {athletes.slice(slideIndex * 3, (slideIndex + 1) * 3).map((a, i) => (
                    <div key={i} className="bg-[#020617] hover:bg-white/[0.02] transition-colors duration-150">
                      <div className="w-full h-44 bg-[#020617] flex items-end justify-center overflow-hidden">
                        <img
                          src={a.img}
                          alt={a.name}
                          className="h-full w-auto object-contain opacity-90"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-subtitle text-white mb-0.5">{a.name}</p>
                        <p className="text-paragraph text-gray-300 text-xs leading-relaxed">{a.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: athleteSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAthleteSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentAthleteSlide ? 'bg-[#6CDCFF]' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
        <div className="mt-12">
          <SponsorsSlider bare />
        </div>
      </section>

      {/* ── LATEST CONTENT ── */}
      <LatestContent />

    </div>
  );
};

export default HomePage;
