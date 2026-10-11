import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FAF6F0] relative border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="scroll-reveal flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C0392B] mb-2">
            <span>Verified Local Sentiment</span>
            <span aria-hidden="true">·</span>
            <span>San Antonio Community</span>
          </div>
          <h2 className="scroll-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight font-['Raleway']">
            Beloved by San Antonio for Over 40 Years
          </h2>
          <p className="scroll-reveal text-stone-600 mt-4 text-base sm:text-lg leading-relaxed font-normal">
            With an average 4.5 rating from over 1,000 neighborhood reviews, generations of diners trust Little Italy for authentic Sicilian dishes and unmatched warmth.
          </p>
        </div>

        {/* Rating Overview Summary Banner */}
        <div className="scroll-reveal mb-12 p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#1C1917] font-['Raleway'] tabular-nums">
                4.5
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#C59B27] mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C59B27]" />
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Based on 1,000+ Reviews
              </p>
            </div>

            <div className="hidden sm:block h-12 w-[1px] bg-stone-200" />

            <div className="space-y-1 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B6A42]" />
                <span>Consistently rated top Italian Trattoria in North Central San Antonio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B6A42]" />
                <span>Praised for handmade gnocchi, NY pizza crust & tender veal Marsala</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B6A42]" />
                <span>Comfortable family ambiance with moderate pricing (~$20–$30 / person)</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right shrink-0">
            <span className="text-xs text-stone-400 uppercase tracking-wider block">
              Continuous Legacy
            </span>
            <span className="text-lg font-bold text-[#C0392B] font-['Raleway']">
              1983 – Present
            </span>
          </div>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((rev, idx) => (
            <div
              key={rev.id}
              className="scroll-reveal bg-white p-7 rounded-xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              data-delay={`${idx * 0.1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C59B27]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rev.rating)
                            ? 'fill-[#C59B27] text-[#C59B27]'
                            : 'fill-stone-200 text-stone-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400">{rev.date}</span>
                </div>

                <div className="relative mb-6">
                  <MessageSquareQuote className="w-8 h-8 text-stone-200 absolute -top-3 -left-2 -z-0" />
                  <p className="relative z-10 text-stone-700 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-stone-900 font-['Raleway'] text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-stone-500">{rev.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-stone-400 text-[11px] block">Favorite order:</span>
                  <span className="font-semibold text-[#C0392B] text-xs">
                    {rev.favoriteDish}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
