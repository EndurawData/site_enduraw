import React, { useEffect, useRef, useState } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const athletes = [
    {
      name: "Tom Evans",
      image: "/images/athletes/tomevans.png",
      description: "UTMB and Western States winner"
    },
    {
      name: "Ruth Croft",
      image: "/images/athletes/ruthcroft.png",
      description: "OCC, CCC and UTMB winner"
    },
    {
      name: "Nicolas Navarro",
      image: "/images/athletes/niconavarro.png",
      description: "16th olympic marathon PR: 2h06'45\""
    },
    {
      name: "Meline Rollin",
      image: "/images/athletes/meline.png",
      description: "French record holder marathon 2h24'12\""
    },
    {
      name: "Petter Engdhal",
      image: "/images/athletes/petterengdahl.png",
      description: "CCC Winner"
    },
    {
      name: "Duncan Perrillat",
      image: "/images/athletes/duncan.png",
      description: "French Marathoner"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(athletes.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, [athletes.length]);

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeSection]);

  return (
    <div className="fancy-bg text-white relative">
      {/* Animated background orbs */}
      <div className="bg-orb-1"></div>
      <div className="bg-orb-2"></div>
      <div className="bg-orb-3"></div>

      {/* Hero Section */}
      <section
        ref={(el) => { sectionRefs.current['hero'] = el; }}
        className="min-h-screen flex items-center justify-center pt-16 relative z-10"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 animate-float">
            <img
              src="/images/LOGO_ENDURAW_WHITE.png"
              alt="Enduraw Logo"
              className="h-40 mx-auto mb-8 opacity-95 drop-shadow-2xl"
            />
          </div>
          <p className="text-2xl md:text-3xl text-paragraph text-gray-200 mb-12 tracking-wide">
            {t('home.tagline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/services"
              className="btn-enduraw"
            >
              <span>{t('home.discoverServices')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="glass-card border-white/20 hover:border-white/40 text-gray-200 hover:text-white text-body-uppercase font-semibold py-4 px-8 rounded-2xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              <span>{t('home.getStarted')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => { sectionRefs.current['about'] = el; }}
        className="py-32 fancy-bg relative"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center animate-float">
              <div className="icon-container bg-gradient-blue-light mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl text-subtitle mb-6 text-gradient-blue-light">{t('home.scienceBased')}</h3>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                {t('home.scienceBased_p1')}
              </p>
              <p className="text-paragraph text-gray-300">
                {t('home.scienceBased_p2')}
              </p>
            </div>
            <div className="glass-card p-8 text-center animate-float-slow">
              <div className="icon-container bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl text-subtitle mb-6 text-gradient-blue-light">{t('home.eliteExigence')}</h3>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                {t('home.eliteExigence_p1')}
              </p>
              <p className="text-paragraph text-gray-300">
                {t('home.eliteExigence_p2')}
              </p>
            </div>
            <div className="glass-card p-8 text-center animate-float-fast">
              <div className="icon-container bg-gradient-to-br from-cyan-500 to-blue-500 mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl text-subtitle mb-6 text-gradient-blue-light">{t('home.communication')}</h3>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                {t('home.communication_p1')}
              </p>
              <p className="text-paragraph text-gray-300">
                {t('home.communication_p2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Athletes Section */}
      <section
        ref={(el) => { sectionRefs.current['athletes'] = el; }}
        className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="bg-orb-1"></div>
          <div className="bg-orb-2"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-custom-gradient tracking-wide uppercase">
            {t('home.eliteAthletes')}
          </h2>

          {/* Slider container */}
          <div className="relative overflow-hidden glass-card p-8">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(athletes.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {athletes
                      .slice(slideIndex * 3, (slideIndex + 1) * 3)
                      .map((athlete, index) => (
                        <div key={index} className="text-center group flex">
                          <div className="glass-card p-6 hover:scale-105 transition-all duration-300 h-full flex flex-col w-full">
                            <h3 className="text-2xl text-subtitle mb-6 text-gradient-blue-light">
                              {athlete.name}
                            </h3>

                            <div className="mb-6 relative">
                              <img
                                src={athlete.image}
                                alt={athlete.name}
                                className="w-48 h-56 rounded-2xl object-cover object-top mx-auto shadow-2xl group-hover:shadow-[#6CDCFF]/20 transition-all duration-300"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    "/images/placeholder-athlete.jpg";
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                            </div>

                            <p className="mt-auto text-lg text-gray-200 leading-relaxed">
                              {athlete.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: Math.ceil(athletes.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-blue-light scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={(el) => { sectionRefs.current['aboutus'] = el; }}
        className="py-32 fancy-bg relative"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-title-h2 text-center mb-16 bg-clip-text text-transparent bg-custom-gradient tracking-wide">{t('home.aboutUs')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Joseph Mestrallet */}
            <div className="glass-card p-8 animate-float group">
              <div className="text-center mb-8">
                <img
                  src="/images/team/joseph.png"
                  alt="Joseph Mestrallet"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl group-hover:shadow-[#6CDCFF]/20 transition-all duration-300 ring-4 ring-white/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-person.jpg";
                  }}
                />
                <h3 className="text-2xl text-subtitle mb-3 text-gradient-blue-light">Joseph Mestrallet</h3>
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">{t('home.joseph_role')}</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.joseph_p1')}</p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.joseph_p2')}</p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">{t('home.joseph_p3')}</p>
              <a
                href="https://www.linkedin.com/in/joseph-mestrallet-770279a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw"
              >
                {t('home.linkedinProfile')}
              </a>
            </div>

            {/* Anthony Saliou */}
            <div className="glass-card p-8 animate-float-slow group">
              <div className="text-center mb-8">
                <img
                  src="/images/team/anthony.png"
                  alt="Anthony Saliou"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300 ring-4 ring-white/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-person.jpg";
                  }}
                />
                <h3 className="text-2xl text-subtitle mb-3 text-gradient-blue-light">Anthony Saliou</h3>
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">{t('home.anthony_role')}</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.anthony_p1')}</p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">{t('home.anthony_p2')}</p>
              <a
                href="https://www.linkedin.com/in/anthony-saliou-085286158/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw"
              >
                {t('home.linkedinProfile')}
              </a>
            </div>

            {/* Justine Alves Gomes */}
            <div className="glass-card p-8 animate-float-fast group">
              <div className="text-center mb-8">
                <img
                  src="/images/team/justine.png"
                  alt="Justine Alves Gomes"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300 ring-4 ring-white/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-person.jpg";
                  }}
                />
                <h3 className="text-2xl text-subtitle mb-3 text-gradient-blue-light">Justine Alves Gomes</h3>
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">{t('home.justine_role')}</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.justine_p1')}</p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">{t('home.justine_p2')}</p>
              <a
                href="https://www.linkedin.com/in/justine-alves-gomes-71831a233/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw"
              >
                {t('home.linkedinProfile')}
              </a>
            </div>

            {/* Valentin Templé */}
            <div className="glass-card p-8 animate-float group">
              <div className="text-center mb-8">
                <img
                  src="/images/team/valentin.png"
                  alt="Valentin Templé"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-300 ring-4 ring-white/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-person.jpg";
                  }}
                />
                <h3 className="text-2xl text-subtitle mb-3 text-gradient-blue-light">Valentin Templé</h3>
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">{t('home.valentin_role')}</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.valentin_p1')}</p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">{t('home.valentin_p2')}</p>
              <a
                href="https://www.linkedin.com/in/valentin-templ%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw"
              >
                {t('home.linkedinProfile')}
              </a>
            </div>

            {/* Thibaut Hue */}
            <div className="glass-card p-8 animate-float-slow group">
              <div className="text-center mb-8">
                <img
                  src="/images/thibaut-removebg-preview.png"
                  alt="Thibaut Hue"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl group-hover:shadow-[#6CDCFF]/20 transition-all duration-300 ring-4 ring-white/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-person.jpg";
                  }}
                />
                <h3 className="text-2xl text-subtitle mb-3 text-gradient-blue-light">Thibaut Hue</h3>
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">{t('home.thibaut_role')}</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.thibaut_p1')}</p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.thibaut_p2')}</p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">{t('home.thibaut_p3')}</p>
            </div>

            {/* Charline Batel */}
            <div className="glass-card p-8 animate-float-fast group">
              <div className="text-center mb-8">
                <img
                  src="/images/charline-removebg-preview.png"
                  alt="Charline Batel"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300 ring-4 ring-white/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-person.jpg";
                  }}
                />
                <h3 className="text-2xl text-subtitle mb-3 text-gradient-blue-light">Charline Batel</h3>
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">{t('home.charline_role')}</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.charline_p1')}</p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.charline_p2')}</p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">{t('home.charline_p3')}</p>
            </div>

            {/* Antoine Figula */}
            <div className="glass-card p-8 animate-float group">
              <div className="text-center mb-8">
                <img
                  src="/images/antoine-removebg-preview.png"
                  alt="Antoine Figula"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300 ring-4 ring-white/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-person.jpg";
                  }}
                />
                <h3 className="text-2xl text-subtitle mb-3 text-gradient-blue-light">Antoine Figula</h3>
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">{t('home.antoine_role')}</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.antoine_p1')}</p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.antoine_p2')}</p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">{t('home.antoine_p3')}</p>
            </div>

            {/* Alex Pichon */}
            <div className="glass-card p-8 animate-float-slow group">
              <div className="text-center mb-8">
                <img
                  src="/images/alex-removebg-preview.png"
                  alt="Alex Pichon"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-300 ring-4 ring-white/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-person.jpg";
                  }}
                />
                <h3 className="text-2xl text-subtitle mb-3 text-gradient-blue-light">Alex Pichon</h3>
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">{t('home.alex_role')}</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.alex_p1')}</p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">{t('home.alex_p2')}</p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">{t('home.alex_p3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Slider */}
      <SponsorsSlider />

      {/* Contact Section */}
      <section
        ref={(el) => { sectionRefs.current['contact'] = el; }}
        className="py-32 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="bg-orb-1"></div>
          <div className="bg-orb-2"></div>
          <div className="bg-orb-3"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl text-title-h2 mb-8 bg-clip-text text-transparent bg-custom-gradient tracking-wide animate-float">{t('home.readyToOptimize')}</h2>
          <p className="text-xl text-paragraph text-gray-200 mb-16 max-w-2xl mx-auto leading-relaxed">
            {t('home.readyToOptimize_p')}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/contact"
              className="btn-enduraw"
            >
              <span>{t('home.getStarted')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="glass-card border-white/20 hover:border-white/40 text-gray-200 hover:text-white text-body-uppercase font-semibold py-5 px-10 rounded-2xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              <span>{t('home.exploreServices')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
