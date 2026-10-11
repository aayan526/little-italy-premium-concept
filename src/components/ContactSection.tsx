import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, Utensils, Car, Truck, PartyPopper } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.message) return;
    setInquirySent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F4EFE6] relative border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="scroll-reveal flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C0392B] mb-2">
            <span>Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Reach Our Family Staff</span>
          </div>
          <h2 className="scroll-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight font-['Raleway']">
            Contact & Guest Services
          </h2>
          <p className="scroll-reveal text-stone-600 mt-4 text-base sm:text-lg leading-relaxed font-normal">
            Whether you&apos;re ordering curbside takeout, inquiring about catering pans, or planning a celebratory dinner, we&apos;re here to assist you.
          </p>
        </div>

        {/* Available Services Strip */}
        <div className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#C0392B]/10 text-[#C0392B] flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-stone-900">Dine-In Seating</p>
              <p className="text-[11px] text-stone-500">Walk-ins & Reservations</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#5B6A42]/10 text-[#5B6A42] flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-stone-900">Curbside Takeout</p>
              <p className="text-[11px] text-stone-500">Call-Ahead Pickup</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-stone-900">Local Delivery</p>
              <p className="text-[11px] text-stone-500">Hot & Fresh to Door</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-stone-100 text-stone-800 flex items-center justify-center shrink-0">
              <PartyPopper className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-stone-900">Event Banquets</p>
              <p className="text-[11px] text-stone-500">Catering & Semi-Private</p>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Contact Details & Quick Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="scroll-reveal bg-white p-7 rounded-xl border border-stone-200/80 shadow-sm">
              <h3 className="font-bold text-lg text-stone-900 mb-4 font-['Raleway']">
                Call Us Directly
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                For fastest response on today&apos;s specials, immediate takeout orders, or table inquiries, call our front desk directly.
              </p>

              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="w-full py-3.5 px-4 rounded-lg bg-[#C0392B] hover:bg-[#96281B] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className="tabular-nums">{RESTAURANT_INFO.phone}</span>
              </a>

              <p className="text-[11px] text-stone-400 text-center mt-3">
                Clickable direct telephone link
              </p>
            </div>

            <div className="scroll-reveal bg-white p-7 rounded-xl border border-stone-200/80 shadow-sm space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">Physical Address</strong>
                  <span className="text-stone-600">{RESTAURANT_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">Operating Days</strong>
                  <span className="text-stone-600">Monday through Saturday (Closed Sundays)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">Demo Inquiry Inquiries</strong>
                  <span className="text-stone-600">{RESTAURANT_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="scroll-reveal bg-white p-7 sm:p-9 rounded-xl border border-stone-200/80 shadow-sm">
              <h3 className="font-bold text-lg text-stone-900 mb-1 font-['Raleway']">
                Send an Inquiry or Feedback
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Have questions about our Sicilian menu, gluten-friendly options, or catering?
              </p>

              {inquirySent ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-base text-stone-900">Message Received (Demo Mode)</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Thank you! In a live website, this dispatches directly to the restaurant manager.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setInquiryForm({ name: '', email: '', subject: 'General Question', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-stone-900 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-stone-50/50 focus:bg-white focus:outline-none focus:border-[#C0392B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-stone-50/50 focus:bg-white focus:outline-none focus:border-[#C0392B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={inquiryForm.subject}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm bg-stone-50/50 focus:bg-white focus:outline-none focus:border-[#C0392B]"
                    >
                      <option value="General Question">General Dining Question</option>
                      <option value="Catering Inquiry">Catering & Banquet Pans</option>
                      <option value="Private Dining">Semi-Private Space Reservation</option>
                      <option value="Dietary Question">Dietary / Allergen Questions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How can our staff help make your visit wonderful?"
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      required
                      className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-sm bg-stone-50/50 focus:bg-white focus:outline-none focus:border-[#C0392B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Demo Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
