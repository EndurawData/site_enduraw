import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';
import ContactCTA from '../../components/ContactCTA';

// Web-optimized copies (max 2000px JPEG) of the originals in /images/epc
const img = (filename: string): string =>
  `/images/epc/web/${filename.replace(/\.\w+$/, '.jpg').replace(/ /g, '%20')}`;

const PodcastStudioPage: React.FC = () => {
  const { t } = useTranslation();

  const equipment = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
      title: t('podcastStudio.equip1_title'),
      description: t('podcastStudio.equip1_desc'),
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
      title: t('podcastStudio.equip2_title'),
      description: t('podcastStudio.equip2_desc'),
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
      title: t('podcastStudio.equip3_title'),
      description: t('podcastStudio.equip3_desc'),
    },
  ];

  const uses = [1, 2, 3].map((n) => ({
    title: t(`podcastStudio.use${n}_title`),
    description: t(`podcastStudio.use${n}_desc`),
  }));

  const features = [1, 2, 3].map((n) => ({
    title: t(`podcastStudio.feature${n}_title`),
    description: t(`podcastStudio.feature${n}_desc`),
  }));

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <p className="label-enduraw mb-5">{t('podcastStudio.label')}</p>
        <h1 className="text-title-h2 text-white mb-4 max-w-2xl">
          {t('podcastStudio.title')}
        </h1>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">
          {t('podcastStudio.p')}
        </p>

        <div className="overflow-hidden rounded-xl group">
          <img
            src={img('podcast.png')}
            alt="Studio podcast de l'Enduraw Performance Center"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ height: '420px' }}
          />
        </div>
      </section>

      {/* ── THE STUDIO / EQUIPMENT ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('podcastStudio.studioLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('podcastStudio.studioTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="overflow-hidden rounded-xl group">
            <img
              loading="lazy"
              decoding="async"
              src={img('podcast2.jpeg')}
              alt="Plateau du studio podcast : micros, caméras et éclairage"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '480px' }}
            />
          </div>

          <div>
            {equipment.map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-5 border-b border-white/[0.06] last:border-0">
                <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-subtitle text-white mb-1">{item.title}</p>
                  <p className="text-paragraph text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('podcastStudio.usesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('podcastStudio.usesTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {uses.map((use, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-white mb-1.5">{use.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{use.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE VENUE ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('podcastStudio.placeLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">
          {t('podcastStudio.placeTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-white mb-1.5">{feature.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <ContactCTA
        email="communication@enduraw.co"
        title={t('podcastStudio.contactTitle')}
        text={t('podcastStudio.contactText')}
      />

    </div>
  );
};

export default PodcastStudioPage;
