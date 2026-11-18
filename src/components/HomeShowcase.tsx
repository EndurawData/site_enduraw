import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { secondaryBtnClass } from './buttonStyles';
import { LOGIN_URL, REGISTER_URL, trackLead } from '../config';

/**
 * Capture du dashboard dans une fenêtre de navigateur : les trois points et la barre d'adresse plongent
 * le visiteur dans ce qu'il aura sous les yeux, comme les images d'app dans un téléphone.
 * Angles droits et bordure fine (charte) ; les points restent ronds, seule forme ronde tolérée.
 */
export const ProductFrame: React.FC<{
  src: string;
  alt: string;
  fade?: boolean;
  eager?: boolean;
  /** Proportions fixes de la zone d'image (ex. « 16 / 10 ») : l'image s'y inscrit entière, la fenêtre ne change jamais de taille. */
  ratio?: string;
}> = ({ src, alt, eager, ratio }) => (
  <figure className="m-0 border border-white/[0.12] bg-[#0a0b0c] overflow-hidden">
    <div className="flex items-center gap-3 h-8 sm:h-9 px-3 border-b border-white/[0.08] bg-[#0d0f12]" aria-hidden="true">
      <span className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.16]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.16]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.16]" />
      </span>
      <span className="flex-1 flex justify-center">
        <span className="hidden sm:block w-1/2 max-w-xs px-3 py-0.5 text-center text-[11px] tracking-wide text-white/40 bg-white/[0.05]">
          app.enduraw.co
        </span>
      </span>
      <span className="w-[42px]" />
    </div>
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={ratio ? 'block w-full h-full object-contain object-top' : 'block w-full h-auto'}
      style={ratio ? { aspectRatio: ratio } : undefined}
    />
  </figure>
);

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

/** Boutons « créer un compte » / « se connecter », partagés par toutes les pages. */
export const AuthActions: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t } = useTranslation();
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={REGISTER_URL} className="btn-enduraw" onClick={trackLead}>
        {t('nav.signup')}
        <ArrowIcon />
      </a>
      <a href={LOGIN_URL} className={secondaryBtnClass}>
        {t('nav.login')}
      </a>
    </div>
  );
};

/**
 * Le même fil que « Comment ils s'articulent » sur l'accueil :
 * dashboard (gratuit, point d'entrée) → testing (payant, affine le profil) → pacing (stratégie) → coaching.
 * `step` renvoie à la phrase de l'écosystème correspondante.
 */
export const SHOWCASE_ITEMS = [
  { key: 'matrix', step: 'eco_dashboard' },
  { key: 'form', step: 'eco_dashboard' },
  { key: 'session', step: 'eco_dashboard' },
  { key: 'testing', step: 'eco_testing' },
  { key: 'pacing', step: 'eco_pacing' },
] as const;

/** Une ligne par outil : texte à gauche, capture réelle à droite, en alternance. */
export const ProductShowcase: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade">
      <p className="label-enduraw mb-5">{t('homeShowcase.label')}</p>
      <h2 className="text-title-h2 text-white mb-16 max-w-3xl">{t('homeShowcase.title')}</h2>
      <div className="flex flex-col gap-24">
        {SHOWCASE_ITEMS.map(({ key, step }, i) => (
          <div key={key} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className={`lg:col-span-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <p className="text-body-uppercase text-[#6CDCFF] mb-1">0{i + 1} · {t(`homeShowcase.${key}_tag`)}</p>
              <p className="text-body-uppercase text-gray-500 mb-4">{t(`home.${step}`)}</p>
              <h3 className="text-title-h2 text-white mb-4">{t(`homeShowcase.${key}_title`)}</h3>
              <p className="text-paragraph text-gray-300">{t(`homeShowcase.${key}_desc`)}</p>
            </div>
            <div className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <ProductFrame src={`/images/dashboard/${key}.webp`} alt={t(`homeShowcase.${key}_title`)} />
            </div>
          </div>
        ))}

        {/* Dernier maillon du fil : le coaching s'appuie sur tous les outils ci-dessus. */}
        <Link
          to="/services/coaching"
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border border-white/10 p-6 hover:border-[#6CDCFF]/40 transition-colors"
        >
          <div className="flex-1">
            <p className="text-body-uppercase text-[#6CDCFF] mb-1">06 · {t('homeShowcase.coaching_tag')}</p>
            <p className="text-body-uppercase text-gray-500 mb-3">{t('home.eco_support')}</p>
            <h3 className="text-title-h2 text-white mb-2">{t('homeShowcase.coaching_title')}</h3>
            <p className="text-paragraph text-gray-300">{t('homeShowcase.coaching_desc')}</p>
          </div>
          <span className="text-body-uppercase text-[#6CDCFF] inline-flex items-center gap-2 flex-shrink-0">
            {t('homeV2.discover')}
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </section>
  );
};

const PLANS = [
  { id: 'free', price: '0', n: 4, badge: '' },
  { id: 'starter', price: '8', n: 3, badge: '' },
  { id: 'pro', price: '15', n: 4, badge: 'popular' },
  { id: 'elite', price: '75', n: 5, badge: 'soon' },
] as const;

/** Formules du dashboard, telles qu'affichées dans la boutique de l'application. */
export const PlansSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade">
      <p className="label-enduraw mb-5">{t('homeShowcase.plans_label')}</p>
      <h2 className="text-title-h2 text-white mb-3">{t('homeShowcase.plans_title')}</h2>
      <p className="text-paragraph text-gray-300 mb-10">{t('homeShowcase.plans_sub')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10">
        {PLANS.map((p, idx) => (
          <div
            key={p.id}
            className={`p-6 flex flex-col ${idx > 0 ? 'border-t sm:border-t-0 sm:border-l border-white/10' : ''} ${p.id === 'pro' ? 'bg-white/[0.03]' : ''}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <p className="text-subtitle text-white">{t(`homeShowcase.plan_${p.id}`)}</p>
              {p.badge && (
                <span className="text-[11px] uppercase tracking-[0.08em] border border-white/25 text-white/70 px-1.5 py-0.5">
                  {t(`homeShowcase.badge_${p.badge}`)}
                </span>
              )}
            </div>
            <p className="text-white mb-5">
              <span className="font-title italic font-bold text-3xl">{p.price}</span>
              <span className="text-gray-400 text-sm"> €{p.price === '0' ? '' : t('homeShowcase.per_month')}</span>
            </p>
            <p className="text-xs text-gray-500 mb-3">{t(`homeShowcase.plan_${p.id}_intro`)}</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              {Array.from({ length: p.n }).map((_, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#6CDCFF]" aria-hidden="true">✓</span>
                  <span>{t(`homeShowcase.plan_${p.id}_f${i + 1}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

/** Dernier appel à l'action de l'accueil : vers la page Dashboard, ou nous contacter. */
export const FinalCta: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade text-center">
      <h2 className="text-title text-white mb-4">{t('homeShowcase.cta_title')}</h2>
      <p className="text-paragraph text-gray-300 max-w-xl mx-auto mb-8">{t('homeShowcase.cta_sub')}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/dashboard" className="btn-enduraw">
          {t('homeShowcase.discover_dashboard')}
          <ArrowIcon />
        </Link>
        <Link to="/contact" className={secondaryBtnClass}>
          {t('nav.contact')}
        </Link>
      </div>
    </section>
  );
};

/** Teaser de l'accueil : un aperçu du produit et le chemin vers la page dédiée. */
export const DashboardTeaser: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-4">
          <p className="label-enduraw mb-5">{t('homeShowcase.hero_label')}</p>
          <h2 className="text-title-h2 text-white mb-4">{t('homeShowcase.teaser_title')}</h2>
          <p className="text-paragraph text-gray-300 mb-8">{t('homeShowcase.teaser_sub')}</p>
          <Link to="/dashboard" className="btn-enduraw">
            {t('homeShowcase.teaser_cta')}
            <ArrowIcon />
          </Link>
        </div>
        <div className="lg:col-span-8">
          <ProductFrame src="/images/dashboard/matrix.webp" alt={t('homeShowcase.matrix_title')} />
        </div>
      </div>
    </section>
  );
};
