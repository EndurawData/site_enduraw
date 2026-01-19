import React, { useState, useEffect } from 'react';
// import ChamonixBooking from '../../components/ChamonixBooking'; // COMMENTÉ POUR PUBLICATION

const TestingPage: React.FC = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToObserve = document.querySelectorAll('[id^="animate-"]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Title */}
        <div 
          id="animate-title"
          className={`text-center mb-12 transform transition-all duration-1000 ${animatedElements.has('animate-title') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">
            TESTING SERVICES
          </h1>
          <p className="text-paragraph text-gray-300 leading-relaxed">
            Learn more about your physiology and what makes you a great athlete
          </p>
        </div>
        
        {/* Unified Testing Section */}
        <div className="space-y-8">
          {/* Header Section */}
          <div className="bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10 shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-6 relative z-10">TESTING IN PARIS & CHAMONIX</h2>
            <p className="text-paragraph text-gray-200 mb-4 relative z-10">
              Professional testing services available at both our Paris and Chamonix facilities
            </p>
          </div>
          
          {/* Protocol Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* VO2Max Protocol */}
            <div className="bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="text-subtitle text-gradient-blue-light mb-4 relative z-10">VO2Max Protocol</h3>
              <p className="text-paragraph text-gray-300 mb-2 relative z-10">Testing at Paris or Chamonix</p>
              <p className="text-subtitle text-gradient-blue-light mb-6 relative z-10">From 150€</p>
              
              <ul className="space-y-3 text-paragraph text-gray-200 relative z-10">
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>FC max</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>VO2max</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Ventilatory thresholds 1 & 2</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>MAS (Maximum Aerobic speed - VMA)</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Training zones</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Muscle oxygen</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Core Body</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>TempLactate testing (optional)</span>
                </li>
              </ul>
            </div>
            
            {/* Run/Walk Protocol */}
            <div className="bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative group overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="text-subtitle text-gradient-blue-light mb-4 relative z-10">Run/Walk Protocol</h3>
              <p className="text-paragraph text-gray-300 mb-2 relative z-10">Testing at Paris or Chamonix</p>
              <p className="text-subtitle text-gradient-blue-light mb-6 relative z-10">From 50€</p>

              <ul className="space-y-3 text-paragraph text-gray-200 relative z-10">
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Running economy</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Walking economy</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>"Poles" economy</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Critical Walking Gradient</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Critical Running Speed</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>VO2, VE</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>FC</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  <span>Energetic outputs</span>
                </li>
              </ul>
            </div>
          </div>
          

          <div 
            id="animate-whats-included"
            className="bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-8 text-center relative z-10">WHAT'S INCLUDED</h2>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center group transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-subtitle text-gradient-blue-light mb-3">Pre-Test Consultation</h3>
                <p className="text-paragraph text-gray-300">Comprehensive health screening and goal assessment</p>
              </div>
              <div className="text-center group transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-subtitle text-gradient-blue-light mb-3">Laboratory Testing</h3>
                <p className="text-paragraph text-gray-300">State-of-the-art equipment and protocols</p>
              </div>
              <div className="text-center group transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-subtitle text-gradient-blue-light mb-3">Detailed Report</h3>
                <p className="text-paragraph text-gray-300">Comprehensive analysis with actionable recommendations</p>
              </div>
            </div>
          </div>

          {/* Système de réservation en ligne */}
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-blue-400/20">
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-6 text-center">
              ONLINE BOOKING 🚀
            </h2>
            <div className="glass-card p-8 text-center animate-float">
              <div className="mb-6">
                <div className="text-6xl mb-4">📅</div>
                <p className="text-paragraph text-gray-200 mb-6 leading-relaxed">
                  Book your physiological test now!
                </p>
                <p className="text-paragraph text-gray-300 mb-8">
                  Select your time slot and test protocol in just a few clicks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://hg1xgb-km.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-enduraw"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10M5 7h14l-1 12H6L5 7z" />
                  </svg>
                  <span>Book Now</span>
                </a>

                <a
                  href="/contact"
                  className="px-8 py-3 rounded-lg border border-white/40 text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Section contact alternative */}
          <div className="glass-card p-8 text-center animate-float-slow">
            <h3 className="text-subtitle text-gradient-blue-light mb-4">
              None of the time slots work for me.
            </h3>
            <p className="text-paragraph text-gray-300 mb-6">
              For specific questions or custom time slots, feel free to contact us or join our waiting list to be notified of new slots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-enduraw"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Contact Us</span>
              </a>
              <a
                href="https://hg1xgb-km.myshopify.com/pages/lab-waiting-list"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg border border-white/40 text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span>Keep me updated</span>
              </a>
            </div>
          </div>

          {/* Testing for Business Section */}
          <div className="bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/15 group-hover:to-pink-500/15 transition-all duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-6 text-center">
                TESTING FOR BUSINESS
              </h2>
              <p className="text-paragraph text-gray-200 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
                Invest in your team's health and performance. Our corporate testing programs help employees understand their physiology, optimize their training, and improve overall well-being.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-4xl mb-3">👥</div>
                  <h4 className="text-subtitle text-gradient-blue-light mb-2">Team Packages</h4>
                  <p className="text-paragraph text-gray-300 text-sm">Group discounts available for 5+ employees</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="text-subtitle text-gradient-blue-light mb-2">Company Reports</h4>
                  <p className="text-paragraph text-gray-300 text-sm">Aggregated insights for HR and wellness teams</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="text-subtitle text-gradient-blue-light mb-2">Flexible Scheduling</h4>
                  <p className="text-paragraph text-gray-300 text-sm">On-site or in-lab options to fit your needs</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/contact"
                  className="btn-enduraw"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Request Corporate Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingPage;