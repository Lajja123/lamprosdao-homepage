"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from "@/assests/HeroSection1/hero.png";
import clip from "@/assests/common/clip.svg";

import { Typography } from "@/components/UI/Typography"; // adjust path

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Clip Image - Top Center */}
      <div className="absolute top-12 w-full hidden sm:block z-0">
        <Image
          src={clip}
          alt="Clip decoration"
          className="w-full"
          quality={100}
        />
      </div>

      <div ref={heroRef} className="w-full h-max relative ">
        {/* Background Image */}
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full z-0 hidden md:block top-5"
        >
          <Image
            src={hero}
            alt="Hero background"
            className="h-full w-full "
            fill
            sizes="100vw"
          />
        </div>

        {/* Title Section */}
        <div className="relative  w-full md:pt-20 lg:pt-40 2xl:pt-50 lg:pb-10 md:pb-20 py-7 sm:pt-20 sm:pb-7 ">
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase leading-tight font-ppmori "
          >
            The Be
            <span className="uppercase font-bohemian wavy-letter inline-block">
              a
            </span>
            con
          </Typography>
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase  font-ppmori "
          >
            Of B
            <span className="font-bohemian wavy-letter inline-block">l</span>
            ockch
            <span className="font-bohemian wavy-letter inline-block">a</span>
            <span className="font-bohemian wavy-letter inline-block">i</span>n
          </Typography>
        </div>
        <div className="flex items-center justify-center relative md:top-0 w-[80%] mx-auto top-0 mb-10 md:mb-20 2xl:mb-40 md:mt-20">
          <Typography
            variant="h6"
            align="center"
            weight="semibold"
            color="primary"
            className="bg-[#DFEAF9] font-ppmori px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl  "
          >
            Driving Mainstream Adoption, Empowering Developers, and Cultivating
            the Future of Web3
          </Typography>
        </div>
      </div>
    </>
  );
}
