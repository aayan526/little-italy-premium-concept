import React from 'react';
import { Phone, MapPin, Clock, UtensilsCrossed, AlertTriangle, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO, OPERATING_HOURS } from '../data/restaurantData';
import { scrollToElement } from '../utils/motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-stone-300 border-t border-stone-800">
      {/* ======================================================== */}
      {/* MANDATORY DEMO CONCEPT DISCLAIMER BANNER                 */}
      {/* ======================================================== */}
      <div className="bg-[#C0392B] text-white py-4 px-4 border-b border-[#96281B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <AlertTriangle className="w-5 h-5 text-amber-200 shrink-0" />
            <p className="font-semibold leading-snug">
              <span className="uppercase tracking-wider font-extrabold text-amber-200 mr-1.5">
                Client Pitch Demo Concept:
              </span>
              This website is an interactive prototype concept created for demonstration and presentation purposes, not the official business website. For official orders and confirmed hours, please call (210) 349-2060 directly.
            </p>
          </div>
          <a
            href={`tel:${RESTAURANT_INFO.phoneClean}`}
            className="px-3.5 py-1.5 rounded bg-white text-[#C0392B] hover:bg-stone-100 font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-colors shrink-0 shadow-sm"
          >
            Call Restaurant
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Sicilian Heritage Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C0392B] text-white flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white font-['Raleway'] tracking-tight">
                {RESTAURANT_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Family-owned and operated by the Visocaro family since 1983. Bringing authentic Sicilian recipes from Palermo, handcrafted stone-baked New York style pizza, and hearty Italian classics to San Antonio.
            </p>

            <div className="text-xs text-stone-400 space-y-1 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C0392B]" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="hover:text-white transition-colors tabular-nums font-semibold"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Section Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59B27] font-['Raleway']">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollToElement('story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Story & Heritage (1983)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement('menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Menu, Pizza & Pastas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement('catering')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Catering & Semi-Private Dining
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement('reviews')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Local Reviews (1,000+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement('reservations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Table Reservations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement('hours-location')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hours & Interactive Map
                </button>
              </li>
            </ul>
          </div>

          {/* Hours Summary Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C0392B]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59B27] font-['Raleway']">
                Hours of Operation Summary
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-stone-400 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
              {OPERATING_HOURS.map((h) => (
                <div key={h.day} className="flex justify-between py-0.5">
                  <span className="text-stone-300 font-medium">{h.shortDay}:</span>
                  <span className={h.isClosed ? 'text-stone-500 italic' : 'text-stone-200 tabular-nums'}>
                    {h.isClosed ? 'Closed' : `${h.open} - ${h.close}`}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-stone-500 italic">
              * Kitchen closes 30 minutes before closing time. Closed on Sundays for family day.
            </p>
          </div>
        </div>

        {/* Bottom Bar with Concept Notice & Back to Top */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Little Italy Restaurant & Pizzeria. Pitch Concept Demo. All trademarks remain property of their respective owners.
          </p>

          <button
            onClick={() => scrollToElement('hero')}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer text-xs uppercase tracking-wider font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
