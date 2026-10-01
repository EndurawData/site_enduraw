import React from 'react';

// Shared closing "CONTACT" section: label, optional title/text, blue email box, optional secondary actions
export const secondaryBtnClass =
  'inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150';

interface ContactCTAProps {
  email: 'performance@enduraw.co' | 'dashboard@enduraw.co' | 'communication@enduraw.co';
  title?: string;
  text?: string;
  children?: React.ReactNode;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ email, title, text, children }) => (
  <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 section-fade">
    <p className="label-enduraw mb-5">CONTACT</p>
    {title && <h2 className="text-title text-white mb-5 max-w-md leading-tight">{title}</h2>}
    {text && <p className="text-paragraph text-gray-300 max-w-xl mb-10">{text}</p>}
    <div className={`flex flex-wrap items-center gap-3 ${title && !text ? 'mt-8' : ''}`}>
      <a href={`mailto:${email}`} className="btn-enduraw inline-flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>{email}</span>
      </a>
      {children}
    </div>
  </section>
);

export default ContactCTA;
