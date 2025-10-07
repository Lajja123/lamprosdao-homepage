import Image from "next/image";
import clip from "@/assests/Governance/Clip.svg"
import Typography from "../UI/Typography";
import Link from "next/link";
import link from "@/assests/Governance/link.svg"
import arbitrum from "@/assests/Governance/Arbitrum.svg"
import op from "@/assests/Governance/optimism.svg"


export default function Hero() {
  const teamMembers = [
    { name: "Euphoria", icon: "↗" },
    { name: "Chain_L", icon: "↗" },
    { name: "Hirangi", icon: "↗" }
  ];

  return (
    <>
      <div className="grid grid-cols-8">
        <div className="row-span-4 border border-[#000000]"></div>
        
        <div className="col-span-2 row-span-2 border border-[#000000] p-5">
          <Image
            src={clip}
            alt="Metallic sculpture"
            className="w-[70%] mx-auto"
          />
        </div>
        
        <div className="col-span-4 row-span-2 col-start-4 border border-[#000000] flex items-center justify-center p-5">
          <Typography
            variant="subtitle2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-xl leading-1.5 max-w-[600px]"
          >
            Lampros DAO is an open community of builders and governance enthusiasts committed to transparency, decentralization, and inclusivity. Through active participation in governance and collaborative efforts, we strive to create a more transparent, inclusive, and resilient web3 landscape
          </Typography>
        </div>
        
        <div className="row-span-4 col-start-8 border border-[#000000]"></div>
        
        <div className="col-span-6 col-start-2 row-start-3 border border-[#000000] bg-[#DFCDF2] flex items-center justify-center p-5">
          <Typography
            variant="h3"
            color="primary"
            weight="normal"
            className="tracking-wider font-ppmori text-3xl leading-1.5"
          >
            Our Team Members
          </Typography>
        </div>
        
        {teamMembers.map((member, index) => (
          <div 
            key={member.name}
            className={`col-span-2 col-start-${2 + index * 2} row-start-4 border border-[#000000] flex items-center justify-center p-8 gap-4`}
          >
            <div className="w-12 h-12 rounded-full bg-[#E8B4A8] flex-shrink-0 border-1 border[#967665]"></div>
            <Typography
              variant="body1"
              color="primary"
              weight="normal"
              className="font-ppmori text-lg"
            >
              {member.name}
            </Typography>
<Image src={link} alt="link"/>          </div>
        ))}
      </div>

    
      {/* OUR DELEGATIONS Section */}
      <div className="grid grid-cols-8 mt-0 bg-[#1A1A1A]">
        <div className="row-span-2 border border-[#FFFFFF]"></div>
        
        <div className="col-span-6 col-start-2 border border-[#FFFFFF]  flex items-center justify-center p-8">
          <Typography
            variant="h2"
            className="tracking-wider font-ppmori text-4xl text-white"
          >
            O<span className="uppercase font-bohemian wavy-letter">U</span>R D<span className="uppercase font-bohemian wavy-letter">E</span>LEG<span className="uppercase font-bohemian wavy-letter">A</span>TIO<span className="uppercase font-bohemian wavy-letter">N</span>S
          </Typography>
        </div>
        
        <div className="row-span-2 col-start-8 border border-[#FFFFF]"></div>
        
        <div className="col-span-3 col-start-2 row-start-2 border border-[#FFFFFF] flex items-center justify-center p-6">
          <div className="bg-white rounded-full  py-4 flex items-center gap-4 shadow-lg px-20">
            
<Image src={arbitrum} alt="arbitrum" />            
            <Typography variant="body1" color="primary" weight="semibold" className="font-ppmori text-2xl">
              Arbitrum
            </Typography>
          </div>
        </div>

        <div className="col-span-3 col-start-5 row-start-2 border border-[#FFFFFF] flex items-center justify-center p-6">
          <div className="bg-white rounded-full  py-4 flex items-center gap-4 shadow-lg px-20">
<Image src={op} alt="op"/>          
            <Typography variant="body1" color="primary" weight="semibold" className="font-ppmori text-2xl">
              Optimism
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}