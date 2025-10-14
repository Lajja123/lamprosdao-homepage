import Typography from "@/components/UI/Typography";
import Image from "next/image";
import web12 from "@/assests/AboutUs/12.svg";
import web34 from "@/assests/AboutUs/34.svg";
import web56 from "@/assests/AboutUs/56.svg";
import web78 from "@/assests/AboutUs/78.svg";

export default function Journey() {
  const journeyData = [
    {
      number: "01",
      date: "OCT '23",
      title: "Formation of Lampros DAO",
      color: "bg-[#DFF48D]",
    },
    {
      number: "02",
      date: "NOV '23 - FEB '24",
      title: "NumbaNERDs Program (Optimism Collective)",
      color: "bg-[#CBE9FF]",
    },
    {
      number: "03",
      date: "MAR '24 - APR '24",
      title: "Open Data Community (ThankARB, Arbitrum DAO)",
      color: "bg-[#DFCDF2]",
    },
    {
      number: "04",
      date: "MAR '24",
      title: "Becoming a delegate in Arbitrum DAO and Optimism Collective",
      color: "bg-[#FFBDA9]",
    },
    {
      number: "05",
      date: "JUN '24 - DEC '24",
      title: "Arbitrum Governance & Development Initiative (AGDI)",
      color: "bg-[#DFCDF2]",
    },
    {
      number: "06",
      date: "JUN '24 - NOV '24",
      title: "LTIPP Research Bounty (Arbitrum DAO)",
      color: "bg-[#FFBDA9]",
    },
    {
      number: "07",
      date: "JUN '24 - JAN '25",
      title: "Contributing to Optimism Foundation Mission Requests",
      color: "bg-[#DFCDF2]",
    },
    {
      number: "08",
      date: "DEC '24",
      title:
        "Ranked in Top 5 Active Delegate in Arbitrum DAO (Delegate Incentive Program)",
      color: "bg-[#FFBDA9]",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-10 grid-rows-9 bg-[#1A1A1A]">
        <div className="row-span-9 border border-[#FFFFFF]"></div>
        <div className="col-span-8 border border-[#FFFFFF] flex items-center justify-center p-5">
          <Typography
            variant="h2"
            color="white"
            className="uppercase font-ppmori tracking-wider "
          >
            O<span className="uppercase font-bohemian wavy-letter">U</span>r{" "}
            {""}
            <span className="uppercase font-bohemian wavy-letter">
              W
            </span>eb3 {""}
            <span className=" uppercase font-bohemian wavy-letter">J</span>our
            <span className="uppercase font-bohemian wavy-letter">n</span>e
            <span className="uppercase font-bohemian wavy-letter">y</span>
          </Typography>
        </div>
        <div className="row-span-9 col-start-10 border border-[#FFFFFF]"></div>
        <div className="col-span-4 row-span-2 col-start-2 row-start-2 border border-[#FFFFFF] flex items-center justify-center p-5 ">
          <Image src={web12} alt="Metallic sculpture" />
        </div>
        <div className="col-span-3 col-start-6 row-start-2 border border-[#FFFFFF] flex flex-col justify-center gap-3 items-start px-15 py-5 ">
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-ppmori "
          >
            {journeyData[0].date}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="light"
            className=" tracking-wide font-ppmori"
          >
            {journeyData[0].title}
          </Typography>
        </div>
        <div className="col-start-9 row-start-2 border border-[#FFFFFF] bg-[#DFF48D] flex items-center justify-center ">
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {journeyData[0].number}
          </Typography>
        </div>
        <div className="col-start-6 row-start-3 border border-[#FFFFFF] bg-[#CBE9FF] flex items-center justify-center">
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {journeyData[1].number}
          </Typography>
        </div>
        <div className="col-span-3 col-start-7 row-start-3 border border-[#FFFFFF] flex flex-col justify-center gap-3 items-start px-15 py-5 ">
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-ppmori "
          >
            {journeyData[1].date}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="light"
            className=" tracking-wide font-ppmori"
          >
            {journeyData[1].title}
          </Typography>
        </div>

        <div
          className={`col-start-2 row-start-4 border border-[#FFFFFF] flex items-center justify-center ${journeyData[2].color}`}
        >
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {journeyData[2].number}
          </Typography>
        </div>
        <div className="col-span-3 col-start-3 row-start-4 border border-[#FFFFFF] flex flex-col justify-center gap-3 items-start px-15 py-5 ">
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-ppmori "
          >
            {journeyData[2].date}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="light"
            className=" tracking-wide font-ppmori"
          >
            {journeyData[2].title}
          </Typography>
        </div>
        <div className="col-span-4 row-span-2 col-start-6 row-start-4 border border-[#FFFFFF] flex items-center justify-center p-5 ">
          <Image src={web34} alt="Metallic sculpture" />
        </div>
        <div className="col-span-3 col-start-2 row-start-5 border border-[#FFFFFF] flex flex-col justify-center gap-3 items-start px-15 py-5 ">
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-ppmori "
          >
            {journeyData[3].date}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="light"
            className=" tracking-wide font-ppmori"
          >
            {journeyData[3].title}
          </Typography>
        </div>
        <div
          className={`col-start-5 row-start-5 border border-[#FFFFFF] flex items-center justify-center  ${journeyData[3].color}`}
        >
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {journeyData[3].number}
          </Typography>
        </div>
        <div className="col-span-4 row-span-2 col-start-2 row-start-6 border border-[#FFFFFF] flex items-center justify-center p-5 ">
          <Image src={web56} alt="Metallic sculpture" />
        </div>
        <div className="col-span-3 col-start-6 row-start-6 border border-[#FFFFFF] flex flex-col justify-center gap-3 items-start px-15 py-5 ">
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-ppmori "
          >
            {journeyData[4].date}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="light"
            className=" tracking-wide font-ppmori"
          >
            {journeyData[4].title}
          </Typography>
        </div>
        <div
          className={`col-start-9 row-start-6 border border-[#FFFFFF] flex items-center justify-center  ${journeyData[4].color}`}
        >
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {journeyData[4].number}
          </Typography>
        </div>
        <div
          className={`col-start-6 row-start-7 border border-[#FFFFFF] flex items-center justify-center  ${journeyData[5].color}`}
        >
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {journeyData[5].number}
          </Typography>
        </div>
        <div className="col-span-3 col-start-7 row-start-7 border border-[#FFFFFF] flex flex-col justify-center gap-3 items-start px-15 py-5 ">
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-ppmori "
          >
            {journeyData[5].date}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="light"
            className=" tracking-wide font-ppmori"
          >
            {journeyData[5].title}
          </Typography>
        </div>
        <div className="col-span-4 row-span-2 col-start-6 row-start-8 border border-[#FFFFFF] flex items-center justify-center p-5">
          <Image src={web78} alt="Metallic sculpture" />
        </div>
        <div
          className={`col-start-2 row-start-8 border border-[#FFFFFF] flex items-center justify-center  ${journeyData[6].color}`}
        >
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {journeyData[6].number}
          </Typography>
        </div>
        <div className="col-span-3 col-start-3 row-start-8 border border-[#FFFFFF] flex flex-col justify-center gap-3 items-start px-15 py-5 ">
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-ppmori "
          >
            {journeyData[6].date}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="light"
            className=" tracking-wide font-ppmori"
          >
            {journeyData[6].title}
          </Typography>
        </div>
        <div className="col-span-3 col-start-2 row-start-9 border border-[#FFFFFF] flex flex-col justify-center gap-3 items-start px-15 py-5 ">
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-ppmori "
          >
            {journeyData[7].date}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            weight="light"
            className=" tracking-wide font-ppmori"
          >
            {journeyData[7].title}
          </Typography>
        </div>
        <div
          className={`col-start-5 row-start-9 border border-[#FFFFFF] flex items-center justify-center  ${journeyData[7].color}`}
        >
          <Typography
            variant="h2"
            color="primary"
            weight="normal"
            className="font-psygen"
          >
            {journeyData[7].number}
          </Typography>
        </div>
      </div>
    </>
  );
}
