import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { scrollToElement } from '../utils/motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key handler to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToElement(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          mobileMenuOpen
            ? 'z-30 max-lg:opacity-0 max-lg:pointer-events-none lg:z-50'
            : 'z-50'
        } ${
          isScrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm border-b border-[#1C1917]/10 py-3 text-[#1C1917]'
            : 'bg-gradient-to-b from-[#1C1917]/85 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  isScrolled ? 'bg-[#C0392B] text-white' : 'bg-[#C0392B] text-white shadow-md'
                }`}
              >
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight font-['Raleway'] leading-none">
                  {RESTAURANT_INFO.shortName}
                </span>
                <span
                  className={`text-[10px] tracking-widest uppercase font-medium mt-0.5 ${
                    isScrolled ? 'text-[#C0392B]' : 'text-[#C59B27]'
                  }`}
                >
                  Restaurant & Pizzeria
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop >= 1024px) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
              <button
                onClick={() => handleNavClick('story')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Our Story
              </button>
              <button
                onClick={() => handleNavClick('menu')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Menu
              </button>
              <button
                onClick={() => handleNavClick('catering')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Catering & Events
              </button>
              <button
                onClick={() => handleNavClick('reviews')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Reviews
              </button>
              <button
                onClick={() => handleNavClick('hours-location')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Hours & Location
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-[#C0392B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Direct Phone & Primary CTA */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className={`flex items-center gap-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  isScrolled ? 'text-[#1C1917] hover:text-[#C0392B]' : 'text-white hover:text-[#C59B27]'
                }`}
                title="Call Little Italy Restaurant"
              >
                <Phone className="w-4 h-4 text-[#C0392B]" />
                <span className="tabular-nums">{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('reservations')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold bg-[#C0392B] text-white hover:bg-[#96281B] transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle (< 1024px) */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="sm:hidden p-2 rounded-full bg-[#C0392B] text-white"
                aria-label="Call restaurant"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-[#1C1917] hover:bg-black/5'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[70] lg:hidden bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF6F0] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#1C1917]/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#C0392B] text-white flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-[#1C1917] font-['Raleway'] leading-none">
                      {RESTAURANT_INFO.shortName}
                    </span>
                    <span className="text-[9px] tracking-widest uppercase font-semibold text-[#C0392B] mt-0.5">
                      Restaurant & Pizzeria
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-md text-stone-600 hover:text-stone-950 hover:bg-black/5 active:scale-95 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                  title="Close menu (Esc)"
                >
                  <X className="w-6 h-6 stroke-[2.25]" />
                </button>
              </div>

              <div className="flex flex-col gap-4 text-base font-semibold text-[#1C1917]">
                <button
                  type="button"
                  onClick={() => handleNavClick('story')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60 cursor-pointer"
                >
                  Our Story
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('menu')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60 cursor-pointer"
                >
                  Menu & Signatures
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('catering')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60 cursor-pointer"
                >
                  Catering & Private Dining
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('reviews')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60 cursor-pointer"
                >
                  Guest Reviews
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('hours-location')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors border-b border-stone-200/60 cursor-pointer"
                >
                  Hours & Location
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className="text-left py-2 hover:text-[#C0392B] transition-colors cursor-pointer"
                >
                  Contact & Services
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1C1917]/10 space-y-3">
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md border border-[#1C1917]/20 text-[#1C1917] font-semibold text-sm hover:border-[#C0392B]"
              >
                <Phone className="w-4 h-4 text-[#C0392B]" />
                <span className="tabular-nums">{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => handleNavClick('reservations')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#C0392B] text-white font-bold text-sm tracking-wider uppercase shadow-md hover:bg-[#96281B] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Reserve a Table
              </button>

              <p className="text-center text-[11px] text-stone-500 pt-2">
                824 Afterglow St · San Antonio, TX
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
