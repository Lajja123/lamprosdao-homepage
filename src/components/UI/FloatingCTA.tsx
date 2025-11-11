"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./Button";
import { gsap } from "gsap";
import { smoothScrollToSection } from "@/hooks/smoothScrollToSection";
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
      // Animate in with bounce
      gsap.fromTo(
        ctaRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.8,
          rotation: 10,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        }
      );
    }
  }, [isVisible]);

  // const handleClick = () => {
  //   if (pathname === "/governance") {
  //     // If already on governance page, scroll to delegate section
  //     router.push("#delegate-section");
  //   } else {
  //     // Navigate to governance page with hash
  //     router.push("/governance");
  //     router.push("/governance#delegate-section");
  //   }
  // };

  const handleMouseEnter = () => {
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        scale: 1.1,
        rotation: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div ref={ctaRef} className="fixed bottom-25 right-8 z-50 hidden md:block">
      <div className="relative group">
        {/* Pulse animation background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#DFF48D] to-[#A885CD] rounded-full animate-ping opacity-30"></div>

        {/* Playful sparkle effects */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#A885CD] rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#DFF48D] rounded-full animate-pulse opacity-70"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1 -left-3 w-1 h-1 bg-[#A885CD] rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Floating Badge Design */}
        <div
          className="relative bg-[#DFF48D] text-[#0B0B0B] rounded-full px-6 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer backdrop-blur-sm border-2 border-transparent group hover:shadow-[0_0_30px_rgba(168,133,205,0.4)] hover:brightness-110"
          onClick={() => smoothScrollToSection("/governance", "delegate")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Handshake Icon */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-wide">
              Delegate to Us
            </span>
          </div>

          {/* Expanding text on hover */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-gradient-to-r from-[#0B0B0B] to-[#1a1a1a] text-[#DFF48D] px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
              Delegate your tokens to us
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-[#0B0B0B]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
