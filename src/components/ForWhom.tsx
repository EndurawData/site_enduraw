import React from 'react';
import { useTranslation } from 'react-i18next';

// "Who is it for?" section: three runner profiles so every level recognizes itself
interface ForWhomProps {
  offer: 'testing' | 'coaching';
}

const LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

const ForWhom: React.FC<ForWhomProps> = ({ offer }) => {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
      <p className="label-enduraw mb-5">{t('allLevels.label')}</p>
      <h2 className="text-title-h2 text-white mb-10">{t('allLevels.title')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-8">
        {LEVELS.map((level, i) => (
          <div key={level} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
            <p className="text-title-h2 text-[#6CDCFF] mb-3">0{i + 1}</p>
            <p className="text-subtitle text-white mb-2">{t(`allLevels.${level}`)}</p>
            <p className="text-paragraph text-gray-400">{t(`allLevels.${offer}_${level}`)}</p>
          </div>
        ))}
      </div>

      <p className="text-paragraph text-gray-300 max-w-2xl">{t('allLevels.note')}</p>
    </section>
  );
};

export default ForWhom;
