import React, { useState } from 'react';

type CareersTab = 'job' | 'spontaneous';

const CareersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CareersTab>('job');
  const dataScienceFormUrl = 'https://docs.google.com/forms/u/1/d/1vGtTc_dDFTkP8vuGz2kBZAZNpN_sPA2z47_1z_Q92jE/preview';
  const spontaneousFormUrl = 'https://docs.google.com/forms/d/1nvT2NrAp1wQmAj2lbG1IzRkINIzbfZDWdz9Rahwx83M/preview';

  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-6">
            CAREERS
          </h1>
          <p className="text-paragraph max-w-3xl mx-auto leading-relaxed">
            Join Enduraw to build high-impact tools for performance analysis.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="glass-card p-2 inline-flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('job')}
              className={`px-5 py-2 rounded-lg transition-all duration-300 text-body-uppercase ${
                activeTab === 'job'
                  ? 'bg-gradient-to-r from-gradient-blue-light/30 to-gradient-blue-dark/30 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Open Position
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('spontaneous')}
              className={`px-5 py-2 rounded-lg transition-all duration-300 text-body-uppercase ${
                activeTab === 'spontaneous'
                  ? 'bg-gradient-to-r from-gradient-blue-light/30 to-gradient-blue-dark/30 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Spontaneous Application
            </button>
          </div>
        </div>

        {activeTab === 'job' ? (
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wide bg-gradient-to-r from-green-500/30 to-teal-500/30 border border-white/20">
                Intern
              </span>
              <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wide bg-gradient-to-r from-green-500/30 to-teal-500/30 border border-white/20">
                Remote only
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-5">Data Scientist / Application Developer</h2>

            <p className="text-paragraph leading-relaxed mb-6">
              We are looking for a hybrid profile to contribute to the design and development of a data-driven application,
              including data processing, visualization, data quality, and product feature implementation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Build application features on the frontend and/or backend.</li>
                  <li>• Design robust data pipelines.</li>
                  <li>• Contribute to data analysis and modeling.</li>
                  <li>• Collaborate with the product team on fast iterations.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Profile</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Strong background in data and software development.</li>
                  <li>• Hands-on experience with Python and/or TypeScript.</li>
                  <li>• Product mindset and execution quality.</li>
                  <li>• Team spirit and autonomy.</li>
                </ul>
              </div>
            </div>

            <p className="text-paragraph mb-4 text-center">Click the link below to access the application form:</p>
            <div className="flex justify-center">
              <a
                href={dataScienceFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw inline-flex items-center justify-center px-6 py-3"
              >
                Apply via Google Form
              </a>
            </div>
          </div>
        ) : (
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Spontaneous Application</h2>
            <p className="text-paragraph leading-relaxed mb-6">
              Want to join the Enduraw team but don't see a position that fits your profile? Send us your spontaneous application!
            </p>

            <p className="text-paragraph mb-4 text-center">Click the link below to access the application form:</p>
            <div className="flex justify-center">
              <a
                href={spontaneousFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enduraw inline-flex items-center justify-center px-6 py-3"
              >
                Apply via Google Form
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
