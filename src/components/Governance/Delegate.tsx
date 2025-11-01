import Typography from "../UI/Typography";
import Image from "next/image";
import delegate from "@/assests/Governance/Delegate.png";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import uniswap from "@/assests/Governance/uniswap.svg";
import superfluid from "@/assests/Governance/superfluid_green.svg";
import scroll from "@/assests/Governance/scroll.svg";
import Link from "next/link";
import { useSmoothScrollOnLoad } from "@/hooks/smoothScrollToSection";

export default function Delegate() {
  useSmoothScrollOnLoad();
  const protocols = [
    {
      name: "Arbitrum",
      img: arbitrum,
      alt: "arbitrum",
      href: "https://www.tally.xyz/gov/arbitrum/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25",
    },
    {
      name: "Optimism",
      img: op,
      alt: "optimism",
      href: "https://vote.optimism.io/delegates/lamprosdao.eth",
    },
    {
      name: "Uniswap",
      img: uniswap,
      alt: "uniswap",
      href: "https://www.tally.xyz/gov/uniswap/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25",
    },
    {
      name: "Superfluid",
      img: superfluid,
      alt: "superfluid",
      href: "https://claim.superfluid.org/governance",
    },
    {
      name: "Scroll",
      img: scroll,
      alt: "scroll",
      href: "https://gov.scroll.io/delegates/lamprosdao.eth",
    },
  ];
  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden bg-[#1A1A1A]">

        
        {/* Image Section */}
        <div className="border-b border-white p-4 md:p-6 flex items-center justify-center">
          <Image
            src={delegate}
            alt="delegate"
            className="w-[200px] md:w-[300px]"
            quality={100}
          />
        </div>
        {/* Header Section */}
        <div className=" p-4 md:p-6 flex items-center justify-center">
          <Typography
            variant="h1"
            color="white"
            className="tracking-wide uppercase  text-center"
          >
            <span className="uppercase font-bohemian wavy-letter">D</span>ele
            <span className="uppercase font-bohemian wavy-letter">g</span>ate to <br></br>
            <span className="uppercase font-bohemian wavy-letter">L</span>am
            <span className="uppercase font-bohemian wavy-letter">P</span>ros D
            <span className="uppercase font-bohemian wavy-letter">A</span>O
          </Typography>
        </div>

        {/* Description Section */}
        <div className="p-4 md:p-6">
          <div className="space-y-4">
            <Typography
              variant="subtitle2"
              color="white"
              weight="normal"
              align="center"
              className="tracking-wider font-ppmori text-sm md:text-base text-center"
            >
              Delegate your tokens to our team and become a part of shaping the
              future of decentralized ecosystems.
            </Typography>
            <Typography
              variant="subtitle2"
              color="white"
              weight="normal"
              align="center"
              className="tracking-wider font-ppmori text-sm md:text-base text-center"
            >
              By delegating your tokens to our team, you enable us to represent
              your interests and drive meaningful governance decisions. Empower
              effective governance in Web3.
            </Typography>
          </div>
        </div>


        {/* Delegation Buttons */}
        <div className="">
          <div className="grid grid-cols-2 border border-white">
            {/* Optimism */}
            <Link
              href="https://vote.optimism.io/delegates/lamprosdao.eth"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-[#1A1A1A] border-r border-b border-white justify-center"
            >
              <Image src={op} alt="optimism" className="w-8 md:w-10" />
              <Typography
                variant="body2"
                color="white"
                weight="bold"
                className="font-ppmori text-sm md:text-base"
              >
                Optimism
              </Typography>
            </Link>

            {/* Arbitrum */}
            <Link
              href="https://www.tally.xyz/gov/arbitrum/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-[#1A1A1A] border-b border-white justify-center"
            >
              <Image src={arbitrum} alt="arbitrum" className="w-8 md:w-10" />
              <Typography
                variant="body2"
                color="white"
                weight="bold"
                className="font-ppmori text-sm md:text-base"
              >
                Arbitrum
              </Typography>
            </Link>

            {/* Uniswap */}
            <Link
              href="https://www.tally.xyz/gov/uniswap/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-[#1A1A1A] border-r border-white justify-center"
            >
              <Image src={uniswap} alt="uniswap" className="w-8 md:w-10" />
              <Typography
                variant="body2"
                color="white"
                weight="bold"
                className="font-ppmori text-sm md:text-base"
              >
                Uniswap
              </Typography>
            </Link>

            {/* Superfluid */}
            <Link
              href="https://claim.superfluid.org/governance"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-[#1A1A1A] justify-center"
            >
              <Image src={superfluid} alt="superfluid" className="w-8 md:w-10" />
              <Typography
                variant="body2"
                color="white"
                weight="bold"
                align="center"
                className="font-ppmori text-sm md:text-base"
              >
                Superfluid
              </Typography>
            </Link>
          </div>
        </div>

       
      </div>

      {/* Desktop Layout */}
      <div
        id="delegate"
        className="hidden lg:grid lg:grid-cols-10 bg-[#1A1A1A]"
      >
        <div className="border-l border-r border-b border-white"></div>
        <div className="col-span-8 border border-black flex item-center justify-center p-10">
          <Typography
            variant="h2"
            color="white"
            className="tracking-wide uppercase"
          >
            <span className="uppercase font-bohemian wavy-letter">D</span>ele
            <span className="uppercase font-bohemian wavy-letter">g</span>ate to{" "}
            <span className="uppercase font-bohemian wavy-letter">L</span>am
            <span className="uppercase font-bohemian wavy-letter">P</span>ros D
            <span className="uppercase font-bohemian wavy-letter">A</span>O
          </Typography>
        </div>
        <div className=" col-start-10 border-b border-l border-r border-white"></div>

        {/* <div className="col-start-10 border border-white"></div> */}
        <div className="row-span-4 row-start-2 border-l border-r border-b border-white flex items-end p-5 justify-center">
          <Typography
            variant="caption"
            color="white"
            weight="normal"
            className="[writing-mode:vertical-rl] rotate-180 tracking-[0.3em] "
          >
            [ Your Delegation Matters !! ]
          </Typography>
        </div>
        <div className="col-span-4 row-span-2 row-start-2 border border-white flex items-center flex-col gap-5 justify-center">
          <Typography
            variant="subtitle2"
            color="white"
            weight="normal"
            className="tracking-wider font-ppmori  max-w-[500px] "
          >
            Delegate your tokens to our team and become a part of shaping the
            future of decentralized ecosystems.{" "}
          </Typography>
          <Typography
            variant="subtitle2"
            color="white"
            weight="normal"
            className="tracking-wider font-ppmori  max-w-[500px] "
          >
            By delegating your tokens to our team, you enable us to represent
            your interests and drive meaningful governance decisions. Empower
            effective governance in Web3.{" "}
          </Typography>
        </div>
        <div className="col-span-4 row-span-2 col-start-6 row-start-2 border border-white flex items-center justify-center p-10">
          <Image
            src={delegate}
            alt="delegate"
            className="w-[50%]"
            quality={100}
          />
        </div>
        <div className="row-span-4 col-start-10 row-start-2 border border-white bg-[#CBE9FF]  "></div>
        {/* Infinite scrolling row - all platforms in one */}
        <div className="col-span-8 col-start-2 row-start-4 border border-black bg-white overflow-x-hidden">
          <div className="w-full relative">
            <div className="animate-scroll w-max flex py-5 items-center">
              {/* Continuous loop - duplicated array for seamless scrolling */}
              {[...protocols, ...protocols].map((p, idx) => (
                <div
                  key={`${p.name}-${idx}`}
                  className="relative group flex items-center gap-3 flex-shrink-0 px-12"
                >
                  <Image src={p.img} alt={p.alt} className="w-10 flex-shrink-0" />
                  <Link href={p.href} target="_blank" className="flex-shrink-0">
                    <Typography
                      variant="body2"
                      color="primary"
                      weight="bold"
                      className="font-ppmori hover:underline cursor-pointer whitespace-nowrap"
                    >
                      {p.name}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-10 row-start-6 bg-[#1A1A1A] p-10 border border-black"></div>
      </div>
    </>
  );
}
