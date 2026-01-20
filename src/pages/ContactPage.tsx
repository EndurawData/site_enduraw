import React, { useState, useEffect } from 'react';
import '../styles/fancy.css';

const ContactPage: React.FC = () => {
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
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div 
          id="animate-title"
          className={`text-center mb-16 transform transition-all duration-1000 ${animatedElements.has('animate-title') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">
            CONTACT US
          </h1>
          <p className="text-paragraph mb-12 leading-relaxed max-w-2xl mx-auto">
            Choose the right team to help you achieve your goals. Click on an email to send us a message.
          </p>
        </div>
        
        {/* Email Categories */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Performance & Training */}
          <div className="glass-card p-8 animate-float hover:scale-105 transition-transform duration-300">
            <div className="icon-container bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Performance</h3>
            <p className="text-paragraph mb-6 text-center leading-relaxed">
              For athlete support, training camps, physiological testing, and performance optimization.
            </p>
            <a 
              href="mailto:performance@enduraw.co"
              className="btn-enduraw w-full flex flex-col items-center justify-center gap-2 py-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm break-all">performance@enduraw.co</span>
            </a>
          </div>

          {/* Dashboard & Technology */}
          <div className="glass-card p-8 animate-float-slow hover:scale-105 transition-transform duration-300">
            <div className="icon-container bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Dashboard</h3>
            <p className="text-paragraph mb-6 text-center leading-relaxed">
              For questions about Enduraw Dashboard, Report, API, and Strava Integration features.
            </p>
            <a 
              href="mailto:dashboard@enduraw.co"
              className="btn-enduraw w-full flex flex-col items-center justify-center gap-2 py-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm break-all">dashboard@enduraw.co</span>
            </a>
          </div>

          {/* General & Communication */}
          <div className="glass-card p-8 animate-float hover:scale-105 transition-transform duration-300">
            <div className="icon-container bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Communication</h3>
            <p className="text-paragraph mb-6 text-center leading-relaxed">
              For general inquiries, partnerships, media requests, and other communications.
            </p>
            <a 
              href="mailto:communication@enduraw.co"
              className="btn-enduraw w-full flex flex-col items-center justify-center gap-2 py-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm break-all">communication@enduraw.co</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;