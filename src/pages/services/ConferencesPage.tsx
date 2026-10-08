import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';
import PageHero from '../../components/PageHero';
import ContactCTA from '../../components/ContactCTA';

// Web-optimized copies (max 2000px JPEG) of the originals in /images/conferences
const img = (filename: string): string =>
  `/images/conferences/web/${filename.replace(/\.\w+$/, '.jpg').replace(/ /g, '%20')}`;

const Photo: React.FC<{ src: string; alt: string; height: number; lazy?: boolean; flex?: number }> = ({ src, alt, height, lazy = true, flex }) => (
  <div className="overflow-hidden rounded-xl group" style={flex ? { flex } : undefined}>
    <img
      loading={lazy ? 'lazy' : undefined}
      decoding="async"
      src={img(src)}
      alt={alt}
      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      style={{ height: `${height}px` }}
    />
  </div>
);

const ConferencesPage: React.FC = () => {
  const { t } = useTranslation();

  const themes = [1, 2, 3, 4, 5, 6].map((n) => ({
    title: t(`conferences.theme${n}_title`),
    description: t(`conferences.theme${n}_desc`),
  }));

  const pillars = [1, 2, 3].map((n) => ({
    title: t(`conferences.pillar${n}_title`),
    description: t(`conferences.pillar${n}_desc`),
  }));

  const formats = [1, 2, 3, 4].map((n) => ({
    title: t(`conferences.format${n}_title`),
    description: t(`conferences.format${n}_desc`),
  }));

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <PageHero
        label={t('conferences.label')}
        title={t('conferences.title')}
        text={t('conferences.text')}
        facts={[t('conferences.fact1'), t('conferences.fact2'), t('conferences.fact3')]}
        primary={{ label: t('conferences.primary'), href: 'mailto:communication@enduraw.co?subject=Conf%C3%A9rence' }}
        secondary={{ label: t('conferences.secondary'), href: '#themes' }}
      >
        <div className="flex gap-2">
          <Photo src="candriam_chamonix.jpg" alt="Conférence Enduraw devant un auditorium" height={340} lazy={false} flex={7} />
          <Photo src="joseph_eds.jpeg" alt="Expert Enduraw au micro lors d'une conférence" height={340} lazy={false} flex={5} />
        </div>
      </PageHero>

      {/* ── THEMES ── */}
      <section id="themes" className="scroll-mt-20 max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('conferences.themesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('conferences.themesTitle')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-10">
          {themes.map((theme, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-white mb-1.5">{theme.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>

        <Photo src="charline_epc.jpg" alt="Intervention sur la physiologie de l'effort d'endurance" height={360} />
      </section>

      {/* ── EXPERTS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <p className="label-enduraw mb-5">{t('conferences.expertsLabel')}</p>
            <h2 className="text-title-h2 text-white mb-5">{t('conferences.expertsTitle')}</h2>
            <p className="text-paragraph text-gray-300 mb-8">{t('conferences.expertsText')}</p>

            <div>
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-5 py-4 border-b border-white/[0.06] last:border-0">
                  <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-subtitle text-white mb-1">{pillar.title}</p>
                    <p className="text-paragraph text-gray-400">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Photo src="joseph_dp.jpg" alt="Conférence « Secrets de compétition »" height={420} flex={1} />
            <Photo src="valentin_dp.jpg" alt="Présentation de données de course sur grand écran" height={420} flex={1} />
          </div>
        </div>
      </section>

      {/* ── FORMATS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('conferences.formatsLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('conferences.formatsTitle')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-10">
          {formats.map((format, i) => (
            <div key={i} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-white mb-1.5">{format.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{format.description}</p>
            </div>
          ))}
        </div>

        <Photo src="anthony_dataplayers.jpg" alt="Expert Enduraw sur scène lors d'une conférence data" height={360} />
      </section>

      {/* ── CONTACT ── */}
      <ContactCTA email="communication@enduraw.co" title={t('conferences.cta_title')} text={t('conferences.cta_p')} />

    </div>
  );
};

export default ConferencesPage;
