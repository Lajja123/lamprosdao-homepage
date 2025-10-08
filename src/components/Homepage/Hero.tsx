"use client";
import Image from "next/image";
import vector1 from "@/assests/HeroSection1/Vector1.svg";
import vector2 from "@/assests/HeroSection1/Vector2.svg";

import { Typography } from "@/components/UI/Typography"; // adjust path

export default function Hero() {
  return (
    <section className="relative  text-center overflow-hidden">
      {/* Vector Background - Responsive */}
      {/* <div className="absolute -top-[300px] left-0  h-max w-full ">
        <Image
          src={vector1}
          alt="Vector graphic 1"
          className="object-contain object-center w-full h-auto aspect-auto"
          priority
        />
      </div> */}

      {/* Content Container - Responsive */}
      <div className="w-full  my-30 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase text-[28px] sm:text-[36px] md:text-[64px] lg:text-[88px] xl:text-[128px] leading-tight"
          >
            The Be
            <span className="uppercase font-bohemian wavy-letter">a</span>
            con
          </Typography>
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase text-[28px] sm:text-[36px] md:text-[64px] lg:text-[88px] xl:text-[128px] leading-tight"
          >
            Of B<span className="font-bohemian wavy-letter">l</span>
            ockch
            <span className="font-bohemian wavy-letter">a</span>
            <span className="font-bohemian wavy-letter">i</span>n
          </Typography>
        </div>

        {/* Tagline - Responsive */}
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <Typography
            variant="subtitle2"
            align="center"
            weight="semibold"
            color="primary"
            className="bg-[#DFEAF9] font-ppmori px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl inline-block shadow-[0_1px_0_rgba(0,0,0,0.06)] text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Driving Mainstream Adoption, Empowering Developers, and Cultivating
            the Future of Web3
          </Typography>
        </div>
      </div>
    </section>
  );
}
