import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LOGIN_URL, REGISTER_URL, trackLead } from '../config';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroLogoVisible, setHeroLogoVisible] = useState(false);

  // Home page shows a large logo in its hero: hide the nav logo while that one is on screen
  // Layout effect: runs before paint, so the nav logo never flashes on first load
  useLayoutEffect(() => {
    const heroLogo = document.getElementById('hero-logo');
    if (!heroLogo) {
      setHeroLogoVisible(false);
      return;
    }
    // Set the initial state right away so the nav logo doesn't flash before the observer fires
    const rect = heroLogo.getBoundingClientRect();
    setHeroLogoVisible(rect.bottom > 64 && rect.top < window.innerHeight);
    const observer = new IntersectionObserver(
      ([entry]) => setHeroLogoVisible(entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px' } // ignore the part hidden behind the 64px nav bar
    );
    observer.observe(heroLogo);
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Menu mobile ouvert : la page dessous ne défile plus.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesSections = [
    { id: 'enduraw-dashboard', name: 'Enduraw Dashboard', path: '/services/enduraw-dashboard' },
    { id: 'pacing-plan', name: 'Pacing Plan', path: '/services/pacing-plan' },
    { id: 'testing', name: 'Testing', path: '/services/testing' },
    { id: 'coaching', name: 'Coaching', path: '/services/coaching' },
    { id: 'performance-center', name: 'Performance Center', path: '/endurawperformancecenter' },
    { id: 'enduraw-api', name: 'Enduraw API', path: '/services/enduraw-api' },
    { id: 'conferences', name: 'Conferences', path: '/services/conferences' }
  ];

  // Libellé de la charte (.ep-label du dashboard) : pas de soulignement, le
  // blanc plein marque la section active.
  const labelBase = 'inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.15em] transition-colors duration-150';
  const navLinkClass = (path: string) => {
    const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
    return `${labelBase} ${isActive ? 'text-white' : 'text-white/[0.62] hover:text-white'}`;
  };
  const dropdownItemClass =
    'block border-l-2 border-transparent px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] text-white/[0.62] transition-colors duration-150 hover:border-white/25 hover:text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur-[14px] bg-black/80 border-b ${
      scrolled ? 'border-white/10' : 'border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className={`flex-shrink-0 transition-opacity duration-300 ${
              heroLogoVisible && !mobileOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-hidden={heroLogoVisible && !mobileOpen}
            tabIndex={heroLogoVisible && !mobileOpen ? -1 : undefined}
          >
            <img
              src="/images/LOGO_ENDURAW_WHITE.png"
              alt="Enduraw"
              className="h-9 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
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

              <div className={`absolute left-0 top-full mt-1.5 w-52 bg-black/95 border border-white/15 backdrop-blur-[14px] transition-all duration-200 origin-top ${
                showServicesSections ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
              }`}>
                <div className="py-1.5">
                  {servicesSections.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      onClick={() => setShowServicesSections(false)}
                      className={dropdownItemClass}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/dashboard" className={navLinkClass('/dashboard')}>
              {t('nav.dashboard')}
            </Link>

            <Link to="/about" className={navLinkClass('/about')}>
              {t('nav.about')}
            </Link>

            <Link to="/contact" className={navLinkClass('/contact')}>
              {t('nav.contact')}
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
                className="flex items-center gap-1.5 px-2.5 py-2 text-[12px] font-medium uppercase tracking-[0.15em] text-white/[0.62] hover:text-white transition-colors duration-150"
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

              <div className={`absolute right-0 top-full mt-1.5 w-36 bg-black/95 border border-white/15 backdrop-blur-[14px] transition-all duration-200 origin-top ${
                showLangMenu ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
              }`}>
                <div className="py-1.5">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { i18n.changeLanguage(lang.code); setShowLangMenu(false); }}
                      className={`w-full text-left border-l-2 px-4 py-2 text-sm transition-colors duration-150 flex items-center gap-2 ${
                        i18n.language.startsWith(lang.code)
                          ? 'border-[#6CDCFF] text-[#6CDCFF]'
                          : 'border-transparent text-white/[0.62] hover:border-white/25 hover:text-white'
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
              className="hidden 2xl:flex items-center px-3 py-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <img src="/images/dataplayers.png" alt="DataPlayers" className="h-7 w-auto" />
            </a>

            {/* Entrée dans l'application : même parcours que sur Nolio, connexion + création de compte */}
            <div className="flex items-center gap-2 pl-3 ml-1 border-l border-white/10">
              <a href={LOGIN_URL} className={labelBase}>{t('nav.login')}</a>
              <a href={REGISTER_URL} className="btn-enduraw" onClick={trackLead}>{t('nav.signup')}</a>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div
            className="px-4 py-4 flex flex-col gap-1"
            onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setMobileOpen(false); }}
          >
            <Link to="/" className={navLinkClass('/')}>{t('nav.home')}</Link>
            <Link to="/news" className={navLinkClass('/news')}>{t('nav.news')}</Link>
            <Link to="/services" className={navLinkClass('/services')}>{t('nav.services')}</Link>
            <div className="flex flex-col pl-4 mb-1">
              {servicesSections.map((service) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className="px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.15em] text-white/[0.62] hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link to="/dashboard" className={navLinkClass('/dashboard')}>{t('nav.dashboard')}</Link>
            <Link to="/about" className={navLinkClass('/about')}>{t('nav.about')}</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>{t('nav.contact')}</Link>

            <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-white/10">
              <a href={REGISTER_URL} className="btn-enduraw" onClick={trackLead}>{t('nav.signup')}</a>
              <a href={LOGIN_URL} className={labelBase}>{t('nav.login')}</a>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/10">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`px-3 py-1.5 text-xs border-b-2 transition-colors ${
                    i18n.language.startsWith(lang.code)
                      ? 'border-[#6CDCFF] text-[#6CDCFF]'
                      : 'border-transparent text-white/50 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
              <a
                href="https://www.dataplayers.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto opacity-70 hover:opacity-100 transition-opacity"
              >
                <img src="/images/dataplayers.png" alt="DataPlayers" className="h-7 w-auto" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
