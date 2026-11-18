import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Titre d'onglet propre à chaque page (avant : « Enduraw | Performance Expertise » partout).
// Il aide à se repérer entre plusieurs onglets, dans l'historique et les favoris, et sert au référencement.
const PAGES: Record<string, { fr: string; en: string }> = {
  '/news': { fr: 'Media', en: 'Media' },
  '/dashboard': { fr: 'Dashboard', en: 'Dashboard' },
  '/services': { fr: 'Services', en: 'Services' },
  '/services/testing': { fr: 'Testing en laboratoire', en: 'Lab testing' },
  '/endurawperformancecenter': { fr: 'Enduraw Performance Center', en: 'Enduraw Performance Center' },
  '/epc/trainingcamp': { fr: 'Training Camp', en: 'Training Camp' },
  '/epc/corporateseminar': { fr: "Séminaires d'entreprise", en: 'Corporate seminars' },
  '/epc/coworking': { fr: 'Coworking', en: 'Coworking' },
  '/epc/podcaststudio': { fr: 'Studio podcast', en: 'Podcast studio' },
  '/services/coaching': { fr: 'Coaching', en: 'Coaching' },
  '/services/pacing-plan': { fr: 'Pacing Plan', en: 'Pacing Plan' },
  '/services/enduraw-report': { fr: 'Enduraw Report', en: 'Enduraw Report' },
  '/services/enduraw-dashboard': { fr: 'Enduraw Dashboard', en: 'Enduraw Dashboard' },
  '/services/enduraw-api': { fr: 'Enduraw API', en: 'Enduraw API' },
  '/services/conferences': { fr: 'Conférences', en: 'Conferences' },
  '/contact': { fr: 'Contact', en: 'Contact' },
  '/about': { fr: 'À propos', en: 'About' },
  '/careers': { fr: 'Recrutement', en: 'Careers' },
  '/mentions-legales': { fr: 'Mentions légales', en: 'Legal notice' },
  '/politique-confidentialite': { fr: 'Politique de confidentialité', en: 'Privacy policy' },
  '/cgu': { fr: "Conditions générales d'utilisation", en: 'Terms of use' },
  '/sous-traitants': { fr: 'Sous-traitants', en: 'Subprocessors' },
};

const HOME = {
  fr: { title: 'Enduraw | Laboratoire de performance sportive', desc: "Enduraw : le laboratoire de performance sportive. Dashboard, tests physiologiques, plans de pacing et coaching pour les athlètes d'endurance." },
  en: { title: 'Enduraw | Sports performance lab', desc: 'Enduraw: the sports performance lab. Dashboard, physiological testing, pacing plans and coaching for endurance athletes.' },
};

const setDescription = (content: string) => {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

/** Met à jour le titre de l'onglet (et la description de l'accueil) à chaque changement de page. */
const RouteMeta: React.FC = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang: 'fr' | 'en' = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    if (path === '/') {
      document.title = HOME[lang].title;
      setDescription(HOME[lang].desc);
      return;
    }
    const page = PAGES[path];
    document.title = page
      ? `${page[lang]} | Enduraw`
      : lang === 'fr' ? 'Page introuvable | Enduraw' : 'Page not found | Enduraw';
  }, [pathname, lang]);

  return null;
};

export default RouteMeta;
