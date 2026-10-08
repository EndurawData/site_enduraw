import React from 'react';
import { Link } from 'react-router-dom';
import { secondaryBtnClass } from './buttonStyles';
import ContactLine, { ContactEmail } from './ContactLine';

// Shared top-of-page block for offer pages: what it is, for whom, key facts, and what to do next — at a glance
export interface HeroAction {
  label: string;
  href: string; // "/path" → router link, "#id" → in-page anchor, otherwise external/mailto
  onClick?: () => void; // e.g. analytics tracking
}

interface PageHeroProps {
  label: string;
  title: string;
  text: string;
  facts?: string[];
  primary?: HeroAction;
  secondary?: HeroAction;
  contactEmail?: ContactEmail; // shown as "Any question? email" under the actions — omit when the page ends with a ContactCTA
  children?: React.ReactNode; // e.g. a hero image below the actions
}

const ActionLink: React.FC<{ action: HeroAction; className: string; children: React.ReactNode }> = ({ action, className, children }) => {
  if (action.href.startsWith('/')) {
    return <Link to={action.href} onClick={action.onClick} className={className}>{children}</Link>;
  }
  if (action.href.startsWith('#')) {
    const scroll = (e: React.MouseEvent) => {
      e.preventDefault();
      action.onClick?.();
      document.getElementById(action.href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return <a href={action.href} onClick={scroll} className={className}>{children}</a>;
  }
  const external = action.href.startsWith('http');
  return (
    <a href={action.href} onClick={action.onClick} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  );
};

const PageHero: React.FC<PageHeroProps> = ({ label, title, text, facts, primary, secondary, contactEmail, children }) => (
  <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-16">
    <p className="label-enduraw mb-6">{label}</p>
    <h1 className="text-title text-white mb-5 max-w-2xl leading-tight">{title}</h1>
    <p className="text-paragraph text-gray-300 max-w-xl mb-8">{text}</p>

    {facts && facts.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-8">
        {facts.map((fact) => (
          <span key={fact} className="text-body-uppercase text-white/80 border border-[#6CDCFF]/30 rounded px-3 py-1.5">
            {fact}
          </span>
        ))}
      </div>
    )}

    {(primary || secondary) && (
      <div className="flex flex-wrap items-center gap-3">
        {primary && (
          <ActionLink action={primary} className="btn-enduraw">
            {primary.label}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </ActionLink>
        )}
        {secondary && (
          <ActionLink action={secondary} className={secondaryBtnClass}>
            {secondary.label}
          </ActionLink>
        )}
      </div>
    )}

    {contactEmail && <ContactLine email={contactEmail} className="mt-6" />}

    {children && <div className="mt-12">{children}</div>}
  </section>
);

export default PageHero;
