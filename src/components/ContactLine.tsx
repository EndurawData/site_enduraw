import React from 'react';
import { useTranslation } from 'react-i18next';

export type ContactEmail = 'performance@enduraw.co' | 'dashboard@enduraw.co' | 'communication@enduraw.co';

// "Any question? email" — the page-specific way to reach us
const ContactLine: React.FC<{ email: ContactEmail; className?: string }> = ({ email, className = '' }) => {
  const { t } = useTranslation();
  return (
    <p className={`text-paragraph text-gray-400 ${className}`}>
      {t('hero.question')}{' '}
      <a href={`mailto:${email}`} className="text-[#6CDCFF] hover:text-white underline underline-offset-4 decoration-[#6CDCFF]/40 transition-colors">
        {email}
      </a>
    </p>
  );
};

export default ContactLine;
