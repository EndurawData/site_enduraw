import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EndurawReportPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8 uppercase tracking-wide">
          ENDURAW REPORT
        </h1>

        <div className="space-y-8">
          <div className="bg-dark-secondary p-8 rounded-lg">
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-6">{t('servicePages.endurawReport.analytics_title')}</h2>
            <div className="space-y-6 text-lg text-gray-200">
              <p className="text-paragraph">{t('servicePages.endurawReport.analytics_p')}</p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-subtitle text-gradient-blue-light mb-4">{t('servicePages.endurawReport.dataIntegration_title')}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• {t('servicePages.endurawReport.di_li1')}</li>
                    <li>• {t('servicePages.endurawReport.di_li2')}</li>
                    <li>• {t('servicePages.endurawReport.di_li3')}</li>
                    <li>• {t('servicePages.endurawReport.di_li4')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-subtitle text-gradient-blue-light mb-4">{t('servicePages.endurawReport.insightsRec_title')}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• {t('servicePages.endurawReport.ir_li1')}</li>
                    <li>• {t('servicePages.endurawReport.ir_li2')}</li>
                    <li>• {t('servicePages.endurawReport.ir_li3')}</li>
                    <li>• {t('servicePages.endurawReport.ir_li4')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black p-8 rounded-lg">
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-6">{t('servicePages.endurawReport.reportFeatures_title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-subtitle text-gradient-blue-light mb-2">{t('servicePages.endurawReport.dataViz_title')}</h3>
                <p className="text-paragraph text-gray-700">{t('servicePages.endurawReport.dataViz_p')}</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-subtitle text-gradient-blue-light mb-2">{t('servicePages.endurawReport.actionableInsights_title')}</h3>
                <p className="text-paragraph text-gray-700">{t('servicePages.endurawReport.actionableInsights_p')}</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-subtitle text-gradient-blue-light mb-2">{t('servicePages.endurawReport.progressTracking_title')}</h3>
                <p className="text-paragraph text-gray-700">{t('servicePages.endurawReport.progressTracking_p')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent to-accent-light p-8 rounded-lg text-white">
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-6">{t('servicePages.endurawReport.sampleSections_title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-subtitle text-gradient-blue-light mb-3">{t('servicePages.endurawReport.trainingLoad_title')}</h3>
                <p className="text-paragraph opacity-90 mb-4">{t('servicePages.endurawReport.trainingLoad_p')}</p>
                <ul className="text-sm opacity-80 space-y-1">
                  <li>• {t('servicePages.endurawReport.tl_li1')}</li>
                  <li>• {t('servicePages.endurawReport.tl_li2')}</li>
                  <li>• {t('servicePages.endurawReport.tl_li3')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-subtitle text-gradient-blue-light mb-3">{t('servicePages.endurawReport.performancePred_title')}</h3>
                <p className="text-paragraph opacity-90 mb-4">{t('servicePages.endurawReport.performancePred_p')}</p>
                <ul className="text-sm opacity-80 space-y-1">
                  <li>• {t('servicePages.endurawReport.pp_li1')}</li>
                  <li>• {t('servicePages.endurawReport.pp_li2')}</li>
                  <li>• {t('servicePages.endurawReport.pp_li3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-dark-secondary p-8 rounded-lg text-center mt-8">
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-4">{t('servicePages.endurawReport.getReport_title')}</h2>
            <p className="text-paragraph mb-6">{t('servicePages.endurawReport.getReport_p')}</p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('servicePages.endurawReport.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndurawReportPage;
