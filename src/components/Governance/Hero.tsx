import Image from "next/image";
import clip from "@/assests/Governance/Clip.png";
import Typography from "../UI/Typography";
import Link from "next/link";

import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import { Grid, GridCell } from "../UI/Grid";
import euphoria from "@/assests/Governance/euphoria.jpg";
import hirangi from "@/assests/Governance/hirangi.jpg";
import chain from "@/assests/Governance/chain-l.jpg";
import link from "@/assests/Governance/link.svg";

export default function Hero() {
  const teamMembers = [
    {
      name: "Euphoria",
      icon: "↗",
      link: "https://x.com/Euphoria_0077",
      src: euphoria,
    },
    {
      name: "Chain_L",
      icon: "↗",
      link: "https://x.com/chain_haya",
      src: chain,
    },
    {
      name: "Hirangi",
      icon: "↗",
      link: "https://x.com/HirangiPandya",
      src: hirangi,
    },
  ];

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Main Content Section */}
        <div className="flex flex-col">
          {/* Image Section */}
          <div className="p-4 md:p-6 flex items-center justify-center">
            <Image
              src={clip}
              alt="Metallic sculpture"
              quality={100}
              className="w-[200px] md:w-[250px]"
            />
          </div>

          {/* Text Section */}
          <div className="p-4 md:p-6 flex items-center justify-center">
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="tracking-wider font-ppmori text-sm md:text-base text-center"
            >
              Lampros DAO is an open community of builders and governance
              enthusiasts committed to transparency, decentralization, and
              inclusivity. Through active participation in governance and
              collaborative efforts, we strive to create a more transparent,
              inclusive, and resilient web3 landscape
            </Typography>
          </div>

          {/* Team Section */}
          <div className="bg-[#DFCDF2] p-4 md:p-6 flex items-center justify-center">
            <Typography
              variant="h3"
              color="primary"
              weight="normal"
              className="tracking-wider font-ppmori text-xl md:text-2xl text-center"
            >
              Our Team Members
            </Typography>
          </div>

          {/* Team Members */}
          <div className="flex flex-col">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="flex items-center justify-center p-4 md:p-6 border-b border-black last:border-b-0"
              >
                <Link
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="p-3">
                    <Image
                      src={member.src}
                      alt="link"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-1 border-black"
                      quality={100}
                    />
                  </div>
                  <Typography
                    variant="body1"
                    color="primary"
                    weight="semibold"
                    className="font-ppmori text-sm md:text-base"
                  >
                    {member.name}
                  </Typography>
                  <Image src={link} alt="link" className="w-8 md:w-10" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Delegations Section */}
        <div className="bg-[#1A1A1A]">
          <div className=" p-4 md:p-6 flex items-center justify-center">
            <Typography
              variant="h2"
              className="tracking-wider font-ppmori text-white text-lg md:text-xl text-center"
            >
              O<span className="uppercase font-bohemian wavy-letter">U</span>R D
              <span className="uppercase font-bohemian wavy-letter">E</span>LEG
              <span className="uppercase font-bohemian wavy-letter">A</span>TIO
              <span className="uppercase font-bohemian wavy-letter">N</span>S
            </Typography>
          </div>

          <div className="flex flex-row justify-between items-center p-4 md:p-6 gap-4">
            {/* Arbitrum */}
            <div className="">
              <Link
                href="https://forum.arbitrum.foundation/t/lampros-dao-delegate-communication-thread/26642"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full py-2 px-6 flex items-center justify-center gap-4 shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105">
                  <Image
                    src={arbitrum}
                    alt="arbitrum"
                    className="w-6 md:w-10"
                    quality={100}
                  />
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    weight="semibold"
                    className="font-ppmori text-sm md:text-base"
                  >
                    Arbitrum
                  </Typography>
                </div>
              </Link>
            </div>

            {/* Optimism */}
            <div className="">
              <Link
                href="https://vote.optimism.io/delegates/lamprosdao.eth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full py-2 px-6 flex items-center justify-center gap-4 shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105">
                  <Image
                    src={op}
                    alt="optimism"
                    className="w-6 md:w-10"
                    quality={100}
                  />
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    weight="semibold"
                    className="font-ppmori text-sm md:text-base"
                  >
                    Optimism
                  </Typography>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-8">
        <GridCell rowSpan={3} className="col-span-1" />

        <GridCell
          colSpan={2}
          rowSpan={2}
          className="p-5 flex items-center justify-center"
        >
          <Image src={clip} alt="Metallic sculpture" quality={100} />
        </GridCell>

        <GridCell
          colSpan={4}
          rowSpan={2}
          className="col-start-4 flex items-center justify-center p-5"
        >
          <Typography
            variant="body2"
            color="primary"
            weight="semibold"
            className="mx-w-[500px] tracking-wider font-ppmori text-xl  mx-auto px-10 py-10"
          >
            Lampros DAO is an open community of builders and governance
            enthusiasts committed to transparency, decentralization, and
            inclusivity. Through active participation in governance and
            collaborative efforts, we strive to create a more transparent,
            inclusive, and resilient web3 landscape
          </Typography>
        </GridCell>

        <GridCell rowSpan={3} className="col-start-8" />

        <GridCell
          colSpan={6}
          className="col-start-2 row-start-3 bg-[#DFCDF2] flex items-center justify-center p-10"
        >
          <Typography
            variant="h3"
            color="primary"
            weight="normal"
            className="tracking-wider font-ppmori text-3xl "
          >
            Our Team Members
          </Typography>
        </GridCell>

        {teamMembers.map((member, index) => (
          <GridCell
            key={member.name}
            colSpan={2}
            className={`col-start-${
              2 + index * 2
            } row-start-4 flex items-center justify-center p-10 gap-4`}
          >
            <Link
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  hover:opacity-80 transition-opacity duration-300"
            >
              <div className="p-4">
                <Image
                  src={member.src}
                  alt="link"
                  className="w-12 h-12 rounded-full border-1  border-black"
                  quality={100}
                />
              </div>
              <Typography
                variant="body1"
                color="primary"
                weight="semibold"
                className="font-ppmori"
              >
                {member.name}
              </Typography>
              <Image src={link} alt="link" className="w-10 " />
            </Link>
          </GridCell>
        ))}
      </div>

      {/* OUR DELEGATIONS Section */}
      <div className=" grid-cols-8 mt-0 bg-[#1A1A1A] hidden lg:grid">
        <GridCell
          rowSpan={2}
          className="col-span-1 border-t border-l border-r border-white"
        />

        <GridCell
          colSpan={6}
          className="col-start-2 flex items-center justify-center p-10 "
        >
          <Typography
            variant="h2"
            className="tracking-wider font-ppmori  text-white"
          >
            O<span className="uppercase font-bohemian wavy-letter">U</span>R D
            <span className="uppercase font-bohemian wavy-letter">E</span>LEG
            <span className="uppercase font-bohemian wavy-letter">A</span>TIO
            <span className="uppercase font-bohemian wavy-letter">N</span>S
          </Typography>
        </GridCell>

        {/* <GridCell className="col-start-8 border-t border-l border-r border-white" /> */}
        <GridCell
          rowSpan={2}
          className="col-start-8 border-t border-l border-r border-white"
        />
        <GridCell className="row-start-2 border-t border-l border-r border-white" />

        <GridCell colSpan={3} className="row-start-2  p-6 border border-white">
          <Link
            href="https://forum.arbitrum.foundation/t/lampros-dao-delegate-communication-thread/26642"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`rounded-full my-5 p-5 flex border- border-white items-center justify-center gap-4 shadow-lg mx-10 cursor-pointer transition-all duration-300 ${"bg-white scale-105"}`}
            >
              <Image
                src={arbitrum}
                alt="arbitrum"
                className="w-10"
                quality={100}
              />
              <Typography
                variant="subtitle2"
                color="primary"
                weight="semibold"
                className="font-ppmori "
              >
                Arbitrum
              </Typography>
            </div>
          </Link>
        </GridCell>

        <GridCell
          colSpan={3}
          className="col-start-5 row-start-2  p-6 border border-white"
        >
          <Link
            href="https://vote.optimism.io/delegates/lamprosdao.eth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`rounded-full my-5 p-5 flex items-center justify-center gap-4 shadow-lg mx-10 cursor-pointer transition-all duration-300 ${"bg-white scale-105"}`}
            >
              <Image src={op} alt="optimism" className="w-10" quality={100} />
              <Typography
                variant="subtitle2"
                color="primary"
                weight="semibold"
                className="font-ppmori "
              >
                Optimism
              </Typography>
            </div>
          </Link>
        </GridCell>
        <GridCell className="col-start-8 row-start-2 border border-white" />
      </div>
    </>
  );
}
