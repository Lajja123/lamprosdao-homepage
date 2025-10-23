"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./Button";
import { gsap } from "gsap";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ctaRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show CTA after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && ctaRef.current) {
      // Animate in
      gsap.fromTo(
        ctaRef.current,
        { 
          x: 100, 
          opacity: 0,
          scale: 0.8
        },
        { 
          x: 0, 
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [isVisible]);

  const handleClick = () => {
    if (pathname === "/governance") {
      // If already on governance page, scroll to delegate section
      const delegateSection = document.getElementById("delegate-section");
      if (delegateSection) {
        delegateSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      // Navigate to governance page with hash
      router.push("/governance#delegate-section");
    }
  };

  if (!isVisible) return null;

  return (
    <div
      ref={ctaRef}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <div className="relative group">
        {/* Pulse animation background */}
        <div className="absolute inset-0 bg-[#B3F4A6] rounded-full animate-ping opacity-20"></div>
        
        {/* Floating Badge Design */}
        <div 
          className="relative bg-[#B3F4A6] text-[#0B0B0B] rounded-full px-6 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm border-2 border-transparent hover:border-[#B3F4A6] group"
          onClick={handleClick}
        >
          {/* Handshake Icon */}
          <div className="flex items-center gap-2">
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="font-bold text-sm tracking-wide">Delegate</span>
          </div>
          
          {/* Expanding text on hover */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-[#0B0B0B] text-[#B3F4A6] px-3 py-2 rounded-lg text-sm font-medium">
              Delegate your tokens to us
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-[#0B0B0B]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
