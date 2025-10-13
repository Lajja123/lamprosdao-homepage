"use client";
import Image from "next/image";
import hand from "@/assests/HeroSection2/hand.svg";
import hugeicon from "@/assests/HeroSection2/hugeicons.svg";
import bgImage1 from "@/assests/HeroSection2/arrow-bg.png";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";

import clip from "@/assests/HeroSection2/clip.png";
import arrow from "@/assests/HeroSection2/arrow.svg";
import clip1 from "@/assests/HeroSection1/clip1.svg";
import Typography from "@/components/UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";

export default function Section2() {
  return (
    <Grid>
      {/* Row 1 - Top cells */}
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell
        type="withHeight"
        className="bg-[#D0FFAC] flex items-center justify-center"
      >
        {/* Hand icon placeholder - replace with your image */}
        <Image src={hand} alt="hand" className=" mx-auto" />
      </GridCell>
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />

      {/* Row 2 - Left cell and main content start */}
      <GridCell type="basic" className="p-10" />
      <GridCell type="spannedContent">
        <div className="flex items-center justify-between w-full h-full">
          {/* Image Section - Takes 1/3 of the width */}
          <div className="flex-shrink-0 w-1/3 h-full flex items-center justify-center">
            <Image
              src={clip}
              alt="clip"
              className="w-full h-full object-contain"
              quality={100}
            />
          </div>

          {/* Text Content - Takes 2/3 of the width */}
          <div className="flex-1 w-2/3 pl-8 space-y-4 lg:space-y-8">
            <Typography
              variant="subtitle2"
              color="primary"
              weight="semibold"
              className="tracking-wide font-ppmori"
            >
              In the vibrant world of blockchain, Lampros DAO stands as a
              beacon, illuminating the path for innovators, dreamers, and
              builders. Founded with a profound vision to seamlessly merge
              blockchain technology with mainstream applications, we've steadily
              grown into a robust community hub.
            </Typography>
            <Typography
              variant="subtitle2"
              color="primary"
              weight="bold"
              className="tracking-wide font-ppmori"
            >
              Our ethos is rooted in fostering growth - both of the individual
              and the collective. With each project we support, every developer
              we guide, and each event we host, we inch closer to a future where
              blockchain isn't just a buzzword, but an integral part of our
              digital tapestry.
            </Typography>
          </div>
        </div>
      </GridCell>
      <GridCell type="basic" rowSpan={4} />

      {/* Row 3 - Left arrow cell */}
      <GridCell type="arrow">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <Image
          src={arrow}
          alt="arrow"
          className="relative w-full h-full object-contain p-2 mx-auto"
        />
      </GridCell>

      {/* Row 6 - Bottom cells */}
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="icon">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <Image
          src={hugeicon}
          alt="hugeicon"
          className="relative w-full h-full object-contain p-2 mx-auto"
        />
      </GridCell>
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
      <GridCell type="withHeight" />
    </Grid>
  );
}
