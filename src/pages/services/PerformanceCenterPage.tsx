import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';
import PageHero from '../../components/PageHero';
import ContactCTA from '../../components/ContactCTA';

// Web-optimized copies (max 2000px JPEG) of the originals in /images/epc
const img = (filename: string): string =>
  `/images/epc/web/${filename.replace(/\.\w+$/, '.jpg').replace(/ /g, '%20')}`;

const PerformanceCenterPage: React.FC = () => {
  const { t } = useTranslation();

  // Each card previews its page with one of that page's photos (position: crop focus for portrait shots)
  const activities: { link: string; photo: string; alt: string; position?: string; title: string; description: string }[] = [
    {
      link: '/epc/trainingcamp',
      photo: 'A7408201.jpg',
      alt: 'Espace training et tests physiologiques',
      title: t('servicePages.performanceCenter.activity_stage_title'),
      description: t('servicePages.performanceCenter.activity_stage_desc'),
    },
    {
      link: '/epc/corporateseminar',
      photo: 'Coworking meeting room.png',
      alt: "Présentation devant un groupe à l'Enduraw Performance Center",
      position: 'center 60%',
      title: t('servicePages.performanceCenter.activity_seminar_title'),
      description: t('servicePages.performanceCenter.activity_seminar_desc'),
    },
    {
      link: '/epc/coworking',
      photo: 'Coworking terrace.png',
      alt: 'Terrasse face au Mont-Blanc',
      position: 'center 55%',
      title: t('servicePages.performanceCenter.activity_coworking_title'),
      description: t('servicePages.performanceCenter.activity_coworking_desc'),
    },
    {
      link: '/epc/podcaststudio',
      photo: 'podcast.png',
      alt: "Studio podcast de l'Enduraw Performance Center",
      title: t('podcastStudio.activity_title'),
      description: t('podcastStudio.activity_desc'),
    },
  ];

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <PageHero
        label={t('hero.epc_label')}
        title={t('hero.epc_title')}
        text={t('hero.epc_text')}
        primary={{ label: t('hero.epc_primary'), href: '#activities' }}
      />

      {/* ── ACTIVITIES ── */}
      <section id="activities" className="scroll-mt-20 max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('servicePages.performanceCenter.activitiesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10 max-w-2xl">
          {t('servicePages.performanceCenter.activitiesTitle')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {activities.map((activity) => (
            <Link
              key={activity.link}
              to={activity.link}
              className="bg-[#020617] hover:bg-white/[0.03] transition-colors duration-150 group flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={img(activity.photo)}
                  alt={activity.alt}
                  style={activity.position ? { objectPosition: activity.position } : undefined}
                  className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <p className="text-subtitle text-white mb-1.5">{activity.title}</p>
                <p className="text-paragraph text-gray-400 text-xs leading-relaxed mb-4 flex-1">{activity.description}</p>
                <span className="text-body-uppercase text-[#6CDCFF] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t('homeV2.discover')}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade pb-24">
        <div className="flex gap-2 mb-2">
          <div className="overflow-hidden rounded-xl group" style={{ flex: 7 }}>
            <img
              src={img('A7408097.jpg')}
              alt="Espace détente et coworking sous les toits"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '360px' }}
            />
          </div>
          <div className="overflow-hidden rounded-xl group" style={{ flex: 5 }}>
            <img
              loading="lazy"
              decoding="async"
              src={img('A7408183.jpg')}
              alt="Espace de vie et de récupération"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '360px' }}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              loading="lazy"
              decoding="async"
              src={img('A7408129.jpg')}
              alt="Mezzanine et coin salon"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              loading="lazy"
              decoding="async"
              src={img('A7408174.jpg')}
              alt="Bar de l'Enduraw Performance Center"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl group">
            <img
              loading="lazy"
              decoding="async"
              src={img('A7408195.jpg')}
              alt="Espace training et tests physiologiques"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ height: '220px' }}
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <ContactCTA email="performance@enduraw.co" title={t('contactCta.performanceCenter_title')} text={t('contactCta.performanceCenter_p')} />

    </div>
  );
};

export default PerformanceCenterPage;
