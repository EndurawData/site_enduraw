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
  { src: img('A7408183.jpg'), alt: 'Grand espace partagé en bois et pierre' },
  { src: img('A7408129.jpg'), alt: 'Coin de travail calme' },
  { src: img('Coworking meeting room.png'), alt: 'Salle de réunion' },
  { src: img('A7408177.jpg'), alt: 'Bar et lounge' },
];

const CoworkingPage: React.FC = () => {
  const { t } = useTranslation();

  const stats = [1, 2, 3, 4].map((n) => ({
    value: t(`coworking.stat${n}_value`),
    label: t(`coworking.stat${n}_label`),
  }));

  const equipment = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`coworking.equip${n}`));

  const spaces = spacePhotos.map((photo, i) => ({
    ...photo,
    title: t(`coworking.space${i + 1}_title`),
    description: t(`coworking.space${i + 1}_desc`),
  }));

  const audiences = [1, 2, 3, 4].map((n) => ({
    title: t(`coworking.audience${n}_title`),
    description: t(`coworking.audience${n}_desc`),
  }));

  const extras = [1, 2, 3].map((n) => ({
    title: t(`servicePages.performanceCenter.coworkingExtra${n}_title`),
    description: t(`servicePages.performanceCenter.coworkingExtra${n}_desc`),
  }));

  const plans = [1, 2, 3].map((n) => ({
    tag: t(`coworking.plan${n}_tag`),
    title: t(`coworking.plan${n}_title`),
    description: t(`coworking.plan${n}_desc`),
  }));

  const locationFeatures = [1, 2].map((n) => ({
    title: t(`servicePages.performanceCenter.coworkingLocation${n}_title`),
    description: t(`servicePages.performanceCenter.coworkingLocation${n}_desc`),
  }));

  const logistics = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => t(`servicePages.performanceCenter.coworkingLogistics_li${n}`));

  return (
    <div className="text-white min-h-screen pt-16">

      {/* ── HERO ── */}
      <PageHero
        label={t('hero.epcSub_label')}
        title={t('hero.coworking_title')}
        text={t('coworking.text')}
        facts={[t('hero.coworking_fact1'), t('hero.coworking_fact2'), t('hero.coworking_fact3')]}
        primary={{ label: t('coworking.primary'), href: '#contact' }}
        secondary={{ label: t('hero.coworking_primary'), href: '#spaces' }}
      >
        <div className="flex gap-2">
          <Photo src={img('A7408092.jpg')} alt="Espace de travail sous les toits" height={340} lazy={false} flex={7} />
          <Photo src={img('Coworking terrace.png')} alt="Vue sur le Mont-Blanc depuis l'Enduraw Performance Center" height={340} lazy={false} flex={5} />
        </div>
      </PageHero>

      {/* ── THE PLACE ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('coworking.placeLabel')}</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-center">
          <div className="md:col-span-2">
            <Photo src={img('A7408103.jpg')} alt="Coin de travail au calme, près de la cheminée" height={460} />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-title-h2 text-white mb-2 leading-tight">{t('coworking.placeTitle')}</h2>
            <p className="text-body-uppercase text-[#6CDCFF] mb-6">{t('coworking.placeRole')}</p>
            <p className="text-paragraph text-gray-300 mb-8">{t('coworking.placeText')}</p>

            <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#020617] p-5 md:p-6">
                  <p className="text-title text-white leading-none mb-2">{stat.value}</p>
                  <p className="text-paragraph text-gray-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-body-uppercase text-gray-400 mb-3">{t('coworking.equipmentLabel')}</p>
            <div className="flex flex-wrap gap-2">
              {equipment.map((item) => (
                <span key={item} className="text-body-uppercase text-white/80 border border-[#6CDCFF]/30 rounded px-3 py-1.5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPACES ── */}
      <section id="spaces" className="scroll-mt-20 max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('coworking.spacesLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('coworking.spacesTitle')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {spaces.map((space) => (
            <div key={space.title} className="bg-[#020617] group hover:bg-white/[0.015] transition-colors">
              <div className="overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={space.src}
                  alt={space.alt}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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

      {/* ── FOR WHOM ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('coworking.audienceLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('coworking.audienceTitle')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-6">
          {audiences.map((audience) => (
            <div key={audience.title} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <p className="text-subtitle text-white mb-1.5">{audience.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>

        <Link to="/epc/corporateseminar" className="inline-flex items-center gap-2 text-body-uppercase text-[#6CDCFF] hover:text-white transition-colors">
          {t('coworking.audienceLink')}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </section>

      {/* ── BEYOND WORK ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <p className="label-enduraw mb-5">{t('servicePages.performanceCenter.coworkingExtraLabel')}</p>
            <h2 className="text-title-h2 text-white mb-5">{t('servicePages.performanceCenter.coworkingExtraTitle')}</h2>
            <p className="text-paragraph text-gray-300 mb-6">{t('coworking.extraText')}</p>

            <div>
              {extras.map((extra) => (
                <div key={extra.title} className="flex items-start gap-5 py-4 border-b border-white/[0.06] last:border-0">
                  <CheckIcon />
                  <div className="flex-1">
                    <p className="text-subtitle text-white mb-1">{extra.title}</p>
                    <p className="text-paragraph text-gray-400">{extra.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Photo src="/images/workshop/workshop1.jpg" alt="Trail au-dessus d'une mer de nuages" height={420} flex={1} />
            <Photo src={img('A7408150.jpg')} alt="Vue sur le bar depuis la mezzanine" height={420} flex={1} />
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('coworking.plansLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10">{t('coworking.plansTitle')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-4">
          {plans.map((plan) => (
            <div key={plan.title} className="bg-[#020617] p-5 md:p-6 hover:bg-white/[0.015] transition-colors">
              <span className="inline-block text-body-uppercase text-white/80 border border-[#6CDCFF]/30 rounded px-2.5 py-1 mb-4">
                {plan.tag}
              </span>
              <p className="text-subtitle text-white mb-1.5">{plan.title}</p>
              <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{plan.description}</p>
            </div>
          ))}
        </div>
        <p className="text-paragraph text-gray-500 text-xs mb-10">{t('coworking.plansNote')}</p>

        <Photo src={img('A7408144.jpg')} alt="Mezzanine et coin salon" height={340} />
      </section>

      {/* ── LOCATION ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 section-fade">
        <p className="label-enduraw mb-5">{t('servicePages.performanceCenter.coworkingLocationLabel')}</p>
        <h2 className="text-title-h2 text-white mb-10 max-w-2xl">
          {t('servicePages.performanceCenter.coworkingLocationTitle')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="flex flex-col gap-2">
            <Photo src={img('EPC location map.png')} alt="Localisation de l'Enduraw Performance Center" height={300} />
            {locationFeatures.map((feature) => (
              <div key={feature.title} className="bg-[#020617] border border-white/[0.06] rounded-lg p-5 md:p-6">
                <p className="text-subtitle text-white mb-1.5">{feature.title}</p>
                <p className="text-paragraph text-gray-400 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-subtitle text-white mb-4">{t('servicePages.performanceCenter.coworkingLogisticsTitle')}</p>
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
      <ContactCTA id="contact" email="communication@enduraw.co" title={t('contactCta.coworking_title')} text={t('contactCta.coworking_p')} />

    </div>
  );
};

export default CoworkingPage;
