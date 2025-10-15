"use client";
import Image from "next/image";
import about from "@/assests/AboutUs/about.svg";
import Typography from "@/components/UI/Typography";
import vision from "@/assests/AboutUs/vision.svg";
import mission from "@/assests/AboutUs/mission.svg";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-6  ">
        <div className="col-span-4 row-span-6 w-full p-10 border border-black bg-[#D0FFAC]">
          <Image
            src={about}
            alt="Metallic sculpture"
            className=" w-[80%] h-full mx-auto"
            quality={100}
          />
        </div>
        <div className="col-span-6 row-span-6 col-start-5 border border-black p-10 flex flex-col justify-center">
          <div className="space-y-6">
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="tracking-wider font-ppmori  leading-1.5 mx-auto px-10 py-10"
            >
              <div>
                Lampros DAO was founded by a group of individuals with a shared
                vision for governance and decentralization. Our north star is to
                support and grow Ethereum, and we contribute to this goal by
                actively participating in Layer 2 solutions like Arbitrum and
                Optimism.
              </div>
              <div className="mt-4">
                We believe blockchain is not just about technology—it's about
                the people, communities, and ideas that drive it forward. Our
                ethos is rooted in fostering growth, both for individuals and
                the ecosystem, ensuring that governance, research, and education
                remain accessible to all. Through proposal discussions,
                governance research, and ecosystem-building, we help shape the
                future of decentralized networks.
              </div>
              <div className="mt-4">
                At Lampros DAO, we are supporting a movement—a movement where
                public goods, developer support, and open collaboration take
                centre stage. We envision a future where blockchain technology
                seamlessly integrates into everyday life, making Web3 more
                inclusive, sustainable, and impactful.
              </div>
              <div className="mt-4">
                We are building on this foundation—join us as we shape the
                future of decentralized governance and Ethereum's Layer 2
                ecosystems.
              </div>
            </Typography>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10  grid-rows-6   bg-[#1A1A1A]">
        <div className="bg-[#DFCDF2] border border-[#FFFFFF] p-5"></div>
        <div className="col-span-4 p-5 border border-[#FFFFFF] flex items-center justify-center">
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
        <div className="col-span-4 row-span-3 col-start-6 border border-[#FFFFFF] p-5 w-full flex items-center justify-center">
          <Image src={vision} alt="Metallic sculpture" quality={100} />
        </div>
        <div className="row-span-3 col-start-10 border border-[#FFFFFF]"></div>
        <div className="row-span-2 row-start-2 border border-white"></div>
        <div className=" col-span-4 row-span-2 row-start-2  flex items-center justify-center">
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
          <Image src={mission} alt="Metallic sculpture" quality={100} />
        </div>
        <div className="col-span-4 col-start-6 row-start-4 border border-[#FFFFFF] flex items-center justify-center">
          <Typography
            variant="h3"
            weight="semibold"
            align="center"
            color="offset"
            className="uppercase tracking-wider leading-[0.95] "
          >
            m<span className="uppercase font-bohemian wavy-letter">i</span>ss
            <span className="uppercase font-bohemian wavy-letter">i</span>on
          </Typography>
        </div>
        <div className=" col-span-4 row-span-2 col-start-6 row-start-5  flex items-center justify-center">
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
        <div className=" bg-[#DFCDF2] col-start-10 row-start-4 border border-[#FFFFFF]"></div>
        <div className="row-span-2 col-start-10 row-start-5 border border-[#FFFFFF]"></div>
      </div>
    </>
  );
}
