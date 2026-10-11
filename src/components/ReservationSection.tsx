import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, CheckCircle2, AlertCircle, Utensils, Sparkles, RefreshCw } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  diningType: 'dine_in' | 'celebration_private' | 'catering_inquiry';
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  date?: string;
  time?: string;
  partySize?: string;
}

export const ReservationSection: React.FC = () => {
  // Tomorrow's date as default
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    date: defaultDateStr,
    time: '18:30',
    partySize: '4',
    diningType: 'dine_in',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    referenceCode: string;
    details: FormState;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a reservation date.';
    } else {
      // Check if selected date is Sunday
      const chosenDay = new Date(formData.date + 'T12:00:00').getDay();
      if (chosenDay === 0) {
        newErrors.date = 'Little Italy is closed on Sundays. Please choose Monday through Saturday.';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred seating time.';
    }

    const numGuests = parseInt(formData.partySize, 10);
    if (!numGuests || numGuests < 1) {
      newErrors.partySize = 'Party size must be at least 1 guest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous validation & client-side booking generation
    setTimeout(() => {
      const randomCode = `LIT-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBooking({
        referenceCode: randomCode,
        details: { ...formData },
      });
      setIsSubmitting(false);
    }, 450);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: defaultDateStr,
      time: '18:30',
      partySize: '4',
      diningType: 'dine_in',
      notes: '',
    });
    setErrors({});
  };

  return (
    <section id="reservations" className="py-24 bg-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5">
            <div className="scroll-reveal flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C0392B] mb-2">
              <span>Table Booking & Special Orders</span>
              <span aria-hidden="true">·</span>
              <span>Online Reservation</span>
            </div>
            <h2 className="scroll-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight font-['Raleway']">
              Reserve Your Table at Little Italy
            </h2>
            <p className="scroll-reveal text-stone-600 mt-4 text-base leading-relaxed font-normal">
              Join us for authentic Sicilian cooking at 824 Afterglow St. We accommodate intimate dinners, family celebrations, and large banquet gatherings.
            </p>

            <div className="scroll-reveal mt-8 space-y-4 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/70 border border-stone-200">
                <Clock className="w-5 h-5 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">Dining Schedule:</strong>
                  <span>Mon–Thu 11am–9pm · Fri 11am–10pm · Sat 12pm–10pm · Sun Closed</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/70 border border-stone-200">
                <Phone className="w-5 h-5 text-[#5B6A42] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">Same-Day Bookings:</strong>
                  <span>
                    For reservations within the next 2 hours or parties larger than 12, please call us directly at{' '}
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneClean}`}
                      className="font-bold text-[#C0392B] underline"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/70 border border-stone-200">
                <Sparkles className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">Special Celebrations:</strong>
                  <span>
                    Birthdays, anniversaries, or business banquets? Let us know in the notes below and we&apos;ll prepare custom table arrangements.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form or Confirmation Card */}
          <div className="lg:col-span-7">
            <div className="scroll-reveal bg-white rounded-2xl p-7 sm:p-9 shadow-lg border border-stone-200/80">
              {confirmedBooking ? (
                /* End-to-End Confirmed State */
                <div className="text-center py-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#C0392B]">
                    Reservation Requested (Demo Verified)
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-2 font-['Raleway']">
                    We Look Forward to Welcoming You!
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6">
                    Your table request has been registered in the system under booking confirmation{' '}
                    <strong className="font-mono text-[#C0392B] font-bold">
                      {confirmedBooking.referenceCode}
                    </strong>
                    .
                  </p>

                  {/* Summary Card */}
                  <div className="bg-[#FAF6F0] rounded-xl p-5 border border-stone-200 text-left text-xs sm:text-sm text-stone-800 space-y-2 mb-6">
                    <div className="flex justify-between border-b border-stone-200 pb-2">
                      <span className="text-stone-500 font-medium">Guest Name:</span>
                      <strong className="text-stone-900">{confirmedBooking.details.fullName}</strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-200 pb-2">
                      <span className="text-stone-500 font-medium">Contact Phone:</span>
                      <strong className="text-stone-900">{confirmedBooking.details.phone}</strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-200 pb-2">
                      <span className="text-stone-500 font-medium">Date & Time:</span>
                      <strong className="text-stone-900">
                        {confirmedBooking.details.date} at {confirmedBooking.details.time}
                      </strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-200 pb-2">
                      <span className="text-stone-500 font-medium">Party Size:</span>
                      <strong className="text-stone-900">
                        {confirmedBooking.details.partySize} Guests ({confirmedBooking.details.diningType === 'dine_in' ? 'Standard Dining' : 'Private/Catering'})
                      </strong>
                    </div>
                    {confirmedBooking.details.notes && (
                      <div className="pt-1">
                        <span className="text-stone-500 font-medium block">Special Notes:</span>
                        <p className="italic text-stone-700 mt-0.5">
                          &ldquo;{confirmedBooking.details.notes}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-3.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs text-left mb-6">
                    <strong>Demo Simulation Notice:</strong> In a production deployment, this triggers instant SMS confirmation to the guest and assigns the table in the host stand POS.
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Book Another Table
                    </button>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneClean}`}
                      className="px-5 py-2.5 rounded-lg border border-stone-300 hover:border-[#C0392B] text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Call Host: {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-stone-200 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-stone-900 font-['Raleway']">
                      Book a Table or Request Catering
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      No deposit required for standard dining. Instant confirmation.
                    </p>
                  </div>

                  {/* Dining Type Segmented Control */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Type of Dining
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, diningType: 'dine_in' })}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          formData.diningType === 'dine_in'
                            ? 'bg-[#C0392B] text-white border-[#C0392B]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Dine-In
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, diningType: 'celebration_private' })}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          formData.diningType === 'celebration_private'
                            ? 'bg-[#C0392B] text-white border-[#C0392B]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Celebration Room
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, diningType: 'catering_inquiry' })}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          formData.diningType === 'catering_inquiry'
                            ? 'bg-[#C0392B] text-white border-[#C0392B]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Catering Order
                      </button>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Maria Visocaro"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-stone-300 focus:border-[#C0392B]'
                        }`}
                        required
                      />
                      {errors.fullName && (
                        <p className="text-red-600 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="(210) 000-0000"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-stone-300 focus:border-[#C0392B]'
                        }`}
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date, Time, Party Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: undefined });
                        }}
                        className={`w-full px-3 py-2.5 rounded-lg border text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-none ${
                          errors.date ? 'border-red-500' : 'border-stone-300 focus:border-[#C0392B]'
                        }`}
                        required
                      />
                      {errors.date && (
                        <p className="text-red-600 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.date}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Time Slot *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-none focus:border-[#C0392B]"
                      >
                        <option value="11:30">11:30 AM (Lunch)</option>
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="13:00">1:00 PM (Lunch)</option>
                        <option value="17:00">5:00 PM (Early Dinner)</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM (Dinner)</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM (Prime Dinner)</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Guests *
                      </label>
                      <select
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-none focus:border-[#C0392B]"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8">8 Guests (Large Table)</option>
                        <option value="10">10 Guests (Banquet)</option>
                        <option value="15">15+ Guests (Private Area)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g., Anniversary celebration, high chair needed, wine preference, outdoor vs indoor..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-sm text-stone-900 bg-stone-50/50 focus:bg-white focus:outline-none focus:border-[#C0392B]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-[#C0392B] hover:bg-[#96281B] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Confirming Table...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Confirm Reservation Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-stone-500 text-center">
                    Instant confirmation. You can also call us directly at{' '}
                    <a href={`tel:${RESTAURANT_INFO.phoneClean}`} className="font-semibold underline">
                      {RESTAURANT_INFO.phone}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
