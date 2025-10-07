import Typography from "../UI/Typography";
import Image from "next/image";
import delegate from "@/assests/Governance/Delegate.svg";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";

export default function Delegate() {
  return (
    <>
      <div className="grid grid-cols-10 bg-[#1A1A1A]">
        <div className="border border-white"></div>
        <div className="col-span-8 border border-black flex item-center justify-center p-5">
          <Typography
            variant="h2"
            color="white"
            weight="light"
            className="tracking-wide uppercase"
          >
            Delegate to Lampros DAO{" "}
          </Typography>
        </div>
        <div className="col-start-10 border border-white"></div>
        <div className="row-span-4 row-start-2 border border-white flex items-end p-5 justify-center">
          <Typography
            variant="caption"
            color="white"
            weight="normal"
            className="[writing-mode:vertical-rl] rotate-180 tracking-[0.3em] "
          >
            Your Delegation Matters !!
          </Typography>
        </div>
        <div className="col-span-4 p-5 row-span-3 row-start-2 border border-white flex items-center flex-col gap-5 justify-center">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className="tracking-wider font-ppmori  leading-1.5 max-w-[600px] w-[500px]"
          >
            Delegate your tokens to our team and become a part of shaping the
            future of decentralized ecosystems.{" "}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className="tracking-wider font-ppmori  leading-1.5 max-w-[600px]  w-[500px]"
          >
            By delegating your tokens to our team, you enable us to represent
            your interests and drive meaningful governance decisions. Empower
            effective governance in Web3.{" "}
          </Typography>
        </div>
        <div className="col-span-4 row-span-3 col-start-6 row-start-2 border border-white flex items-center justify-center p-5">
          <Image src={delegate} alt="delegate" className="w-[50%]" />
        </div>
        <div className="row-span-4 col-start-10 row-start-1 border border-black bg-[#CBE9FF]  ">
         
        </div>
        <div className="col-span-4 col-start-2 gap-3 row-start-5 border border-black bg-white flex items-center flex-row justify-center p-5">
          <Image src={arbitrum} alt="arbitrum" className="w-10" />
          <Typography
            variant="body1"
            color="primary"
            weight="semibold"
            className="font-ppmori "
          >
            Delegate On Arbitrum
          </Typography>
        </div>
        <div className="col-span-4 col-start-6 row-start-5 border border-black bg-white flex gap-3 items-center flex-row justify-center p-5">
           <Image src={op} alt="arbitrum"  className="w-10"/>
          <div>
            <Typography
              variant="body1"
              color="primary"
              weight="semibold"
              className="font-ppmori "
            >
              Delegate On Optimism
            </Typography>
          </div>
        </div>
        <div className="col-span-10 row-start-6 border border-white"></div>
      </div>
    </>
  );
}
