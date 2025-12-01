import React, { useEffect, useRef, useState } from 'react';
import SponsorsSlider from '../components/SponsorsSlider';
import '../styles/fancy.css';

interface HomePageProps {
  activeSection?: string;
}

const HomePage: React.FC<HomePageProps> = ({ activeSection }) => {
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
            A sport performance laboratory
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/services"
              className="btn-enduraw"
            >
              <span>Discover Our Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="glass-card border-white/20 hover:border-white/40 text-gray-200 hover:text-white text-body-uppercase font-semibold py-4 px-8 rounded-2xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              <span>Get Started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
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
              <h3 className="text-2xl text-subtitle mb-6 text-gradient-blue-light">Science-based</h3>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                All our technologies and models are based on scientific literature i.e. experimented and field-validated.
              </p>
              <p className="text-paragraph text-gray-300">
                With strong literature reviews and financed field studies (up to 13k).
              </p>
            </div>
            <div className="glass-card p-8 text-center animate-float-slow">
              <div className="icon-container bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl text-subtitle mb-6 text-gradient-blue-light">Elite exigence</h3>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                Race briefing of elite athletes (Ruth Croft, Tom Evans, Petter Engdhal...).
              </p>
              <p className="text-paragraph text-gray-300">
                From world best athletes to your hands!
                Minutious work must benefit to everyone.
              </p>
            </div>
            <div className="glass-card p-8 text-center animate-float-fast">
              <div className="icon-container bg-gradient-to-br from-cyan-500 to-blue-500 mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl text-subtitle mb-6 text-gradient-blue-light">Communication</h3>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                An expertise shared to sponsors and mass audience: make data readable and accessible.
              </p>
              <p className="text-paragraph text-gray-300">
                Technical studies and race statistics over many worldwide events.
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
          <h2 className="text-5xl text-title-h2 text-center mb-16 bg-clip-text text-transparent bg-custom-gradient tracking-wide">
            ELITE ATHLETES
          </h2>
          <div className="relative overflow-hidden glass-card p-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(athletes.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {athletes.slice(slideIndex * 3, (slideIndex + 1) * 3).map((athlete, index) => (
                      <div key={index} className="text-center group">
                        <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                          <h3 className="text-2xl text-subtitle mb-6 text-gradient-blue-light">{athlete.name}</h3>
                          <div className="mb-6 relative">
                            <img
                              src={athlete.image}
                              alt={athlete.name}
                              className="w-48 h-56 rounded-2xl object-cover object-top mx-auto shadow-2xl group-hover:shadow-[#6CDCFF]/20 transition-all duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/images/placeholder-athlete.jpg";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                          </div>
                          <p className="text-lg text-paragraph text-gray-200 leading-relaxed">
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
          <h2 className="text-5xl text-title-h2 text-center mb-16 bg-clip-text text-transparent bg-custom-gradient tracking-wide">ABOUT US</h2>
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
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">Founder of Enduraw and Performance Scientist</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                From his bedroom in Chamonix, Joseph spent night to build the perfect pacing plans by analyzing race profile and environmental conditions.
              </p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                As an athlete, he dedicated his Master Thesis to optimization of performance in endurance sport.
              </p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">
                Team Manager at Nutripure, he works with multiple elite athletes with a deep conviction: mathematics are they keys to reach the latest percents of performance.
              </p>
              <a
                href="https://www.linkedin.com/in/joseph-mestrallet-770279a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw"
              >
                LinkedIn Profile →
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
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">Media and Performance Data Scientist</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                Deeply interested in training sciences, trickling down problematics as physiology, nutrition and psychology, Anthony is quite inquisive.
              </p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">
                With a Ph.D in physics, he plays with the data to guide athletes to their goals and light up many insights on running through many angles!
              </p>
              <a
                href="https://www.linkedin.com/in/anthony-saliou-085286158/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw"
              >
                LinkedIn Profile →
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
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">Community Manager</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                After stuyding sports management in Grenoble, Justine joined the team in work-study contract with the Win Sport School.
              </p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">
                Justine thrives in content creation. Her curiosity leads her to share on very different subjects, races statistics or athletes palmares on Instagram.
              </p>
              <a
                href="https://www.linkedin.com/in/justine-alves-gomes-71831a233/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw"
              >
                LinkedIn Profile →
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
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">Intern Performance Data Scientist</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                Studying Data Sciences, Valentin is deeply involved in his training in Parisian woods, looking for elevation gain!
              </p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">
                Focusing on environmental factors, he deals with their influence on the performance for mass runners and help them how to deal with them.
              </p>
              <a
                href="https://www.linkedin.com/in/valentin-templ%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw"
              >
                LinkedIn Profile →
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
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">Physiological Testing Specialist</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                Currently completing a STAPS work-study program, he brings his expertise in physiological testing, training methodologies, and endurance performance.
              </p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                With a strong background as an experienced runner, he combines field knowledge with a deep passion for scientific research.
              </p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">
                His analytical mindset and coaching experience allow him to translate complex data into clear, actionable insights for athletes.
              </p>
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
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">Tech & Data Intern</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                With a background as a nutrition engineer, she brings strong expertise in sports nutrition and energy optimization during effort.
              </p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                At Enduraw, she contributes to the design and modeling of performance-driven algorithms, combining scientific rigor with technical skills.
              </p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">
                Her analytical approach and passion for data allow her to transform complex physiological insights into smart, actionable tools for athletes.
              </p>
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
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">Tech & Data Intern</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                Belgian and passionate about performance analysis, he brings valuable experience from his time at Tudor Cycling.
              </p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                Specialized in data modeling, he transforms cycling, trail, and running performance into precise, actionable equations.
              </p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">
                At Enduraw, he contributes to building advanced tools that translate real-world effort into meaningful metrics, helping athletes understand and optimize their progression.
              </p>
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
                <p className="text-lg text-body-uppercase text-gray-300 mb-6">Sports Photographer</p>
              </div>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                Dedicated to creating professional and impactful visuals, he captures the essence of Enduraw, its athletes, and its events through high-quality photography.
              </p>
              <p className="text-paragraph text-gray-200 mb-4 leading-relaxed">
                Whether on competitions, training sessions, or brand productions, he brings a sharp eye for detail and storytelling.
              </p>
              <p className="text-paragraph text-gray-200 mb-8 leading-relaxed">
                His work enhances our communication by showcasing the energy, authenticity, and performance at the heart of endurance sports.
              </p>
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
          <h2 className="text-5xl text-title-h2 mb-8 bg-clip-text text-transparent bg-custom-gradient tracking-wide animate-float">READY TO OPTIMIZE ?</h2>
          <p className="text-xl text-paragraph text-gray-200 mb-16 max-w-2xl mx-auto leading-relaxed">
            Take your performance to the next level with data-driven insights and personalized strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="/contact"
              className="btn-enduraw"
            >
              <span>Get Started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/services"
              className="glass-card border-white/20 hover:border-white/40 text-gray-200 hover:text-white text-body-uppercase font-semibold py-5 px-10 rounded-2xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              <span>Explore Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
