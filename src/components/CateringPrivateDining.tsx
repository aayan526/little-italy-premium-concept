import React from 'react';
import { Users, Utensils, GlassWater, CalendarClock, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { scrollToElement } from '../utils/motion';

export const CateringPrivateDining: React.FC = () => {
  return (
    <section id="catering" className="py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="scroll-reveal flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C0392B] mb-2">
            <span>Special Occasions & Banquets</span>
            <span aria-hidden="true">·</span>
            <span>San Antonio, TX</span>
          </div>
          <h2 className="scroll-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight font-['Raleway']">
            Catering & Semi-Private Celebrations
          </h2>
          <p className="scroll-reveal text-stone-600 mt-4 text-base sm:text-lg leading-relaxed font-normal">
            From rehearsal dinners and milestone birthdays to corporate banquets, our semi-private dining spaces and handcrafted Sicilian party trays bring effortless warmth to any event.
          </p>
        </div>

        {/* 2-Column Split: Services & Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left Column: Atmospheric Private Dining Feature */}
          <div className="lg:col-span-7 scroll-reveal rounded-2xl overflow-hidden relative shadow-lg group aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Private dining room at Little Italy Restaurant"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 flex flex-col justify-end p-8 text-white">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C59B27] mb-1">
                Warm Italian Atmosphere
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Raleway'] mb-2">
                Semi-Private Dining for Up to 50 Guests
              </h3>
              <p className="text-stone-300 text-sm max-w-lg leading-relaxed mb-4">
                Enjoy personalized banquet menus, dedicated staff, and customized Italian wine pairings in our welcoming San Antonio dining rooms.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToElement('reservations')}
                  className="px-5 py-2.5 rounded-md bg-[#C0392B] hover:bg-[#96281B] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request Private Space
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Key Event Capabilities */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="scroll-reveal bg-white p-6 rounded-xl border border-stone-200/80 shadow-sm" data-delay="0.1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-md bg-[#C0392B]/10 text-[#C0392B] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#1C1917] font-['Raleway']">
                  Family Celebrations & Graduations
                </h4>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Celebrate life&apos;s biggest moments with authentic family-style service. We configure tables to suit intimate gatherings or extended family banquets.
              </p>
            </div>

            <div className="scroll-reveal bg-white p-6 rounded-xl border border-stone-200/80 shadow-sm" data-delay="0.2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-md bg-[#5B6A42]/10 text-[#5B6A42] flex items-center justify-center">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#1C1917] font-['Raleway']">
                  Off-Site Catering Trays
                </h4>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Hosting at home or at the office? Order hot, ready-to-serve half and full pans of Chicken Parm, baked ziti, gnocchi, and sausage stuffed mushrooms.
              </p>
            </div>

            <div className="scroll-reveal bg-white p-6 rounded-xl border border-stone-200/80 shadow-sm" data-delay="0.3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-md bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center">
                  <GlassWater className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#1C1917] font-['Raleway']">
                  Beer & Wine Pairings
                </h4>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Elevate your gathering with imported Italian Chianti, Pinot Grigio, Prosecco, and crisp Peroni draught selections.
              </p>
            </div>
          </div>
        </div>

        {/* Banquet Menu Packages Grid */}
        <div className="scroll-reveal bg-[#F4EFE6] rounded-2xl p-8 border border-stone-300/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] font-['Raleway']">
                Popular Banquet Party Trays (Illustrative Menu)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Convenient pickup or delivery packages for parties of 10 to 100+ guests
              </p>
            </div>
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#C0392B] hover:text-[#96281B] uppercase tracking-wider"
            >
              <span>Call to Inquire: {RESTAURANT_INFO.phone}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-stone-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C0392B] block mb-1">
                Package 1 · Classic Trattoria
              </span>
              <h4 className="font-bold text-base text-stone-900 mb-2 font-['Raleway']">
                Pasta & Insalata Feast
              </h4>
              <ul className="text-xs text-stone-600 space-y-1.5 mb-4">
                <li>· Full Pan Handmade Potato Gnocchi Sorrentina</li>
                <li>· Full Pan Traditional Spaghetti Bolognese</li>
                <li>· Large Caprese or House Italian Salad</li>
                <li>· Freshly Baked Garlic Rolls</li>
              </ul>
              <div className="text-xs text-stone-500 border-t border-stone-100 pt-3">
                Feeds ~18–22 Guests · <span className="italic">Illustrative demo option</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-stone-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C0392B] block mb-1">
                Package 2 · Sicilian Grand
              </span>
              <h4 className="font-bold text-base text-stone-900 mb-2 font-['Raleway']">
                Parmigiana & Marsala Banquet
              </h4>
              <ul className="text-xs text-stone-600 space-y-1.5 mb-4">
                <li>· Full Pan Classic Chicken Parmigiana</li>
                <li>· Full Pan Veal or Chicken Marsala</li>
                <li>· Tray of Sausage Stuffed Mushrooms</li>
                <li>· Penne Marinara Side & Garlic Rolls</li>
              </ul>
              <div className="text-xs text-stone-500 border-t border-stone-100 pt-3">
                Feeds ~20–25 Guests · <span className="italic">Illustrative demo option</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-stone-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C0392B] block mb-1">
                Package 3 · Dolce & Pizzeria
              </span>
              <h4 className="font-bold text-base text-stone-900 mb-2 font-['Raleway']">
                Pizza Party & Cannoli Platter
              </h4>
              <ul className="text-xs text-stone-600 space-y-1.5 mb-4">
                <li>· 5 Large Hand-Tossed NY & Margherita Pizzas</li>
                <li>· Party Platter of Fresh Sicilian Cannoli</li>
                <li>· Whole Classic Espresso Tiramisù Tray</li>
                <li>· House Italian Tossed Salad with Herb Dressing</li>
              </ul>
              <div className="text-xs text-stone-500 border-t border-stone-100 pt-3">
                Feeds ~20–30 Guests · <span className="italic">Illustrative demo option</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
