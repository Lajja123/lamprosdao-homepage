"use client";
import Image from "next/image";
import hand from "@/assests/HeroSection2/hand.svg";
import hugeicon from "@/assests/HeroSection2/hugeicons.svg";
import bgImage1 from "@/assests/HeroSection2/arrow-bg.png";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";

import clip from "@/assests/HeroSection2/clip.svg";
import arrow from "@/assests/HeroSection2/arrow.svg";
import Typography from "@/components/UI/Typography";

export default function Section2() {
  return (
    <div className="w-full bg-white">
      <div className="w-full overflow-x-auto">
        <div className="grid min-w-[1024px] grid-cols-10 grid-rows-6 border border-black">
          {/* Row 1 - Top cells */}
          <div className="border border-black  h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30 bg-[#D0FFAC] flex items-center justify-center">
            {/* Hand icon placeholder - replace with your image */}
            <Image
              src={hand}
              alt="hand"
              width={100}
              height={100}
              className=" p-4 mx-auto w-full h-full"
            />
          </div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>

          {/* Row 2 - Left cell and main content start */}
          <div className="border border-black   h-30"></div>
          <div className="col-span-8 row-span-4 border border-black flex items-center justify-center gap-8 p-12 bg-white">
            {/* Clip/Star Image */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Placeholder for clip image */}
                <Image
                  src={clip}
                  alt="clip"
                  width={100}
                  height={100}
                  className="w-full"
                />{" "}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-6 max-w-2xl">
              <Typography
                variant="body1"
                color="primary"
                weight="light"
                className="tracking-wide"
              >
                In The Vibrant World Of Blockchain, Lampros DAO Stands As A
                Beacon, Illuminating The Path For Innovators, Dreamers, And
                Builders. Founded With A Profound Vision To Seamlessly Merge
                Blockchain Technology With Mainstream Applications, We&apos;ve
                Steadily Grown Into A Robust Community Hub.
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                weight="light"
                className="tracking-wide"
              >
                Our Ethos Is Rooted In Fostering Growth – Both Of The Individual
                And The Collective. With Each Project We Support, Every
                Developer We Guide, And Each Event We Host, We Inch Closer To A
                Future Where Blockchain Isn&apos;t Just A Buzzword, But An
                Integral Part Of Our Digital Tapestry.
              </Typography>
            </div>
          </div>
          <div className="border border-black row-span-4 "></div>

          {/* Row 3 - Left arrow cell */}
          <div className="row-span-3 border border-black relative flex items-center justify-center">
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
              width={100}
              height={100}
              className="relative w-full h-full object-contain p-2 mx-auto"
            />{" "}
          </div>

          {/* Row 6 - Bottom cells */}
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30 relative flex items-center justify-center">
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
              width={100}
              height={100}
              className="relative w-full h-full object-contain p-2 mx-auto"
            />{" "}
          </div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
          <div className="border border-black   h-30"></div>
        </div>
      </div>
    </div>
  );
}
