import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

const CGUPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 text-center">
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">
            {t('cgu.title')}
          </h1>
          <p className="text-white/60 text-sm mt-4 text-body-uppercase">
            {t('cgu.lastUpdate')}
          </p>
        </div>

        <div className="space-y-10 text-paragraph">
          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s1_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s1_p1')}</p>
            <p className="text-white/80 leading-relaxed">{t('cgu.s1_p2')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s2_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-2">{t('cgu.s2_1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('cgu.s2_2')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('cgu.s2_3')}</p>
            <p className="text-white/80 leading-relaxed mb-2">
              {t('cgu.s2_4')} <a href="mailto:communication@enduraw.co" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">communication@enduraw.co</a>
            </p>
            <p className="text-white/80 leading-relaxed">{t('cgu.s2_5')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s3_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s3_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s3_p2')}</p>
            <p className="text-white/80 leading-relaxed">{t('cgu.s3_p3')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s4_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s4_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s4_p2')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s4_p3')}</p>
            <p className="text-white/80 leading-relaxed">
              {t('cgu.s4_p4')} <a href="mailto:communication@enduraw.co" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">communication@enduraw.co</a>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s5_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s5_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('cgu.s5_p2')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('cgu.s5_li1')}</li>
              <li>{t('cgu.s5_li2')}</li>
              <li>{t('cgu.s5_li3')}</li>
              <li>{t('cgu.s5_li4')}</li>
              <li>{t('cgu.s5_li5')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">{t('cgu.s5_p3')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s6_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              {t('cgu.s6_p1')} <a href="/politique-confidentialite" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">{t('footer.privacy')}</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s6_p2')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('cgu.s6_p3')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('cgu.s6_li1')}</li>
              <li>{t('cgu.s6_li2')}</li>
              <li>{t('cgu.s6_li3')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">{t('cgu.s6_p4')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s7_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s7_p1')}</p>
            <p className="text-white/80 leading-relaxed">{t('cgu.s7_p2')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s8_title')}</h2>
            <p className="text-white/80 leading-relaxed">{t('cgu.s8_p')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s9_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s9_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s9_p2')}</p>
            <p className="text-white/80 leading-relaxed">{t('cgu.s9_p3')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s10_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s10_p1')}</p>
            <p className="text-white/80 leading-relaxed">
              {t('cgu.s10_p2')} <a href="mailto:communication@enduraw.co" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">communication@enduraw.co</a>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s11_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s11_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">{t('cgu.s11_p2')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('cgu.s11_li1')}</li>
              <li>{t('cgu.s11_li2')}</li>
              <li>{t('cgu.s11_li3')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">{t('cgu.s11_p3')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s12_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-2">{t('cgu.s12_p1')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>{t('cgu.s12_li1')}</li>
              <li>{t('cgu.s12_li2')}</li>
              <li>{t('cgu.s12_li3')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">{t('cgu.s12_p2')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s13_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s13_p1')}</p>
            <p className="text-white/80 leading-relaxed">{t('cgu.s13_p2')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s14_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s14_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s14_p2')}</p>
            <p className="text-white/80 leading-relaxed">{t('cgu.s14_p3')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s15_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s15_p1')}</p>
            <p className="text-white/80 leading-relaxed">{t('cgu.s15_p2')}</p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">{t('cgu.s16_title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('cgu.s16_p1')}</p>
            <p className="text-white/80 leading-relaxed mb-2">
              📧 <a href="mailto:communication@enduraw.co" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">communication@enduraw.co</a>
            </p>
            <p className="text-white/80 leading-relaxed">📍 {t('cgu.s16_p2')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CGUPage;
