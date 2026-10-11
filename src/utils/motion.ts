import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export const initLenis = (): Lenis | null => {
  if (typeof window === 'undefined') return null;

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return null;
  }

  try {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return lenisInstance;
  } catch (err) {
    console.warn('Lenis initialization skipped:', err);
    return null;
  }
};

export const getLenis = () => lenisInstance;

export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Always register GSAP plugin
  gsap.registerPlugin(ScrollTrigger);

  const revealElements = document.querySelectorAll<HTMLElement>('.scroll-reveal');

  if (prefersReduced) {
    revealElements.forEach((el) => {
      el.classList.add('force-revealed');
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.visibility = 'visible';
    });
    return;
  }

  // Snappy ScrollTrigger scroll reveals (trigger threshold ~0.05 per user brief)
  revealElements.forEach((el) => {
    // Avoid double-binding
    if (el.dataset.animInitialized === 'true') return;
    el.dataset.animInitialized = 'true';

    const delay = parseFloat(el.dataset.delay || '0');
    const distance = parseFloat(el.dataset.distance || '24');
    const scale = parseFloat(el.dataset.scale || '1');

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: distance,
        scale: scale === 1 ? 1 : 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%', // threshold ~0.05 from bottom
          once: true,
          onEnter: () => {
            el.classList.add('force-revealed');
          },
        },
      }
    );
  });

  // ==========================================
  // CRITICAL SAFETY NET (USER MANDATE):
  // "every scroll reveal must include a JS fallback safety net —
  // a setTimeout (~3s) plus getBoundingClientRect viewport check
  // that force-reveals any in-viewport element still hidden,
  // so no section can ever stay invisible if the observer fails."
  // ==========================================
  const checkViewportVisibility = () => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If element is inside or near the viewport (or if it's already above viewport)
      if (rect.top <= windowHeight + 100) {
        el.classList.add('force-revealed');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.visibility = 'visible';
      }
    });
  };

  // Immediate check for elements in initial viewport
  checkViewportVisibility();

  // 1-second safety check
  setTimeout(checkViewportVisibility, 1000);

  // 3-second absolute guarantee: reveals everything in or above viewport,
  // and marks all elements safe so nothing ever gets stuck at opacity: 0
  setTimeout(() => {
    checkViewportVisibility();
    revealElements.forEach((el) => {
      // If still hidden by any edge case, restore natural visibility
      const computed = window.getComputedStyle(el);
      if (computed.opacity === '0' || computed.visibility === 'hidden') {
        el.classList.add('force-revealed');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.visibility = 'visible';
      }
    });
  }, 3000);
};

export const scrollToElement = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -80 });
  } else {
    const yOffset = -80;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
