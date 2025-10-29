"use client";
import clip from "@/assests/Contributions/clip.png";
import Image from "next/image";
import bgImage1 from "@/assests/HeroSection2/arrow-bg.png";
import clip2 from "@/assests/Contributions/clip2.png";
import Typography from "../UI/Typography";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import contributionsContent from "@/data/contributionsContent.json";

interface HeroProps {
  activeChain: "arbitrum" | "optimism";
  onChainChange: (chain: "arbitrum" | "optimism") => void;
}

export default function Hero({ activeChain, onChainChange }: HeroProps) {
  const currentContent = contributionsContent[activeChain];

  const handleButtonClick = (content: "arbitrum" | "optimism") => {
    onChainChange(content);
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* 3-Column Grid Section */}
        <div className="grid grid-cols-3">
          {/* First Column - Clip Image */}
          <div className=" border border-black"></div>

          {/* Second Column - Empty for now */}
          <div className="border border-black relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${bgImage1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={clip}
              alt="clip"
              className="relative w-full h-full object-contain p-2 md:p-4 mx-auto"
            />
          </div>

          {/* Third Column - Empty for now */}
          <div className="border border-black"></div>
        </div>
        <div className="flex flex-col">
          {/* Text Section */}
          <div className="border border-black p-4 md:p-6">
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="tracking-wider font-ppmori text-sm md:text-base"
            >
              <div>
                At Lampros DAO, we actively contribute to both governance and
                research, ensuring that decentralized ecosystems remain
                transparent, efficient, and community-driven. Through
                governance, we engage in DAO discussions, voting, and
                proposal-making, helping shape the direction of decentralized
                decision-making. Our research efforts focus on analyzing
                governance structures, incentive programs, and power
                distribution to provide data-backed insights that drive informed
                decisions.
              </div>
              <div className="mt-3 md:mt-4">
                By working across multiple DAOs, we aim to improve governance
                participation, develop analytical tools, and contribute to
                ecosystem growth. Our work helps communities navigate
                decentralization, ensuring long-term sustainability and
                inclusivity.
              </div>
            </Typography>
          </div>

          {/* Second Image Section */}
          <div className="border border-black bg-[#DFF48D] p-4 md:p-6 flex items-center justify-center">
            <Image
              src={clip2}
              alt="Metallic sculpture"
              className="w-[200px] md:w-[300px] mx-auto"
            />
          </div>
        </div>

        {/* Chain Selection Section */}
        <div className="bg-[#1A1A1A]">
          <div className="flex flex-row justify-between items-center p-4 md:p-6 gap-4">
            {/* Arbitrum Button */}
            <div className="bg-[#1A1A1A] flex items-center justify-center p-0">
              <div
                className={`rounded-full py-2 px-6 flex items-center justify-center gap-4 shadow-lg w-full cursor-pointer transition-all duration-300 ${
                  activeChain === "arbitrum"
                    ? "bg-white scale-105"
                    : "bg-gray-300 hover:bg-gray-200"
                }`}
                onClick={() => handleButtonClick("arbitrum")}
              >
                <Image src={arbitrum} alt="arbitrum" className="w-6 md:w-10" />
                <Typography
                  variant="subtitle2"
                  color="primary"
                  weight="semibold"
                  className="font-ppmori text-sm md:text-base"
                >
                  Arbitrum
                </Typography>
              </div>
            </div>

            {/* Optimism Button */}
            <div className=" bg-[#1A1A1A] flex items-center justify-center ">
              <div
                className={`rounded-full py-2 px-6 flex items-center justify-center gap-4 shadow-lg w-full cursor-pointer transition-all duration-300 ${
                  activeChain === "optimism"
                    ? "bg-white scale-105"
                    : "bg-gray-300 hover:bg-gray-200"
                }`}
                onClick={() => handleButtonClick("optimism")}
              >
                <Image src={op} alt="optimism" className="w-6 md:w-10" />
                <Typography
                  variant="subtitle2"
                  color="primary"
                  weight="semibold"
                  className="font-ppmori text-sm md:text-base"
                >
                  Optimism
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="border border-black p-4 md:p-6 flex items-center justify-center">
          <Typography
            variant="h2"
            color="primary"
            weight="light"
            className="tracking-wide uppercase text-lg md:text-xl text-center"
          >
            {currentContent.word.split("").map((letter, index) => {
              const isHighlighted = currentContent.highlightedLetters.includes(
                letter.toUpperCase()
              );
              return (
                <span
                  key={index}
                  className={
                    isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                  }
                >
                  {letter}
                </span>
              );
            })}
          </Typography>
        </div>

        <div className="border border-black bg-[#CBE9FF] p-4 md:p-6 flex items-center justify-center">
          <Typography
            variant="body2"
            color="primary"
            weight="normal"
            className="tracking-wider text-sm md:text-base text-center"
          >
            {currentContent.subtitle}
          </Typography>
        </div>

        <div className="border border-black p-4 md:p-6 flex items-center justify-center">
          <Typography
            variant="body2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-sm md:text-base text-center"
          >
            {currentContent.description}
          </Typography>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-10">
        <div className="border border-black ">1</div>
        <div className="border border-black ">2</div>
        <div className="border border-black ">3</div>
        <div className="border border-black ">4</div>
        <div className="relative border border-black ">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Image
            src={clip}
            alt="clip"
            className="relative w-full h-full object-contain p-5 mx-auto"
          />{" "}
        </div>
        <div className="border border-black ">6</div>
        <div className="border border-black ">7</div>
        <div className="border border-black ">8</div>
        <div className="border border-black ">9</div>
        <div className="border border-black ">10</div>
        <div className="col-span-5  p-10">
          <Typography
            variant="body2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-xl  mx-auto px-10 py-10"
          >
            <div>
              At Lampros DAO, we actively contribute to both governance and
              research, ensuring that decentralized ecosystems remain
              transparent, efficient, and community-driven. Through governance,
              we engage in DAO discussions, voting, and proposal-making, helping
              shape the direction of decentralized decision-making. Our research
              efforts focus on analyzing governance structures, incentive
              programs, and power distribution to provide data-backed insights
              that drive informed decisions.
            </div>
            <div className="mt-4">
              By working across multiple DAOs, we aim to improve governance
              participation, develop analytical tools, and contribute to
              ecosystem growth. Our work helps communities navigate
              decentralization, ensuring long-term sustainability and
              inclusivity.
            </div>
          </Typography>
        </div>
        <div className="col-span-5 col-start-6 bg-[#DFF48D] p-5 flex items-center justify-center ">
          <Image
            src={clip2}
            alt="Metallic sculpture"
            className=" w-1/2 mx-auto"
          />
        </div>

        <div className="row-start-3 border border-white bg-[#1A1A1A]"></div>
        <div className="col-span-4 row-start-3 border border-white bg-[#1A1A1A] flex items-center justify-center p-2">
          <div
            className={` rounded-full my-5 p-5 flex items-center justify-center gap-4 shadow-lg w-full mx-10 cursor-pointer transition-all duration-300  ${
              activeChain === "arbitrum"
                ? "bg-white scale-105"
                : "bg-gray-300 hover:bg-gray-200"
            }`}
            onClick={() => handleButtonClick("arbitrum")}
          >
            <Image src={arbitrum} alt="arbitrum" />
            <Typography
              variant="subtitle2"
              color="primary"
              weight="semibold"
              className="font-ppmori "
            >
              Arbitrum
            </Typography>
          </div>
        </div>
        <div className="col-span-4 col-start-6 row-start-3 border border-white bg-[#1A1A1A] flex items-center justify-center p-2">
          <div
            className={` will-change-transform rounded-full my-10 p-5 flex items-center justify-center gap-4 shadow-lg w-full mx-10 cursor-pointer transition-all duration-300 ${
              activeChain === "optimism"
                ? "bg-white scale-105"
                : "bg-gray-300 hover:bg-gray-200"
            }`}
            onClick={() => handleButtonClick("optimism")}
          >
            <Image src={op} alt="optimism" />
            <Typography
              variant="subtitle2"
              color="primary"
              weight="semibold"
              className="font-ppmori "
            >
              Optimism
            </Typography>
          </div>
        </div>
        <div className="col-start-10 row-start-3 border border-white bg-[#1A1A1A]"></div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-10  ">
        <div className=" border border-black"></div>
        <div className="col-span-8  border border-black  flex items-center justify-center p-10">
          <Typography
            variant="h2"
            color="primary"
            weight="light"
            className="tracking-wide uppercase"
          >
            {currentContent.word.split("").map((letter, index) => {
              const isHighlighted = currentContent.highlightedLetters.includes(
                letter.toUpperCase()
              );
              return (
                <span
                  key={index}
                  className={
                    isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                  }
                >
                  {letter}
                </span>
              );
            })}
          </Typography>
        </div>
        <div className="col-start-10  border border-black">3</div>
        <div className="row-start-2  border border-black">4</div>
        <div className="col-span-8 row-start-2  border border-black bg-[#CBE9FF] flex items-center justify-center p-5">
          <Typography
            variant="body2"
            color="primary"
            weight="normal"
            className="tracking-wider"
          >
            {currentContent.subtitle}
          </Typography>
        </div>
        <div className="col-start-10 row-start-2  border border-black">6</div>
        <div className="col-span-10 row-start-3  border border-black flex items-center justify-center p-5">
          <Typography
            variant="body2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-xl  max-w-[1200px] p-5 mx-auto"
          >
            {currentContent.description}
          </Typography>
        </div>
      </div>
    </>
  );
}
