"use client";
import Image from "next/image";
import { useState } from "react";
import left from "@/assests/common/arrow1.svg";
import right from "@/assests/common/arrow1.svg";
import top from "@/assests/Faq/top.svg";
import bottom from "@/assests/Faq/bottom.svg";
import question from "@/assests/Faq/question.svg";
import clip from "@/assests/Faq/clip.svg";
import { Typography } from "@/components/UI/Typography";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";

import {
  commonStyles,
  stylePresets,
  combineStyles,
} from "@/utils/commonStyles";
import faqContent from "@/data/faqContent.json";
import Arrow from "../UI/Arrow";

// Reusable components
const NumberCell = ({
  number,
  rowStart,
}: {
  number: string;
  rowStart?: string;
}) => (
  <div
    className={combineStyles(
      stylePresets.faq.numberCell,
      rowStart ? `row-start-${rowStart}` : ""
    )}
  >
    <Typography
      variant="h5"
      color="primary"
      weight="semibold"
      className="font-psygen text-sm md:text-base"
    >
      {number}
    </Typography>
  </div>
);

const ContentCell = ({
  children,
  rowStart,
  iconSrc = top,
  onClick,
  isExpanded = false,
}: {
  children: React.ReactNode;
  rowStart?: string;
  iconSrc?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}) => (
  <div
    className={combineStyles(
      stylePresets.faq.contentCell,
      rowStart ? `row-start-${rowStart}` : ""
    )}
  >
    <div className="flex-1 min-w-0 px-10 py-2">{children}</div>
    <div
      className="flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110"
      onClick={onClick}
    >
      <Image
        src={isExpanded ? bottom : top}
        alt={isExpanded ? "collapse item" : "expand item"}
        width={40}
        height={40}
        className={combineStyles(
          commonStyles.components.iconContainer.purple,
          "transition-all duration-300 ease-in-out",
          isExpanded ? "rotate-180" : "rotate-0"
        )}
      />
    </div>
  </div>
);

export default function Faq() {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const faqItems = faqContent.faqItems;
  const itemsPerSection = 3;
  const totalSections = Math.ceil(faqItems.length / itemsPerSection);

  const handlePrevious = () => {
    setCurrentSection((prev) => (prev > 0 ? prev - 1 : totalSections - 1));
  };

  const handleNext = () => {
    setCurrentSection((prev) => (prev < totalSections - 1 ? prev + 1 : 0));
  };

  const getCurrentSectionItems = () => {
    const startIndex = currentSection * itemsPerSection;
    return faqItems.slice(startIndex, startIndex + itemsPerSection);
  };

  const toggleExpanded = (itemId: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const currentItems = getCurrentSectionItems();

  return (
    <>
      <div className={commonStyles.grid.cols10}>
        <NumberCell
          number={String(currentSection * itemsPerSection + 1).padStart(2, "0")}
        />

        <ContentCell
          onClick={() => currentItems[0] && toggleExpanded(currentItems[0].id)}
          isExpanded={
            currentItems[0] ? expandedItems.has(currentItems[0].id) : false
          }
        >
          <div>
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className={combineStyles(
                commonStyles.typography.body.medium,
                commonStyles.typography.wrap.words
              )}
            >
              {currentItems[0]?.question || ""}
            </Typography>
            {currentItems[0] && (
              <div
                className={combineStyles(
                  "overflow-hidden transition-all duration-500 ease-in-out ",
                  expandedItems.has(currentItems[0].id)
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0 mt-0"
                )}
              >
                <Typography
                  variant="body2"
                  color="primary"
                  weight="semibold"
                  className={combineStyles(
                    commonStyles.typography.body.medium,
                    commonStyles.typography.wrap.words
                  )}
                >
                  {currentItems[0].answer}
                </Typography>
              </div>
            )}
          </div>
        </ContentCell>

        <NumberCell
          number={String(currentSection * itemsPerSection + 2).padStart(2, "0")}
          rowStart="2"
        />

        <ContentCell
          rowStart="2"
          onClick={() => currentItems[1] && toggleExpanded(currentItems[1].id)}
          isExpanded={
            currentItems[1] ? expandedItems.has(currentItems[1].id) : false
          }
        >
          <div>
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className={combineStyles(
                commonStyles.typography.body.medium,
                commonStyles.typography.wrap.words
              )}
            >
              {currentItems[1]?.question || ""}
            </Typography>
            {currentItems[1] && (
              <div
                className={combineStyles(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  expandedItems.has(currentItems[1].id)
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0 mt-0"
                )}
              >
                <Typography
                  variant="body2"
                  color="primary"
                  weight="semibold"
                  className={combineStyles(
                    commonStyles.typography.body.medium,
                    commonStyles.typography.wrap.words
                  )}
                >
                  {currentItems[1].answer}
                </Typography>
              </div>
            )}
          </div>
        </ContentCell>

        <NumberCell
          number={String(currentSection * itemsPerSection + 3).padStart(2, "0")}
          rowStart="3"
        />

        <ContentCell
          rowStart="3"
          onClick={() => currentItems[2] && toggleExpanded(currentItems[2].id)}
          isExpanded={
            currentItems[2] ? expandedItems.has(currentItems[2].id) : false
          }
        >
          <div>
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className={combineStyles(
                commonStyles.typography.body.medium,
                "font-ppmori",
                commonStyles.typography.wrap.words
              )}
            >
              {currentItems[2]?.question || ""}
            </Typography>
            {currentItems[2] && (
              <div
                className={combineStyles(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  expandedItems.has(currentItems[2].id)
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0 mt-0"
                )}
              >
                <Typography
                  variant="body2"
                  color="primary"
                  weight="semibold"
                  className={combineStyles(
                    commonStyles.typography.body.medium,
                    commonStyles.typography.wrap.words
                  )}
                >
                  {currentItems[2].answer}
                </Typography>
              </div>
            )}
          </div>
        </ContentCell>

        <div className={stylePresets.faq.questionCell}>
          <Image src={question} alt="question mark" />
        </div>

        <div className={stylePresets.faq.titleCell}>
          <Typography
            variant="h1"
            color="primary"
            weight="semibold"
            align="center"
            className="font-ppmori uppercase text-[28px] sm:text-[36px] md:text-[64px] lg:text-[88px] xl:text-[128px] leading-tight"
          >
            F <span className="uppercase font-bohemian wavy-letter">A</span> Q
          </Typography>
        </div>

        <div className="relative ">
          <div
            className={combineStyles(
              "cursor-pointer absolute inset-0 flex items-center justify-center"
            )}
            style={{
              backgroundImage: `url(${bgImage2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={handlePrevious}
          >
            <Arrow
              direction={left}
              size={70}
              className="sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]"
            />{" "}
          </div>
        </div>

        <div className={stylePresets.faq.clipCell}>
          <Image src={clip} alt="clip" />
        </div>

        <div className="relative">
          <div
            className={combineStyles(
              "cursor-pointer  absolute inset-0 flex items-center justify-center"
            )}
            style={{
              backgroundImage: `url(${bgImage2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={handleNext}
          >
            <Arrow
              direction={right}
              size={70}
              className="sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
