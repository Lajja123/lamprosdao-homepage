"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "../UI/Typography";
import Image from "next/image";
import Link from "next/link";
import Grid, { GridCell } from "../UI/Grid";
import { useSmoothScrollOnLoad } from "@/hooks/smoothScrollToSection";
import { useDelegateConfig } from "@/hooks/useDelegateConfig";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Delegate() {
  useSmoothScrollOnLoad();
  const { images, protocols, textConfig, layoutConfig } = useDelegateConfig();

  // Mobile refs
  const mobileImageRef = useRef<HTMLDivElement>(null);
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const mobileDescriptionRef = useRef<HTMLDivElement>(null);

  // Desktop refs
  const desktopTitleRef = useRef<HTMLDivElement>(null);
  const desktopVerticalTextRef = useRef<HTMLDivElement>(null);
  const desktopDescriptionRef = useRef<HTMLDivElement>(null);
  const desktopImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTriggers: ScrollTrigger[] = [];

    // Mobile image animation
    if (mobileImageRef.current) {
      gsap.set(mobileImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(mobileImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileImageRef.current,
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

    // Mobile header animation
    if (mobileHeaderRef.current) {
      gsap.set(mobileHeaderRef.current, {
        opacity: 0,
        y: 40,
      });

      const headerAnimation = gsap.to(mobileHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: mobileHeaderRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (headerAnimation.scrollTrigger) {
        scrollTriggers.push(headerAnimation.scrollTrigger);
      }
    }

    // Mobile description animation
    if (mobileDescriptionRef.current) {
      gsap.set(mobileDescriptionRef.current, {
        opacity: 0,
        y: 40,
      });

      const descAnimation = gsap.to(mobileDescriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: mobileDescriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (descAnimation.scrollTrigger) {
        scrollTriggers.push(descAnimation.scrollTrigger);
      }
    }

    // Desktop title animation
    if (desktopTitleRef.current) {
      gsap.set(desktopTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const titleAnimation = gsap.to(desktopTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopTitleRef.current,
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

    // Desktop vertical text animation
    if (desktopVerticalTextRef.current) {
      gsap.set(desktopVerticalTextRef.current, {
        opacity: 0,
        x: -30,
      });

      const verticalTextAnimation = gsap.to(desktopVerticalTextRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: desktopVerticalTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (verticalTextAnimation.scrollTrigger) {
        scrollTriggers.push(verticalTextAnimation.scrollTrigger);
      }
    }

    // Desktop description animation
    if (desktopDescriptionRef.current) {
      gsap.set(desktopDescriptionRef.current, {
        opacity: 0,
        y: 40,
      });

      const descAnimation = gsap.to(desktopDescriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: desktopDescriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (descAnimation.scrollTrigger) {
        scrollTriggers.push(descAnimation.scrollTrigger);
      }
    }

    // Desktop image animation
    if (desktopImageRef.current) {
      gsap.set(desktopImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(desktopImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: desktopImageRef.current,
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

    return () => {
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <>
      {/* Mobile Layout */}
      <div
        className={layoutConfig.mobile.container.className}
        style={{
          backgroundColor: layoutConfig.mobile.container.backgroundColor,
        }}
      >
        {/* Image Section */}
        <div
          ref={mobileImageRef}
          className={layoutConfig.mobile.imageSection.className}
        >
          <Image
            src={images.delegate.src}
            alt={images.delegate.alt}
            className={images.delegate.className}
            quality={images.delegate.quality}
          />
        </div>
        {/* Header Section */}
        <div
          ref={mobileHeaderRef}
          className={layoutConfig.mobile.headerSection.className}
        >
          <Typography
            variant={textConfig.title.variant}
            color={textConfig.title.color as `#${string}` | "white"}
            className={textConfig.title.className}
          >
            {"Delegate to".split("").map((letter, index) => {
              const isHighlighted = textConfig.title.wavyLetters.some(
                (w) => w.position === index + 1
              );
              return (
                <span
                  key={index}
                  className={
                    isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                  }
                >
                  {letter}
                </span>
              );
            })}
            <br />
            {"Lampros DAO".split("").map((letter, index) => {
              const offset = "Delegate to ".length;
              const isHighlighted = textConfig.title.wavyLetters.some(
                (w) => w.position === offset + index + 1
              );
              return (
                <span
                  key={index}
                  className={
                    isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                  }
                >
                  {letter}
                </span>
              );
            })}
          </Typography>
        </div>

        {/* Description Section */}
        <div
          ref={mobileDescriptionRef}
          className={layoutConfig.mobile.descriptionSection.className}
        >
          <div className="space-y-4">
            {textConfig.descriptions.map((description, index) => (
              <Typography
                key={index}
                variant={textConfig.description.variant}
                color={textConfig.description.color as `#${string}` | "white"}
                weight={textConfig.description.weight}
                align={textConfig.description.align}
                className={textConfig.description.className}
              >
                {description}
              </Typography>
            ))}
          </div>
        </div>

        {/* Delegation Buttons */}
        <div className="">
          <div className={layoutConfig.mobile.buttonsGrid.className}>
            {protocols.map((protocol, index) => {
              const isFirstRow = index < 2;
              const isLeft = index % 2 === 0;
              return (
                <Link
                  key={protocol.name}
                  href={protocol.href}
                  target="_blank"
                  className={`${layoutConfig.mobile.buttonCell.className} border ${
                    isLeft ? "border-r" : ""
                  } ${isFirstRow ? "border-b" : ""} border-white`}
                  style={{
                    backgroundColor:
                      layoutConfig.mobile.buttonCell.backgroundColor,
                  }}
                >
                  <Image
                    src={protocol.img}
                    alt={protocol.alt}
                    className="w-8 md:w-10"
                  />
                  <Typography
                    variant={textConfig.protocolButton.variant}
                    color={
                      textConfig.protocolButton.color as `#${string}` | "white"
                    }
                    weight={textConfig.protocolButton.weight}
                    className={textConfig.protocolButton.className}
                  >
                    {protocol.name}
                  </Typography>
                </Link>
              );
            })}
            {/* Empty cell for bottom-right */}
            <div
              className={`${layoutConfig.mobile.buttonCell.className} border border-l-0 border-t-0 border-white`}
              style={{
                backgroundColor: layoutConfig.mobile.buttonCell.backgroundColor,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <Grid
        id="delegate"
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
        style={{
          backgroundColor: layoutConfig.desktop.grid.backgroundColor,
        }}
      >
        <GridCell
          colSpan={1}
          className={layoutConfig.desktop.emptyCell1.className}
        />
        <GridCell
          colSpan={layoutConfig.desktop.titleCell.colSpan}
          className={layoutConfig.desktop.titleCell.className}
        >
          <div ref={desktopTitleRef}>
            <Typography
              variant={textConfig.titleDesktop.variant}
              color={textConfig.titleDesktop.color as `#${string}` | "white"}
              className={textConfig.titleDesktop.className}
            >
              {textConfig.titleDesktop.text.split("").map((letter, index) => {
                const isHighlighted = textConfig.titleDesktop.wavyLetters.some(
                  (w) => w.position === index + 1
                );
                return (
                  <span
                    key={index}
                    className={
                      isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                    }
                  >
                    {letter}
                  </span>
                );
              })}
            </Typography>
          </div>
        </GridCell>
        <GridCell
          colStart={layoutConfig.desktop.emptyCell2.colStart}
          colSpan={1}
          className={layoutConfig.desktop.emptyCell2.className}
        />

        <GridCell
          rowSpan={layoutConfig.desktop.verticalTextCell.rowSpan}
          rowStart={layoutConfig.desktop.verticalTextCell.rowStart}
          colSpan={layoutConfig.desktop.verticalTextCell.colSpan}
          className={layoutConfig.desktop.verticalTextCell.className}
        >
          <div ref={desktopVerticalTextRef}>
            <Typography
              variant={textConfig.verticalText.variant}
              color={textConfig.verticalText.color as `#${string}` | "white"}
              weight={textConfig.verticalText.weight}
              className={textConfig.verticalText.className}
            >
              {textConfig.verticalText.text}
            </Typography>
          </div>
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.descriptionCell.colSpan}
          rowSpan={layoutConfig.desktop.descriptionCell.rowSpan}
          rowStart={layoutConfig.desktop.descriptionCell.rowStart}
          className={layoutConfig.desktop.descriptionCell.className}
        >
          <div ref={desktopDescriptionRef}>
            {textConfig.descriptions.map((description, index) => (
              <Typography
                key={index}
                variant={textConfig.descriptionDesktop.variant}
                color={
                  textConfig.descriptionDesktop.color as `#${string}` | "white"
                }
                weight={textConfig.descriptionDesktop.weight}
                className={textConfig.descriptionDesktop.className}
              >
                {description}
              </Typography>
            ))}
          </div>
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.imageCell.colSpan}
          rowSpan={layoutConfig.desktop.imageCell.rowSpan}
          colStart={layoutConfig.desktop.imageCell.colStart}
          rowStart={layoutConfig.desktop.imageCell.rowStart}
          className={layoutConfig.desktop.imageCell.className}
        >
          <div
            ref={desktopImageRef}
            className="p-10 w-full h-full flex items-center justify-center"
          >
            <Image
              src={images.delegateDesktop.src}
              alt={images.delegateDesktop.alt}
              className={images.delegateDesktop.className}
              quality={images.delegateDesktop.quality}
            />
          </div>
        </GridCell>
        <GridCell
          rowSpan={layoutConfig.desktop.accentCell.rowSpan}
          colStart={layoutConfig.desktop.accentCell.colStart}
          rowStart={layoutConfig.desktop.accentCell.rowStart}
          colSpan={layoutConfig.desktop.accentCell.colSpan}
          className={layoutConfig.desktop.accentCell.className}
          style={{
            backgroundColor: layoutConfig.desktop.accentCell.backgroundColor,
          }}
        />
        {/* Infinite scrolling row - all platforms in one */}
        <GridCell
          colSpan={layoutConfig.desktop.scrollRow.colSpan}
          colStart={layoutConfig.desktop.scrollRow.colStart}
          rowStart={layoutConfig.desktop.scrollRow.rowStart}
          className={layoutConfig.desktop.scrollRow.className}
          style={{
            backgroundColor: layoutConfig.desktop.scrollRow.backgroundColor,
          }}
        >
          <div className="w-full relative">
            <div className="animate-scroll w-max flex py-5 items-center">
              {/* Continuous loop - duplicated array multiple times for seamless scrolling */}
              {[...protocols, ...protocols, ...protocols].map((p, idx) => (
                <div
                  key={`${p.name}-${idx}`}
                  className="relative group flex items-center gap-3 flex-shrink-0 px-12"
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    className="w-10 flex-shrink-0"
                  />
                  <Link href={p.href} target="_blank" className="flex-shrink-0">
                    <Typography
                      variant={textConfig.protocolButtonDesktop.variant}
                      color={
                        textConfig.protocolButtonDesktop.color as
                          | `#${string}`
                          | "primary"
                      }
                      weight={textConfig.protocolButtonDesktop.weight}
                      className={textConfig.protocolButtonDesktop.className}
                    >
                      {p.name}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.footerCell.colSpan}
          rowStart={layoutConfig.desktop.footerCell.rowStart}
          className={layoutConfig.desktop.footerCell.className}
          style={{
            backgroundColor: layoutConfig.desktop.footerCell.backgroundColor,
          }}
        />
      </Grid>
    </>
  );
}
