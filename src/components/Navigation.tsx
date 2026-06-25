import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'ja', label: 'JA', name: '日本語' },
];

interface NavigationProps {
  onScrollToSection?: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection: _onScrollToSection }) => {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuTimer = useRef<number | null>(null);
  const [showServicesSections, setShowServicesSections] = useState(false);
  const servicesHideTimer = useRef<number | null>(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesSections = [
    { id: 'enduraw-dashboard', name: 'Enduraw Dashboard', path: '/services/enduraw-dashboard' },
    { id: 'pacing-plan', name: 'Pacing Plan', path: '/services/pacing-plan' },
    { id: 'testing', name: 'Testing', path: '/services/testing' },
    { id: 'athlete-support', name: 'Athletes Support', path: '/services/athlete-support' },
    { id: 'enduraw-api', name: 'Enduraw API', path: '/services/enduraw-api' },
    { id: 'performance-center', name: 'Performance Center', path: '/endurawperformancecenter' }
  ];

  const navLinkClass = (path: string) => {
    const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
    return `inline-flex items-center gap-1 px-3 py-1.5 text-sm transition-all duration-150 text-body-uppercase ${
      isActive
        ? 'border-b-2 border-white/60 text-white font-medium'
        : 'border-b-2 border-transparent text-white/45 hover:text-white/75 hover:border-white/20'
    }`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b ${
      scrolled
        ? 'bg-white/[0.06] border-white/[0.09] shadow-sm'
        : 'bg-white/[0.03] border-white/[0.06]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-28">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/LOGO_ENDURAW_WHITE.png"
              alt="Enduraw"
              className="h-9 w-auto"
            />
          </Link>

          <div className="flex items-center gap-1">
            <Link to="/" className={navLinkClass('/')}>
              {t('nav.home')}
            </Link>

            <Link to="/news" className={navLinkClass('/news')}>
              {t('nav.news')}
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesHideTimer.current) window.clearTimeout(servicesHideTimer.current);
                setShowServicesSections(true);
              }}
              onMouseLeave={() => {
                if (servicesHideTimer.current) window.clearTimeout(servicesHideTimer.current);
                servicesHideTimer.current = window.setTimeout(() => setShowServicesSections(false), 150);
              }}
            >
              <Link to="/services" className={navLinkClass('/services')}>
                {t('nav.services')}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${showServicesSections ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <div className={`absolute left-0 top-full mt-1.5 w-52 bg-[#0c1222]/95 border border-white/[0.08] rounded-xl shadow-lg transition-all duration-200 origin-top ${
                showServicesSections ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
              }`}>
                <div className="p-1">
                  {servicesSections.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      onClick={() => setShowServicesSections(false)}
                      className="block px-4 py-2.5 text-sm text-white/60 hover:text-white/90 hover:bg-white/[0.08] transition-colors duration-150 rounded-lg text-body-uppercase"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className={navLinkClass('/contact')}>
              {t('nav.contact')}
            </Link>

            <Link to="/careers" className={navLinkClass('/careers')}>
              {t('nav.careers')}
            </Link>

            {/* Language Switcher */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (langMenuTimer.current) window.clearTimeout(langMenuTimer.current);
                setShowLangMenu(true);
              }}
              onMouseLeave={() => {
                langMenuTimer.current = window.setTimeout(() => setShowLangMenu(false), 150);
              }}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/45 hover:text-white/75 transition-colors duration-150"
                aria-label="Select language"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>{LANGUAGES.find(l => i18n.language.startsWith(l.code))?.label ?? 'EN'}</span>
                <svg className={`w-3 h-3 transition-transform duration-200 ${showLangMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute right-0 top-full mt-1.5 w-36 bg-[#0c1222]/95 border border-white/[0.08] rounded-xl shadow-lg transition-all duration-200 origin-top ${
                showLangMenu ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
              }`}>
                <div className="p-1">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { i18n.changeLanguage(lang.code); setShowLangMenu(false); }}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors duration-150 flex items-center gap-2 ${
                        i18n.language.startsWith(lang.code)
                          ? 'text-white bg-white/[0.10]'
                          : 'text-white/60 hover:text-white/90 hover:bg-white/[0.08]'
                      }`}
                    >
                      <span className="font-mono text-xs w-5">{lang.label}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* DataPlayers Logo */}
            <a
              href="https://www.dataplayers.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <img src="/images/dataplayers.png" alt="DataPlayers" className="h-7 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
