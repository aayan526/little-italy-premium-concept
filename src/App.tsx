import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { MenuSection } from './components/MenuSection';
import { CateringPrivateDining } from './components/CateringPrivateDining';
import { Testimonials } from './components/Testimonials';
import { ReservationSection } from './components/ReservationSection';
import { HoursAndLocation } from './components/HoursAndLocation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { initLenis, initScrollAnimations } from './utils/motion';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = initLenis();

    // Initialize GSAP scroll animations & JS safety net
    initScrollAnimations();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1C1917] font-['Raleway'] antialiased selection:bg-[#C0392B] selection:text-white overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <OurStory />
        <MenuSection />
        <CateringPrivateDining />
        <Testimonials />
        <ReservationSection />
        <HoursAndLocation />
        <ContactSection />
      </main>

      {/* Footer with Demo Disclaimer & Hours Summary */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}
