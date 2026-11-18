import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';

/** Adresse inconnue : une page claire, avec une sortie évidente, au lieu d'un écran vide. */
const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="text-white min-h-[80vh] pt-16">
      <PageHero
        label="404"
        title={t('notFound.title')}
        text={t('notFound.text')}
        primary={{ label: t('notFound.home'), href: '/' }}
        secondary={{ label: t('nav.dashboard'), href: '/dashboard' }}
      />
    </div>
  );
};

export default NotFoundPage;
