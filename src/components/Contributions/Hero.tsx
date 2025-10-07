import clip from "@/assests/Contributions/clip.svg";
import Image from "next/image";
import bgImage1 from "@/assests/HeroSection2/arrow-bg.png";
import clip2 from "@/assests/Contributions/clip2.svg";
import Typography from "../UI/Typography";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-10 ">
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
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Image
            src={clip}
            alt="clip"
            width={100}
            height={100}
            className="relative w-full h-full object-contain p-2 mx-auto"
          />{" "}
        </div>
        <div className="border border-black ">6</div>
        <div className="border border-black ">7</div>
        <div className="border border-black ">8</div>
        <div className="border border-black ">9</div>
        <div className="border border-black ">10</div>
        <div className="col-span-5 border border-black p-10">
          <Typography
            variant="subtitle2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-xl leading-1.5 max-w-[600px]"
          >
            At Lampros DAO, we actively contribute to both governance and
            research, ensuring that decentralized ecosystems remain transparent,
            efficient, and community-driven. Through governance, we engage in
            DAO discussions, voting, and proposal-making, helping shape the
            direction of decentralized decision-making. Our research efforts
            focus on analyzing governance structures, incentive programs, and
            power distribution to provide data-backed insights that drive
            informed decisions.{" "}
          </Typography>
        </div>
        <div className="col-span-5 col-start-6 border border-black bg-[#DFF48D] p-5 flex items-center justify-center ">
          <Image
            src={clip2}
            alt="Metallic sculpture"
            className=" w-[50%] mx-auto"
          />
        </div>
        <div className="row-start-3 border border-white bg-[#1A1A1A]">13</div>
        <div className="col-span-4 row-start-3 border border-white bg-[#1A1A1A] flex items-center justify-center p-2">
          <div className="bg-white rounded-full  py-4 flex items-center gap-4 shadow-lg w-[200px] p-10 ">
            <Image src={arbitrum} alt="arbitrum" className="w-5"/>
            <Typography
              variant="body1"
              color="primary"
              weight="semibold"
              className="font-ppmori text-2xl"
            >
              Arbitrum
            </Typography>
          </div>
        </div>
        <div className="col-span-4 col-start-6 row-start-3 border border-white bg-[#1A1A1A] flex items-center justify-center p-2">
          {" "}
          <div className="bg-white rounded-full  py-4 flex items-center gap-4 shadow-lg w-[200px] p-10">
            <Image src={op} alt="optimism" className="w-5"/>
            <Typography
              variant="body1"
              color="primary"
              weight="semibold"
              className="font-ppmori text-2xl"
            >
              Optimism
            </Typography>
          </div>
        </div>
        <div className="col-start-10 row-start-3 border border-white bg-[#1A1A1A]">
          
        </div>
      </div>
      
<div className="grid grid-cols-10 ">
    <div className=" border border-black" ></div>
    <div className="col-span-8  border border-black  flex items-center justify-center p-5">
         <Typography
                    variant="h2"
                    color="primary"
                    weight="light"
                    className="tracking-wide uppercase"
                  >
Arbitrum                  </Typography>
    </div>
    <div className="col-start-10  border border-black">3</div>
    <div className="row-start-2  border border-black">4</div>
    <div className="col-span-8 row-start-2  border border-black bg-[#CBE9FF] flex items-center justify-center p-2">
         <Typography
                    variant="body2"
                    color="primary"
                    weight="light"
                    className="tracking-wide "
                  >
Strengthening Arbitrum's Governance and Research                  </Typography>
    </div>
    <div className="col-start-10 row-start-2  border border-black">6</div>
    <div className="col-span-10 row-start-3  border border-black flex items-center justify-center">
         <Typography
            variant="subtitle2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-xl leading-1.5 max-w-[1200px] p-5"
          >
           Lampros DAO is committed to enhancing governance, transparency, and community engagement within the Arbitrum ecosystem. Through in-depth research, interactive dashboards, and educational initiatives, we aim to empower delegates, developers, and users to make informed decisions. Our contributions focus on strengthening governance frameworks, improving incentive structures, and fostering participation in decentralized decision-making.
          </Typography>
    </div>
</div>
    
    </>
  );
}
