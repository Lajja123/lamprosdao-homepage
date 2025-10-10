"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'stagger';
  delay?: number;
  duration?: number;
  trigger?: string;
  className?: string;
  once?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  trigger = 'top 80%',
  className = '',
  once = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Define animation presets
    const animations = {
      fadeInUp: { y: 50, opacity: 0 },
      fadeInLeft: { x: -50, opacity: 0 },
      fadeInRight: { x: 50, opacity: 0 },
      scaleIn: { scale: 0.8, opacity: 0 },
      stagger: { y: 30, opacity: 0 }
    };

    const initialProps = animations[animation];

    // Set initial state
    gsap.set(section, initialProps);

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: trigger,
        end: 'bottom 20%',
        toggleActions: once ? 'play none none none' : 'play none none reverse',
        once: once,
        // Performance optimizations
        fastScrollEnd: true,
        anticipatePin: 1,
        refreshPriority: -1
      }
    });

    if (animation === 'stagger' && section.children.length > 0) {
      // Stagger animation for multiple children
      tl.to(Array.from(section.children), {
        y: 0,
        opacity: 1,
        duration: duration,
        stagger: 0.1,
        ease: "power2.out",
        delay: delay
      });
    } else {
      // Single element animation
      tl.to(section, {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration: duration,
        ease: "power2.out",
        delay: delay
      });
    }

    return () => {
      tl.kill();
    };
  }, [animation, delay, duration, trigger, once]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
