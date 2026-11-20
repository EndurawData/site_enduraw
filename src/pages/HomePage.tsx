import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LatestContent from '../components/LatestContent';
import { useSwipe } from '../hooks/useSwipe';
import { FinalCta } from '../components/HomeShowcase';
import { HomeHero, ProofBand, FeatureTabs, TestingSection, FieldSection, EpcSection } from '../components/HomeHero';
import '../styles/fancy.css';

interface HomePageProps {
  activeSection?: string;
}


const HomePage: React.FC<HomePageProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [athletePos, setAthletePos] = useState(0);
  const [athleteAnimate, setAthleteAnimate] = useState(true);

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  const athletes = [
    { name: 'Tom Evans', title: t('home.tom_title'), img: '/images/athletes/tomevans.webp' },
    { name: 'Petter Engdahl', title: t('home.petter_title'), img: '/images/athletes/petterengdahl.webp' },
    { name: 'Duncan Perrillat', title: t('home.duncan_title'), img: '/images/athletes/duncan.webp' },
    { name: 'Casimir Moine', title: t('home.casimir_title'), img: '/images/athletes/casimir.webp' },
    { name: 'Théo Detienne', title: t('home.theo_title'), img: '/images/athletes/theodetienne.webp' },
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
  ];

  // Endless carousel moving one card at a time: the first 3 cards are repeated at the end,
  // and once the clones are reached we jump back to the start without animation.
  const VISIBLE = 3;
  const athleteCount = athletes.length;
  const athleteTrack = [...athletes, ...athletes.slice(0, VISIBLE)];

  const nextAthlete = () => { setAthleteAnimate(true); setAthletePos((p) => p + 1); };
  const prevAthlete = () => {
    if (athletePos > 0) { setAthleteAnimate(true); setAthletePos((p) => p - 1); return; }
    setAthleteAnimate(false);
    setAthletePos(athleteCount);
    requestAnimationFrame(() => requestAnimationFrame(() => { setAthleteAnimate(true); setAthletePos(athleteCount - 1); }));
  };

  // athletePos in deps: autoplay timer restarts after a manual swipe
  useEffect(() => {
    if (athleteCount <= VISIBLE) return;
    const interval = setInterval(nextAthlete, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [athleteCount, athletePos]);

  const athleteSwipe = useSwipe(prevAthlete, nextAthlete);

  return (
    <div className="text-white min-h-screen">

      <HomeHero />

      <FeatureTabs />

      <TestingSection />

      <FieldSection />

      <EpcSection />

      {/* ── WHAT WE DO: the 4 products as one journey ── */}
      <section id="offers" className="scroll-mt-20 max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade">
        <p className="label-enduraw mb-5">
          {t('home.ecosystem_label')}
        </p>
        <h2 className="text-title-h2 text-white mb-10">{t('home.ecosystem_title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {ecosystem.map((item, i) => (
            <Link key={item.link} to={item.link} className="bg-black p-5 md:p-6 hover:bg-white/[0.03] transition-colors duration-150 group flex flex-col">
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
      </section>

      {/* ── PROOF: figures, athletes and partners in one band ── */}
      <section
        ref={(el) => { sectionRefs.current['athletes'] = el; }}
        className="max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade"
      >
        <p className="label-enduraw mb-8">
          {t('homeV2.proof_label')}
        </p>
        <div className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing rounded-lg border border-white/[0.06]" {...athleteSwipe}>
          <div
            className={`flex ${athleteAnimate ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${athletePos * (100 / VISIBLE)}%)` }}
            onTransitionEnd={(e) => {
              if (e.target !== e.currentTarget || athletePos < athleteCount) return;
              setAthleteAnimate(false);
              setAthletePos(athletePos - athleteCount);
            }}
          >
            {athleteTrack.map((a, i) => (
              <div key={i} className="w-1/3 flex-shrink-0 bg-black border-r border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-150">
                <div className="w-full h-44 bg-black flex items-end justify-center overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
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
      </section>


      <ProofBand />

      {/* ── LATEST CONTENT ── */}
      <LatestContent />

      <FinalCta />

    </div>
  );
};

export default HomePage;
