import React, { useEffect, useState } from 'react';
import { Calendar, Utensils, Star, Phone, ArrowDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { scrollToElement } from '../utils/motion';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1C1917] text-white">
      {/* Background Image with Parallax & Scrim */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform scale-105 transition-transform duration-100 ease-out"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80")',
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        {/* Measured dark scrim for 4.5:1 WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/70 to-[#1C1917]/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1C1917]/40 to-[#1C1917]/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle Heritage Label (Unboxed, Anti-Pill) */}
          <div className="scroll-reveal flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C59B27] mb-4">
            <span>Visocaro Family</span>
            <span aria-hidden="true">·</span>
            <span>Est. 1983 in San Antonio</span>
            <span aria-hidden="true">·</span>
            <span>Palermo, Sicily Roots</span>
          </div>

          {/* Primary Headline with text-wrap: balance */}
          <h1
            className="scroll-reveal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 text-balance font-['Raleway']"
            data-delay="0.1"
          >
            Handcrafted Sicilian Flavors & New York Pizza in San Antonio.
          </h1>

          {/* Value Proposition Prose */}
          <p
            className="scroll-reveal text-base sm:text-lg text-stone-200/90 leading-relaxed font-normal mb-8 max-w-2xl"
            data-delay="0.2"
          >
            For over four decades, our family has brought the warmth of Palermo to 824 Afterglow St. From slow-simmered sauces and hand-pinched gnocchi to stone-baked wood-fired crusts, every meal is crafted with authentic Sicilian hospitality.
          </p>

          {/* Primary Action Buttons */}
          <div className="scroll-reveal flex flex-wrap items-center gap-4 mb-10" data-delay="0.3">
            <button
              onClick={() => scrollToElement('reservations')}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-[#C0392B] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#96281B] transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>

            <button
              onClick={() => scrollToElement('menu')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-stone-900/60 hover:bg-stone-900/90 border border-white/20 text-white font-semibold text-sm hover:border-[#C59B27] transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              <Utensils className="w-4 h-4 text-[#C59B27]" />
              <span>Explore Menu</span>
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-300 hover:text-white transition-colors px-2 py-2"
            >
              <Phone className="w-4 h-4 text-[#C0392B]" />
              <span className="tabular-nums">{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4-Column Proof & Trust Strip (Full-width below hero split per Frontend Design rules) */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#141210]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="scroll-reveal px-2" data-delay="0.1">
              <div className="text-2xl sm:text-3xl font-bold text-white font-['Raleway'] tabular-nums">
                1983
              </div>
              <div className="text-xs text-stone-400 mt-0.5 tracking-wide uppercase">
                Family-Owned Since
              </div>
            </div>

            {/* Stat 2 */}
            <div className="scroll-reveal px-2" data-delay="0.2">
              <div className="flex items-center justify-center gap-1.5 text-2xl sm:text-3xl font-bold text-[#C59B27] font-['Raleway'] tabular-nums">
                <Star className="w-5 h-5 fill-[#C59B27] text-[#C59B27]" />
                <span>4.5</span>
              </div>
              <div className="text-xs text-stone-400 mt-0.5 tracking-wide uppercase">
                1,000+ Local Reviews
              </div>
            </div>

            {/* Stat 3 */}
            <div className="scroll-reveal px-2" data-delay="0.3">
              <div className="text-2xl sm:text-3xl font-bold text-white font-['Raleway']">
                Palermo, Sicily
              </div>
              <div className="text-xs text-stone-400 mt-0.5 tracking-wide uppercase">
                Heritage & Recipes
              </div>
            </div>

            {/* Stat 4 */}
            <div className="scroll-reveal px-2" data-delay="0.4">
              <div className="text-2xl sm:text-3xl font-bold text-white font-['Raleway'] tabular-nums">
                $20 – $30
              </div>
              <div className="text-xs text-stone-400 mt-0.5 tracking-wide uppercase">
                Average Per Guest
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator prompt */}
      <button
        onClick={() => scrollToElement('story')}
        className="absolute bottom-16 right-8 hidden xl:flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down to story"
      >
        <span>Discover Our Story</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </button>
    </section>
  );
};
