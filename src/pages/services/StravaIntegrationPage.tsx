import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PersonCard from '../../components/PersonCard';
import '../../styles/fancy.css';

const StravaIntegrationPage: React.FC = () => {
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
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header 
          id="animate-title"
          className={`text-center mb-16 transform transition-all duration-1000 ${animatedElements.has('animate-title') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">ENDURAW REPORT</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">A Strava Integration</p>
          <p className="text-lg text-gray-300">The best sports algorithms for all your runs!</p>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <img
            src="/images/strava_logo-fi35603244x260.png"
            alt="Strava logo"
            className="h-40 object-contain"
            loading="lazy"
          />
          <img
            src="/images/logo_enduraw%20blanc-fi35471045x140.png"
            alt="Enduraw logo"
            className="h-40 object-contain"
            loading="lazy"
          />
        </div>

        {/* Problem statement + sample report side-by-side */}
        <section className="mb-12 grid gap-8 md:grid-cols-2 items-start">
          {/* Left: portrait sample screenshot */}
          <div className="order-2 md:order-1">
            <img
              src="/images/IMG_2313-fi35687493x330.PNG"
              alt="Enduraw Report sample screenshot"
              className="w-full rounded-lg border border-gray-800"
              loading="lazy"
            />
          </div>

          {/* Right: text */}
          <div className="order-1 md:order-2 space-y-6 text-paragraph text-gray-200 leading-relaxed">
            <p>
              You can't accelerate under 29 degrees? You thought you had a good pace, but with that
              100-meter bump, it's impossible to know? How much speed has the wind taken away from you
              on this race?
            </p>
            <p>That's to be expected. Outside conditions reduce your pace. 🥵 💨</p>
            <p>
              But it's impossible to know how much. Whether it's the wind, the elevation gain, the
              temperature or the altitude, it's impossible to know your true state of fitness.
            </p>
            <p>
              Enduraw has the solution! We're putting at your disposal the formulas we've developed
              with elite athletes to enable you to compare your training and more accurately estimate
              the intensity of your session. 📈
            </p>
            <p>
              After each outing, our integration will automatically update your activity with the
              paces adjusted to the conditions. Our API calls retrieve wind strength, outside
              temperature and your pace and altitude data a few seconds after the end of your run!
            </p>
            <p>
              So you get an instant report and the time you would have saved in normal conditions 🎉
            </p>
          </div>
        </section>

        <section className="mb-12 grid gap-8 sm:grid-cols-2">
          <div className="glass-card p-8 text-center border-white/20 animate-float">
            <p className="text-5xl font-extrabold text-gradient-blue-light mb-2">1047</p>
            <p className="text-paragraph text-gray-300">users</p>
          </div>
          <div className="glass-card p-8 text-center border-white/20 animate-float-slow">
            <p className="text-5xl font-extrabold text-gradient-blue-light mb-2">72,861</p>
            <p className="text-paragraph text-gray-300">activities analyzed</p>
          </div>
        </section>

        <div className="mb-16 text-center">
          <a
            href="https://enduraw-report-strava.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enduraw"
          >
            <span>Click here for Enduraw Report!</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-custom-gradient mb-8">How does it work?</h2>
          <div className="glass-card p-8 border-white/20 animate-float">
            <ol className="list-decimal list-inside space-y-4 text-paragraph text-gray-200 leading-relaxed">
              <li>Click on the link above to go to the home page</li>
              <li>Create your Enduraw account</li>
              <li>Log in with your username and password</li>
              <li>You'll be taken to the Strava login page</li>
              <li>Log in using their secure page, which gives us access to your activities</li>
              <li>Once logged in, you will receive a validation e-mail</li>
              <li>
                On your first run, upload your activity to Strava; the Enduraw report magically
                appears!
              </li>
              <li className="text-yellow-300">⚠️ Don't change your description before the report updates</li>
              <li>Enjoy your runs ;)</li>
            </ol>
            <p className="text-sm text-gray-400 mt-6">PS: you can disable the report anytime</p>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold">The tech behind</h3>
          <p className="text-gray-400">FAQ, feedbacks</p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold">Sponsors</h3>
          <p className="text-gray-400">Support us!</p>
        </section>

        <section className="mb-4">
          <h3 className="text-2xl font-bold mb-4">The builders</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <PersonCard
              fullName="Alodie Boissonnet"
              country="France 🇫🇷"
              job="Software Engineer"
              sports="Triathlon"
              credentials="X - Cambridge"
              imageUrl="/images/alodie2-fi35697586x210.png"
            />
            <PersonCard
              fullName="Joseph Mestrallet"
              country="France 🇫🇷"
              job="Performance Scientist"
              sports="Trail Running"
              credentials="X-HEC Berkeley ENSEA"
              imageUrl="/images/joseph-fi35687529x212.png"
            />
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default StravaIntegrationPage;
