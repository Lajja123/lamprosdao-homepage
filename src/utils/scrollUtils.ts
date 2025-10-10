import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Smooth scroll utility
export const smoothScrollTo = (target: string | HTMLElement, duration: number = 1) => {
  gsap.to(window, {
    duration: duration,
    scrollTo: target,
    ease: "power2.inOut"
  });
};

// Create a smooth scroll behavior for the entire page
export const initSmoothScroll = () => {
  // Add smooth scrolling to all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      if (target && target !== '#') {
        smoothScrollTo(target);
      }
    });
  });
};

// Performance-optimized scroll animations
export const createOptimizedScrollAnimation = (
  element: string | HTMLElement,
  animation: gsap.TweenVars,
  options: {
    trigger?: string | HTMLElement;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    once?: boolean;
  } = {}
) => {
  const {
    trigger = element,
    start = "top 80%",
    end = "bottom 20%",
    scrub = false,
    once = true
  } = options;

  return gsap.fromTo(element, 
    animation,
    {
      ...animation,
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        once,
        toggleActions: once ? "play none none none" : "play none none reverse",
        // Performance optimizations
        fastScrollEnd: true,
        anticipatePin: 1,
        refreshPriority: -1
      }
    }
  );
};

// Batch animations for better performance
export const batchAnimate = (
  elements: (string | HTMLElement)[],
  animation: gsap.TweenVars,
  stagger: number = 0.1
) => {
  return gsap.fromTo(elements, 
    animation,
    {
      ...animation,
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: 0.8,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Parallax effect with performance optimization
export const createParallax = (
  element: string | HTMLElement,
  speed: number = 0.5,
  direction: 'vertical' | 'horizontal' = 'vertical'
) => {
  const property = direction === 'vertical' ? 'yPercent' : 'xPercent';
  const value = direction === 'vertical' ? -50 * speed : -30 * speed;

  return gsap.to(element, {
    [property]: value,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      // Performance optimizations
      fastScrollEnd: true,
      anticipatePin: 1
    }
  });
};

// Intersection Observer for better performance on mobile
export const createIntersectionAnimation = (
  element: string | HTMLElement,
  animation: gsap.TweenVars,
  threshold: number = 0.1
) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            ...animation,
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  observer.observe(el);
  return observer;
};

// Cleanup function for ScrollTrigger instances
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Refresh ScrollTrigger (useful after dynamic content changes)
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
