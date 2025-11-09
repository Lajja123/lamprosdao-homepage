"use client";
import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "@/components/UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useEthosConfig } from "@/hooks/useEthosConfig";
import AboutTitle from "./AboutTitle";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Ethos() {
  const { ethosData, images, textConfig, layoutConfig, desktopItemPositions } =
    useEthosConfig();

  // Refs for animation elements
  const mobileHeaderTitleRef = useRef<HTMLDivElement>(null);
  const mobileHeaderImageRef = useRef<HTMLDivElement>(null);
  const mobileItemRefs = useRef<Map<number, { title: HTMLDivElement | null; number: HTMLDivElement | null; content: HTMLDivElement | null }>>(new Map());

  const desktopHeaderTitleRef = useRef<HTMLDivElement>(null);
  const desktopHeaderImageRef = useRef<HTMLDivElement>(null);
  const desktopItemRefs = useRef<Map<number, { title: HTMLDivElement | null; number: HTMLDivElement | null; content: HTMLDivElement | null }>>(new Map());

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

    // Mobile header image animation
    if (mobileHeaderImageRef.current) {
      gsap.set(mobileHeaderImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(mobileHeaderImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileHeaderImageRef.current,
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

    // Mobile items animations
    mobileItemRefs.current.forEach((itemRefs, index) => {
      if (itemRefs.title) {
        gsap.set(itemRefs.title, {
          opacity: 0,
          y: 40,
        });

        const titleAnimation = gsap.to(itemRefs.title, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRefs.title,
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

    // Desktop header image animation
    if (desktopHeaderImageRef.current) {
      gsap.set(desktopHeaderImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(desktopHeaderImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopHeaderImageRef.current,
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

    // Desktop items animations
    desktopItemRefs.current.forEach((itemRefs, index) => {
      if (itemRefs.title) {
        gsap.set(itemRefs.title, {
          opacity: 0,
          y: 40,
        });

        const titleAnimation = gsap.to(itemRefs.title, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRefs.title,
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
    });

    return () => {
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [ethosData]);

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Header Section */}
        <div
          className={layoutConfig.mobile.header.container.className}
          style={{
            backgroundColor:
              layoutConfig.mobile.header.container.backgroundColor,
          }}
        >
          <div className={layoutConfig.mobile.header.titleContainer.className}>
            <div ref={mobileHeaderTitleRef}>
              <Typography
                variant={textConfig.header.variant}
                color={textConfig.header.color as `#${string}` | "primary"}
                weight={textConfig.header.weight}
                className={textConfig.header.className}
              >
                <AboutTitle
                  text={textConfig.header.title.firstLine.text}
                  wavyLetters={textConfig.header.title.firstLine.wavyLetters}
                />
                <br />
                <AboutTitle
                  text={textConfig.header.title.secondLine.text}
                  wavyLetters={textConfig.header.title.secondLine.wavyLetters}
                />
              </Typography>
            </div>
            <div ref={mobileHeaderImageRef}>
              <Image
                src={images.ethos.src}
                alt={images.ethos.alt}
                className={images.ethos.className}
                width={images.ethos.width}
                height={images.ethos.height}
              />
            </div>
          </div>
        </div>

        {/* Ethos Items */}
        {ethosData.map((item, index) => {
          // Initialize refs for this item if not already set
          if (!mobileItemRefs.current.has(index)) {
            mobileItemRefs.current.set(index, {
              title: null,
              number: null,
              content: null,
            });
          }

          return (
            <div
              key={index}
              className={layoutConfig.mobile.item.container.className}
            >
              {/* Header: title left, number right in yellow strip */}
              <div className={layoutConfig.mobile.item.header.className}>
                <div className={layoutConfig.mobile.item.titleCell.className}>
                  <div
                    ref={(el) => {
                      const refs = mobileItemRefs.current.get(index);
                      if (refs) refs.title = el;
                    }}
                  >
                    <Typography
                      variant={textConfig.itemTitle.variant}
                      color={textConfig.itemTitle.color as `#${string}` | "primary"}
                      weight={textConfig.itemTitle.weight}
                      className={textConfig.itemTitle.className}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </div>
                <div
                  className={layoutConfig.mobile.item.numberCell.className}
                  style={{
                    backgroundColor:
                      layoutConfig.mobile.item.numberCell.backgroundColor,
                  }}
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
                      className={textConfig.itemNumber.className}
                    >
                      {item.number}
                    </Typography>
                  </div>
                </div>
              </div>
              {/* Body: content full width */}
              <div className={layoutConfig.mobile.item.contentCell.className}>
                <div
                  ref={(el) => {
                    const refs = mobileItemRefs.current.get(index);
                    if (refs) refs.content = el;
                  }}
                >
                  <Typography
                    variant={textConfig.itemContent.variant}
                    color={textConfig.itemContent.color as `#${string}` | "primary"}
                    weight={textConfig.itemContent.weight}
                    className={textConfig.itemContent.className}
                  >
                    {item.content}
                  </Typography>
                </div>
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
      >
        {/* Header Section */}
        <GridCell
          colSpan={5}
          rowSpan={3}
          className={`${layoutConfig.desktop.header.container.className} relative`}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor:
                layoutConfig.desktop.header.container.backgroundColor,
            }}
          />
          <div className="relative z-10 flex flex-row justify-center gap-3 items-center w-full h-full">
            <div
              className={layoutConfig.desktop.header.titleContainer.className}
            >
              <div ref={desktopHeaderTitleRef}>
                <Typography
                  variant={textConfig.header.variant}
                  color={textConfig.header.color as `#${string}` | "primary"}
                  weight={textConfig.header.weight}
                  className="leading-none font-csbohemian tracking-wider"
                >
                  <AboutTitle
                    text={textConfig.header.title.firstLine.text}
                    wavyLetters={textConfig.header.title.firstLine.wavyLetters}
                  />
                  <br />
                  <AboutTitle
                    text={textConfig.header.title.secondLine.text}
                    wavyLetters={textConfig.header.title.secondLine.wavyLetters}
                  />
                </Typography>
              </div>
            </div>
            <div
              className={layoutConfig.desktop.header.imageContainer.className}
            >
              <div ref={desktopHeaderImageRef}>
                <Image
                  src={images.ethosDesktop.src}
                  alt={images.ethosDesktop.alt}
                  className={images.ethosDesktop.className}
                  width={images.ethosDesktop.width}
                  height={images.ethosDesktop.height}
                />
              </div>
            </div>
          </div>
        </GridCell>

        {/* Ethos Items */}
        {ethosData.map((item, index) => {
          const positions = desktopItemPositions[index];
          
          // Initialize refs for this item if not already set
          if (!desktopItemRefs.current.has(index)) {
            desktopItemRefs.current.set(index, {
              title: null,
              number: null,
              content: null,
            });
          }

          return (
            <Fragment key={index}>
              {/* Title Cell */}
              <GridCell
                colSpan={positions.title.colSpan}
                colStart={positions.title.colStart}
                rowStart={positions.title.rowStart}
                className={layoutConfig.desktop.item.titleCell.className}
              >
                <div
                  ref={(el) => {
                    const refs = desktopItemRefs.current.get(index);
                    if (refs) refs.title = el;
                  }}
                >
                  <Typography
                    variant={textConfig.itemTitle.variant}
                    color={textConfig.itemTitle.color as `#${string}` | "primary"}
                    weight={textConfig.itemTitle.weight}
                    className="uppercase tracking-wider font-ppmori max-w-[500px]"
                  >
                    {item.title}
                  </Typography>
                </div>
              </GridCell>

              {/* Number Cell */}
              <GridCell
                colStart={positions.number.colStart}
                rowStart={positions.number.rowStart}
                className={`${layoutConfig.desktop.item.numberCell.className} relative`}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor:
                      layoutConfig.desktop.item.numberCell.backgroundColor,
                  }}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
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
                      className="font-psygen"
                    >
                      {item.number}
                    </Typography>
                  </div>
                </div>
              </GridCell>

              {/* Content Cell */}
              <GridCell
                colSpan={positions.content.colSpan}
                rowSpan={positions.content.rowSpan}
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
                    variant={textConfig.itemContent.variant}
                    color={
                      textConfig.itemContent.color as `#${string}` | "primary"
                    }
                    weight={textConfig.itemContent.weight}
                    className="font-ppmori max-w-[700px]"
                  >
                    {item.content}
                  </Typography>
                </div>
              </GridCell>
            </Fragment>
          );
        })}
      </Grid>
    </>
  );
}
