import React, { useMemo } from 'react';
import { MapPin, Clock, Phone, Navigation, CheckCircle2, XCircle } from 'lucide-react';
import { RESTAURANT_INFO, OPERATING_HOURS } from '../data/restaurantData';

export const HoursAndLocation: React.FC = () => {
  // Determine if the restaurant is currently open based on America/Chicago (San Antonio) time
  const currentStatus = useMemo(() => {
    try {
      // Get current Central Time (San Antonio)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Chicago',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);

      const weekday = parts.find((p) => p.type === 'weekday')?.value; // Mon, Tue, etc.
      const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
      const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
      const currentTimeInMinutes = hour * 60 + minute;

      // Check Sunday
      if (weekday === 'Sun') {
        return {
          isOpen: false,
          label: 'Closed Today (Sunday)',
          sub: 'Reopening Monday at 11:00 AM',
        };
      }

      // Check Saturday: 12:00 PM - 10:00 PM (720 to 1320 mins)
      if (weekday === 'Sat') {
        const openMin = 12 * 60;
        const closeMin = 22 * 60;
        if (currentTimeInMinutes >= openMin && currentTimeInMinutes < closeMin) {
          return {
            isOpen: true,
            label: 'Open Now',
            sub: 'Closes tonight at 10:00 PM',
          };
        } else {
          return {
            isOpen: false,
            label: 'Currently Closed',
            sub: currentTimeInMinutes < openMin ? 'Opens today at 12:00 PM' : 'Reopening Monday at 11:00 AM',
          };
        }
      }

      // Check Friday: 11:00 AM - 10:00 PM (660 to 1320 mins)
      if (weekday === 'Fri') {
        const openMin = 11 * 60;
        const closeMin = 22 * 60;
        if (currentTimeInMinutes >= openMin && currentTimeInMinutes < closeMin) {
          return {
            isOpen: true,
            label: 'Open Now',
            sub: 'Closes tonight at 10:00 PM',
          };
        } else {
          return {
            isOpen: false,
            label: 'Currently Closed',
            sub: currentTimeInMinutes < openMin ? 'Opens today at 11:00 AM' : 'Opens tomorrow (Sat) at 12:00 PM',
          };
        }
      }

      // Monday through Thursday: 11:00 AM - 9:00 PM (660 to 1260 mins)
      const openMin = 11 * 60;
      const closeMin = 21 * 60;
      if (currentTimeInMinutes >= openMin && currentTimeInMinutes < closeMin) {
        return {
          isOpen: true,
          label: 'Open Now',
          sub: 'Closes tonight at 9:00 PM',
        };
      } else {
        return {
          isOpen: false,
          label: 'Currently Closed',
          sub: currentTimeInMinutes < openMin ? 'Opens today at 11:00 AM' : 'Opens tomorrow at 11:00 AM',
        };
      }
    } catch {
      return {
        isOpen: true,
        label: 'Open Today',
        sub: 'See schedule below',
      };
    }
  }, []);

  return (
    <section id="hours-location" className="py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="scroll-reveal flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C0392B] mb-2">
            <span>Find Us in San Antonio</span>
            <span aria-hidden="true">·</span>
            <span>North Central Neighborhood</span>
          </div>
          <h2 className="scroll-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight font-['Raleway']">
            Hours & Location
          </h2>
          <p className="scroll-reveal text-stone-600 mt-4 text-base sm:text-lg leading-relaxed font-normal">
            Conveniently located off Blanco Road at 824 Afterglow St, offering ample complimentary guest parking and warm Sicilian hospitality.
          </p>
        </div>

        {/* 2-Column Split: Hours & Details Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Hours Card & Address */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Live Status Pill */}
            <div className="scroll-reveal p-5 rounded-xl bg-white border border-stone-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStatus.isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {currentStatus.isOpen ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <XCircle className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900 text-base">
                      {currentStatus.label}
                    </span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">
                      (San Antonio Time)
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">{currentStatus.sub}</p>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="scroll-reveal bg-white p-6 rounded-xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
                <Clock className="w-4 h-4 text-[#C0392B]" />
                <h3 className="font-bold text-base text-stone-900 font-['Raleway']">
                  Weekly Operating Schedule
                </h3>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {OPERATING_HOURS.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex items-center justify-between py-1 border-b border-stone-100 last:border-0"
                  >
                    <span className="font-semibold text-stone-800">{slot.day}</span>
                    <span
                      className={`tabular-nums ${
                        slot.isClosed
                          ? 'text-stone-400 font-medium italic'
                          : 'text-stone-700 font-semibold'
                      }`}
                    >
                      {slot.isClosed ? 'Closed' : `${slot.open} – ${slot.close}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Quick Directions */}
            <div className="scroll-reveal bg-white p-6 rounded-xl border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Restaurant Address</h4>
                  <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-stone-400 text-[11px] mt-0.5">
                    North Central San Antonio · Easy access from Loop 410 & Blanco Rd
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Direct Phone</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneClean}`}
                    className="text-stone-800 hover:text-[#C0392B] font-semibold text-xs sm:text-sm tabular-nums"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Driving Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Map Iframe */}
          <div className="lg:col-span-7 scroll-reveal rounded-2xl overflow-hidden border border-stone-200/80 shadow-md relative min-h-[380px] lg:min-h-[500px] bg-stone-100">
            <iframe
              title="Little Italy Restaurant & Pizzeria Google Map Location"
              src="https://maps.google.com/maps?q=824+Afterglow+St,+San+Antonio,+TX+78216&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay badge on map */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-md border border-stone-200 pointer-events-none">
              <p className="font-bold text-xs text-stone-900">Little Italy Restaurant & Pizzeria</p>
              <p className="text-[11px] text-stone-500">824 Afterglow St · San Antonio TX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
