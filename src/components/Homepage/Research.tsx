"use client";
import Image from "next/image";
import Clip from "@/assests/HeroSection3/Clip.svg";
import Clip2 from "@/assests/HeroSection3/Clip2.svg";
import ArrowLeft from "@/assests/common/arrow1.svg";
import ArrowRight from "@/assests/common/arrow1.svg";
import { Typography } from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import Arrow from "../UI/Arrow";

export default function Research() {
  return (
    <section className="relative w-full bg-[#121212] text-white">
      <div className="w-full overflow-x-auto">
        <div className="grid min-w-[768px] grid-cols-6 grid-rows-5">
          <div className="col-span-3 row-span-5 flex items-center">
            <Image
              src={Clip}
              alt="Metallic sculpture"
              className=" w-[50%] mx-auto"
            />
          </div>
          <div className="col-span-3 row-span-4 border border-[#FFFFFF]">
            <div className=" space-y-6 px-4 md:px-6 lg:px-8 py-16 md:py-24">
              <Typography
                variant="h1"
                weight="normal"
                align="left"
                color="#E9FCE4"
                className="uppercase tracking-[-0.02em] leading-[0.95] text-[40px] md:text-[68px] lg:text-[76px]"
              >
                Govern
                <span className="uppercase font-bohemian wavy-letter">a</span>
                nce &
                <br />
                Rese
                <span className="uppercase font-bohemian wavy-letter">a</span>
                rch
              </Typography>

              <Typography
                variant="subtitle2"
                weight="normal"
                color="#C7C7C7"
                className="max-w-xl leading-relaxed"
              >
                Empowering Web3 contributors through workshops, seminars, and
                hackathons. Learn, build, and engage with DAOs like Arbitrum &
                Optimism.
              </Typography>

              <div>
                <Button label="Know More" color="#B3F4A6" textColor="#0B0B0B" />
              </div>
            </div>
          </div>

          <div className="col-start-4 row-start-5  border border-[#FFFFFF] relative flex items-center justify-center">
            <div
              style={{
                backgroundImage: `url(${bgImage2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>{" "}
            <Arrow direction="right" size={70} />
          </div>

          <div className="col-start-5 w-full row-start-5 border border-[#FFFFFF] flex items-center justify-center">
            <Image src={Clip2} alt="Emblem" className="w-[70%]" />
          </div>
          <div className="col-start-6 row-start-5 border border-[#FFFFFF] flex items-center justify-center">
            {" "}
            <div
              style={{
                backgroundImage: `url(${bgImage2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={ArrowRight}
              alt="Next"
              width={70}
              height={70}
              className="relative object-contain p-3 mx-auto border border-[#FFFFFF] rounded-full"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
