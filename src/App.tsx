import React, { useState, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import RouteMeta from './components/RouteMeta';
import RevealOnScroll from './components/RevealOnScroll';
import HomePage from './pages/HomePage';

// Les autres pages ne sont téléchargées qu'au moment de leur visite : le premier affichage est plus rapide.
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const TestingPage = lazy(() => import('./pages/services/TestingPage'));
const EndurawPerformanceCenterPage = lazy(() => import('./pages/services/PerformanceCenterPage'));
const AthleteSupportPage = lazy(() => import('./pages/services/AthleteSupportPage'));
const PacingPlanPage = lazy(() => import('./pages/services/PacingPlanPage'));
const EndurawReportPage = lazy(() => import('./pages/services/EndurawReportPage'));
const EndurawDashboardPage = lazy(() => import('./pages/services/EndurawDashboardPage'));
const EndurawAPIPage = lazy(() => import('./pages/services/EndurawAPIPage'));
const ConferencesPage = lazy(() => import('./pages/services/ConferencesPage'));
const TrainingCampPage = lazy(() => import('./pages/epc/TrainingCampPage'));
const CorporateSeminarPage = lazy(() => import('./pages/epc/CorporateSeminarPage'));
const CoworkingPage = lazy(() => import('./pages/epc/CoworkingPage'));
const PodcastStudioPage = lazy(() => import('./pages/epc/PodcastStudioPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage'));
const PolitiqueConfidentialitePage = lazy(() => import('./pages/PolitiqueConfidentialitePage'));
const CGUPage = lazy(() => import('./pages/CGUPage'));
const SousTraitantsPage = lazy(() => import('./pages/SousTraitantsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    
    // Reset after scrolling is complete
    setTimeout(() => setActiveSection(''), 1000);
  }, []);

  return (
    <Router>
      <div className="App min-h-screen">
        <div className="site-background" aria-hidden="true" />
        <div className="site-content">
          <ScrollToTop />
          <RouteMeta />
          <RevealOnScroll />
          <a href="#main" className="skip-link">{t('a11y.skip')}</a>
          <Navigation onScrollToSection={handleScrollToSection} />
          <main id="main" tabIndex={-1}>
          <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <Routes>
            <Route 
              path="/" 
              element={<HomePage activeSection={activeSection} />} 
            />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/platform" element={<Navigate to="/dashboard" replace />} />
            <Route 
              path="/services" 
              element={<ServicesPage activeSection={activeSection} />} 
            />
            <Route path="/services/testing" element={<TestingPage />} />
            <Route path="/endurawperformancecenter" element={<EndurawPerformanceCenterPage />} />
            <Route path="/epc/trainingcamp" element={<TrainingCampPage />} />
            <Route path="/epc/corporateseminar" element={<CorporateSeminarPage />} />
            <Route path="/epc/coworking" element={<CoworkingPage />} />
            <Route path="/epc/podcaststudio" element={<PodcastStudioPage />} />
            <Route path="/services/coaching" element={<AthleteSupportPage />} />
            <Route path="/services/athlete-support" element={<Navigate to="/services/coaching" replace />} />
            <Route path="/services/pacing-plan" element={<PacingPlanPage />} />
            <Route path="/services/enduraw-report" element={<EndurawReportPage />} />
            <Route path="/services/enduraw-dashboard" element={<EndurawDashboardPage />} />
            <Route path="/services/enduraw-api" element={<EndurawAPIPage />} />
            <Route path="/services/conferences" element={<ConferencesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
            <Route path="/cgu" element={<CGUPage />} />
            <Route path="/sous-traitants" element={<SousTraitantsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
