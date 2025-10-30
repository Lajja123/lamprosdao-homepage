import Image from "next/image";
import ethos from "@/assests/AboutUs/ethos.png";
import Typography from "@/components/UI/Typography";

export default function Ethos() {
  const ethosData = [
    {
      number: "01",
      title: "STRENGTHENING DECENTRALIZED GOVERNANCE",
      content:
        "We Are Committed To Strengthening Decentralized Governance By Actively Participating In Layer 2 Ecosystems Like Arbitrum And Optimism. Our Goal Is To Make Blockchain Governance More Transparent, Inclusive And Research-Driven.",
    },
    {
      number: "02",
      title: "OPPORTUNITIES AWAIT",
      content:
        "We Constantly Explore New Opportunities In Decentralized Governance, Contributing Research, Policy Frameworks, And Insights That Drive Informed Decision-Making Across DAOs.",
    },
    {
      number: "03",
      title: "PUBLIC GOODS FOR A SHARED FUTURE",
      content:
        "We Are Committed To Advancing Ethereum's Vision By Supporting Public Goods, Open-Source Development, And Governance Initiatives Across Layer 2 Solutions.",
    },
    {
      number: "04",
      title: "SUSTAINABILITY MEETS INNOVATION",
      content:
        "For Blockchain Networks To Be Sustainable, Governance Must Evolve. We Conduct Research And Develop Frameworks That Ensure Decentralized Communities Remain Resilient And Future-Proof.",
    },
    {
      number: "05",
      title: "YOUR WEB3 JOURNEY, AMPLIFIED",
      content:
        "Web3 Can Be Uncharted Territory For Many. That's Why We Empower Developers, Governance Contributors, And Researchers With The Knowledge And Resources They Need To Shape The Future Of Decentralized Networks.",
    },
  ];

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Header Section */}
        <div className="bg-[#CBE9FF] p-4 md:p-6 border border-[#000000]">
          <div className="flex items-center justify-around">
          <Image
            src={ethos}
            alt="Metallic sculpture"
            className="w-[150px] "
          />
            <Typography
              variant="h1"
              color="primary"
              weight="medium"
              className="text-4xl md:text-4xl lg:text-6xl leading-none font-csbohemian tracking-wider text-center"
            >
              O<span className="uppercase font-bohemian wavy-letter">U</span>R <br></br>
              ET<span className="uppercase font-bohemian wavy-letter">H</span>
              OS
            </Typography>
          </div>
        </div>

        {/* Ethos Items */}
        {ethosData.map((item, index) => (
          <div key={index} className="border border-[#000000]">
            {/* Header: title left, number right in green strip */}
            <div className="flex">
              <div className="flex-1 p-4 md:p-6">
                <Typography
                  variant="h6"
                  color="primary"
                  weight="semibold"
                  className="uppercase tracking-wider font-ppmori text-sm md:text-base"
                >
                  {item.title}
                </Typography>
              </div>
              <div className="w-16 md:w-20 bg-[#DFF48D] flex items-center justify-center border-l border-[#000000] p-4 md:p-6">
                <Typography
                  variant="h2"
                  color="primary"
                  weight="normal"
                  className="font-psygen text-2xl md:text-3xl"
                >
                  {item.number}
                </Typography>
              </div>
            </div>
            {/* Body: content full width */}
            <div className="p-4 md:p-6 border-t border-[#000000]">
              <Typography
                variant="subtitle2"
                color="primary"
                weight="medium"
                className="font-ppmori text-sm md:text-base leading-relaxed"
              >
                {item.content}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-10">
        <div className="col-span-5 row-span-3 w-full bg-[#CBE9FF] p-5 border border-[#000000] flex flex-row justify-center gap-3 items-center ">
          <div >
            <Typography
              variant="h2"
              color="primary"
              weight="medium"
              className=" leading-none font-csbohemian tracking-wider "
            >
              O<span className="uppercase font-bohemian wavy-letter">U</span>R{" "}
              <br></br>
              ET<span className="uppercase font-bohemian wavy-letter">H</span>
              OS
            </Typography>
          </div>

          <Image
            src={ethos}
            alt="Metallic sculpture"
            className="w-[300px] "
          />
        </div>
        <div className="col-span-4 border border-[#000000] px-15 py-5 flex items-center justify-start ">
          <Typography
            variant="h6"
            color="primary"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori max-w-[500px] "
          >
            {ethosData[0].title}
          </Typography>
        </div>
        <div className="col-start-10 bg-[#DFF48D] flex items-center justify-center ">
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {ethosData[0].number}
          </Typography>
        </div>
        <div className="col-span-5 row-span-2 col-start-6 row-start-2 border border-[#000000] flex items-center justify-start px-15 py-10 ">
          <Typography
            variant="subtitle2"
            color="primary"
            weight="medium"
            className=" font-ppmori max-w-[700px]"
          >
            {ethosData[0].content}
          </Typography>
        </div>
        <div className="col-start-5 row-start-4  bg-[#DFF48D] border border-[#000000] flex items-center justify-center ">
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {ethosData[1].number}
          </Typography>
        </div>
        <div className="col-span-4 col-start-1 row-start-4 border border-[#000000] flex items-center justify-start px-15 py-10">
          <Typography
            variant="h6"
            color="primary"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori max-w-[500px] "
          >
            {ethosData[1].title}
          </Typography>
        </div>
        <div className="col-span-5 row-span-2 col-start-1 row-start-5 border border-[#000000] flex items-center justify-start px-15 py-5 ">
          <Typography
            variant="subtitle2"
            color="primary"
            className=" font-ppmori max-w-[700px]"
          >
            {ethosData[1].content}
          </Typography>
        </div>
        <div className="col-span-4 col-start-6 row-start-4 border border-[#000000] flex items-center justify-start px-15 py-5 ">
          <Typography
            variant="h6"
            color="primary"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori max-w-[500px] "
          >
            {ethosData[2].title}
          </Typography>
        </div>
        <div className="col-start-10 row-start-4 border border-[#000000] bg-[#DFF48D] flex items-center justify-center ">
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {ethosData[2].number}
          </Typography>
        </div>
        <div className="col-span-5 row-span-2 col-start-6 row-start-5 border border-[#000000] flex items-center justify-start px-15 py-10 ">
          <Typography
            variant="subtitle2"
            color="primary"
            className=" font-ppmori max-w-[700px]"
          >
            {ethosData[2].content}
          </Typography>
        </div>
        <div className="col-span-4 row-start-7 border border-[#000000] flex items-center justify-start px-15 py-10 ">
          <Typography
            variant="h6"
            color="primary"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori max-w-[500px] "
          >
            {ethosData[3].title}
          </Typography>
        </div>
        <div className="col-start-5 row-start-7 bg-[#DFF48D] flex items-center justify-center ">
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {ethosData[3].number}
          </Typography>
        </div>
        <div className="col-span-5 row-span-2 col-start-1 border border-[#000000] row-start-8 flex items-center justify-start px-15 py-10 ">
          <Typography
            variant="subtitle2"
            color="primary"
            className=" font-ppmori max-w-[700px]"
          >
            {ethosData[3].content}
          </Typography>
        </div>
        <div className="col-span-4 col-start-6 border border-[#000000] row-start-7 flex items-center justify-start px-15 py-5 ">
          <Typography
            variant="h6"
            color="primary"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori max-w-[500px] "
          >
            {ethosData[4].title}
          </Typography>
        </div>
        <div className="col-start-10 row-start-7 border border-[#000000] bg-[#DFF48D] flex items-center justify-center ">
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {ethosData[4].number}
          </Typography>
        </div>
        <div className="col-span-5 col-start-6 border flex items-center justify-start border-[#000000] px-15 py-10 ">
          <Typography
            variant="subtitle2"
            color="primary"
            className=" font-ppmori max-w-[700px]"
          >
            {ethosData[4].content}
          </Typography>
        </div>
      </div>
    </>
  );
}
