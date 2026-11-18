import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import { AuthActions, PlansSection, ProductShowcase } from '../components/HomeShowcase';
import { LOGIN_URL, REGISTER_URL, trackLead } from '../config';

/** Même structure que les autres pages d'offre : hero, sections, formules, ContactCTA de clôture. */
const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <PageHero
        label={t('homeShowcase.page_label')}
        title={t('homeShowcase.page_title')}
        text={t('homeShowcase.hero_sub')}
        facts={[t('hero.dashboard_fact1'), t('hero.dashboard_fact2'), t('homeShowcase.page_fact3')]}
        primary={{ label: t('nav.signup'), href: REGISTER_URL, sameTab: true, onClick: trackLead }}
        secondary={{ label: t('nav.login'), href: LOGIN_URL, sameTab: true }}
      />

      <ProductShowcase />
      <PlansSection />

      {/* ── CLOSING ── */}
      <ContactCTA
        email="dashboard@enduraw.co"
        title={t('homeShowcase.cta_title')}
        text={t('homeShowcase.cta_sub')}
      >
        <AuthActions />
      </ContactCTA>

    </div>
  );
};

export default DashboardPage;
