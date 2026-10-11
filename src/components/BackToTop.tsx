import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToElement } from '../utils/motion';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => scrollToElement('hero')}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#C0392B] text-white shadow-lg hover:bg-[#96281B] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C0392B]"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
