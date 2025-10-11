"use client";
import { useState } from "react";
import Image from "next/image";
import Clip from "@/assests/HeroSection3/Clip.svg";
import Clip2 from "@/assests/HeroSection3/Clip2.svg";
import { Typography } from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import Arrow from "../UI/Arrow";
import Grid, { GridCell } from "@/components/UI/Grid";
import researchContent from "@/data/researchContent.json";
import Link from "next/link";

export default function Research() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { researchItems } = researchContent;
  const currentItem = researchItems[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? researchItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === researchItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Grid
      variant="research"
      className="relative w-full bg-[#121212] text-white min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
    >
      {/* Main image - spans 3 columns, 5 rows */}
      <GridCell type="researchImage">
        <Image
          src={Clip}
          alt="Metallic sculpture"
          className="w-[40%] sm:w-[45%] md:w-[50%] lg:w-[55%] xl:w-[60%] mx-auto"
        />
      </GridCell>

      {/* Content section - spans 3 columns, 4 rows */}
      <GridCell type="researchContent">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 h-full flex flex-col justify-center">
          <Typography
            variant="h1"
            weight="normal"
            align="left"
            color="#E9FCE4"
            className="uppercase tracking-[-0.02em] leading-[0.95] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[60px] xl:text-[68px] 2xl:text-[76px]"
          >
            {currentItem.title}
          </Typography>

          <Typography
            variant="subtitle2"
            weight="normal"
            color="#C7C7C7"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed text-sm sm:text-base md:text-lg"
          >
            {currentItem.description}
          </Typography>

          <div>
            <Link
              href={currentItem.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="Know More" color="#D0FFAC" textColor="#000000" />
            </Link>
          </div>
        </div>
      </GridCell>

      {/* Arrow cell - row 5, column 4 */}
      <GridCell type="researchIcon" className="relative ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <button
          onClick={handlePrevious}
          className="w-full h-full flex items-center justify-center"
        >
          <Arrow
            direction="left"
            size={70}
            className="sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]"
          />
        </button>
      </GridCell>

      {/* Clip2 image - row 5, column 5 */}
      <GridCell type="researchIcon" className="col-start-5 row-start-5">
        <Image
          src={Clip2}
          alt="Emblem"
          className="p-3 sm:p-4 md:p-5 w-[60%] sm:w-[65%] md:w-[70%] lg:w-[75%]"
        />
      </GridCell>

      {/* Arrow right - row 5, column 6 */}
      <GridCell
        type="researchIcon"
        className="col-start-6 row-start-5 relative"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <button
          onClick={handleNext}
          className="w-full h-full flex items-center justify-center"
        >
          <Arrow
            direction="right"
            size={70}
            className="sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]"
          />
        </button>
      </GridCell>
    </Grid>
  );
}
