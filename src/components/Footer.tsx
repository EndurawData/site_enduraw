import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Temporary type shim for React 19 compatibility with react-icons
const InstagramIcon = FaInstagram as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const TwitterIcon = FaTwitter as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const LinkedinIcon = FaLinkedin as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[#2054A8]/20 pt-14 pb-10 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Contact — one address per topic, visible on every page */}
        <div className="mb-12">
          <p className="label-enduraw mb-6">{t('footer.contact_title')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { email: 'performance@enduraw.co', topic: t('footer.contact_performance') },
              { email: 'dashboard@enduraw.co', topic: t('footer.contact_dashboard') },
              { email: 'communication@enduraw.co', topic: t('footer.contact_communication') },
            ].map((item) => (
              <div key={item.email}>
                <p className="text-body-uppercase text-gray-400 mb-1.5">{item.topic}</p>
                <a href={`mailto:${item.email}`} className="text-paragraph text-[#6CDCFF] hover:text-white transition-colors">
                  {item.email}
                </a>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-block mt-6 text-body-uppercase text-gray-400 hover:text-white transition-colors">
            {t('footer.contact_page')} →
          </Link>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-300 mb-10 text-body-uppercase tracking-wide">
          185 clos du tour noir &mdash; 74400 Chamonix &mdash; France
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-7 mb-10">
          <a
            href="https://www.instagram.com/enduraw.data/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-300 hover:text-[#6CDCFF] transition-colors duration-200"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/EndurawData"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-300 hover:text-[#6CDCFF] transition-colors duration-200"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a
            href="https://fr.linkedin.com/company/enduraw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-[#6CDCFF] transition-colors duration-200"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center flex-wrap gap-6 text-xs mb-8">
          <a href="/mentions-legales" className="text-gray-300 hover:text-gray-300 transition-colors duration-200 text-body-uppercase">
            {t('footer.mentions')}
          </a>
          <span className="text-gray-700">|</span>
          <a href="/politique-confidentialite" className="text-gray-300 hover:text-gray-300 transition-colors duration-200 text-body-uppercase">
            {t('footer.privacy')}
          </a>
          <span className="text-gray-700">|</span>
          <a href="/cgu" className="text-gray-300 hover:text-gray-300 transition-colors duration-200 text-body-uppercase">
            {t('footer.cgu')}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-body-uppercase">
          &copy; Enduraw 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
