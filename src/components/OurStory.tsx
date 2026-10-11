import React from 'react';
import { Sparkles, HeartHandshake, Award, Clock } from 'lucide-react';
import { STORY_MILESTONES, RESTAURANT_INFO } from '../data/restaurantData';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="scroll-reveal flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C0392B] mb-2">
            <span>Sicilian Heritage</span>
            <span aria-hidden="true">·</span>
            <span>Family-Owned Since 1983</span>
          </div>
          <h2 className="scroll-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight text-balance font-['Raleway']">
            Four Decades of Palermo Tradition in San Antonio
          </h2>
          <p className="scroll-reveal text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-normal">
            When the Visocaro family arrived from Palermo, Sicily, they brought generations of treasured recipes, hand-cranked pasta methods, and an enduring belief: that real Italian dining is an extension of family.
          </p>
        </div>

        {/* 2-Column Split: Visual Narrative & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          {/* Left Column: Authentic Photography Stack */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="scroll-reveal relative rounded-xl overflow-hidden shadow-lg border border-stone-200/60 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                alt="Artisan pasta and pizza dough prepared by hand"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#C59B27]">
                    Handcrafted Daily
                  </span>
                  <h3 className="text-xl font-bold text-white font-['Raleway']">
                    Fresh Dough & 6-Hour Simmered Marinara
                  </h3>
                </div>
              </div>
            </div>

            {/* Secondary Quote Card */}
            <div className="scroll-reveal mt-6 p-6 rounded-xl bg-[#F4EFE6] border border-stone-300/40 text-stone-800">
              <p className="italic text-base leading-relaxed text-stone-700">
                &ldquo;In Palermo, we learned that time is the secret ingredient. You cannot rush a rich marinara, and you cannot rush a dough fermentation. We keep doing it the same way today as we did in 1983.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider">
                <span>The Visocaro Family</span>
                <span>824 Afterglow St · San Antonio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Craft Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="scroll-reveal flex items-start gap-4" data-delay="0.1">
              <div className="w-12 h-12 rounded-lg bg-[#C0392B]/10 text-[#C0392B] flex items-center justify-center shrink-0 mt-1">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1C1917] font-['Raleway']">
                  Palermo, Sicily Heritage
                </h4>
                <p className="text-stone-600 mt-1 text-sm sm:text-base leading-relaxed">
                  Our marinara, Bolognese, and veal Marsala aren&apos;t trends—they are authentic family heirlooms refined across generations in Sicily and brought directly to San Antonio.
                </p>
              </div>
            </div>

            <div className="scroll-reveal flex items-start gap-4" data-delay="0.2">
              <div className="w-12 h-12 rounded-lg bg-[#5B6A42]/10 text-[#5B6A42] flex items-center justify-center shrink-0 mt-1">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1C1917] font-['Raleway']">
                  Stone-Baked New York-Style Crust
                </h4>
                <p className="text-stone-600 mt-1 text-sm sm:text-base leading-relaxed">
                  Our dough is hand-tossed and baked at high temperatures for that signature blistered edge, crispy bottom, and perfectly tender fold that New York pizza purists crave.
                </p>
              </div>
            </div>

            <div className="scroll-reveal flex items-start gap-4" data-delay="0.3">
              <div className="w-12 h-12 rounded-lg bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center shrink-0 mt-1">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1C1917] font-['Raleway']">
                  Generational Hospitality
                </h4>
                <p className="text-stone-600 mt-1 text-sm sm:text-base leading-relaxed">
                  For 40+ years, local San Antonio families have celebrated christenings, birthdays, wedding rehearsals, and Sunday suppers around our tables. You are always treated like family.
                </p>
              </div>
            </div>

            <div className="scroll-reveal flex items-start gap-4" data-delay="0.4">
              <div className="w-12 h-12 rounded-lg bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1C1917] font-['Raleway']">
                  San Antonio Institution Since 1983
                </h4>
                <p className="text-stone-600 mt-1 text-sm sm:text-base leading-relaxed">
                  Quietly tucked on Afterglow St near Blanco Road, Little Italy remains an authentic culinary destination with over 1,000 top reviews from loyal neighborhood regulars.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Milestones Row */}
        <div className="pt-12 border-t border-stone-200/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-[#1C1917] font-['Raleway']">
              Milestones Along Our 40+ Year Journey
            </h3>
            <p className="text-stone-500 text-sm mt-1">
              A lasting commitment to authenticity and community in San Antonio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STORY_MILESTONES.map((item, idx) => (
              <div
                key={item.year}
                className="scroll-reveal bg-white p-6 rounded-xl border border-stone-200/70 shadow-sm hover:shadow-md transition-shadow relative"
                data-delay={`${idx * 0.1}`}
              >
                <div className="text-3xl font-extrabold text-[#C0392B] font-['Raleway'] tabular-nums mb-2">
                  {item.year}
                </div>
                <h4 className="text-base font-bold text-[#1C1917] mb-2 font-['Raleway']">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
