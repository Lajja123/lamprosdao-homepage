"use client";
import Image from "next/image";
import vector1 from "@/assests/HeroSection1/Vector1.svg";
import vector2 from "@/assests/HeroSection1/Vector2.svg";

import { Typography } from "@/components/UI/Typography"; // adjust path

export default function Hero() {
  return (
    <section className="relative  h-[80vh] text-center ">
      <div className="w-full ">
        <Image
          src={vector1}
          alt="Vector graphic 1"
          className="relative -top-50 w-full -left-0 overflow-hidden z-0"
          priority
        />
      </div>
      <div className="w-full my-10 absolute top-20 flex flex-col items-center justify-center">
        <div className="my-10">
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase  text-[44px] md:text-[88px] lg:text-[128px]"
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
            className="uppercase text-[44px] md:text-[88px] lg:text-[128px]"
          >
            Of B<span className="font-bohemian wavy-letter">l</span>
            ockch
            <span className="font-bohemian wavy-letter">a</span>
            <span className="font-bohemian wavy-letter">i</span>n
          </Typography>
        </div>
        <div className="max-w-4xl mt-10 mx-auto">
          <Typography
            variant="subtitle2"
            align="center"
            weight="semibold"
            color="primary"
            className="bg-[#DFEAF9] font-ppmori px-6 py-3 rounded-xl inline-block shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          >
            Driving Mainstream Adoption, Empowering Developers, and Cultivating
            the Future of Web3
          </Typography>
        </div>{" "}
      </div>
    </section>
  );
}
