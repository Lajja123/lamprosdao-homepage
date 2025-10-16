"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from "@/assests/HeroSection1/hero.png";

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
      <div ref={heroRef} className="w-full h-max relative ">
        {/* Background Image */}
        <div ref={imageRef} className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src={hero}
            alt="Hero background"
            className="h-full w-full object-cover"
            fill
            sizes="100vw"
          />
        </div>
        
        {/* Title Section */}
        <div 
          ref={titleRef}
          className="relative z-10 w-full py-7 "
        >
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase leading-tight font-ppmori "
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
            className="uppercase leading-tight font-ppmori "
          >
            Of B
            <span 
              ref={el => { if (el) wavyLettersRef.current[1] = el; }}
              className="font-bohemian wavy-letter inline-block"
            >
              l
            </span>
            ockch
            <span 
              ref={el => { if (el) wavyLettersRef.current[2] = el; }}
              className="font-bohemian wavy-letter inline-block"
            >
              a
            </span>
            <span 
              ref={el => { if (el) wavyLettersRef.current[3] = el; }}
              className="font-bohemian wavy-letter inline-block"
            >
              i
            </span>
            n
          </Typography>
        </div>
        <div 
        ref={subtitleRef}
        className="flex items-center justify-center relative md:top-[30px] w-[80%] mx-auto top-0 sm:mb-40 mb-10"
      >
        <Typography
          variant="h6"
          align="center"
          weight="semibold"
          color="primary"
          className="bg-[#DFEAF9] font-ppmori px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl  shadow-[0_1px_0_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300"
        >
          Driving Mainstream Adoption, Empowering Developers, and Cultivating
          the Future of Web3
        </Typography>
      </div>
      </div>
      
    </>
  );
}
