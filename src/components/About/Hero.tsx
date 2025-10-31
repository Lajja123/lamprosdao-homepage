"use client";
import Image from "next/image";
import about from "@/assests/AboutUs/about.png";
import Typography from "@/components/UI/Typography";
import vision from "@/assests/AboutUs/vision.png";
import mission from "@/assests/AboutUs/mission.png";

export default function Hero() {
  return (
    <>
      {/* Main About Section */}
      <div className="flex flex-col lg:grid lg:grid-cols-10 lg:grid-rows-6">
        {/* Image Section */}
        <div className="lg:col-span-4 lg:row-span-6 w-full p-4 md:p-6 lg:p-10 border border-black bg-[#D0FFAC] order-1 lg:order-1">
          <Image
            src={about}
            alt="Metallic sculpture"
            className="w-[80%] h-auto mx-auto max-h-[400px] lg:max-h-none lg:h-full object-contain"
            quality={100}
          />
        </div>

        {/* Text Section */}
        <div className="lg:col-span-6 lg:row-span-6 lg:col-start-5 border border-black p-4 md:p-6 lg:p-10 flex flex-col justify-center order-2 lg:order-2">
          <div className="">
            <Typography
              variant="h1"
              color="primary"
              weight="semibold"
              align="left"
              className="font-ppmori uppercase  leading-tight md:hidden block"
            >
              About{" "}
              <span className="uppercase font-bohemian wavy-letter">U</span>S
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="tracking-wider font-ppmori leading-1.5 mx-auto px-2 md:px-6 lg:px-10 py-4 md:py-6 lg:py-10 text-sm md:text-base lg:text-lg"
            >
              <div>
                Lampros DAO was founded by a group of individuals with a shared
                vision for governance and decentralization. Our north star is to
                support and grow Ethereum, and we contribute to this goal by
                actively participating in various Layer 2s.
              </div>
              <div className="mt-3 md:mt-4">
                We believe blockchain is not just about technology, it's about
                the people, communities, and ideas that drive it forward. Our
                ethos is rooted in fostering growth, both for individuals and
                the ecosystem, ensuring that governance, research, and education
                remain accessible to all. Through proposal discussions,
                governance research, and ecosystem-building, we help shape the
                future of decentralized networks.
              </div>
              <div className="mt-3 md:mt-4">
                At Lampros DAO, we are supporting a movement, a movement where
                public goods, developer support, and open collaboration take
                centre stage. We envision a future where blockchain technology
                seamlessly integrates into everyday life, making Web3 more
                inclusive, sustainable, and impactful.
              </div>
              <div className="mt-3 md:mt-4">
                We are building on this foundation. Join us as we shape the
                future of decentralized governance and Ethereum's Layer 2
                ecosystems.
              </div>
            </Typography>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-[#1A1A1A]">
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden">
          {/* Vision Section */}
          <div className="flex flex-col">
            {/* <div className="bg-[#DFCDF2] border border-[#FFFFFF] p-4"></div> */}
            <div className="border border-[#FFFFFF] p-4 flex items-center justify-center">
              <Typography
                variant="h3"
                weight="semibold"
                align="center"
                color="offset"
                className="uppercase font-csbohemian tracking-wider leading-[0.95] "
              >
                v<span className="uppercase font-bohemian wavy-letter">i</span>s
                <span className="uppercase font-bohemian wavy-letter">i</span>on
              </Typography>
            </div>
            <div className="border border-[#FFFFFF] p-4 flex items-center justify-center w-full">
              <Image
                src={vision}
                alt="Vision illustration"
                quality={100}
                className=" object-contain w-full  mx-auto"
              />
            </div>
            <div className="border border-[#FFFFFF] p-4 flex items-center justify-center">
              <Typography
                variant="body2"
                color="white"
                weight="normal"
                align="center"
                className="tracking-wider font-ppmori text-sm md:text-base leading-1.5 "
              >
                To be the global nexus where blockchain technology seamlessly
                integrates into everyday life, creating a decentralized and
                empowered future for all.
              </Typography>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col">
            <div className="border border-[#FFFFFF] p-4 flex items-center justify-center">
              <Image
                src={mission}
                alt="Mission illustration"
                quality={100}
                className="w-full object-contain"
              />
            </div>
            <div className="border border-[#FFFFFF] p-4 flex items-center justify-center">
              <Typography
                variant="h3"
                weight="semibold"
                align="center"
                color="offset"
                className="uppercase tracking-wider leading-[0.95] "
              >
                m<span className="uppercase font-bohemian wavy-letter">i</span>
                ss
                <span className="uppercase font-bohemian wavy-letter">i</span>on
              </Typography>
            </div>
            <div className="border border-[#FFFFFF] p-4 flex items-center justify-center">
              <Typography
                variant="body2"
                color="white"
                weight="normal"
                align="center"
                className="tracking-wider font-ppmori text-sm md:text-base leading-[0.90] "
              >
                Lampros DAO is dedicated to cultivating trailblazing web3
                leaders, amplifying open-source breakthroughs across multiple
                blockchain terrains, and building a community bound by shared
                growth and decentralized principles.
              </Typography>
            </div>
            {/* <div className="bg-[#DFCDF2] border border-[#FFFFFF] p-4"></div> */}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-10 lg:grid-rows-6">
          <div className="bg-[#DFCDF2] border border-[#FFFFFF] p-5"></div>
          <div className="col-span-4 p-5 border border-[#FFFFFF] flex items-center justify-center">
            <Typography
              variant="h3"
              weight="semibold"
              align="center"
              color="offset"
              className="uppercase font-csbohemian tracking-wider leading-[0.95]"
            >
              v<span className="uppercase font-bohemian wavy-letter">i</span>s
              <span className="uppercase font-bohemian wavy-letter">i</span>on
            </Typography>
          </div>
          <div className="col-span-4 row-span-3 col-start-6 border border-[#FFFFFF] p-5 w-full flex items-center justify-center">
            <Image
              src={vision}
              alt="Vision illustration"
              quality={100}
              className="w-16 h-16 md:w-full md:h-100 mx-auto object-contain"
            />
          </div>
          <div className="row-span-3 col-start-10 border border-[#FFFFFF]"></div>
          <div className="row-span-2 row-start-2 border border-white"></div>
          <div className="col-span-4 row-span-2 row-start-2 flex items-center justify-center">
            <Typography
              variant="body2"
              color="white"
              weight="normal"
              className="tracking-wider font-ppmori text-xl leading-1.5 p-10"
            >
              To be the global nexus where blockchain technology seamlessly
              integrates into everyday life, creating a decentralized and
              empowered future for all.
            </Typography>
          </div>
          <div className="row-span-3 row-start-4 border border-[#FFFFFF]"></div>
          <div className="col-span-4 row-span-3 row-start-4 border border-[#FFFFFF] flex items-center justify-center p-5">
            <Image
              src={mission}
              alt="Mission illustration"
              quality={100}
              className="w-16 h-16 md:w-full md:h-100 mx-auto object-contain"
            />
          </div>
          <div className="col-span-4 col-start-6 row-start-4 border border-[#FFFFFF] flex items-center justify-center">
            <Typography
              variant="h3"
              weight="semibold"
              align="center"
              color="offset"
              className="uppercase tracking-wider leading-[0.95]"
            >
              m<span className="uppercase font-bohemian wavy-letter">i</span>ss
              <span className="uppercase font-bohemian wavy-letter">i</span>on
            </Typography>
          </div>
          <div className="col-span-4 row-span-2 col-start-6 row-start-5 flex items-center justify-center">
            <Typography
              variant="body2"
              color="white"
              weight="normal"
              className="tracking-wider font-ppmori leading-[0.90] p-10"
            >
              Lampros DAO is dedicated to cultivating trailblazing web3 leaders,
              amplifying open-source breakthroughs across multiple blockchain
              terrains, and building a community bound by shared growth and
              decentralized principles.
            </Typography>
          </div>
          <div className="bg-[#DFCDF2] col-start-10 row-start-4 border border-[#FFFFFF]"></div>
          <div className="row-span-2 col-start-10 row-start-5 border border-[#FFFFFF]"></div>
        </div>
      </div>
    </>
  );
}
