import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSwipe } from '../hooks/useSwipe';

// Team members carousel (4 per slide, swipeable, autoplay paused on hover)
const TeamCarousel: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const team = [
    { name: 'Joseph Mestrallet', img: '/images/team/joseph.png', role: t('home.joseph_role'), bio: t('home.joseph_p1'), linkedin: 'https://www.linkedin.com/in/joseph-mestrallet-770279a7/' },
    { name: 'Anthony Saliou', img: '/images/team/anthony.png', role: t('home.anthony_role'), bio: t('home.anthony_p1'), linkedin: 'https://www.linkedin.com/in/anthony-saliou-085286158/' },
    { name: 'Lucas Guillot', img: '/images/team/lucas.png', role: t('home.lucas_role'), bio: t('home.lucas_p1'), linkedin: 'https://www.linkedin.com/in/lucas-guillot01/' },
    { name: 'Valentin Templé', img: '/images/team/valentin.png', role: t('home.valentin_role'), bio: t('home.valentin_p1'), linkedin: 'https://www.linkedin.com/in/valentin-templ%C3%A9/' },
    { name: 'Charline Batel', img: '/images/charline-removebg-preview.png', role: t('home.charline_role'), bio: t('home.charline_p1'), linkedin: 'https://www.linkedin.com/in/charline-batel/' },
    { name: 'Antoine Figula', img: '/images/antoine-removebg-preview.png', role: t('home.antoine_role'), bio: t('home.antoine_p1'), linkedin: 'https://www.linkedin.com/in/antoine-figula-b518192b1/' },
    { name: 'Kyllian Gricourt', img: '/images/team/kyllian.png', role: t('home.kyllian_role'), bio: t('home.kyllian_p1'), linkedin: 'https://www.linkedin.com/in/kyllian-gricourt-candelier-57856b25a/' },
    { name: 'Alex', img: '/images/alex-removebg-preview.png', role: t('home.alex_role'), bio: t('home.alex_p1'), linkedin: 'https://www.linkedin.com/in/alexandre-pichon1/' },
  ];

  const slides = Math.ceil(team.length / 4);

  // Bios are long: slow autoplay, restarted after each manual change
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides), 12000);
    return () => clearInterval(interval);
  }, [slides, currentSlide, paused]);

  const swipe = useSwipe(
    () => setCurrentSlide((prev) => (prev - 1 + slides) % slides),
    () => setCurrentSlide((prev) => (prev + 1) % slides),
  );

  return (
    <div>
      <div
        className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
        {...swipe}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {Array.from({ length: slides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
                {team.slice(slideIndex * 4, (slideIndex + 1) * 4).map((member) => (
                  <div key={member.name} className="bg-[#020617] hover:bg-white/[0.015] transition-colors">
                    <div className="w-full h-44 bg-[#020617] flex items-end justify-center overflow-hidden">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-full w-auto object-contain opacity-90"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-subtitle text-white mb-0.5">{member.name}</p>
                      <p className="text-body-uppercase text-gray-400 mb-3">{member.role}</p>
                      <p className="text-paragraph text-gray-300 text-xs leading-relaxed mb-3">{member.bio}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-body-uppercase text-[#6CDCFF] hover:text-white transition-colors"
                      >
                        LinkedIn
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: slides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-[#6CDCFF]' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
