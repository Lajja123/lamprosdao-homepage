"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

// Alternative 1: Minimalist FAB (Floating Action Button)
export function MinimalistFAB({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const fabRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && fabRef.current) {
      gsap.fromTo(
        fabRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={fabRef}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#B3F4A6] rounded-full animate-ping opacity-20"></div>
        
        <div 
          className="w-14 h-14 bg-[#B3F4A6] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer hover:scale-110 flex items-center justify-center group"
          onClick={onClick}
        >
          <svg className="w-6 h-6 text-[#0B0B0B]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          
          {/* Expanding label */}
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-[#0B0B0B] text-[#B3F4A6] px-3 py-2 rounded-lg text-sm font-medium">
              Delegate Us
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-[#0B0B0B]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Alternative 2: Speech Bubble
export function SpeechBubble({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const bubbleRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && bubbleRef.current) {
      gsap.fromTo(
        bubbleRef.current,
        { scale: 0, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={bubbleRef}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#B3F4A6] rounded-full animate-ping opacity-20"></div>
        
        <div 
          className="relative bg-[#B3F4A6] text-[#0B0B0B] rounded-2xl px-4 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer hover:scale-105 group"
          onClick={onClick}
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">🤝</span>
            <span className="font-bold text-sm">Delegate Us</span>
          </div>
          
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#B3F4A6] transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
}

// Alternative 3: Floating Card
export function FloatingCard({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0, opacity: 0, x: 50 },
        { scale: 1, opacity: 1, x: 0, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cardRef}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#B3F4A6] rounded-lg animate-ping opacity-20"></div>
        
        <div 
          className="relative bg-white border-2 border-[#B3F4A6] rounded-lg p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer hover:scale-105 w-48"
          onClick={onClick}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B3F4A6] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#0B0B0B]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm text-[#0B0B0B]">Delegate</div>
              <div className="text-xs text-gray-600">Your tokens</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Alternative 4: Animated Text
export function AnimatedText({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);
  const textRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowText(true), 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={textRef}
      className="fixed bottom-8 right-8 z-50 hidden md:block"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#B3F4A6] rounded-full animate-ping opacity-20"></div>
        
        <div 
          className="relative bg-[#B3F4A6] text-[#0B0B0B] rounded-full px-6 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer hover:scale-105"
          onClick={onClick}
        >
          <div className="font-bold text-sm tracking-wide">
            {showText ? "Delegate Us" : "..."}
          </div>
        </div>
      </div>
    </div>
  );
}
