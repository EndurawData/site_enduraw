import React, { useState, useEffect } from 'react';
import '../../styles/fancy.css';

const PacingPlanPage: React.FC = () => {
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
            PACING PLAN
          </h1>
          <h3 className="text-subtitle text-gradient-blue-light mb-12 leading-relaxed max-w-2xl mx-auto">
            For the best athletes in the world.<br />Why not you ?
          </h3>
        </div>

        <div className="space-y-12">
          {/* Demo Call to Action */}
          <div className="glass-card p-8 text-center animate-float">
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-6">EXPERIENCE THE POWER</h2>
            <p className="text-paragraph text-gray-200 mb-8">
              See how our advanced pacing algorithms can transform your race performance
            </p>
            <a
              href="https://enduraw-report-strava.onrender.com/pacingplan?demo=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-enduraw"
            >
              <span>Check the pacing plan demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Main Description */}
          <div className="glass-card p-10 animate-float-slow">
            <div className="space-y-6 text-paragraph leading-relaxed text-gray-200">
              <p className="text-paragraph text-cyan-300 font-medium">
                Race day is a leap into the unknown! You don't control the weather like you do in training. You don't know the race route and its elevation gain by heart. You're wondering about your nutrition.
              </p>

              <div className="text-center py-6">
                <p className="text-subtitle bg-clip-text text-transparent bg-custom-gradient font-bold">
                  Enduraw is there for you!
                </p>
              </div>

              <p>
                Over the past two years, we've developed a unique expertise in working with elite athletes to provide them with the best possible briefing and enable them to optimize their performances. In top-level sport, every second counts, every heartbeat is important. You need to adapt your pace precisely to get the best energy expenditure.
              </p>
            </div>
          </div>

          {/* Get Your Pacing Plan CTA */}
          <div className="glass-card p-8 text-center animate-float">
            <h2 className="text-title-h2 bg-clip-text text-transparent bg-custom-gradient mb-6">READY TO OPTIMIZE YOUR PERFORMANCE?</h2>
            <p className="text-paragraph text-gray-200 mb-8">
              Whether you want to run a marathon in under 3h30 or finish a trail race. We want to help you reaching your optimum performance.
            </p>
            <a
              href="https://hg1xgb-km.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-enduraw"
            >
              <span>Get your personalized Pacing Plan</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </a>
          </div>

          {/* Analysis and Computation */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 animate-float-slow">
              <h3 className="text-subtitle text-gradient-blue-light mb-6">By Analyzing</h3>
              <ul className="space-y-4 text-paragraph text-gray-200">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Your level
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  The course profile (elevation gain/loss)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Environmental conditions (wind, temperature)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Your Mechanical drift
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 animate-float">
              <h3 className="text-subtitle text-gradient-blue-light mb-6">We Compute</h3>
              <ul className="space-y-4 text-paragraph text-gray-200">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Your final time
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Your pacing plan per aid station
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Weather at different aid stations to choose the right equipment
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Your split pace kilometer by kilometer
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Where/when to walk
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Your personalized nutrition plan
                </li>
              </ul>
            </div>
          </div>

          {/* Technology Link */}
          <div className="glass-card p-8 text-center">
            <h3 className="text-subtitle text-gradient-blue-light mb-6">Learn More About Our Technology</h3>
            <p className="text-paragraph text-gray-200 mb-8">
              Discover the science and innovation behind our pacing algorithms
            </p>
            <a
              href="https://www.linkedin.com/pulse/petter-engdahls-pacing-strategy-mont-blanc-marathon-joseph-mestrallet/?trackingId=f1aj2RJkQuaMFK%2FBsmgwVA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center gap-3"
            >
              <span>Learn more about the tech</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacingPlanPage;