import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

const PolitiqueConfidentialitePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white min-h-screen pt-16 relative overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <div className="mb-12 text-center">
          <h1 className="text-title text-white mb-8">
            {t('privacy.title')}
          </h1>
          <p className="text-body-uppercase text-white/50 mt-4">
            {t('privacy.lastUpdate')}
          </p>
        </div>

        <div className="space-y-10 text-paragraph">
          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s1_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s1_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-2"><strong>{t('privacy.s1_controller')}</strong></p>
            <p className="text-white/80 leading-relaxed mb-2">{t('privacy.s1_1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('privacy.s1_2')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('privacy.s1_3')}</p>
            <p className="text-white/80 leading-relaxed mb-2">
              {t('privacy.s1_4')} <a href="mailto:communication@enduraw.co" className="text-[#6CDCFF] hover:text-white transition-colors underline">communication@enduraw.co</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-2">{t('privacy.s1_5')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s1_6')}</p>
            <p className="text-white/80 leading-relaxed">{t('privacy.s1_p2')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s2_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-6">{t('privacy.s2_intro')}</p>

            <h3 className="text-subtitle text-[#6CDCFF] mb-3">{t('privacy.s2_account_title')}</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-6">
              <li>{t('privacy.s2_account_li1')}</li>
              <li>{t('privacy.s2_account_li2')}</li>
            </ul>

            <h3 className="text-subtitle text-[#6CDCFF] mb-3">{t('privacy.s2_activity_title')}</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-2">
              <li>{t('privacy.s2_activity_li1')}</li>
              <li>{t('privacy.s2_activity_li2')}</li>
            </ul>
            <p className="text-white/60 leading-relaxed italic mb-6 ml-4">{t('privacy.s2_activity_note')}</p>

            <h3 className="text-subtitle text-[#6CDCFF] mb-3">{t('privacy.s2_extra_title')}</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-6">
              <li>{t('privacy.s2_extra_li1')}</li>
              <li>{t('privacy.s2_extra_li2')}</li>
            </ul>

            <h3 className="text-subtitle text-[#6CDCFF] mb-3">{t('privacy.s2_pacing_title')}</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-6">
              <li>{t('privacy.s2_pacing_li1')}</li>
            </ul>

            <h3 className="text-subtitle text-[#6CDCFF] mb-3">{t('privacy.s2_tech_title')}</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-6">
              <li>{t('privacy.s2_tech_li1')}</li>
              <li>{t('privacy.s2_tech_li2')}</li>
            </ul>

            <h3 className="text-subtitle text-[#6CDCFF] mb-3">{t('privacy.s2_support_title')}</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>{t('privacy.s2_support_li1')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s3_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s3_intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('privacy.s3_li1')}</li>
              <li>{t('privacy.s3_li2')}</li>
              <li>{t('privacy.s3_li3')}</li>
              <li>{t('privacy.s3_li4')}</li>
              <li>{t('privacy.s3_li5')}</li>
              <li>{t('privacy.s3_li6')}</li>
              <li>{t('privacy.s3_li7')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">{t('privacy.s3_p2')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s4_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s4_p1')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('privacy.s4_li1')}</li>
              <li>{t('privacy.s4_li2')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">{t('privacy.s4_p2')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s5_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s5_intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('privacy.s5_li1')}</li>
              <li>{t('privacy.s5_li2')}</li>
              <li>{t('privacy.s5_li3')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">{t('privacy.s5_p2')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s6_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s6_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('privacy.s6_p2')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('privacy.s6_li1')}</li>
              <li>{t('privacy.s6_li2')}</li>
              <li>{t('privacy.s6_li3')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s6_p3')}</p>
            <p className="text-white/80 leading-relaxed">
              {t('privacy.s6_p4')} <a href="mailto:communication@enduraw.co" className="text-[#6CDCFF] hover:text-white transition-colors underline">communication@enduraw.co</a>
            </p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s7_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s7_intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>{t('privacy.s7_li1')}</li>
              <li>{t('privacy.s7_li2')}</li>
              <li>{t('privacy.s7_li3')}</li>
              <li>{t('privacy.s7_li4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s8_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s8_intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>{t('privacy.s8_li1')}</li>
              <li>{t('privacy.s8_li2')}</li>
              <li>{t('privacy.s8_li3')}</li>
              <li>{t('privacy.s8_li4')}</li>
              <li>{t('privacy.s8_li5')}</li>
              <li>{t('privacy.s8_li6')}</li>
              <li>{t('privacy.s8_li7')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s9_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s9_intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('privacy.s9_li1')}</li>
              <li>{t('privacy.s9_li2')}</li>
              <li>{t('privacy.s9_li3')}</li>
              <li>{t('privacy.s9_li4')}</li>
              <li>{t('privacy.s9_li5')}</li>
              <li>{t('privacy.s9_li6')}</li>
              <li>{t('privacy.s9_li7')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s9_p2')}</p>
            <p className="text-white/80 leading-relaxed mb-2">
              <a href="mailto:communication@enduraw.co" className="text-[#6CDCFF] hover:text-white transition-colors underline">communication@enduraw.co</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s9_p3')}</p>
            <p className="text-white/80 leading-relaxed">
              {t('privacy.s9_p4')} (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#6CDCFF] hover:text-white transition-colors underline">www.cnil.fr</a>).
            </p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s10_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s10_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s10_p2')}</p>
            <p className="text-white/80 leading-relaxed">{t('privacy.s10_p3')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s11_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s11_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s11_p2')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s11_p3')}</p>
            <p className="text-white/80 leading-relaxed">{t('privacy.s11_p4')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s12_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s12_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s12_p2')}</p>
            <p className="text-white/80 leading-relaxed">{t('privacy.s12_p3')}</p>
          </section>

          <section>
            <h2 className="text-title-h2 text-[#6CDCFF] mb-4">{t('privacy.s13_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('privacy.s13_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">
              <a href="mailto:communication@enduraw.co" className="text-[#6CDCFF] hover:text-white transition-colors underline">communication@enduraw.co</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Enduraw — 330 Route du Plagnolet, 74400 Chamonix-Mont-Blanc
            </p>
            <p className="text-white/80 leading-relaxed">
              {t('privacy.s13_p3')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialitePage;
