import React, { useState } from 'react';
import '../../styles/fancy.css';

const API_BASE_URL = 'http://localhost:3001';

const AthleteSupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      console.log('Envoi du formulaire athlete support:', formData);
      
      const response = await fetch(`${API_BASE_URL}/api/athlete-support`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('Demande athlete support envoyée avec succès');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Erreur serveur:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur envoi demande athlete support:', error);
      
      // Fallback vers mailto si l'API échoue
      console.log('Utilisation du fallback mailto');
      const subject = encodeURIComponent(`Athletes Support - Nouvelle demande de ${formData.name}`);
      const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nObjectifs et demande:\n${formData.message}`);
      const mailtoLink = `mailto:contact.enduraw@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

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

        {/* Contact Section */}
        <section className="mt-20">
          <div className="glass-card p-10 border-white/20 animate-float-slow">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-custom-gradient uppercase">
              READY TO TRAIN LIKE A PRO?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Principles Cards */}
              <div className="space-y-6">
                <div className="glass-card p-6 border-white/20 animate-float">
                  <h3 className="text-xl font-bold text-gradient-blue-light mb-3">🧠 "Smart Training"</h3>
                  <p className="text-paragraph text-gray-200 leading-relaxed">
                    "No pain no gain" doesn't read as literally as we thought. Evaluating training load via biological and mechanical markers, we analyze your training to give you a better understanding of your physiological responses.
                  </p>
                </div>
                
                <div className="glass-card p-6 border-white/20 animate-float-slow">
                  <h3 className="text-xl font-bold text-gradient-blue-light mb-3">💤 "Recovery First"</h3>
                  <p className="text-paragraph text-gray-200 leading-relaxed">
                    Recovery matters even more than training alone. Adaptation drives progression, achieved through proper refueling and sleep that data can help master.
                  </p>
                </div>
                
                <div className="glass-card p-6 border-white/20 animate-float">
                  <h3 className="text-xl font-bold text-gradient-blue-light mb-3">🎯 "Precision Pacing"</h3>
                  <p className="text-paragraph text-gray-200 leading-relaxed">
                    Pacing Strategy is unique and can be fine-tuned from your training data and past races. Together, we'll find the best scenario: when to walk, when to eat, when to control, or when to push it!
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="glass-card p-8 border-white/20 animate-float-slow">
                <h3 className="text-xl font-bold text-center text-gradient-blue-light mb-6">
                  Start Your Journey
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-secondary/80 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-secondary/80 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                      Your Goals & Objectives *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-secondary/80 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 resize-vertical"
                      placeholder="Tell us about your athletic goals, current training, and how we can help you achieve peak performance..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-enduraw w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Envoi en cours...</span>
                      </span>
                    ) : (
                      <span>Submit Request</span>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center">
                      <p className="text-green-400">Demande envoyée avec succès !</p>
                      <p className="text-sm text-gray-300 mt-2">Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-center">
                      <p className="text-red-400">Erreur lors de l'envoi</p>
                      <p className="text-sm text-gray-300 mt-2">Veuillez réessayer ou nous contacter directement.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AthleteSupportPage;