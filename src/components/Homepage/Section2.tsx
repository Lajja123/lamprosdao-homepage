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
        {/* Background clip1 */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${clip1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Clip/Star Image */}
        <div className="flex-shrink-0 relative z-10">
          <div className="relative w-full h-auto ">
            {/* Placeholder for clip image */}
            <Image
              src={clip}
              alt="clip"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-4 lg:space-y-8 max-w-3xl relative z-10">
          <Typography
            variant="subtitle2"
            color="primary"
            weight="bold"
            className="tracking-wide  font-ppmori"
          >
            In The Vibrant World Of Blockchain, Lampros DAO Stands As A Beacon,
            Illuminating The Path For Innovators, Dreamers, And Builders.
            Founded With A Profound Vision To Seamlessly Merge Blockchain
            Technology With Mainstream Applications, We&apos;ve Steadily Grown
            Into A Robust Community Hub.
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary"
            weight="bold"
            className="tracking-wide  font-ppmori"
          >
            Our Ethos Is Rooted In Fostering Growth – Both Of The Individual And
            The Collective. With Each Project We Support, Every Developer We
            Guide, And Each Event We Host, We Inch Closer To A Future Where
            Blockchain Isn&apos;t Just A Buzzword, But An Integral Part Of Our
            Digital Tapestry.
          </Typography>
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
