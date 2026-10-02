import React from 'react';
import ContactLine, { ContactEmail } from './ContactLine';

// Closing section for pages without an offer hero (media, services, projects…): short pitch + how to reach us.
// Offer pages carry their contact line in the PageHero instead; the 3 addresses are also in the footer.
interface ContactCTAProps {
  email: ContactEmail;
  title?: string;
  text?: string;
  children?: React.ReactNode;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ email, title, text, children }) => (
  <section className="max-w-5xl mx-auto px-6 sm:px-8 py-16 section-fade">
    {title && <h2 className="text-title-h2 text-white mb-4 max-w-xl">{title}</h2>}
    {text && <p className="text-paragraph text-gray-300 max-w-xl mb-6">{text}</p>}
    <ContactLine email={email} />
    {children && <div className="flex flex-wrap items-center gap-3 mt-6">{children}</div>}
  </section>
);

export default ContactCTA;
