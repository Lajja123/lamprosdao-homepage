"use client";
import Image from "next/image";
import { useState, useRef, Fragment, useEffect } from "react";
import { Typography } from "@/components/UI/Typography";
import Arrow from "../UI/Arrow";
import { NumberCell, ContentCell, IconCell } from "@/components/UI/FaqCell";
import { combineStyles } from "@/utils/commonStyles";
import faqContent from "@/data/faqContent.json";
import { useFaqConfig } from "@/hooks/useFaqConfig";
import type { FaqItem } from "@/types/home/faq";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { loadGsap, loadGsapWithScrollTrigger } from "@/utils/gsapLoader";

export default function Faq() {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const faqItems = faqContent.faqItems;
  const itemsPerSection = 3;
  const totalSections = Math.ceil(faqItems.length / itemsPerSection);

  const { images, backgroundImages, textConfig, arrowConfig, layoutConfig } =
    useFaqConfig();

  // Refs for animations
  const answerRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const questionRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const isInitialMountRef = useRef(true);

  // Function to set answer ref
  const setAnswerRef = (itemId: number, element: HTMLDivElement | null) => {
    if (element) {
      answerRefs.current.set(itemId, element);
    } else {
      answerRefs.current.delete(itemId);
    }
  };

  // Function to set question ref
  const setQuestionRef = (itemId: number, element: HTMLDivElement | null) => {
    if (element) {
      questionRefs.current.set(itemId, element);
    } else {
      questionRefs.current.delete(itemId);
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

  // Initial reveal animations for questions on mount and section change
  useEffect(() => {
    let isMounted = true;
    const scrollTriggers: ScrollTrigger[] = [];

    const rafId = requestAnimationFrame(async () => {
      const { gsap } = await loadGsapWithScrollTrigger();
      if (!isMounted) return;

      currentItems.forEach((item) => {
        const questionElement = questionRefs.current.get(item.id);
        if (!questionElement) return;

        gsap.set(questionElement, {
          opacity: 0,
          y: 30,
        });

        const animation = gsap.to(questionElement, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: questionElement,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        const trigger = animation?.scrollTrigger as ScrollTrigger | undefined;
        if (trigger) {
          scrollTriggers.push(trigger);
        }
      });
    });

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafId);
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  // Smooth transitions when section changes
  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      return;
    }

    let isMounted = true;
    let timeline: any = null;

    const scheduleAnimation = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          const gsap = await loadGsap();
          if (!isMounted) return;

          timeline = gsap.timeline();

          currentItems.forEach((item) => {
            const questionElement = questionRefs.current.get(item.id);
            if (!questionElement) return;

            gsap.set(questionElement, {
              opacity: 0,
              y: 20,
            });

            timeline.to(
              questionElement,
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              0
            );
          });
        });
      });
    };

    scheduleAnimation();

    return () => {
      isMounted = false;
      timeline?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  // Render FAQ item component
  const renderFaqItem = (
    item: FaqItem,
    index: number,
    applyRowStart: boolean
  ) => {
    if (!item) return null;

    return (
      <>
        <NumberCell
          number={String(item.id).padStart(2, "0")}
          rowStart={applyRowStart && index > 0 ? String(index + 1) : undefined}
          numberColor={textConfig.numberColor as `#${string}` | "primary"}
          numberClassName={textConfig.numberClassName}
        />
        <ContentCell
          rowStart={applyRowStart && index > 0 ? String(index + 1) : undefined}
        >
          <div>
            <div ref={(el) => setQuestionRef(item.id, el)}>
              <Typography
                variant="body2"
                color={textConfig.questionColor as `#${string}` | "primary"}
                weight="semibold"
                className={combineStyles(
                  textConfig.questionClassName,
                  "break-words"
                )}
              >
                {item.question}
              </Typography>
            </div>
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
                color={textConfig.answerColor as `#${string}` | "primary"}
                weight="semibold"
                className={combineStyles(
                  textConfig.answerClassName,
                  "break-words"
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
          expandIcon={images.expandIcon}
          collapseIcon={images.collapseIcon}
        />
      </>
    );
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className={layoutConfig.mobile.grid.className}>
          <div className={layoutConfig.mobile.headerRow.className}>
            <div className={layoutConfig.mobile.titleCell.className}>
              <Typography
                variant="h1"
                color={textConfig.titleColor as `#${string}` | "primary"}
                weight="semibold"
                align="center"
                className={textConfig.titleClassName}
              >
                F <span className="uppercase font-bohemian wavy-letter">A</span>{" "}
                Q
              </Typography>
            </div>
            <div
              className={layoutConfig.mobile.questionCell.className}
              style={{
                backgroundColor:
                  layoutConfig.mobile.questionCell.backgroundColor,
              }}
            >
              <Image
                src={images.question.src}
                alt={images.question.alt}
                className={images.question.className}
                width={images.question.width}
                height={images.question.height}
              />
            </div>
          </div>

          {/* Dynamically render FAQ items */}
          {currentItems.map((item, index) => (
            <Fragment key={item.id}>
              {renderFaqItem(item, index, false)}
            </Fragment>
          ))}

          <div className={layoutConfig.mobile.footerRow.className}>
            <div className={layoutConfig.mobile.arrowCell.className}>
              <div
                className={combineStyles(
                  "cursor-pointer absolute inset-0 flex items-center justify-center"
                )}
                style={{
                  backgroundImage: `url(${backgroundImages.arrowBg.src})`,
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
                    size={arrowConfig.mobile.size}
                    hoverScale={arrowConfig.mobile.hoverScale}
                    hoverColor={arrowConfig.mobile.hoverColor}
                    transitionDuration={arrowConfig.mobile.transitionDuration}
                    className={arrowConfig.mobile.className}
                  />
                </button>
              </div>
            </div>

            {/* Clip image center */}
            <div className={layoutConfig.mobile.clipCell.className}>
              <Image
                src={images.clip.src}
                alt={images.clip.alt}
                className={images.clip.className}
                width={images.clip.width}
                height={images.clip.height}
              />
            </div>

            {/* Right arrow */}
            <div className={layoutConfig.mobile.arrowCell.className}>
              <div
                className={combineStyles(
                  "cursor-pointer absolute inset-0 flex items-center justify-center"
                )}
                style={{
                  backgroundImage: `url(${backgroundImages.arrowBg.src})`,
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
                    size={arrowConfig.mobile.size}
                    hoverScale={arrowConfig.mobile.hoverScale}
                    hoverColor={arrowConfig.mobile.hoverColor}
                    transitionDuration={arrowConfig.mobile.transitionDuration}
                    className={arrowConfig.mobile.className}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className={layoutConfig.desktop.grid.className}>
          {/* Dynamically render FAQ items */}
          {currentItems.map((item, index) => (
            <Fragment key={item.id}>
              {renderFaqItem(item, index, true)}
            </Fragment>
          ))}

          <div
            className={layoutConfig.desktop.headerCell.className}
            style={{
              gridRowStart: currentItems.length + 1,
              backgroundColor: layoutConfig.desktop.headerCell.backgroundColor,
            }}
          >
            <Image
              src={images.questionDesktop.src}
              alt={images.questionDesktop.alt}
              width={images.questionDesktop.width}
              height={images.questionDesktop.height}
            />
          </div>

          <div
            className={layoutConfig.desktop.titleCell.className}
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <Typography
              variant="h1"
              color={textConfig.titleColor as `#${string}` | "primary"}
              weight="semibold"
              align="center"
              className="font-ppmori uppercase text-[16px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[64px] 2xl:text-[88px] leading-tight"
            >
              F <span className="uppercase font-bohemian wavy-letter">A</span> Q
            </Typography>
          </div>

          <div
            className={layoutConfig.desktop.arrowCell.className}
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <div
              className={combineStyles(
                "cursor-pointer absolute inset-0 flex items-center justify-center group"
              )}
              style={{
                backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handlePrevious}
            >
              <Arrow
                direction="left"
                size={arrowConfig.desktop.size}
                hoverScale={arrowConfig.desktop.hoverScale}
                hoverColor={arrowConfig.desktop.hoverColor}
                transitionDuration={arrowConfig.desktop.transitionDuration}
                className={arrowConfig.desktop.className}
              />
            </div>
          </div>

          <div
            className={layoutConfig.desktop.clipCell.className}
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <Image
              src={images.clipDesktop.src}
              alt={images.clipDesktop.alt}
              className={images.clipDesktop.className}
              width={images.clipDesktop.width}
              height={images.clipDesktop.height}
            />
          </div>

          <div
            className={layoutConfig.desktop.arrowCell.className}
            style={{ gridRowStart: currentItems.length + 1 }}
          >
            <div
              className={combineStyles(
                "cursor-pointer absolute inset-0 flex items-center justify-center group"
              )}
              style={{
                backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={handleNext}
            >
              <Arrow
                direction="right"
                size={arrowConfig.desktop.size}
                hoverScale={arrowConfig.desktop.hoverScale}
                hoverColor={arrowConfig.desktop.hoverColor}
                transitionDuration={arrowConfig.desktop.transitionDuration}
                className={arrowConfig.desktop.className}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
