"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vector1 from "@/assests/HeroSection1/Vector1.svg";
import vector2 from "@/assests/HeroSection1/Vector2.svg";
import clip1 from "@/assests/HeroSection1/clip1.svg";
import clip2 from "@/assests/HeroSection1/clip2.svg";

import { Typography } from "@/components/UI/Typography"; // adjust path

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wavyLettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, subtitleRef.current], { 
        opacity: 0, 
        y: 100,
        rotationX: 90,
        transformOrigin: "0% 50% -50px",
        transformStyle: "preserve-3d"
      });
      
      gsap.set(imageRef.current, { 
        opacity: 0, 
        scale: 0.8,
        y: 50
      });

      // Create main timeline
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate background image first
      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Animate title with 3D flip effect
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8");

      // Animate subtitle
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.6");

      // Add wavy animation to special letters
      wavyLettersRef.current.forEach((letter, index) => {
        if (letter) {
          gsap.to(letter, {
            y: -15,
            duration: 0.8,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: 2 + (index * 0.2)
          });
        }
      });

      // Add subtle parallax effect to background
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={heroRef} className="w-full h-max relative overflow-hidden">
        <div 
          ref={titleRef}
          className="z-50 absolute bottom-[10%] sm:bottom-[15%] md:bottom-[35%] lg:bottom-[35%] xl:bottom-[40%] w-full"
        >
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase leading-tight font-ppmori"
          >
            The Be
            <span 
              ref={el => { if (el) wavyLettersRef.current[0] = el; }}
              className="uppercase font-bohemian wavy-letter inline-block"
            >
              a
            </span>
            con
          </Typography>
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase leading-tight font-ppmori"
          >
            Of B
            <span 
              className="font-bohemian wavy-letter"
            >
              l
            </span>
            ockch
            <span 
              className="font-bohemian wavy-letter inline-block"
            >
              a
            </span>
            <span 
              className="font-bohemian wavy-letter inline-block"
            >
              i
            </span>
            n
          </Typography>
        </div>
        <div ref={imageRef} className="w-full h-full">
          <Image
            src={clip1}
            alt="Clip1 background"
            className="h-auto w-full relative z-10"
            priority
          />
        </div>
      </div>
      <div 
        ref={subtitleRef}
        className="flex items-center justify-center relative z-50 bottom-[40px] sm:bottom-[60px] md:bottom-[80px] lg:bottom-[100px] xl:bottom-[100px] w-full"
      >
        <Typography
          variant="subtitle2"
          align="center"
          weight="semibold"
          color="primary"
          className="bg-[#DFEAF9] font-ppmori px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl inline-block shadow-[0_1px_0_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300"
        >
          Driving Mainstream Adoption, Empowering Developers, and Cultivating
          the Future of Web3
        </Typography>
      </div>
    </>
  );
}
