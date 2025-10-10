"use client";
import React, { useState } from "react";
import up from "@/assests/common/arrow1.svg";
import down from "@/assests/common/arrow1.svg";
import Image from "next/image";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import vote1 from "@/assests/Governance/Vote.svg";
import Typography from "../UI/Typography";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import bgImage1 from "@/assests/Governance/reportbg.png";
import clip from "@/assests/Governance/Clip.png";
import Arrow from "../UI/Arrow";
import Button from "../UI/Button";

export default function RecentVotes() {
  const [activeTab, setActiveTab] = useState("Arbitrum");

  const votes = [
    {
      id: "01",
      status: "Voted [ For ]",
      title: "[CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky",
      tags: ["Arbitrum", "Off-Chain Voting"],
    },
    {
      id: "02",
      status: "Voted [ For ]",
      title: "[CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky",
      tags: ["Arbitrum", "Off-Chain Voting"],
    },
    {
      id: "03",
      status: "Voted [ For ]",
      title: "[CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky",
      tags: ["Arbitrum", "Off-Chain Voting"],
    },
    {
      id: "04",
      status: "Voted [ For ]",
      title: "[CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky",
      tags: ["Arbitrum", "Off-Chain Voting"],
    },
  ];

  return (
    <div className="grid grid-cols-8 ">
      <div className=" border border-black bg-[#C5D9E8] p-6 flex items-center justify-center">
        <div className="  flex items-center justify-center">
          <Image src={vote1} alt="vote1" />
        </div>
      </div>
      <div className="col-span-6 border border-black p-6 flex items-center justify-between">
        <Typography
          variant="h2"
          color="primary"
          weight="light"
          className="tracking-wide"
        >
          Recent Votes
        </Typography>
        <div className="flex items-center ">
          <button
            onClick={() => setActiveTab("Arbitrum")}
            className={`px-6 py-3 rounded-full bg-[#2F2B2B] text-white transition-all flex items-center gap-2 `}
          >
            <Image src={arbitrum} alt="arbitrum" className="w-7" />

            <Typography variant="button" color="white" className="normal-case">
              Arbitrum
            </Typography>
          </button>
          <button
            onClick={() => setActiveTab("Arbitrum")}
            className={`px-6 py-3 rounded-full bg-[#2F2B2B] text-white transition-all flex items-center gap-2 `}
          >
            <Image src={op} alt="optimism" className="w-7" />

            <Typography variant="button" color="white" className="normal-case">
              Optimism
            </Typography>
          </button>
        </div>
      </div>
      <div className=" col-start-8 border border-black"></div>

      {/* Row 2 - Vote 01 */}
      <div className="row-start-2 border border-black p-6 flex items-center justify-center">
        <Typography variant="h4" color="primary" weight="light" className="font-psygen">
          01
        </Typography>
      </div>
      <div className="col-span-2 row-start-2 border border-black p-6 flex items-center">
        <Typography variant="body1" color="primary" weight="medium" className="font-ppmori">
          Voted  [ For ]
        </Typography>
      </div>
      <div className="col-span-6 col-start-4 row-start-2 border border-black p-6">
        <Typography
          variant="body1"
          color="primary"
          weight="normal"
          className="mb-3"
        >
          [CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky
        </Typography>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 border border-[#A885CD] text-[#A885CD] rounded-full text-sm font-ppmori">
            Arbitrum
          </span>
          <span className="px-4 py-1.5 border border-[#A885CD] text-[#A885CD] rounded-full text-sm font-ppmori">
            Off-Chain Voting
          </span>
        </div>
      </div>
      <div className=" relative col-start-8 row-start-2 border-b border-white bg-[#2A2A2A] flex items-center justify-center">
        <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
      <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        <Arrow direction="down" />
      </div>

      {/* Row 3 - Vote 02 */}
      <div className="row-start-3 border border-black p-6 flex items-center justify-center">
        <Typography variant="h4" color="primary" weight="light" className="font-psygen">
          02
        </Typography>
      </div>
      <div className="col-span-2 row-start-3 border border-black p-6 flex items-center">
        <Typography variant="body1" color="primary" weight="medium" className="font-ppmori">
          Voted [ For ]
        </Typography>
      </div>
      <div className="col-span-6 col-start-4 row-start-3 border border-black p-6">
        <Typography
          variant="body1"
          color="primary"
          weight="normal"
          className="mb-3"
        >
          [CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky
        </Typography>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 border border-[#A885CD] text-[#A885CD] rounded-full text-sm font-ppmori">
            Arbitrum
          </span>
          <span className="px-4 py-1.5 border border-[#A885CD] text-[#A885CD] rounded-full text-sm font-ppmori">
            Off-Chain Voting
          </span>
        </div>
      </div>
      <div className=" relative col-start-8 row-start-3 border-b border-white bg-[#2A2A2A] flex items-center justify-center">
        <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        <Arrow direction="down" />

      </div>

      {/* Row 4 - Vote 03 */}
      <div className="row-start-4 border border-black p-6 flex items-center justify-center">
        <Typography variant="h4" color="primary" weight="light" className="font-psygen">
          03
        </Typography>
      </div>
      <div className="col-span-2 row-start-4 border border-black p-6 flex items-center">
        <Typography variant="body1" color="primary" weight="medium" className="font-ppmori">
          Voted [ For ]
        </Typography>
      </div>
      <div className="col-span-6 col-start-4 row-start-4 border border-black p-6">
        <Typography
          variant="body1"
          color="primary"
          weight="normal"
          className="mb-3"
        >
          [CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky
        </Typography>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 border border-[#A885CD] text-[#A885CD] rounded-full text-sm font-ppmori">
            Arbitrum
          </span>
          <span className="px-4 py-1.5 border border-[#A885CD] text-[#A885CD] rounded-full text-sm font-ppmori">
            Off-Chain Voting
          </span>
        </div>
      </div>
      <div className=" relative col-start-8 row-start-4 border-b border-white bg-[#2A2A2A] flex items-center justify-center">
        <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        <Arrow direction="down" />

      </div>

      {/* Row 5 - Vote 04 */}
      <div className="row-start-5 border border-black p-6 flex items-center justify-center">
        <Typography variant="h4" color="primary" weight="light" className="font-psygen">
          04
        </Typography>
      </div>
      <div className="col-span-2 row-start-5 border border-black p-6 flex items-center">
        <Typography variant="body1" color="primary" weight="medium" className="font-ppmori">
          Voted [ For ]
        </Typography>
      </div>
      <div className="col-span-6 col-start-4 row-start-5 border border-black p-6">
        <Typography
          variant="body1"
          color="primary"
          weight="normal"
          className="mb-3"
        >
          [CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky
        </Typography>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 border border-[#A885CD] text-[#A885CD] rounded-full text-sm font-ppmori">
            Arbitrum
          </span>
          <span className="px-4 py-1.5 border border-[#A885CD] text-[#A885CD] rounded-full text-sm font-ppmori">
            Off-Chain Voting
          </span>
        </div>
      </div>
      <div className=" relative col-start-8 row-start-5 border-b border-white bg-[#2A2A2A] flex items-center justify-center">
        <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        <Arrow direction="down" />

      </div>

      {/* Footer Row */}
      <div className="col-span-8 row-start-6 border border-black bg-[#E8F5A8] p-8 flex items-center justify-center">
       
        <Button
            label="See More"
            color="#000000"
            textColor="#FFFFFF"
            className="px-10"
          />
      </div>
      <div className="col-start-10 row-start-6 border border-black bg-[#E8F5A8]"></div>
    </div>

    
  );
}
