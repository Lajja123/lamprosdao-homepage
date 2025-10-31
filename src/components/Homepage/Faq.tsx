"use client";
import Image from "next/image";
import { useState, useEffect, useRef, Fragment } from "react";
import left from "@/assests/common/arrow1.svg";
import right from "@/assests/common/arrow1.svg";
import top from "@/assests/Faq/top.svg";
import bottom from "@/assests/Faq/bottom.svg";
import question from "@/assests/Faq/question.svg";
import clip from "@/assests/Faq/clip.svg";
import { Typography } from "@/components/UI/Typography";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  commonStyles,
  stylePresets,
  combineStyles,
} from "@/utils/commonStyles";
import faqContent from "@/data/faqContent.json";
import Arrow from "../UI/Arrow";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
      "col-span-2 sm:col-span-1 border-b border-r md:border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center",
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
      "col-span-6 sm:col-span-8 border-b md:border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center min-w-0",
      rowStart ? `row-start-${rowStart}` : ""
    )}
  >
    <div className="flex-1 min-w-0 px-1 sm:px-2 md:px-4 lg:px-6 xl:px-10 py-2 sm:py-2">
      {children}
    </div>
  </div>
);

const IconCell = ({
  rowStart,
  onClick,
  isExpanded = false,
  iconRef,
}: {
  rowStart?: string;
  onClick?: () => void;
  isExpanded?: boolean;
  iconRef?: React.RefObject<HTMLDivElement>;
}) => (
  <div
    ref={iconRef}
    className={combineStyles(
      "col-span-2 sm:col-span-1 border-b md:border border-black p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center cursor-pointer group hover:bg-opacity-10 transition-all duration-300",
      rowStart ? `row-start-${rowStart}` : ""
    )}
    onClick={onClick}
  >
    <Image
      src={isExpanded ? top : bottom}
      alt={isExpanded ? "collapse item" : "expand item"}
      width={24}
      height={24}
      className={combineStyles(
        commonStyles.components.iconContainer.purple,
        "transition-all duration-300 ease-in-out w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 group-hover:scale-110 group-hover:brightness-110 group-hover:rotate-12"
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

  // Refs for animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);
  const answerRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Function to set answer ref
  const setAnswerRef = (itemId: number, element: HTMLDivElement | null) => {
    if (element) {
      answerRefs.current.set(itemId, element);
    } else {
      answerRefs.current.delete(itemId);
    }
  };

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
    const answerElement = answerRefs.current.get(itemId);
    const isCurrentlyExpanded = expandedItems.has(itemId);

    if (answerElement) {
      if (isCurrentlyExpanded) {
        // Collapse with GSAP
        gsap.to(answerElement, {
          height: 0,
          opacity: 0,
          marginTop: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setExpandedItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(itemId);
              return newSet;
            });
          },
        });
      } else {
        // Expand with GSAP - update state first to ensure element is rendered
        setExpandedItems((prev) => {
          const newSet = new Set(prev);
          newSet.add(itemId);
          return newSet;
        });

        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          const currentElement = answerRefs.current.get(itemId);
          if (currentElement) {
            // Get natural height
            gsap.set(currentElement, { height: "auto", opacity: 0 });
            const height = currentElement.scrollHeight;
            gsap.set(currentElement, { height: 0 });

            gsap.to(currentElement, {
              height: height,
              opacity: 1,
              marginTop: "0.5rem",
              duration: 0.6,
              ease: "power2.out",
            });
          }
        });
      }
    } else {
      // Fallback to state-based toggle if ref not available
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          newSet.add(itemId);
        }
        return newSet;
      });
    }
  };

  const currentItems = getCurrentSectionItems();

  // Reveal animations when section becomes visible - only FAQ title
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // FAQ title animation only
      const faqTitle = sectionRef.current?.querySelector(".faq-title");
      const mobileFaqTitle =
        mobileSectionRef.current?.querySelector(".faq-title");

      [faqTitle, mobileFaqTitle].forEach((title) => {
        if (title) {
          gsap.fromTo(
            title,
            {
              opacity: 0,
              scale: 0.9,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, [sectionRef, mobileSectionRef]);

    return () => {
      ctx.revert();
    };
  }, []); // Remove currentSection dependency so it doesn't retrigger on arrow clicks

  // Render FAQ item component
  const renderFaqItem = (item: any, index: number, applyRowStart: boolean) => {
    if (!item) return null;

    return (
      <>
        <NumberCell
          number={String(item.id).padStart(2, "0")}
          rowStart={applyRowStart && index > 0 ? String(index + 1) : undefined}
        />
        <ContentCell
          rowStart={applyRowStart && index > 0 ? String(index + 1) : undefined}
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
              ref={(el) => setAnswerRef(item.id, el)}
              className="overflow-hidden"
              style={{
                height: expandedItems.has(item.id) ? "auto" : 0,
                opacity: expandedItems.has(item.id) ? 1 : 0,
                marginTop: expandedItems.has(item.id) ? "0.5rem" : 0,
              }}
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
          rowStart={applyRowStart && index > 0 ? String(index + 1) : undefined}
          onClick={() => toggleExpanded(item.id)}
          isExpanded={expandedItems.has(item.id)}
        />
      </>
    );
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden" ref={mobileSectionRef}>
        <div className="grid grid-cols-10 border border-black min-w-[320px]">
          {/* Mobile Header Row: FAQ text (2 cols) + Question image (1 col) */}
          <div className="col-span-10 grid grid-cols-3 border-b border-black">
            <div className="col-span-2 border-r border-black flex justify-center items-center p-2">
              <Typography
                variant="h1"
                color="primary"
                weight="semibold"
                align="center"
                className="font-ppmori uppercase  leading-tight"
              >
                F <span className="uppercase font-bohemian wavy-letter">A</span>{" "}
                Q
              </Typography>
            </div>
            <div className="col-span-1 bg-[#CBE9FF] flex w-full justify-center items-center p-4 question-mark">
              <Image
                src={question}
                alt="question mark"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          {/* Dynamically render FAQ items */}
          {currentItems.map((item, index) => (
            <Fragment key={item.id}>
              {renderFaqItem(item, index, false)}
            </Fragment>
          ))}

          {/* Mobile Footer Row: Left Arrow (1 col) + Clip (1 col) + Right Arrow (1 col) */}
          <div className="col-span-10 grid grid-cols-3 border-t border-black">
            {/* Left arrow */}
            <div className="col-span-1 relative border-r border-black">
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
                  className="w-full h-full flex items-center justify-center group"
                >
                  <Arrow
                    direction="left"
                    size={30}
                    hoverScale={1.15}
                    hoverColor="#D0FFAC"
                    transitionDuration={0.3}
                    className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 group-hover:brightness-110"
                  />
                </button>
              </div>
            </div>

            {/* Clip image center */}
            <div className="col-span-1 border-r border-black flex justify-center items-center p-4">
              <Image
                src={clip}
                alt="clip"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Right arrow */}
            <div className="col-span-1 relative">
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
                  onClick={handleNext}
                  className="w-full h-full flex items-center justify-center group"
                >
                  <Arrow
                    direction="right"
                    size={30}
                    hoverScale={1.15}
                    hoverColor="#D0FFAC"
                    transitionDuration={0.3}
                    className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 group-hover:brightness-110"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block" ref={sectionRef}>
        <div className="grid grid-cols-10 border border-black min-w-[640px] md:min-w-[768px] lg:min-w-[1024px]">
          {/* Dynamically render FAQ items */}
          {currentItems.map((item, index) => (
            <Fragment key={item.id}>
              {renderFaqItem(item, index, true)}
            </Fragment>
          ))}

          <div
            className="row-start-4 bg-[#CBE9FF] flex w-full justify-center items-center border border-black p-2 sm:p-4 question-mark"
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <Image src={question} alt="question mark" />
          </div>

          <div
            className="col-span-4 row-start-4 border border-black flex justify-center items-center p-2 sm:p-4 faq-title"
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
                "cursor-pointer absolute inset-0 flex items-center justify-center group"
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
                hoverScale={1.2}
                hoverColor="#D0FFAC"
                transitionDuration={0.3}
                className="w-[30px] h-[30px] sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] group-hover:brightness-110"
              />
            </div>
          </div>

          <div
            className="col-span-3 col-start-7 row-start-4 border border-black w-full flex justify-center items-center p-2 sm:p-4"
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <Image
              src={clip}
              alt="clip"
              className="w-[30%] sm:w-[40%] md:w-[50%] mx-auto clip-image"
            />
          </div>

          <div
            className="relative border border-black"
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <div
              className={combineStyles(
                "cursor-pointer absolute inset-0 flex items-center justify-center group"
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
                hoverScale={1.2}
                hoverColor="#D0FFAC"
                transitionDuration={0.3}
                className="w-[30px] h-[30px] sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] group-hover:brightness-110"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
