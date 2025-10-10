"use client";
import Image from "next/image";
import vector1 from "@/assests/HeroSection1/Vector1.svg";
import vector2 from "@/assests/HeroSection1/Vector2.svg";
import clip1 from "@/assests/HeroSection1/clip1.svg";
import clip2 from "@/assests/HeroSection1/clip2.svg";

import { Typography } from "@/components/UI/Typography"; // adjust path

export default function Hero() {
  return (
    <>
      <div className="w-full h-max  relative ">
        <div className="z-50 absolute bottom-[10%] sm:bottom-[15%] md:bottom-[35%] lg:bottom-[35%] xl:bottom-[40%] w-full ">
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase leading-tight"
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
            className="uppercase leading-tight"
          >
            Of B<span className="font-bohemian wavy-letter">l</span>
            ockch
            <span className="font-bohemian wavy-letter">a</span>
            <span className="font-bohemian wavy-letter">i</span>n
          </Typography>
        </div>
        <div className=" w-full h-full">
          <Image
            src={clip1}
            alt="Clip1 background"
            className="h-auto w-full relative z-10"
            priority
          />
        </div>
      </div>
      <div className="flex items-center justify-center relative z-50 bottom-[40px] sm:bottom-[60px] md:bottom-[80px] lg:bottom-[100px] xl:bottom-[100px] w-full ">
        <Typography
          variant="subtitle2"
          align="center"
          weight="semibold"
          color="primary"
          className="bg-[#DFEAF9] font-ppmori px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl inline-block shadow-[0_1px_0_rgba(0,0,0,0.06)] "
        >
          Driving Mainstream Adoption, Empowering Developers, and Cultivating
          the Future of Web3
        </Typography>
      </div>
    </>
  );
}
