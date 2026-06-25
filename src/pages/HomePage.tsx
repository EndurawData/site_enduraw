import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SponsorsSlider from '../components/SponsorsSlider';
import '../styles/fancy.css';

interface HomePageProps {
  activeSection?: string;
}

const HomePage: React.FC<HomePageProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [currentAthleteSlide, setCurrentAthleteSlide] = useState(0);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  const products = [
    {
      num: '01',
      name: 'Enduraw Dashboard',
      desc: t('services.dashboard_desc'),
      link: '/services/enduraw-dashboard',
      tag: t('home.product_tag_analysis'),
    },
    {
      num: '02',
      name: 'Testing',
      desc: t('services.testing_desc'),
      link: '/services/testing',
      tag: t('home.product_tag_physiology'),
    },
    {
      num: '03',
      name: 'Pacing Plan',
      desc: t('services.pacingPlan_desc'),
      link: '/services/pacing-plan',
      tag: t('home.product_tag_strategy'),
    },
    {
      num: '04',
      name: 'Athletes Support',
      desc: t('services.athleteSupport_desc'),
      link: '/services/athlete-support',
      tag: t('home.product_tag_coaching'),
    },
  ];

  const athletes = [
    { name: 'Tom Evans', title: t('home.tom_title'), img: '/images/athletes/tomevans.png' },
    { name: 'Ruth Croft', title: t('home.ruth_title'), img: '/images/athletes/ruthcroft.png' },
    { name: 'Nicolas Navarro', title: t('home.nicolas_title'), img: '/images/athletes/niconavarro.png' },
    { name: 'Meline Rollin', title: t('home.meline_title'), img: '/images/athletes/meline.png' },
    { name: 'Petter Engdahl', title: t('home.petter_title'), img: '/images/athletes/petterengdahl.png' },
    { name: 'Duncan Perrillat', title: t('home.duncan_title'), img: '/images/athletes/duncan.png' },
  ];

  const team = [
    {
      name: 'Joseph Mestrallet',
      img: '/images/team/joseph.png',
      role: t('home.joseph_role'),
      bio: t('home.joseph_p1'),
      linkedin: 'https://www.linkedin.com/in/joseph-mestrallet-770279a7/',
    },
    {
      name: 'Anthony Saliou',
      img: '/images/team/anthony.png',
      role: t('home.anthony_role'),
      bio: t('home.anthony_p1'),
      linkedin: 'https://www.linkedin.com/in/anthony-saliou-085286158/',
    },
    {
      name: 'Justine',
      img: '/images/team/justine.png',
      role: t('home.justine_role'),
      bio: t('home.justine_p1'),
      linkedin: null,
    },
    {
      name: 'Valentin Templé',
      img: '/images/team/valentin.png',
      role: t('home.valentin_role'),
      bio: t('home.valentin_p1'),
      linkedin: null,
    },
    {
      name: 'Charline',
      img: '/images/charline-removebg-preview.png',
      role: t('home.charline_role'),
      bio: t('home.charline_p1'),
      linkedin: null,
    },
    {
      name: 'Antoine',
      img: '/images/antoine-removebg-preview.png',
      role: t('home.antoine_role'),
      bio: t('home.antoine_p1'),
      linkedin: null,
    },
    {
      name: 'Thibaut',
      img: '/images/thibaut-removebg-preview.png',
      role: t('home.thibaut_role'),
      bio: t('home.thibaut_p1'),
      linkedin: null,
    },
    {
      name: 'Alex',
      img: '/images/alex-removebg-preview.png',
      role: t('home.alex_role'),
      bio: t('home.alex_p1'),
      linkedin: null,
    },
  ];

  const ecosystem = [
    {
      step: 'Testing',
      desc: t('home.eco_testing'),
      icon: (
        <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: 'Dashboard',
      desc: t('home.eco_dashboard'),
      icon: (
        <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      step: 'Pacing Plan',
      desc: t('home.eco_pacing'),
      icon: (
        <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      step: 'Athletes Support',
      desc: t('home.eco_support'),
      icon: (
        <svg className="w-4 h-4 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAthleteSlide((prev) => (prev + 1) % Math.ceil(athletes.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, [athletes.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(team.length / 4));
    }, 4500);
    return () => clearInterval(interval);
  }, [team.length]);

  return (
    <div className="text-white min-h-screen">

      {/* ── HERO ── */}
      <section
        ref={(el) => { sectionRefs.current['hero'] = el; }}
        className="min-h-screen flex flex-col items-center justify-center pt-16 px-6 text-center relative"
      >
        <img
          src="/images/LOGO_ENDURAW_WHITE.png"
          alt="Enduraw"
          className="h-16 mx-auto mb-14 opacity-95"
        />
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">
          {t('home.tagline')}
        </h1>
        <p className="text-paragraph text-gray-300 max-w-sm mb-10 leading-relaxed">
          {t('home.hero_sub')}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/services" className="btn-enduraw">
            {t('home.discoverServices')}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
          >
            {t('home.getStarted')}
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/20 mx-auto" />
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section
        ref={(el) => { sectionRefs.current['about'] = el; }}
        className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]"
      >
        <div className="mb-12">
          <p className="text-body-uppercase text-[#6CDCFF] tracking-widest mb-3">
            {t('home.products_label')}
          </p>
          <p className="text-paragraph text-gray-300 max-w-md leading-relaxed">
            {t('home.products_intro')}
          </p>
        </div>

        <div>
          {products.map((p) => (
            <Link
              key={p.num}
              to={p.link}
              className="flex items-center gap-5 sm:gap-8 py-5 border-b border-white/[0.06] hover:border-white/[0.18] group transition-all duration-150"
            >
              <span className="text-xs text-gray-500 font-mono w-5 flex-shrink-0">{p.num}</span>
              <div className="flex-1 min-w-0">
                <p className="text-subtitle text-white mb-0.5">{p.name}</p>
                <p className="text-paragraph text-gray-300 text-xs truncate">{p.desc}</p>
              </div>
              <span className="hidden md:inline-flex text-xs text-gray-500 border border-white/[0.08] rounded px-2 py-0.5 group-hover:border-white/[0.18] group-hover:text-gray-300 transition-all duration-150 flex-shrink-0">
                {p.tag}
              </span>
              <svg className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ECOSYSTEM ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-16 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-300 tracking-widest mb-10">
          {t('home.ecosystem_label')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {ecosystem.map((item, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 relative hover:bg-white/[0.015] transition-colors duration-150">
              <div className="mb-3">{item.icon}</div>
              <p className="text-subtitle text-white mb-1.5">{item.step}</p>
              <p className="text-paragraph text-gray-300 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ATHLETES ── */}
      <section
        ref={(el) => { sectionRefs.current['athletes'] = el; }}
        className="max-w-5xl mx-auto px-6 sm:px-8 py-16 border-t border-white/[0.06]"
      >
        <p className="text-body-uppercase text-gray-300 tracking-widest mb-10">
          {t('home.eliteAthletes')}
        </p>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentAthleteSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(athletes.length / 3) }).map((_, slideIndex) => (
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
          {Array.from({ length: Math.ceil(athletes.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAthleteSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentAthleteSlide ? 'bg-[#6CDCFF]' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section
        ref={(el) => { sectionRefs.current['aboutus'] = el; }}
        className="max-w-5xl mx-auto px-6 sm:px-8 py-16 border-t border-white/[0.06]"
      >
        <p className="text-body-uppercase text-gray-300 tracking-widest mb-10">
          {t('home.aboutUs')}
        </p>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(team.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
                  {team.slice(slideIndex * 4, (slideIndex + 1) * 4).map((member) => (
                    <div key={member.name} className="bg-[#020617] hover:bg-white/[0.015] transition-colors">
                      <div className="w-full h-44 bg-[#020617] flex items-end justify-center overflow-hidden">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="h-full w-auto object-contain opacity-90"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-subtitle text-white mb-0.5">{member.name}</p>
                        <p className="text-body-uppercase text-gray-400 mb-3">{member.role}</p>
                        <p className="text-paragraph text-gray-300 text-xs leading-relaxed mb-3">{member.bio}</p>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-body-uppercase text-[#6CDCFF] hover:text-white transition-colors"
                          >
                            LinkedIn
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(team.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTeamSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentTeamSlide ? 'bg-[#6CDCFF]' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <div className="border-t border-white/[0.06]">
        <SponsorsSlider />
      </div>

    </div>
  );
};

export default HomePage;
