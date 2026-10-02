import React, { useEffect, useRef } from 'react';

// bare: no title/padding, for embedding inside another section
const SponsorsSlider: React.FC<{ bare?: boolean }> = ({ bare = false }) => {
  const sponsors = [
    { id: 1, image: '/images/sponsors/sponsor1.png', name: 'Sponsor 1' },
    { id: 2, image: '/images/sponsors/sponsor2.png', name: 'Sponsor 2' },
    { id: 3, image: '/images/sponsors/sponsor3.png', name: 'Sponsor 3' },
    { id: 4, image: '/images/sponsors/sponsor4.png', name: 'Sponsor 4' },
    { id: 5, image: '/images/sponsors/sponsor5.png', name: 'Sponsor 5' },
    { id: 6, image: '/images/sponsors/sponsor6.png', name: 'Sponsor 6' },
    { id: 7, image: '/images/sponsors/sponsor7.png', name: 'Sponsor 7' },
    { id: 8, image: '/images/sponsors/sponsor8.png', name: 'Sponsor 8' },
    { id: 9, image: '/images/sponsors/sponsor9.png', name: 'Sponsor 9' },
    { id: 10, image: '/images/sponsors/sponsor10.png', name: 'Sponsor 10' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const paused = useRef(false);
  const drag = useRef<{ x: number; scroll: number } | null>(null);

  // Auto-scroll; the logo list is duplicated so we wrap at half the width
  useEffect(() => {
    let frame: number;
    const step = () => {
      const el = scrollRef.current;
      if (el) {
        const half = el.scrollWidth / 2;
        if (!paused.current) position.current += 0.5;
        if (position.current >= half) position.current -= half;
        if (position.current < 0) position.current += half;
        el.scrollLeft = position.current;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    paused.current = true;
    drag.current = { x: e.clientX, scroll: position.current };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    position.current = drag.current.scroll - (e.clientX - drag.current.x);
  };
  const onPointerUp = () => {
    drag.current = null;
    paused.current = false;
  };

  return (
    <div className={bare ? 'overflow-hidden' : 'py-16 overflow-hidden'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={bare ? 'hidden' : 'text-center mb-12'}>
          <h2 className="label-enduraw">
            They trusted us
          </h2>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-hidden select-none cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'pan-y' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="flex w-max">
              {/* First set of logos */}
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<span class="text-gray-300 text-sm font-medium">${sponsor.name}</span>`;
                    }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsors.map((sponsor) => (
                <div
                  key={`duplicate-${sponsor.id}`}
                  className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<span class="text-gray-300 text-sm font-medium">${sponsor.name}</span>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSlider;