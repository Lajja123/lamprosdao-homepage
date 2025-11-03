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
      {/* Mobile Layout */}
      <div className="lg:hidden bg-[#1A1A1A]">
        {/* Header Section */}
        <div className="border-b border-white p-4 md:p-6 flex items-center justify-center">
          <Typography
            variant="h4"
            color="yellow"
            weight="semibold"
            align="center"
            className="uppercase tracking-wider font-ppmori "
          >
            {contributions.header}
          </Typography>
        </div>

        {/* Contribution Items */}
        <div className="">
          {items.map((item, index) => (
            <div key={item.id} className="border border-white">
              {/* Header Row */}
              <div className="flex items-stretch bg-[#1A1A1A] border-b border-white">
                {/* Number cell */}
                <div className="w-14 md:w-16 p-4 border-r border-white relative flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-20"
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
                    className="uppercase tracking-wider font-psygen z-10 text-lg md:text-xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                </div>
                {/* Title cell */}
                <div className="flex-1 p-4">
                  <Typography
                    variant="h5"
                    color="white"
                    weight="semibold"
                    className="uppercase tracking-wider font-ppmori text-sm md:text-base"
                  >
                    {item.title}
                  </Typography>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 md:p-6 bg-[#1A1A1A] border-t border-white">
                <Typography
                  variant="body2"
                  color="white"
                  weight="normal"
                  className="tracking-wider font-ppmori text-sm md:text-base mb-6"
                >
                  {item.description}
                </Typography>
                <div>
                  <Link
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      label={item.buttonLabel}
                      color={item.buttonColor}
                      textColor={item.buttonTextColor}
                      className="p-3"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        {contributions.showSeeMoreButton && (
          <div className="border-t border-white p-4 md:p-6 flex items-center justify-center bg-[#000000]">
            <Link
              href="https://lamprosdao.notion.site/arbitrum-contributions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="See More" color="#D0FFAC" textColor="#0B0B0B" />
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-10 bg-[#1A1A1A]">
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

        {items
          .map((_, idx) => idx)
          .filter((i) => i % 2 === 0)
          .map((i) => {
            const pairIndex = i / 2;
            const leftItem = items[i];
            const rightItem = items[i + 1];
            const leftNumber = String(i + 1).padStart(2, "0");
            const rightNumber = rightItem
              ? String(i + 2).padStart(2, "0")
              : null;
            const rowBase = 2 + pairIndex * 2;
            return (
              <>
                <div
                  key={`num-left-${i}`}
                  className={`row-start-${rowBase} border border-white relative  flex items-center justify-center`}
                >
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
                    {leftNumber}
                  </Typography>
                </div>
                <div
                  key={`title-left-${i}`}
                  className={`col-span-4 row-start-${rowBase} border border-white flex items-center justify-start p-10 `}
                >
                  <Typography
                    variant="h5"
                    color="white"
                    weight="semibold"
                    className="uppercase tracking-wider font-ppmori "
                  >
                    {leftItem.title}
                  </Typography>
                </div>

                {rightItem && (
                  <div
                    key={`num-right-${i + 1}`}
                    className={`col-start-6 row-start-${rowBase} border border-white relative flex items-center justify-center`}
                  >
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
                      {rightNumber}
                    </Typography>
                  </div>
                )}

                {rightItem && (
                  <div
                    key={`title-right-${i + 1}`}
                    className={`col-span-4  flex items-center justify-start p-10 col-start-7 row-start-${rowBase} border border-white`}
                  >
                    <Typography
                      variant="h5"
                      color="white"
                      weight="semibold"
                      className="uppercase tracking-wider font-ppmori "
                    >
                      {rightItem.title}
                    </Typography>
                  </div>
                )}

                <div
                  key={`spacer-${i}`}
                  className={`row-start-${rowBase + 1}`}
                ></div>
                <div
                  key={`desc-left-${i}`}
                  className={`col-span-4 row-start-${
                    rowBase + 1
                  } border-r border-white p-10 flex flex-col gap-6 `}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    weight="normal"
                    className=" tracking-wider font-ppmori max-w-[600px]"
                  >
                    {leftItem.description}
                  </Typography>
                  <div>
                    <Link
                      href={leftItem.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        label={leftItem.buttonLabel}
                        color={leftItem.buttonColor}
                        textColor={leftItem.buttonTextColor}
                      ></Button>
                    </Link>
                  </div>
                </div>
                <div
                  key={`desc-spacer-${i}`}
                  className={`col-start-6 row-start-${rowBase + 1} ${
                    rightItem ? "border-b border-white" : ""
                  }`}
                ></div>

                {rightItem && (
                  <div
                    key={`desc-right-${i + 1}`}
                    className={`col-span-4 col-start-7 row-start-${
                      rowBase + 1
                    } p-10 flex flex-col gap-6 border-b border-white`}
                  >
                    <Typography
                      variant="body2"
                      color="white"
                      weight="normal"
                      className=" tracking-wider font-ppmori max-w-[600px]"
                    >
                      {rightItem.description}
                    </Typography>
                    <div>
                      <Link
                        href={rightItem.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          label={rightItem.buttonLabel}
                          color={rightItem.buttonColor}
                          textColor={rightItem.buttonTextColor}
                          className=""
                        ></Button>
                      </Link>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        {contributions.showSeeMoreButton && items.length <= 4 && (
          <div className="col-span-10 row-start-6 border-t border-white p-10 flex items-center justify-center bg-[#000000]">
            <Link
              href="https://lamprosdao.notion.site/arbitrum-contributions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="See More"
                color="#D0FFAC"
                textColor="#0B0B0B"
              ></Button>
            </Link>
          </div>
        )}
        {contributions.showSeeMoreButton && items.length > 4 && (
          <div className="col-span-10 row-start-8 border-t border-white p-10 flex items-center justify-center bg-[#000000]">
            <Link
              href="https://lamprosdao.notion.site/arbitrum-contributions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="See More"
                color="#D0FFAC"
                textColor="#0B0B0B"
              ></Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
