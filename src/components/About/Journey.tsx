"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "@/components/UI/Typography";
import Image from "next/image";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useJourneyConfig } from "@/hooks/useJourneyConfig";
import JourneyTitle from "./JourneyTitle";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Journey() {
  const {
    journeyData,
    images,
    textConfig,
    layoutConfig,
    desktopItemPositions,
  } = useJourneyConfig();

  // Refs for animation elements
  const mobileHeaderTitleRef = useRef<HTMLDivElement>(null);
  const mobileItemRefs = useRef<Map<number, { content: HTMLDivElement | null; number: HTMLDivElement | null }>>(new Map());

  const desktopHeaderTitleRef = useRef<HTMLDivElement>(null);
  const desktopItemRefs = useRef<Map<number, { image: HTMLDivElement | null; content: HTMLDivElement | null; number: HTMLDivElement | null }>>(new Map());

  useEffect(() => {
    const scrollTriggers: ScrollTrigger[] = [];

    // Mobile header title animation
    if (mobileHeaderTitleRef.current) {
      gsap.set(mobileHeaderTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const titleAnimation = gsap.to(mobileHeaderTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileHeaderTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (titleAnimation.scrollTrigger) {
        scrollTriggers.push(titleAnimation.scrollTrigger);
      }
    }

    // Mobile items animations
    mobileItemRefs.current.forEach((itemRefs, index) => {
      if (itemRefs.content) {
        gsap.set(itemRefs.content, {
          opacity: 0,
          y: 40,
        });

        const contentAnimation = gsap.to(itemRefs.content, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRefs.content,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (contentAnimation.scrollTrigger) {
          scrollTriggers.push(contentAnimation.scrollTrigger);
        }
      }

      if (itemRefs.number) {
        gsap.set(itemRefs.number, {
          opacity: 0,
          scale: 0.9,
        });

        const numberAnimation = gsap.to(itemRefs.number, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: itemRefs.number,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (numberAnimation.scrollTrigger) {
          scrollTriggers.push(numberAnimation.scrollTrigger);
        }
      }
    });

    // Desktop header title animation
    if (desktopHeaderTitleRef.current) {
      gsap.set(desktopHeaderTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const titleAnimation = gsap.to(desktopHeaderTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopHeaderTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (titleAnimation.scrollTrigger) {
        scrollTriggers.push(titleAnimation.scrollTrigger);
      }
    }

    // Desktop items animations
    desktopItemRefs.current.forEach((itemRefs, index) => {
      if (itemRefs.image) {
        gsap.set(itemRefs.image, {
          opacity: 0,
          scale: 0.9,
          y: 30,
        });

        const imageAnimation = gsap.to(itemRefs.image, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRefs.image,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (imageAnimation.scrollTrigger) {
          scrollTriggers.push(imageAnimation.scrollTrigger);
        }
      }

      if (itemRefs.content) {
        gsap.set(itemRefs.content, {
          opacity: 0,
          y: 40,
        });

        const contentAnimation = gsap.to(itemRefs.content, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: itemRefs.content,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (contentAnimation.scrollTrigger) {
          scrollTriggers.push(contentAnimation.scrollTrigger);
        }
      }

      if (itemRefs.number) {
        gsap.set(itemRefs.number, {
          opacity: 0,
          scale: 0.9,
        });

        const numberAnimation = gsap.to(itemRefs.number, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: itemRefs.number,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (numberAnimation.scrollTrigger) {
          scrollTriggers.push(numberAnimation.scrollTrigger);
        }
      }
    });

    return () => {
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [journeyData]);

  return (
    <>
      {/* Mobile Layout */}
      <div
        className={layoutConfig.mobile.container.className}
        style={{
          backgroundColor: layoutConfig.mobile.container.backgroundColor,
        }}
      >
        {/* Header Section */}
        <div className={layoutConfig.mobile.header.className}>
          <div ref={mobileHeaderTitleRef}>
            <Typography
              variant={textConfig.header.variant}
              color={textConfig.header.color as `#${string}` | "white"}
              className={`${textConfig.header.className} text-center`}
              align="center"
            >
              <JourneyTitle
                text={textConfig.header.title.text}
                wavyLetters={textConfig.header.title.wavyLetters}
              />
            </Typography>
          </div>
        </div>

        {/* Journey Items */}
        {journeyData.map((item, index) => {
          // Initialize refs for this item if not already set
          if (!mobileItemRefs.current.has(index)) {
            mobileItemRefs.current.set(index, {
              content: null,
              number: null,
            });
          }

          return (
            <div
              key={index}
              className={layoutConfig.mobile.item.container.className}
            >
              <div className="flex">
                {index % 2 === 0 ? (
                  <>
                    <div
                      className={layoutConfig.mobile.item.contentCell.className}
                      style={{
                        backgroundColor:
                          layoutConfig.mobile.item.contentCell.backgroundColor,
                      }}
                    >
                      <div
                        ref={(el) => {
                          const refs = mobileItemRefs.current.get(index);
                          if (refs) refs.content = el;
                        }}
                      >
                        <Typography
                          variant={textConfig.itemDate.variant}
                          color={
                            textConfig.itemDate.color as `#${string}` | "white"
                          }
                          weight={textConfig.itemDate.weight}
                          className={`${textConfig.itemDate.className} text-sm md:text-base mb-2`}
                        >
                          {item.date}
                        </Typography>
                        <Typography
                          variant={textConfig.itemTitle.variant}
                          color={
                            textConfig.itemTitle.color as `#${string}` | "white"
                          }
                          weight={textConfig.itemTitle.weight}
                          className={`${textConfig.itemTitle.className} text-sm md:text-base leading-relaxed`}
                        >
                          {item.title}
                        </Typography>
                      </div>
                    </div>
                    <div
                      className={`${layoutConfig.mobile.item.numberCell.className} border-l border-white`}
                      style={{ backgroundColor: item.color }}
                    >
                      <div
                        ref={(el) => {
                          const refs = mobileItemRefs.current.get(index);
                          if (refs) refs.number = el;
                        }}
                      >
                        <Typography
                          variant={textConfig.itemNumber.variant}
                          color={
                            textConfig.itemNumber.color as `#${string}` | "primary"
                          }
                          weight={textConfig.itemNumber.weight}
                          className={`${textConfig.itemNumber.className} text-2xl md:text-3xl`}
                        >
                          {item.number}
                        </Typography>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`${layoutConfig.mobile.item.numberCell.className} border-r border-white`}
                      style={{ backgroundColor: item.color }}
                    >
                      <div
                        ref={(el) => {
                          const refs = mobileItemRefs.current.get(index);
                          if (refs) refs.number = el;
                        }}
                      >
                        <Typography
                          variant={textConfig.itemNumber.variant}
                          color={
                            textConfig.itemNumber.color as `#${string}` | "primary"
                          }
                          weight={textConfig.itemNumber.weight}
                          className={`${textConfig.itemNumber.className} text-2xl md:text-3xl`}
                        >
                          {item.number}
                        </Typography>
                      </div>
                    </div>
                    <div
                      className={`${layoutConfig.mobile.item.contentCell.className} text-left`}
                      style={{
                        backgroundColor:
                          layoutConfig.mobile.item.contentCell.backgroundColor,
                      }}
                    >
                      <div
                        ref={(el) => {
                          const refs = mobileItemRefs.current.get(index);
                          if (refs) refs.content = el;
                        }}
                      >
                        <Typography
                          variant={textConfig.itemDate.variant}
                          color={
                            textConfig.itemDate.color as `#${string}` | "white"
                          }
                          weight={textConfig.itemDate.weight}
                          className={`${textConfig.itemDate.className} text-sm md:text-base mb-2`}
                        >
                          {item.date}
                        </Typography>
                        <Typography
                          variant={textConfig.itemTitle.variant}
                          color={
                            textConfig.itemTitle.color as `#${string}` | "white"
                          }
                          weight={textConfig.itemTitle.weight}
                          className={`${textConfig.itemTitle.className} text-sm md:text-base leading-relaxed`}
                        >
                          {item.title}
                        </Typography>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
        style={{
          backgroundColor: layoutConfig.desktop.grid.backgroundColor,
        }}
      >
        {/* Empty cell left border */}
        <GridCell
          rowSpan={9}
          className={layoutConfig.desktop.header.emptyCell.className}
        />

        {/* Header Title */}
        <GridCell
          colSpan={8}
          colStart={2}
          rowStart={1}
          className={layoutConfig.desktop.header.titleCell.className}
        >
          <div ref={desktopHeaderTitleRef}>
            <Typography
              variant={textConfig.header.variant}
              color={textConfig.header.color as `#${string}` | "white"}
              className={textConfig.header.className}
            >
              <JourneyTitle
                text={textConfig.header.title.text}
                wavyLetters={textConfig.header.title.wavyLetters}
              />
            </Typography>
          </div>
        </GridCell>

        {/* Empty cell right border */}
        <GridCell
          rowSpan={9}
          colStart={10}
          rowStart={1}
          className={layoutConfig.desktop.header.emptyCell.className}
        />

        {/* Journey Items */}
        {journeyData.map((item, index) => {
          const positions = desktopItemPositions[index];
          
          // Initialize refs for this item if not already set
          if (!desktopItemRefs.current.has(index)) {
            desktopItemRefs.current.set(index, {
              image: null,
              content: null,
              number: null,
            });
          }

          return (
            <React.Fragment key={index}>
              {/* Image Cell (if exists) */}
              {positions.image && (
                <GridCell
                  colSpan={positions.image.colSpan}
                  rowSpan={positions.image.rowSpan}
                  colStart={positions.image.colStart}
                  rowStart={positions.image.rowStart}
                  className={layoutConfig.desktop.item.imageCell.className}
                >
                  <div
                    ref={(el) => {
                      const refs = desktopItemRefs.current.get(index);
                      if (refs) refs.image = el;
                    }}
                  >
                    <Image
                      src={
                        index < 2
                          ? images.web12.src
                          : index < 4
                            ? images.web34.src
                            : index < 6
                              ? images.web56.src
                              : images.web78.src
                      }
                      alt={
                        index < 2
                          ? images.web12.alt
                          : index < 4
                            ? images.web34.alt
                            : index < 6
                              ? images.web56.alt
                              : images.web78.alt
                      }
                      className={
                        index < 2
                          ? images.web12.className
                          : index < 4
                            ? images.web34.className
                            : index < 6
                              ? images.web56.className
                              : images.web78.className
                      }
                      width={
                        index < 2
                          ? images.web12.width
                          : index < 4
                            ? images.web34.width
                            : index < 6
                              ? images.web56.width
                              : images.web78.width
                      }
                      height={
                        index < 2
                          ? images.web12.height
                          : index < 4
                            ? images.web34.height
                            : index < 6
                              ? images.web56.height
                              : images.web78.height
                      }
                    />
                  </div>
                </GridCell>
              )}

              {/* Content Cell */}
              {positions.content && (
                <GridCell
                  colSpan={positions.content.colSpan}
                  colStart={positions.content.colStart}
                  rowStart={positions.content.rowStart}
                  className={layoutConfig.desktop.item.contentCell.className}
                >
                  <div
                    ref={(el) => {
                      const refs = desktopItemRefs.current.get(index);
                      if (refs) refs.content = el;
                    }}
                  >
                    <Typography
                      variant={textConfig.itemDate.variant}
                      color={textConfig.itemDate.color as `#${string}` | "white"}
                      weight={textConfig.itemDate.weight}
                      className={textConfig.itemDate.className}
                    >
                      {item.date}
                    </Typography>
                    <Typography
                      variant={textConfig.itemTitle.variant}
                      color={textConfig.itemTitle.color as `#${string}` | "white"}
                      weight={textConfig.itemTitle.weight}
                      className={textConfig.itemTitle.className}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </GridCell>
              )}

              {/* Number Cell */}
              {positions.number && (
                <GridCell
                  colStart={positions.number.colStart}
                  rowStart={positions.number.rowStart}
                  className={layoutConfig.desktop.item.numberCell.className}
                  style={{ backgroundColor: item.color }}
                >
                  <div
                    ref={(el) => {
                      const refs = desktopItemRefs.current.get(index);
                      if (refs) refs.number = el;
                    }}
                  >
                    <Typography
                      variant={textConfig.itemNumber.variant}
                      color={
                        textConfig.itemNumber.color as `#${string}` | "primary"
                      }
                      weight={textConfig.itemNumber.weight}
                      className={textConfig.itemNumber.className}
                    >
                      {item.number}
                    </Typography>
                  </div>
                </GridCell>
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    </>
  );
}
