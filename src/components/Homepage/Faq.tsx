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

  // Render FAQ item component
  const renderFaqItem = (item: any, index: number) => {
    if (!item) return null;

    return (
      <>
        <NumberCell
          number={String(currentSection * itemsPerSection + index + 1).padStart(
            2,
            "0"
          )}
          rowStart={index > 0 ? String(index + 1) : undefined}
        />
        <ContentCell
          rowStart={index > 0 ? String(index + 1) : undefined}
          onClick={() => toggleExpanded(item.id)}
          isExpanded={expandedItems.has(item.id)}
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
              {item.question}
            </Typography>
            <div
              className={combineStyles(
                "overflow-hidden transition-all duration-500 ease-in-out",
                expandedItems.has(item.id)
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
                {item.answer}
              </Typography>
            </div>
          </div>
        </ContentCell>
      </>
    );
  };

  return (
    <>
      <div className={commonStyles.grid.cols10}>
        {/* Dynamically render FAQ items */}
        {currentItems.map((item, index) => renderFaqItem(item, index))}

        <div
          className={stylePresets.faq.questionCell}
          style={{ gridRowStart: currentItems.length + 1 }}
        >
          <Image src={question} alt="question mark" />
        </div>

        <div
          className={stylePresets.faq.titleCell}
          style={{ gridRowStart: currentItems.length + 1 }}
        >
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

        <div
          className="relative"
          style={{ gridRowStart: currentItems.length + 1 }}
        >
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
              direction="left"
              size={70}
              className="sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]"
            />{" "}
          </div>
        </div>

        <div
          className={stylePresets.faq.clipCell}
          style={{ gridRowStart: currentItems.length + 1 }}
        >
          <Image src={clip} alt="clip" className="w-[50%]  mx-auto" />
        </div>

        <div
          className="relative"
          style={{ gridRowStart: currentItems.length + 1 }}
        >
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
              direction="right"
              size={70}
              className="sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px]"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
