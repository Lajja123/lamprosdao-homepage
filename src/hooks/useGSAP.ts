import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return elementRef;
};

// Animation presets for common use cases
export const animationPresets = {
  // Fade in from bottom
  fadeInUp: {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  },
  
  // Fade in from left
  fadeInLeft: {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  },
  
  // Fade in from right
  fadeInRight: {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  },
  
  // Scale in
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  },
  
  // Stagger animation for multiple elements
  stagger: {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  }
};

// Utility function to create scroll-triggered animations
export const createScrollAnimation = (
  element: string | HTMLElement,
  animation: gsap.TweenVars,
  scrollTrigger?: ScrollTrigger.Vars
) => {
  return gsap.fromTo(element, 
    animation,
    {
      ...animation,
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...scrollTrigger
      }
    }
  );
};

// Text reveal animation
export const textReveal = (element: string | HTMLElement, delay: number = 0) => {
  const tl = gsap.timeline({ delay });
  
  tl.fromTo(element, 
    { 
      y: 100, 
      opacity: 0,
      rotationX: 90,
      transformOrigin: "0% 50% -50px",
      transformStyle: "preserve-3d"
    },
    { 
      y: 0, 
      opacity: 1,
      rotationX: 0,
      duration: 1.2,
      ease: "power3.out"
    }
  );
  
  return tl;
};

// Wavy text animation for special letters
export const wavyText = (element: string | HTMLElement) => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  
  tl.to(element, {
    y: -10,
    duration: 0.8,
    ease: "power2.inOut"
  });
  
  return tl;
};

// Hover animations
export const hoverScale = (element: string | HTMLElement, scale: number = 1.05) => {
  const hoverTl = gsap.timeline({ paused: true });
  
  hoverTl.to(element, {
    scale: scale,
    duration: 0.3,
    ease: "power2.out"
  });
  
  return hoverTl;
};

// Parallax effect
export const parallax = (element: string | HTMLElement, speed: number = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};
