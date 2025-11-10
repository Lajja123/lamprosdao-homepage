"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Typography from "../UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useContributionsHeroConfig } from "@/hooks/useContributionsHeroConfig";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  activeChain: "arbitrum" | "optimism";
  onChainChange: (chain: "arbitrum" | "optimism") => void;
}

export default function Hero({ activeChain, onChainChange }: HeroProps) {
  const {
    images,
    backgroundImages,
    textConfig,
    layoutConfig,
    contributionsContent,
  } = useContributionsHeroConfig();
  const currentContent = contributionsContent[activeChain] || {
    word: "",
    subtitle: "",
    description: "",
    highlightedLetters: [],
  };

  // Refs for animation elements
  // Mobile refs
  const mobileClip2ImageRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);
  const mobileTitleRef = useRef<HTMLDivElement>(null);
  const mobileSubtitleRef = useRef<HTMLDivElement>(null);
  const mobileDescriptionRef = useRef<HTMLDivElement>(null);

  // Desktop refs
  const desktopTextRef = useRef<HTMLDivElement>(null);
  const desktopClip2ImageRef = useRef<HTMLDivElement>(null);
  const desktopTitleRef = useRef<HTMLDivElement>(null);
  const desktopSubtitleRef = useRef<HTMLDivElement>(null);
  const desktopDescriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTriggers: ScrollTrigger[] = [];

    // Mobile clip2 image animation
    if (mobileClip2ImageRef.current) {
      gsap.set(mobileClip2ImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(mobileClip2ImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: mobileClip2ImageRef.current,
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

    // Mobile text animation
    if (mobileTextRef.current) {
      gsap.set(mobileTextRef.current, {
        opacity: 0,
        y: 40,
      });

      const textAnimation = gsap.to(mobileTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: mobileTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (textAnimation.scrollTrigger) {
        scrollTriggers.push(textAnimation.scrollTrigger);
      }
    }

    // Mobile title animation
    if (mobileTitleRef.current) {
      gsap.set(mobileTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const titleAnimation = gsap.to(mobileTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileTitleRef.current,
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

    // Mobile subtitle animation
    if (mobileSubtitleRef.current) {
      gsap.set(mobileSubtitleRef.current, {
        opacity: 0,
        y: 30,
      });

      const subtitleAnimation = gsap.to(mobileSubtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: mobileSubtitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (subtitleAnimation.scrollTrigger) {
        scrollTriggers.push(subtitleAnimation.scrollTrigger);
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

    // Desktop text animation
    if (desktopTextRef.current) {
      gsap.set(desktopTextRef.current, {
        opacity: 0,
        y: 40,
      });

      const textAnimation = gsap.to(desktopTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: desktopTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (textAnimation.scrollTrigger) {
        scrollTriggers.push(textAnimation.scrollTrigger);
      }
    }

    // Desktop clip2 image animation
    if (desktopClip2ImageRef.current) {
      gsap.set(desktopClip2ImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(desktopClip2ImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: desktopClip2ImageRef.current,
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

    // Desktop subtitle animation
    if (desktopSubtitleRef.current) {
      gsap.set(desktopSubtitleRef.current, {
        opacity: 0,
        y: 30,
      });

      const subtitleAnimation = gsap.to(desktopSubtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: desktopSubtitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (subtitleAnimation.scrollTrigger) {
        scrollTriggers.push(subtitleAnimation.scrollTrigger);
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
        delay: 0.3,
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

    return () => {
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [activeChain]);

  const handleButtonClick = (content: "arbitrum" | "optimism") => {
    onChainChange(content);
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* 3-Column Grid Section */}
        <Grid
          variant="custom"
          noContainer
          className={layoutConfig.mobile.grid.className}
        >
          <GridCell />
          <GridCell className={layoutConfig.mobile.clipImageCell.className}>
            <div className="relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${backgroundImages.bgImage.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <Image
                src={images.clip.src}
                alt={images.clip.alt}
                className={images.clip.className}
              />
            </div>
          </GridCell>
          <GridCell />
          <GridCell />
          <GridCell />
          <GridCell />
        </Grid>
        <div className="flex flex-col">
          {/* Second Image Section */}
          <div
            className={layoutConfig.mobile.clip2ImageCell.className}
            style={{
              backgroundColor:
                layoutConfig.mobile.clip2ImageCell.backgroundColor,
            }}
          >
            <div ref={mobileClip2ImageRef}>
              <Image
                src={images.clip2.src}
                alt={images.clip2.alt}
                className={images.clip2.className}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className={layoutConfig.mobile.textCell.className}>
            <div ref={mobileTextRef}>
              <Typography
                variant={textConfig.intro.variant}
                color={textConfig.intro.color as `#${string}` | "primary"}
                weight={textConfig.intro.weight}
                className={textConfig.intro.className}
              >
                {textConfig.intro.paragraphs.map((paragraph, index) => (
                  <div
                    key={`paragraph-${index}`}
                    className={index > 0 ? "mt-3 md:mt-4" : ""}
                  >
                    {paragraph}
                  </div>
                ))}
              </Typography>
            </div>
          </div>
        </div>

        {/* Chain Selection Section */}
        <div
          className={layoutConfig.mobile.chainSelection.container.className}
          style={{
            backgroundColor:
              layoutConfig.mobile.chainSelection.container.backgroundColor,
          }}
        >
          <div
            className={
              layoutConfig.mobile.chainSelection.buttonContainer.className
            }
          >
            {/* Arbitrum Button */}
            <div className="bg-[#1A1A1A] flex items-center justify-center p-5 border-r border-white">
              <div
                className={`${layoutConfig.mobile.chainSelection.button.baseClassName} ${
                  activeChain === "arbitrum"
                    ? layoutConfig.mobile.chainSelection.button.activeClassName
                    : layoutConfig.mobile.chainSelection.button
                        .inactiveClassName
                }`}
                onClick={() => handleButtonClick("arbitrum")}
              >
                <Image
                  src={images.arbitrum.src}
                  alt={images.arbitrum.alt}
                  className={images.arbitrum.className}
                />
                <Typography
                  variant={textConfig.chainButtons.arbitrum.variant}
                  color={
                    textConfig.chainButtons.arbitrum.color as
                      | `#${string}`
                      | "primary"
                  }
                  weight={textConfig.chainButtons.arbitrum.weight}
                  className={textConfig.chainButtons.arbitrum.className}
                >
                  {textConfig.chainButtons.arbitrum.label}
                </Typography>
              </div>
            </div>

            {/* Optimism Button */}
            <div className="bg-[#1A1A1A] flex items-center p-5 justify-center">
              <div
                className={`${layoutConfig.mobile.chainSelection.button.baseClassName} ${
                  activeChain === "optimism"
                    ? layoutConfig.mobile.chainSelection.button.activeClassName
                    : layoutConfig.mobile.chainSelection.button
                        .inactiveClassName
                }`}
                onClick={() => handleButtonClick("optimism")}
              >
                <Image
                  src={images.optimism.src}
                  alt={images.optimism.alt}
                  className={images.optimism.className}
                />
                <Typography
                  variant={textConfig.chainButtons.optimism.variant}
                  color={
                    textConfig.chainButtons.optimism.color as
                      | `#${string}`
                      | "primary"
                  }
                  weight={textConfig.chainButtons.optimism.weight}
                  className={textConfig.chainButtons.optimism.className}
                >
                  {textConfig.chainButtons.optimism.label}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className={layoutConfig.mobile.dynamicContent.titleCell.className}>
          <div ref={mobileTitleRef}>
            <Typography
              variant="h1"
              color="primary"
              align="center"
              weight="light"
              className="tracking-wide uppercase"
            >
              {currentContent.word.split("").map((letter, index) => {
                const isHighlighted = (
                  currentContent.highlightedLetters || []
                ).includes(letter.toUpperCase());
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
        </div>

        <div
          className={layoutConfig.mobile.dynamicContent.subtitleCell.className}
          style={{
            backgroundColor:
              layoutConfig.mobile.dynamicContent.subtitleCell.backgroundColor,
          }}
        >
          <div ref={mobileSubtitleRef}>
            <Typography
              variant="body2"
              color="primary"
              weight="normal"
              className="tracking-wider text-sm md:text-base text-center"
            >
              {currentContent.subtitle}
            </Typography>
          </div>
        </div>

        <div
          className={
            layoutConfig.mobile.dynamicContent.descriptionCell.className
          }
        >
          <div ref={mobileDescriptionRef}>
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="tracking-wider font-ppmori text-sm md:text-base text-center"
            >
              {currentContent.description}
            </Typography>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
      >
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell className={layoutConfig.desktop.clipImageCell.className}>
          <div className="relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages.bgImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={images.clip.src}
              alt={images.clip.alt}
              className="relative w-full h-full object-contain p-5 mx-auto"
            />
          </div>
        </GridCell>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell
          colSpan={layoutConfig.desktop.textCell.colSpan}
          className={layoutConfig.desktop.textCell.className}
        >
          <div ref={desktopTextRef}>
            <Typography
              variant={textConfig.intro.variant}
              color={textConfig.intro.color as `#${string}` | "primary"}
              weight={textConfig.intro.weight}
              className="tracking-wider font-ppmori text-xl mx-auto px-10 py-10"
            >
              {textConfig.intro.paragraphs.map((paragraph, index) => (
                <div
                  key={`paragraph-${index}`}
                  className={index > 0 ? "mt-4" : ""}
                >
                  {paragraph}
                </div>
              ))}
            </Typography>
          </div>
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.clip2ImageCell.colSpan}
          colStart={layoutConfig.desktop.clip2ImageCell.colStart}
          className={layoutConfig.desktop.clip2ImageCell.className}
          style={{
            backgroundColor:
              layoutConfig.desktop.clip2ImageCell.backgroundColor,
          }}
        >
          <div
            ref={desktopClip2ImageRef}
            className="w-full h-full object-contain p-5 mx-auto flex items-center justify-center"
          >
            <Image
              src={images.clip2Desktop.src}
              alt={images.clip2Desktop.alt}
              className={images.clip2Desktop.className}
            />
          </div>
        </GridCell>

        <GridCell
          className={layoutConfig.desktop.chainSelection.emptyCell.className}
        />
        <GridCell
          colSpan={
            layoutConfig.desktop.chainSelection.arbitrumButtonCell.colSpan
          }
          rowStart={
            layoutConfig.desktop.chainSelection.arbitrumButtonCell.rowStart
          }
          className={
            layoutConfig.desktop.chainSelection.arbitrumButtonCell.className
          }
        >
          <div
            className={`${layoutConfig.desktop.chainSelection.button.baseClassName} ${
              activeChain === "arbitrum"
                ? layoutConfig.desktop.chainSelection.button.activeClassName
                : layoutConfig.desktop.chainSelection.button.inactiveClassName
            }`}
            onClick={() => handleButtonClick("arbitrum")}
          >
            <Image
              src={images.arbitrumDesktop.src}
              alt={images.arbitrumDesktop.alt}
            />
            <Typography
              variant={textConfig.chainButtons.arbitrum.variant}
              color={
                textConfig.chainButtons.arbitrum.color as
                  | `#${string}`
                  | "primary"
              }
              weight={textConfig.chainButtons.arbitrum.weight}
              className="font-ppmori"
            >
              {textConfig.chainButtons.arbitrum.label}
            </Typography>
          </div>
        </GridCell>
        <GridCell
          colSpan={
            layoutConfig.desktop.chainSelection.optimismButtonCell.colSpan
          }
          colStart={
            layoutConfig.desktop.chainSelection.optimismButtonCell.colStart
          }
          rowStart={
            layoutConfig.desktop.chainSelection.optimismButtonCell.rowStart
          }
          className={
            layoutConfig.desktop.chainSelection.optimismButtonCell.className
          }
        >
          <div
            className={`will-change-transform ${layoutConfig.desktop.chainSelection.button.baseClassName} my-10 ${
              activeChain === "optimism"
                ? layoutConfig.desktop.chainSelection.button.activeClassName
                : layoutConfig.desktop.chainSelection.button.inactiveClassName
            }`}
            onClick={() => handleButtonClick("optimism")}
          >
            <Image
              src={images.optimismDesktop.src}
              alt={images.optimismDesktop.alt}
            />
            <Typography
              variant={textConfig.chainButtons.optimism.variant}
              color={
                textConfig.chainButtons.optimism.color as
                  | `#${string}`
                  | "primary"
              }
              weight={textConfig.chainButtons.optimism.weight}
              className="font-ppmori"
            >
              {textConfig.chainButtons.optimism.label}
            </Typography>
          </div>
        </GridCell>
        <GridCell className="col-start-10 row-start-3 bg-[#1A1A1A]" />
      </Grid>

      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.dynamicContent.grid.className}
      >
        <GridCell
          className={layoutConfig.desktop.dynamicContent.emptyCell1.className}
        />
        <GridCell
          colSpan={layoutConfig.desktop.dynamicContent.titleCell.colSpan}
          className={layoutConfig.desktop.dynamicContent.titleCell.className}
        >
          <div ref={desktopTitleRef}>
            <Typography
              variant="h2"
              color="primary"
              weight="light"
              className="tracking-wide uppercase"
            >
              {currentContent.word.split("").map((letter, index) => {
                const isHighlighted = (
                  currentContent.highlightedLetters || []
                ).includes(letter.toUpperCase());
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
          colStart={layoutConfig.desktop.dynamicContent.emptyCell2.colStart}
          className={layoutConfig.desktop.dynamicContent.emptyCell2.className}
        />
        <GridCell
          rowStart={layoutConfig.desktop.dynamicContent.emptyCell3.rowStart}
          className={layoutConfig.desktop.dynamicContent.emptyCell3.className}
        />
        <GridCell
          colSpan={layoutConfig.desktop.dynamicContent.subtitleCell.colSpan}
          rowStart={layoutConfig.desktop.dynamicContent.subtitleCell.rowStart}
          className={layoutConfig.desktop.dynamicContent.subtitleCell.className}
          style={{
            backgroundColor:
              layoutConfig.desktop.dynamicContent.subtitleCell.backgroundColor,
          }}
        >
          <div ref={desktopSubtitleRef}>
            <Typography
              variant="body2"
              color="primary"
              weight="normal"
              className="tracking-wider"
            >
              {currentContent.subtitle}
            </Typography>
          </div>
        </GridCell>
        <GridCell
          colStart={layoutConfig.desktop.dynamicContent.emptyCell4.colStart}
          rowStart={layoutConfig.desktop.dynamicContent.emptyCell4.rowStart}
        />
        <GridCell
          colSpan={layoutConfig.desktop.dynamicContent.descriptionCell.colSpan}
          rowStart={
            layoutConfig.desktop.dynamicContent.descriptionCell.rowStart
          }
          className={
            layoutConfig.desktop.dynamicContent.descriptionCell.className
          }
        >
          <div ref={desktopDescriptionRef}>
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="tracking-wider font-ppmori text-xl max-w-[1200px] p-5 mx-auto"
            >
              {currentContent.description}
            </Typography>
          </div>
        </GridCell>
      </Grid>
    </>
  );
}
