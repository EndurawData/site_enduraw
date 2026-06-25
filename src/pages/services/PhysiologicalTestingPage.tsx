import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/fancy.css';

const PhysiologicalTestingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-12">
        <div className="mb-6">
          <Link to="/services" className="inline-flex items-center gap-1 text-body-uppercase text-[#6CDCFF] hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('servicePages.backToServices')}
          </Link>
        </div>
        <h1 className="text-title text-white mb-5 max-w-xl leading-tight">PHYSIOLOGICAL TESTING</h1>
        <p className="text-paragraph text-gray-300 max-w-xl mb-10">{t('servicePages.physiologicalTesting.subtitle')}</p>
        <img
          src="/images/IMG_0001%20copie-fi35702592x2000.JPG"
          alt="Physiological testing lab setup"
          className="w-full h-[24rem] object-cover rounded-lg"
          loading="lazy"
        />
      </section>

      {/* Protocols intro */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">PROTOCOLS</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.physiologicalTesting.protocols_title')}</h2>
        <p className="text-paragraph text-gray-400 max-w-md mb-4">{t('servicePages.physiologicalTesting.protocols_p1')}</p>
        <p className="text-paragraph text-gray-400 max-w-md">{t('servicePages.physiologicalTesting.protocols_p2')}</p>
      </section>

      {/* VO2max & Walk-Run protocols */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">TESTING OPTIONS</p>
        <div className="grid gap-px bg-white/[0.06] rounded-lg overflow-hidden md:grid-cols-2">

          {/* VO2max */}
          <div className="bg-[#020617] p-6 md:p-8">
            <h3 className="text-subtitle text-white mb-3">{t('servicePages.physiologicalTesting.vo2max_title')}</h3>
            <p className="text-paragraph text-gray-400 mb-4">{t('servicePages.physiologicalTesting.measure')}</p>
            <div>
              {['FC max', 'VO2max', 'Ventilatory thresholds 1 & 2', 'MAS (Maximum Aerobic speed - VMA)', 'Training zones', 'Muscle oxygen', 'Core Body Temp', 'Lactate testing (optional)'].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1.5 border-b border-white/[0.04] last:border-0">
                  <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                  <p className="text-paragraph text-gray-300 text-xs">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-1 text-paragraph text-gray-400 border-t border-white/[0.06] pt-4">
              <p className="text-xs">{t('servicePages.physiologicalTesting.protocol')}</p>
              <p className="text-xs">{t('servicePages.physiologicalTesting.location')}</p>
              <p className="text-xs text-[#6CDCFF] font-medium">{t('servicePages.physiologicalTesting.price_vo2')}</p>
            </div>
          </div>

          {/* Walk-Run */}
          <div className="bg-[#020617] p-6 md:p-8">
            <h3 className="text-subtitle text-white mb-3">{t('servicePages.physiologicalTesting.walkRun_title')}</h3>
            <p className="text-paragraph text-gray-400 mb-4">{t('servicePages.physiologicalTesting.walkRun_goal')}</p>
            <div>
              <div className="flex items-center gap-2 py-1.5 border-b border-white/[0.04]">
                <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                <p className="text-paragraph text-gray-300 text-xs">{t('servicePages.physiologicalTesting.runningEconomy')}</p>
              </div>
              <div className="flex items-center gap-2 py-1.5 border-b border-white/[0.04]">
                <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                <p className="text-paragraph text-gray-300 text-xs">{t('servicePages.physiologicalTesting.walkingEconomy')}</p>
              </div>
              <div className="flex items-center gap-2 py-1.5 border-b border-white/[0.04]">
                <span className="w-1.5 h-1.5 bg-[#6CDCFF] rounded-full flex-shrink-0" />
                <p className="text-paragraph text-gray-300 text-xs">{t('servicePages.physiologicalTesting.polesEconomy')}</p>
              </div>
            </div>
            <p className="text-paragraph text-gray-400 text-xs mt-3">{t('servicePages.physiologicalTesting.walkRun_p')}</p>
            <div className="mt-5 space-y-1 text-paragraph text-gray-400 border-t border-white/[0.06] pt-4">
              <p className="text-xs">{t('servicePages.physiologicalTesting.walkRun_measure')}</p>
              <p className="text-xs">{t('servicePages.physiologicalTesting.walkRun_protocol')}</p>
              <p className="text-xs">{t('servicePages.physiologicalTesting.walkRun_location')}</p>
              <p className="text-xs text-[#6CDCFF] font-medium">{t('servicePages.physiologicalTesting.price_walkrun')}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Sensors */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">EQUIPMENT</p>
        <h2 className="text-title-h2 text-white mb-4">{t('servicePages.physiologicalTesting.sensors_title')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-10">{t('servicePages.physiologicalTesting.sensors_soon')}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {[
            { href: 'https://vo2master.com/', img: '/images/vo2_master_-_dc_-_main_left_-_full_colour_-_transparent.png__664x0_q85_subsampling-2-fi35703783x310.png', alt: 'VO2master analyzer', name: 'VO2master analyzer', desc: 'VO2, VE, FeO2, EqO2', sub: 'In partnership with Mauna.ai' },
            { href: 'https://mauna.ai/', img: '/images/ai_mauna_logo-fi35703946x130.png', alt: 'Mauna.ai', name: 'Mauna.ai', desc: t('servicePages.physiologicalTesting.mauna_desc') },
            { href: 'https://www.polar.com/en/products/accessories/h10_heart_rate_sensor', img: '/images/polar-logo-fi35703774x170.png', alt: 'Polar H10', name: 'Polar H10', desc: t('servicePages.physiologicalTesting.polar_desc') },
            { href: 'https://trainred.com/', img: '/images/TrainRed-logo-2-fi35703796x130.png', alt: 'Train.Red FYER', name: 'Train.Red FYER', desc: t('servicePages.physiologicalTesting.trainred_desc') },
            { href: 'https://corebodytemp.com/', img: '/images/Core-logo-fi35703773x100.png', alt: 'Core Body Temperature', name: 'Core Body Temperature', desc: t('servicePages.physiologicalTesting.core_desc') },
            { href: 'https://www.stryd.com/', img: '/images/stryd-fi35703791x200.png', alt: 'Stryd Pod', name: 'Stryd pod', desc: t('servicePages.physiologicalTesting.stryd_desc') },
            { href: 'https://www.supersapiens.com/', img: '/images/5e3782b4-f6d8-434b-a5ec-a6459473a619-fi35703631x150.png', alt: 'Supersapiens', name: 'Supersapiens sensor', desc: t('servicePages.physiologicalTesting.supersapiens_desc') },
            { href: 'https://www.nixbiosensors.com/', img: '/images/Nix-logo-fi35703775x110.png', alt: 'Nix patch', name: 'Nix patch', desc: t('servicePages.physiologicalTesting.nix_desc') },
          ].map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="bg-[#020617] p-5 md:p-6 flex flex-col items-center hover:bg-white/[0.015] transition-colors"
            >
              <img src={s.img} alt={s.alt} className="h-10 object-contain mb-3" loading="lazy" />
              <p className="text-subtitle text-white mb-1 text-center">{s.name}</p>
              <p className="text-paragraph text-gray-400 text-xs text-center leading-relaxed">{s.desc}</p>
              {s.sub && <p className="text-body-uppercase text-gray-500 text-center mt-1">{s.sub}</p>}
            </a>
          ))}
        </div>
        <p className="text-paragraph text-gray-400 mt-6">{t('servicePages.physiologicalTesting.sensors_linkedin')}</p>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
        <p className="text-body-uppercase text-gray-500 tracking-widest mb-5">GET STARTED</p>
        <h2 className="text-title text-white mb-4 max-w-sm">{t('servicePages.physiologicalTesting.interested_title')}</h2>
        <p className="text-paragraph text-gray-400 max-w-xl mb-8">{t('servicePages.physiologicalTesting.interested_p')}</p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:performance@enduraw.co" className="btn-enduraw">
            {t('servicePages.physiologicalTesting.contactBtn')}
          </a>
          <Link to="/services" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150">
            {t('servicePages.backToServices')}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PhysiologicalTestingPage;
