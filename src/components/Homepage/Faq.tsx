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
      "col-span-2 border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center",
      rowStart ? `row-start-${rowStart}` : ""
    )}
  >
    <Typography
      variant="h5"
      color="primary"
      weight="semibold"
      className="font-psygen text-xs sm:text-sm md:text-base lg:text-lg"
    >
      {number}
    </Typography>
  </div>
);

const ContentCell = ({
  children,
  rowStart,
}: {
  children: React.ReactNode;
  rowStart?: string;
}) => (
  <div
    className={combineStyles(
      "col-span-6 border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center min-w-0",
      rowStart ? `row-start-${rowStart}` : ""
    )}
  >
    <div className="flex-1 min-w-0 px-1 sm:px-2 md:px-4 lg:px-6 xl:px-10 py-2 sm:py-2">{children}</div>
  </div>
);

const IconCell = ({
  rowStart,
  onClick,
  isExpanded = false,
}: {
  rowStart?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}) => (
  <div
    className={combineStyles(
      "col-span-2 border border-black p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center cursor-pointer ",
      rowStart ? `row-start-${rowStart}` : ""
    )}
    onClick={onClick}
  >
    <Image
      src={isExpanded ? bottom : top}
      alt={isExpanded ? "collapse item" : "expand item"}
      width={24}
      height={24}
      className={combineStyles(
        commonStyles.components.iconContainer.purple,
        "transition-all duration-300 ease-in-out w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10"
      )}
    />
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
        >
          <div>
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className={combineStyles(
                "text-xs sm:text-sm md:text-base lg:text-lg",
                commonStyles.typography.wrap.words
              )}
            >
              {item.question}
            </Typography>
            <div
              className={combineStyles(
                "overflow-hidden transition-all duration-500 ease-in-out",
                expandedItems.has(item.id)
                  ? "max-h-96 opacity-100 mt-2 sm:mt-3"
                  : "max-h-0 opacity-0 mt-0"
              )}
            >
              <Typography
                variant="body2"
                color="primary"
                weight="semibold"
                className={combineStyles(
                  "text-xs sm:text-sm md:text-base lg:text-lg",
                  commonStyles.typography.wrap.words
                )}
              >
                {item.answer}
              </Typography>
            </div>
          </div>
        </ContentCell>
        <IconCell
          rowStart={index > 0 ? String(index + 1) : undefined}
          onClick={() => toggleExpanded(item.id)}
          isExpanded={expandedItems.has(item.id)}
        />
      </>
    );
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="block sm:hidden ">
        <div className="grid grid-cols-10 border border-black min-w-[320px]">
          {/* Dynamically render FAQ items */}
          {currentItems.map((item, index) => renderFaqItem(item, index))}

          {/* Mobile Footer Row: Left Arrow (2 col) + FAQ Text (6 cols) + Right Arrow (2 col) */}
          <div
            className="col-span-2 relative border border-black"
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
            >
              <button
                onClick={handlePrevious}
                className="w-full h-full flex items-center justify-center"
              >
                <Arrow
                  direction="left"
                  size={30}
                  className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300"
                />
              </button>
            </div>
          </div>

          <div
            className="col-span-6 border border-black flex justify-center items-center p-4"
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <Typography
              variant="h1"
              color="primary"
              weight="semibold"
              align="center"
              className="font-ppmori uppercase text-[16px] leading-tight"
            >
              F <span className="uppercase font-bohemian wavy-letter">A</span> Q
            </Typography>
          </div>

          <div
            className="col-span-2 relative border border-black"
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
              onClick={handleNext}
            >
              <button
                onClick={handleNext}
                className="w-full h-full flex items-center justify-center"
              >
                <Arrow
                  direction="right"
                  size={30}
                  className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-10 border border-black min-w-[640px] md:min-w-[768px] lg:min-w-[1024px]">
          {/* Dynamically render FAQ items */}
          {currentItems.map((item, index) => renderFaqItem(item, index))}

          <div
            className="row-start-4 bg-[#CBE9FF] flex w-full justify-center items-center border border-black p-2 sm:p-4"
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <Image 
              src={question} 
              alt="question mark" 
            />
          </div>

          <div
            className="col-span-4 row-start-4 border border-black flex justify-center items-center p-2 sm:p-4"
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <Typography
              variant="h1"
              color="primary"
              weight="semibold"
              align="center"
              className="font-ppmori uppercase text-[16px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[64px] 2xl:text-[88px] leading-tight"
            >
              F <span className="uppercase font-bohemian wavy-letter">A</span> Q
            </Typography>
          </div>

          <div
            className="relative border border-black"
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
<button
                onClick={handlePrevious}
                className="w-full h-full flex items-center justify-center"
              >
                <Arrow
                  direction="left"
                  size={30}
                  className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300"
                />
              </button>
            </div>
          </div>

          <div
            className="col-span-3 col-start-7 row-start-4 border border-black w-full flex justify-center items-center p-2 sm:p-4"
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <Image 
              src={clip} 
              alt="clip" 
              className="w-[30%] sm:w-[40%] md:w-[50%] mx-auto" 
            />
          </div>

          <div
            className="relative border border-black"
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
              onClick={handleNext}
            >
              <button
                onClick={handleNext}
                className="w-full h-full flex items-center justify-center"
              >
                <Arrow
                  direction="right"
                  size={30}
                  className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
