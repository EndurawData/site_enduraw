import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';
import PageHero from '../../components/PageHero';
import ContactCTA from '../../components/ContactCTA';

// Web-optimized copies (max 2000px JPEG) of the originals in /images/epc
const img = (filename: string): string =>
  `/images/epc/web/${filename.replace(/\.\w+$/, '.jpg').replace(/ /g, '%20')}`;

const Photo: React.FC<{ src: string; alt: string; height: number; lazy?: boolean; flex?: number }> = ({ src, alt, height, lazy = true, flex }) => (
  <div className="overflow-hidden rounded-xl group" style={flex ? { flex } : undefined}>
    <img
      loading={lazy ? 'lazy' : undefined}
      decoding="async"
      src={src}
      alt={alt}
      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      style={{ height: `${height}px` }}
    />
  </div>
);

const CheckIcon: React.FC = () => (
  <div className="icon-container bg-[#2054A8] flex-shrink-0 mt-0.5">
    <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const spacePhotos = [
  { src: img('Coworking meeting room.png'), alt: 'Salle de réunion de l\'Enduraw Performance Center' },
  { src: img('A7408129.jpg'), alt: 'Espace de travail sous la charpente' },
  { src: img('A7408177.jpg'), alt: 'Bar en bois et pierre' },
  { src: img('A7408092.jpg'), alt: 'Mezzanine et canapés sous les toits' },
  { src: img('Coworking terrace.png'), alt: 'Terrasse avec vue sur le Mont-Blanc' },
  { src: img('podcast.png'), alt: 'Studio podcast' },
];

const CorporateSeminarPage: React.FC = () => {
  const { t } = useTranslation();

  const stats = [1, 2, 3, 4].map((n) => ({
    value: t(`seminar.stat${n}_value`),
    label: t(`seminar.stat${n}_label`),
  }));

  const spaces = spacePhotos.map((photo, i) => ({
    ...photo,
    title: t(`seminar.space${i + 1}_title`),
    description: t(`seminar.space${i + 1}_desc`),
  }));

  const activities = [1, 2, 3, 4].map((n) => ({
    title: t(`seminar.activity${n}_title`),
    description: t(`seminar.activity${n}_desc`),
  }));

  const steps = [1, 2, 3, 4, 5, 6].map((n) => ({
    time: t(`seminar.step${n}_time`),
    title: t(`seminar.step${n}_title`),
    description: t(`seminar.step${n}_desc`),
  }));

  const formats = [1, 2, 3].map((n) => ({
    tag: t(`seminar.format${n}_tag`),
    title: t(`servicePages.performanceCenter.seminarFormat${n}_title`),
    description: t(`servicePages.performanceCenter.seminarFormat${n}_desc`),
  }));

  const services = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.seminarFeature1_title'),
      description: t('servicePages.performanceCenter.seminarFeature1_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.seminarFeature2_title'),
      description: t('servicePages.performanceCenter.seminarFeature2_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.seminarFeature3_title'),
      description: t('servicePages.performanceCenter.seminarFeature3_desc'),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: t('servicePages.performanceCenter.seminarFeature4_title'),
      description: t('servicePages.performanceCenter.seminarFeature4_desc'),
    },
  ];

  const logistics = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => t(`servicePages.performanceCenter.coworkingLogistics_li${n}`));

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <PageHero
        label={t('hero.epcSub_label')}
        title={t('hero.seminar_title')}
        text={t('seminar.text')}
        facts={[t('seminar.fact1'), t('seminar.fact2'), t('seminar.fact3')]}
        primary={{ label: t('seminar.primary'), href: '#contact' }}
        secondary={{ label: t('seminar.secondary'), href: '#formats' }}
      >
        <div className="flex gap-2">
          <Photo src={img('A7408183.jpg')} alt="Grand espace de vie de l'Enduraw Performance Center" height={340} lazy={false} flex={7} />
          <Photo src={img('Coworking terrace.png')} alt="Terrasse avec vue sur le Mont-Blanc" height={340} lazy={false} flex={5} />
        </div>
      </PageHero>

      {/* ── VENUE ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('seminar.venueLabel')}</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-center">
          <div className="md:col-span-2">
            <Photo src={img('A7408195.jpg')} alt="Espace avec écran, cheminée et tapis de course" height={460} />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-title-h2 text-white mb-2 leading-tight">{t('seminar.venueTitle')}</h2>
            <p className="text-body-uppercase text-[#6CDCFF] mb-6">{t('seminar.venueRole')}</p>
            <p className="text-paragraph text-gray-300 mb-8">{t('seminar.venueText')}</p>

            <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#020617] p-5 md:p-6">
                  <p className="text-title text-white leading-none mb-2">{stat.value}</p>
                  <p className="text-paragraph text-gray-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-body-uppercase text-gray-400 mb-3">{t('seminar.spacesLabel')}</p>
            <div className="flex flex-wrap gap-2">
              {spaces.map((space) => (
                <span key={space.title} className="text-body-uppercase text-white/80 border border-[#6CDCFF]/30 rounded px-3 py-1.5">
                  {space.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPACES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('seminar.spacesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('seminar.spacesTitle')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {spaces.map((space) => (
            <div key={space.title} className="bg-[#020617] group hover:bg-white/[0.015] transition-colors">
              <div className="overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={space.src}
                  alt={space.alt}
                  className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-subtitle text-white mb-1.5">{space.title}</p>
                <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{space.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ENDURAW ACTIVITIES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <p className="label-enduraw mb-5">{t('seminar.activitiesLabel')}</p>
            <h2 className="text-title-h2 text-white mb-5">{t('seminar.activitiesTitle')}</h2>
            <p className="text-paragraph text-gray-300 mb-6">{t('seminar.activitiesText')}</p>

            <div className="mb-6">
              {activities.map((activity) => (
                <div key={activity.title} className="flex items-start gap-5 py-4 border-b border-white/[0.06] last:border-0">
                  <CheckIcon />
                  <div className="flex-1">
                    <p className="text-subtitle text-white mb-1">{activity.title}</p>
                    <p className="text-paragraph text-gray-400">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/services/conferences" className="inline-flex items-center gap-2 text-body-uppercase text-[#6CDCFF] hover:text-white transition-colors">
              {t('seminar.activitiesLink')}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <Photo src="/images/workshop/workshop1.jpg" alt="Trail au-dessus d'une mer de nuages" height={230} />
            <Photo src="/images/workshop/workshop2.JPG" alt="Test d'effort avec masque VO2max" height={230} />
          </div>
        </div>
      </section>

      {/* ── SAMPLE DAY ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('seminar.dayLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('seminar.dayTitle')}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-4">
          {steps.map((step) => (
            <div key={step.time} className="bg-[#020617] p-5 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-[#6CDCFF] mb-3">{step.time}</p>
              <p className="text-body-uppercase text-white mb-1.5">{step.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="text-paragraph text-gray-500 text-xs">{t('seminar.dayNote')}</p>
      </section>

      {/* ── FORMATS ── */}
      <section id="formats" className="scroll-mt-20 max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('servicePages.performanceCenter.seminarFormatsLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('servicePages.performanceCenter.seminarFormatsTitle')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-10">
          {formats.map((format) => (
            <div key={format.title} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <span className="inline-block text-body-uppercase text-white/80 border border-[#6CDCFF]/30 rounded px-2.5 py-1 mb-4">
                {format.tag}
              </span>
              <p className="text-subtitle text-white mb-1.5">{format.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{format.description}</p>
            </div>
          ))}
        </div>

        <p className="text-subtitle text-white mb-4">{t('seminar.servicesTitle')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-10">
          {services.map((service) => (
            <div key={service.title} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <div className="mb-3">
                <div className="icon-container bg-[#2054A8]">
                  <div className="text-[#6CDCFF]">{service.icon}</div>
                </div>
              </div>
              <p className="text-subtitle text-white mb-1.5">{service.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Photo src={img('A7408174.jpg')} alt="Bar et espace de vie au rez-de-chaussée" height={300} flex={7} />
          <Photo src={img('A7408150.jpg')} alt="Vue sur le bar depuis la mezzanine" height={300} flex={5} />
        </div>
      </section>

      {/* ── ACCESS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('seminar.accessLabel')}</p>
        <h2 className="text-title-h2 text-white mb-4 max-w-2xl">{t('seminar.accessTitle')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">{t('seminar.accessText')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <Photo src={img('EPC location map.png')} alt="Localisation de l'Enduraw Performance Center" height={380} />
          <div>
            <p className="text-subtitle text-white mb-4">{t('seminar.accessListTitle')}</p>
            {logistics.map((item) => (
              <div key={item} className="flex items-start gap-5 py-2.5 border-b border-white/[0.06] last:border-0">
                <CheckIcon />
                <p className="text-paragraph text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <ContactCTA id="contact" email="performance@enduraw.co" title={t('contactCta.seminar_title')} text={t('contactCta.seminar_p')} />

    </div>
  );
};

export default CorporateSeminarPage;
