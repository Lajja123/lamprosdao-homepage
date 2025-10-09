import Image from "next/image";
import clip from "@/assests/Governance/Clip.png";
import Typography from "../UI/Typography";
import Link from "next/link";
import link from "@/assests/Governance/link.svg";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import { Grid, GridCell } from "../UI/Grid";

export default function Hero() {
  const teamMembers = [
    { name: "Euphoria", icon: "↗" },
    { name: "Chain_L", icon: "↗" },
    { name: "Hirangi", icon: "↗" },
  ];

  return (
    <>
      <div className="grid grid-cols-8">
        <GridCell rowSpan={4} className="col-span-1" />

        <GridCell
          colSpan={2}
          rowSpan={2}
          className="p-5 flex items-center justify-center"
        >
          <Image src={clip} alt="Metallic sculpture" />
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
            className="tracking-wider font-ppmori text-xl leading-1.5 mx-auto px-10 py-10"
          >
            Lampros DAO is an open community of builders and governance
            enthusiasts committed to transparency, decentralization, and
            inclusivity. Through active participation in governance and
            collaborative efforts, we strive to create a more transparent,
            inclusive, and resilient web3 landscape
          </Typography>
        </GridCell>

        <GridCell rowSpan={4} className="col-start-8" />

        <GridCell
          colSpan={6}
          className="col-start-2 row-start-3 bg-[#DFCDF2] flex items-center justify-center p-10"
        >
          <Typography
            variant="h3"
            color="primary"
            weight="normal"
            className="tracking-wider font-ppmori text-3xl leading-1.5"
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
            } row-start-4 flex items-center justify-center p-8 gap-4`}
          >
            <div className="w-12 h-12 rounded-full bg-[#E8B4A8] flex-shrink-0 border-1 border-black"></div>
            <Typography
              variant="body1"
              color="primary"
              weight="semibold"
              className="font-ppmori "
            >
              {member.name}
            </Typography>
            <Image src={link} alt="link" />
          </GridCell>
        ))}
      </div>

      {/* OUR DELEGATIONS Section */}
      <div className="grid grid-cols-8 mt-0 bg-[#1A1A1A]">
        <GridCell rowSpan={2} className="col-span-1 border- border-white" />

        <GridCell
          colSpan={6}
          className="col-start-2 flex items-center justify-center p-8 border- border-white"
        >
          <Typography
            variant="h2"
            className="tracking-wider font-ppmori text-4xl text-white"
          >
            O<span className="uppercase font-bohemian wavy-letter">U</span>R D
            <span className="uppercase font-bohemian wavy-letter">E</span>LEG
            <span className="uppercase font-bohemian wavy-letter">A</span>TIO
            <span className="uppercase font-bohemian wavy-letter">N</span>S
          </Typography>
        </GridCell>

        <GridCell rowSpan={2} className="col-start-8 border- border-white" />

        <GridCell
          colSpan={3}
          className="col-start-2 row-start-2 flex items-center justify-center p-6 border- border-white"
        >
          <div
            className={`rounded-full my-5 p-5 flex border- border-white items-center justify-center gap-4 shadow-lg w-full mx-10 cursor-pointer transition-all duration-300 ${"bg-white scale-105"}`}
          >
            <Image src={arbitrum} alt="arbitrum" className="w-10" />
            <Typography
              variant="subtitle2"
              color="primary"
              weight="semibold"
              className="font-ppmori "
            >
              Arbitrum
            </Typography>
          </div>
        </GridCell>

        <GridCell
          colSpan={3}
          className="col-start-5 row-start-2 flex items-center justify-center p-6"
        >
          <div
            className={`rounded-full my-5 p-5 flex items-center justify-center gap-4 shadow-lg w-full mx-10 cursor-pointer transition-all duration-300 ${"bg-white scale-105"}`}
          >
            <Image src={op} alt="optimism" className="w-10" />
            <Typography
              variant="subtitle2"
              color="primary"
              weight="semibold"
              className="font-ppmori "
            >
              Optimism
            </Typography>
          </div>
        </GridCell>
      </div>
    </>
  );
}
