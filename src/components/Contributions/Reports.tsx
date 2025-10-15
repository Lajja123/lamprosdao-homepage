import Button from "../UI/Button";
import { GridCell } from "../UI/Grid";
import Typography from "../UI/Typography";
import bgImage1 from "@/assests/Governance/reportbg.png";
import contributionsData from "@/data/contributionsContent.json";
import link from "@/assests/Governance/link.svg";
import Image from "next/image";
import Link from "next/link";

interface ContributionItem {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  link?: string; // Optional link property
  buttonColor: string;
  buttonTextColor: string;
}

interface ReportsProps {
  activeChain: "arbitrum" | "optimism";
}

export default function Reports({ activeChain }: ReportsProps) {
  const contributions = contributionsData[activeChain].contributions;
  const items = contributions.items as ContributionItem[];
  return (
    <>
      <div className="grid grid-cols-10 bg-[#1A1A1A]">
        <div className="border-b border-r border-l border-white"></div>
        <div className="col-span-8 border-b border-r border-l border-white flex items-center justify-center p-10">
          <Typography
            variant="subtitle1"
            color="yellow"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori"
          >
            {contributions.header}{" "}
          </Typography>
        </div>
        <div className="col-start-10 border-b border-r border-l border-white flex items-center justify-center p-10"></div>
        <div className="row-start-2 border border-white relative p-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            01{" "}
          </Typography>
        </div>
        <div className="col-span-4 row-start-2 border border-white flex items-center justify-start p-10 ">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            {items[0].title}
          </Typography>
        </div>
        <div className="col-start-6 row-start-2 border border-white relative flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            02{" "}
          </Typography>
        </div>
        <div className="col-span-4  flex items-center justify-start p-10 col-start-7 row-start-2 border border-white">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            {items[1].title}
          </Typography>
        </div>
        <div className="row-start-3"></div>
        <div className="col-span-4 row-start-3 border-r border-white p-10 flex flex-col gap-6 ">
          <Typography
            variant="body2"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori max-w-[600px]"
          >
            {items[0].description}
          </Typography>
          <div>
            <Link
              href={items[0].link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={items[0].buttonLabel}
                color={items[0].buttonColor}
                textColor={items[0].buttonTextColor}
              ></Button>
            </Link>
          </div>
        </div>
        <div className="col-start-6 row-start-3"></div>
        <div className="col-span-4 col-start-7 row-start-3 p-10  flex flex-col gap-6  ">
          <Typography
            variant="body2"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori max-w-[600px]"
          >
            {items[1].description}
          </Typography>
          <div>
            <Link
              href={items[1].link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={items[1].buttonLabel}
                color={items[1].buttonColor}
                textColor={items[1].buttonTextColor}
                className=""
              ></Button>
            </Link>
          </div>
        </div>
        <div className="row-start-4 border border-white relative flex items-start justify-center p-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            03
          </Typography>
        </div>
        <div className="col-span-4 row-start-4 border border-white p-10 flex items-start justify-start">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori max-w-[600px]"
          >
            {items[2].title}{" "}
          </Typography>
        </div>
        <div className="col-start-6 row-start-4 border border-white relative flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            04
          </Typography>
        </div>
        <div className="col-span-4 p-10 col-start-7 row-start-4 border border-white flex items-center justify-start">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            {items[3].title}{" "}
          </Typography>
        </div>
        <div className="row-start-5"></div>
        <div className="col-span-4 row-start-5  p-10 flex flex-col gap-6 border-r border-white">
          <Typography
            variant="body2"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori max-w-[600px]"
          >
            {items[2].description}
          </Typography>
          <div>
            <Link
              href={items[2].link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={items[2].buttonLabel}
                color={items[2].buttonColor}
                textColor={items[2].buttonTextColor}
                className=""
              ></Button>
            </Link>
          </div>
        </div>
        <div className="col-start-6 row-start-5"></div>
        <div className="col-span-4 col-start-7 row-start-5 p-10 flex flex-col gap-6">
          <Typography
            variant="body2"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori max-w-[600px]"
          >
            {items[3].description}
          </Typography>
          <div>
            <Link
              href={items[3].link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={items[3].buttonLabel}
                color={items[3].buttonColor}
                textColor={items[3].buttonTextColor}
                className=""
              ></Button>
            </Link>
          </div>
        </div>
        <div className="col-span-10 row-start-6 border-t border-white p-10 flex items-center justify-center bg-[#000000]">
          <Button label="See More" color="#D0FFAC" textColor="#0B0B0B"></Button>
        </div>
      </div>
    </>
  );
}
