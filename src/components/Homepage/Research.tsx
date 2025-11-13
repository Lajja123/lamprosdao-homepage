"use client";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import Arrow from "../UI/Arrow";
import Grid, { GridCell } from "@/components/UI/Grid";
import researchContent from "@/data/researchContent.json";
import { useResearchConfig } from "@/hooks/useResearchConfig";
import ResearchTitle from "./ResearchTitle";
import { loadGsap, loadGsapWithScrollTrigger } from "@/utils/gsapLoader";

export default function Research() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { researchItems } = researchContent;
  const currentItem = researchItems[currentIndex];

  const {
    images,
    backgroundImages,
    textConfig,
    buttonConfig,
    arrowConfig,
    titleWavyConfigs,
    layoutConfig,
  } = useResearchConfig();

  // Refs for animation elements
  const desktopTitleRef = useRef<HTMLDivElement>(null);
  const desktopDescriptionRef = useRef<HTMLDivElement>(null);
  const desktopButtonRef = useRef<HTMLDivElement>(null);
  const mobileTitleRef = useRef<HTMLDivElement>(null);
  const mobileDescriptionRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLDivElement>(null);
  const isInitialMountRef = useRef(true);

  // Initial reveal animations on mount
  useLayoutEffect(() => {
    let isMounted = true;
    const scrollTriggers: ScrollTrigger[] = [];

    const collectTrigger = (animation: any) => {
      const trigger = animation?.scrollTrigger as ScrollTrigger | undefined;
      if (trigger) {
        scrollTriggers.push(trigger);
      }
    };

    const animate = async () => {
      const { gsap } = await loadGsapWithScrollTrigger();
      if (!isMounted) return;

      const setAndAnimate = (
        ref: { current: HTMLElement | null },
        fromVars: Record<string, unknown>,
        toVars: Record<string, unknown>
      ) => {
        if (!ref.current) return;
        gsap.set(ref.current, fromVars);
        const animation = gsap.to(ref.current, toVars);
        collectTrigger(animation);
      };

      setAndAnimate(
        desktopTitleRef,
        { opacity: 0, y: 40 },
        {
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
        }
      );

      setAndAnimate(
        desktopDescriptionRef,
        { opacity: 0, y: 40 },
        {
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
        }
      );

      setAndAnimate(
        desktopButtonRef,
        { opacity: 0, y: 30 },
        {
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
        }
      );

      setAndAnimate(
        mobileTitleRef,
        { opacity: 0, y: 40 },
        {
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
        }
      );

      setAndAnimate(
        mobileDescriptionRef,
        { opacity: 0, y: 40 },
        {
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
        }
      );

      setAndAnimate(
        mobileButtonRef,
        { opacity: 0, y: 30 },
        {
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
        }
      );
    };

    // Start animation immediately
    animate();

    return () => {
      isMounted = false;
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  // Smooth content transitions when currentIndex changes
  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      return;
    }

    let isMounted = true;
    let timeline: any = null;

    const runAnimation = async () => {
      const gsap = await loadGsap();
      if (!isMounted) return;

      const elements = [
        { ref: desktopTitleRef },
        { ref: desktopDescriptionRef },
        { ref: desktopButtonRef },
        { ref: mobileTitleRef },
        { ref: mobileDescriptionRef },
        { ref: mobileButtonRef },
      ];

      timeline = gsap.timeline();

      elements.forEach(({ ref }) => {
        if (ref.current) {
          timeline.to(
            ref.current,
            {
              opacity: 0,
              y: -20,
              duration: 0.3,
              ease: "power2.in",
            },
            0
          );
        }
      });

      timeline.call(
        () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const inTimeline = gsap.timeline();

              elements.forEach(({ ref }) => {
                if (ref.current) {
                  gsap.set(ref.current, {
                    opacity: 0,
                    y: 20,
                  });

                  inTimeline.to(
                    ref.current,
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.5,
                      ease: "power2.out",
                    },
                    0
                  );
                }
              });
            });
          });
        },
        [],
        0.3
      );
    };

    runAnimation();

    return () => {
      isMounted = false;
      timeline?.kill();
    };
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? researchItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === researchItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentWavyConfig = titleWavyConfigs[currentItem.title.trim()];

  return (
    <div
      className={layoutConfig.desktop.container.className}
      style={{
        backgroundColor: layoutConfig.desktop.container.backgroundColor,
      }}
    >
      {/* Desktop Layout - Original research grid */}
      <div className={layoutConfig.desktop.grid.className}>
        <Grid variant="research" className="relative w-full">
          {/* Main image - spans 3 columns, 5 rows */}
          <GridCell type="researchImage">
            <Image
              src={images.clip.src}
              alt={images.clip.alt}
              className={images.clip.className}
              width={images.clip.width}
              height={images.clip.height}
            />
          </GridCell>

          {/* Content section - spans 3 columns, 4 rows */}
          <GridCell type="researchContent">
            <div className={layoutConfig.desktop.contentCell.className}>
              <div
                ref={desktopTitleRef}
                style={{ opacity: 0, transform: "translateY(40px)" }}
              >
                <Typography
                  variant="h2"
                  weight="normal"
                  align="left"
                  color={textConfig.titleColor as `#${string}`}
                  className={textConfig.titleClassName}
                >
                  <ResearchTitle
                    title={currentItem.title}
                    wavyConfig={currentWavyConfig}
                  />
                </Typography>
              </div>

              <div
                ref={desktopDescriptionRef}
                style={{ opacity: 0, transform: "translateY(40px)" }}
              >
                <Typography
                  variant="subtitle2"
                  weight="normal"
                  color={textConfig.descriptionColor as `#${string}`}
                  className={textConfig.descriptionClassName}
                >
                  {currentItem.description}
                </Typography>
              </div>

              <div
                ref={desktopButtonRef}
                style={{ opacity: 0, transform: "translateY(30px)" }}
              >
                <Link
                  href={currentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    label={buttonConfig.label}
                    color={buttonConfig.color}
                    textColor={buttonConfig.textColor}
                  />
                </Link>
              </div>
            </div>
          </GridCell>

          {/* Arrow cell - row 5, column 4 */}
          <GridCell
            type="researchIcon"
            className={layoutConfig.desktop.iconCell.className}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="absolute inset-0 z-10"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",  
              }}
            ></div>
            <button
              onClick={handlePrevious}
              className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden group"
            >
              <Arrow
                direction="left"
                size={arrowConfig.desktop.size}
                hoverScale={arrowConfig.desktop.hoverScale}
                hoverColor="#DFF48D"
                className={`${arrowConfig.desktop.className} relative z-20`}
              />
            </button>
          </GridCell>

          {/* Clip2 image - row 5, column 5 */}
          <GridCell type="researchIcon" className="col-start-5 row-start-5 p-5">
            <div>
              <Image
                src={images.clip2.src}
                alt={images.clip2.alt}
                className={images.clip2.className}
                width={images.clip2.width}
                height={images.clip2.height}
              />
            </div>
          </GridCell>

          {/* Arrow right - row 5, column 6 */}
          <GridCell
            type="researchIcon"
            className="col-start-6 row-start-5 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="absolute inset-0 z-10"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",  
              }}
            ></div>
            <button
              onClick={handleNext}
              className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden group"
            >
              <Arrow
                direction="right"
                size={arrowConfig.desktop.size}
                hoverScale={arrowConfig.desktop.hoverScale}
                hoverColor="#DFF48D"
                className={`${arrowConfig.desktop.className} relative z-20`}
              />
            </button>
          </GridCell>
        </Grid>
      </div>

      {/* Mobile Layout - Grid-like structure */}
      <div className="lg:hidden">
        <div className={layoutConfig.mobile.grid.className}>
          <div className="min-w-[320px] grid grid-cols-3 border border-white">
            <GridCell
              type="researchImage"
              className={layoutConfig.mobile.imageCell.className}
            >
              <Image
                src={images.clipMobile.src}
                alt={images.clipMobile.alt}
                className={images.clipMobile.className}
                width={images.clipMobile.width}
                height={images.clipMobile.height}
              />
            </GridCell>
            {/* Row 1 - Main content spanning all columns */}
            <div className={layoutConfig.mobile.contentCell.className}>
              <div className="space-y-6 sm:space-y-8 py-8 sm:py-12">
                <div
                  ref={mobileTitleRef}
                  style={{ opacity: 0, transform: "translateY(40px)" }}
                >
                  <Typography
                    variant="h2"
                    weight="normal"
                    align="center"
                    color={textConfig.titleColor as `#${string}`}
                    className="uppercase"
                  >
                    <ResearchTitle
                      title={currentItem.title}
                      wavyConfig={currentWavyConfig}
                    />
                  </Typography>
                </div>

                <div
                  ref={mobileDescriptionRef}
                  style={{ opacity: 0, transform: "translateY(40px)" }}
                >
                  <Typography
                    variant="subtitle2"
                    weight="normal"
                    color={textConfig.descriptionColor as `#${string}`}
                    align="center"
                  >
                    {currentItem.description}
                  </Typography>
                </div>

                <div
                  ref={mobileButtonRef}
                  className="flex justify-center sm:justify-start"
                  style={{ opacity: 0, transform: "translateY(30px)" }}
                >
                  <Link
                    href={currentItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      label={buttonConfig.label}
                      color={buttonConfig.color}
                      textColor={buttonConfig.textColor}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2 - Navigation controls in grid format */}
            <div className={layoutConfig.mobile.navigationCell.className}>
              {/* Left arrow */}
              <div className="col-span-1 border border-white relative min-h-[80px] flex items-center justify-center">
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",  
                  }}
                ></div>
                <button
                  onClick={handlePrevious}
                  className="w-full h-full flex items-center justify-center group"
                >
                  <Arrow
                    direction="left"
                    size={arrowConfig.mobile.size}
                    hoverScale={arrowConfig.mobile.hoverScale}
                    hoverColor="#DFF48D"
                    transitionDuration={arrowConfig.mobile.transitionDuration}
                    className={`${arrowConfig.mobile.className} relative z-20`}
                  />
                </button>
              </div>

              {/* Clip2 image - center */}
              <div className="col-span-1 border border-white flex items-center justify-center p-5">
                <Image
                  src={images.clip2Mobile.src}
                  alt={images.clip2Mobile.alt}
                  className={images.clip2Mobile.className}
                  width={images.clip2Mobile.width}
                  height={images.clip2Mobile.height}
                />
              </div>

              {/* Right arrow */}
              <div className="col-span-1 border border-white relative min-h-[80px] flex items-center justify-center">
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",  
                  }}
                ></div>
                <button
                  onClick={handleNext}
                  className="w-full h-full flex items-center justify-center group"
                >
                  <Arrow
                    direction="right"
                    size={arrowConfig.mobile.size}
                    hoverScale={arrowConfig.mobile.hoverScale}
                    hoverColor="#DFF48D"
                    transitionDuration={arrowConfig.mobile.transitionDuration}
                    className={`${arrowConfig.mobile.className} relative z-20`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
