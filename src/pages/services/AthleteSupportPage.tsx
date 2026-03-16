import React from 'react';
import '../../styles/fancy.css';

const AthleteSupportPage: React.FC = () => {
  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">
            ATHLETES SUPPORT
          </h1>
          <p className="text-xl text-gradient-blue-light max-w-3xl mx-auto mb-4">
            You have the fire, we have the spark.
          </p>
          <p className="text-xl text-gray-300">Unleash your potential.</p>
        </header>

        <section className="mb-16">
          <div className="glass-card p-10 border-white/20 animate-float">
            <div className="text-paragraph text-gray-200 space-y-6 leading-relaxed">
              <p>
                Being an accomplished athlete does not only rely on a good training plan.
              </p>
              <p>
                At <span className="text-gradient-blue-light font-bold">Enduraw</span>, we support a holistic vision of performance, from training optimization to detailed sleep analysis.
              </p>
              <p>
                Thanks to <span className="text-gradient-blue-light font-bold">data-driven insights</span>, we hyper-personalize your training to bring you into a new dimension.
              </p>
              <p className="text-xl text-gradient-blue-light font-semibold">
                No matter what you aim for, we know you want to do it at your best. And so do we!
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-custom-gradient uppercase">
            THE KEYS WE CAN BRING YOU
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Training Analysis",
                content: "Analysis of your training sessions and monitoring",
                icon: "📊",
                color: "from-blue-400 to-cyan-400"
              },
              {
                title: "Historical Profiling", 
                content: "Profiling from your historical training and racing data",
                icon: "📈",
                color: "from-purple-400 to-pink-400"
              },
              {
                title: "Performance Factors",
                content: "Races comparisons and determination of key performance factors",
                icon: "🏆",
                color: "from-green-400 to-teal-400"
              },
              {
                title: "Nutrition Guidance",
                content: "Nutrition over training and races alongside advices on best practice for endurance athletes",
                icon: "🥗",
                color: "from-cyan-400 to-blue-400"
              },
              {
                title: "Refueling Strategy",
                content: "Bring the keys to an improved refueling using the right electrolytes and water sources",
                icon: "💧",
                color: "from-cyan-400 to-blue-400"
              },
              {
                title: "Sleep Analysis",
                content: "Sleep Monitoring and analysis to get the best recovery",
                icon: "💤",
                color: "from-indigo-400 to-purple-400"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="glass-card p-8 text-center border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gradient-blue-light mb-4">
                  {service.title}
                </h3>
                <p className="text-paragraph text-gray-200 leading-relaxed">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-custom-gradient uppercase">
            OUR OFFERS
          </h2>

          <div className="glass-card p-10 border-white/20 animate-float-slow">
            <p className="text-paragraph text-gray-200 leading-relaxed mb-8">
              As your partner on every adventure, we offer a Seasonal Support coaching format designed to match your goals, your racing calendar, and your expected level of support.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 border-white/20 hover:border-white/40 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-blue-light/10 to-transparent pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-gradient-blue-light mb-4">Seasonal Support</h3>
                <p className="text-3xl font-bold text-gradient-blue-light mb-6">€350<span className="text-lg text-gray-300">/month</span></p>
                <ul className="space-y-2 text-gray-200 leading-relaxed">
                  <li>• Monthly planning tailored to your goals.</li>
                  <li>• Scientific advice to optimize your training.</li>
                  <li>• Training data feedback (once per week).</li>
                  <li>• Phone and email support with replies within 48h.</li>
                  <li>• Pacing strategies for your main competitions.</li>
                  <li>• One monthly visioconference on a technical subject (training optimization, race analysis, and more).</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass-card p-6 border-white/20">
                <h3 className="text-lg font-bold text-gradient-blue-light mb-3">🧠 Smart Training</h3>
                <p className="text-paragraph text-gray-200 leading-relaxed">
                  We analyze biological and mechanical load markers to turn your data into clear training decisions.
                </p>
              </div>

              <div className="glass-card p-6 border-white/20">
                <h3 className="text-lg font-bold text-gradient-blue-light mb-3">💤 Recovery First</h3>
                <p className="text-paragraph text-gray-200 leading-relaxed">
                  Progress comes from adaptation. We help you optimize recovery through refueling and sleep insights.
                </p>
              </div>

              <div className="glass-card p-6 border-white/20">
                <h3 className="text-lg font-bold text-gradient-blue-light mb-3">🎯 Precision Pacing</h3>
                <p className="text-paragraph text-gray-200 leading-relaxed">
                  We build race pacing strategies from your historical data to help you execute with confidence.
                </p>
              </div>
            </div>

            <p className="text-paragraph text-gray-200 leading-relaxed text-center mt-10 mb-6">
              Want help choosing the right option for your profile? Reach out and we can schedule a call.
            </p>

            <div className="glass-card p-6 border-white/40 bg-gradient-to-r from-gradient-blue-light/10 to-gradient-blue-dark/10 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse pointer-events-none"></div>
              <p className="text-center text-sm uppercase tracking-wide text-gradient-blue-light font-semibold mb-2">
                ⭐ Elite Offer
              </p>
              <p className="text-paragraph text-gray-100 leading-relaxed text-center">
                An elite athlete standing offer is available on demand, with highly limited capacity.
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="mailto:performance@enduraw.co"
                className="btn-enduraw inline-flex items-center justify-center text-center px-6 py-3 break-all shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">✉️</span>
                <span>Start your journey – performance@enduraw.co</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AthleteSupportPage;