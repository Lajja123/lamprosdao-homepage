"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "@/components/UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useAboutHeroConfig } from "@/hooks/useAboutHeroConfig";
import AboutTitle from "./AboutTitle";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { images, textConfig, visionMissionConfig, layoutConfig } =
    useAboutHeroConfig();

  // Refs for animation elements
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  
  // Mobile Vision & Mission refs
  const mobileVisionImageRef = useRef<HTMLDivElement>(null);
  const mobileVisionTitleRef = useRef<HTMLDivElement>(null);
  const mobileVisionDescriptionRef = useRef<HTMLDivElement>(null);
  const mobileMissionImageRef = useRef<HTMLDivElement>(null);
  const mobileMissionTitleRef = useRef<HTMLDivElement>(null);
  const mobileMissionDescriptionRef = useRef<HTMLDivElement>(null);
  
  // Desktop Vision & Mission refs
  const desktopVisionImageRef = useRef<HTMLDivElement>(null);
  const desktopVisionTitleRef = useRef<HTMLDivElement>(null);
  const desktopVisionDescriptionRef = useRef<HTMLDivElement>(null);
  const desktopMissionImageRef = useRef<HTMLDivElement>(null);
  const desktopMissionTitleRef = useRef<HTMLDivElement>(null);
  const desktopMissionDescriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTriggers: ScrollTrigger[] = [];

    // About image animation
    if (aboutImageRef.current) {
      gsap.set(aboutImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(aboutImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutImageRef.current,
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

    // About content animation
    if (aboutContentRef.current) {
      gsap.set(aboutContentRef.current, {
        opacity: 0,
        y: 40,
      });

      const contentAnimation = gsap.to(aboutContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: aboutContentRef.current,
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

    // Mobile Vision image animation
    if (mobileVisionImageRef.current) {
      gsap.set(mobileVisionImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const mobileVisionImageAnimation = gsap.to(mobileVisionImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileVisionImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (mobileVisionImageAnimation.scrollTrigger) {
        scrollTriggers.push(mobileVisionImageAnimation.scrollTrigger);
      }
    }

    // Mobile Vision title animation
    if (mobileVisionTitleRef.current) {
      gsap.set(mobileVisionTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const mobileVisionTitleAnimation = gsap.to(mobileVisionTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileVisionTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (mobileVisionTitleAnimation.scrollTrigger) {
        scrollTriggers.push(mobileVisionTitleAnimation.scrollTrigger);
      }
    }

    // Mobile Vision description animation
    if (mobileVisionDescriptionRef.current) {
      gsap.set(mobileVisionDescriptionRef.current, {
        opacity: 0,
        y: 40,
      });

      const mobileVisionDescriptionAnimation = gsap.to(mobileVisionDescriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: mobileVisionDescriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (mobileVisionDescriptionAnimation.scrollTrigger) {
        scrollTriggers.push(mobileVisionDescriptionAnimation.scrollTrigger);
      }
    }

    // Mobile Mission image animation
    if (mobileMissionImageRef.current) {
      gsap.set(mobileMissionImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const mobileMissionImageAnimation = gsap.to(mobileMissionImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileMissionImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (mobileMissionImageAnimation.scrollTrigger) {
        scrollTriggers.push(mobileMissionImageAnimation.scrollTrigger);
      }
    }

    // Mobile Mission title animation
    if (mobileMissionTitleRef.current) {
      gsap.set(mobileMissionTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const mobileMissionTitleAnimation = gsap.to(mobileMissionTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileMissionTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (mobileMissionTitleAnimation.scrollTrigger) {
        scrollTriggers.push(mobileMissionTitleAnimation.scrollTrigger);
      }
    }

    // Mobile Mission description animation
    if (mobileMissionDescriptionRef.current) {
      gsap.set(mobileMissionDescriptionRef.current, {
        opacity: 0,
        y: 40,
      });

      const mobileMissionDescriptionAnimation = gsap.to(mobileMissionDescriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: mobileMissionDescriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (mobileMissionDescriptionAnimation.scrollTrigger) {
        scrollTriggers.push(mobileMissionDescriptionAnimation.scrollTrigger);
      }
    }

    // Desktop Vision image animation
    if (desktopVisionImageRef.current) {
      gsap.set(desktopVisionImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const desktopVisionImageAnimation = gsap.to(desktopVisionImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopVisionImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (desktopVisionImageAnimation.scrollTrigger) {
        scrollTriggers.push(desktopVisionImageAnimation.scrollTrigger);
      }
    }

    // Desktop Vision title animation
    if (desktopVisionTitleRef.current) {
      gsap.set(desktopVisionTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const desktopVisionTitleAnimation = gsap.to(desktopVisionTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopVisionTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (desktopVisionTitleAnimation.scrollTrigger) {
        scrollTriggers.push(desktopVisionTitleAnimation.scrollTrigger);
      }
    }

    // Desktop Vision description animation
    if (desktopVisionDescriptionRef.current) {
      gsap.set(desktopVisionDescriptionRef.current, {
        opacity: 0,
        y: 40,
      });

      const desktopVisionDescriptionAnimation = gsap.to(desktopVisionDescriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: desktopVisionDescriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (desktopVisionDescriptionAnimation.scrollTrigger) {
        scrollTriggers.push(desktopVisionDescriptionAnimation.scrollTrigger);
      }
    }

    // Desktop Mission image animation
    if (desktopMissionImageRef.current) {
      gsap.set(desktopMissionImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const desktopMissionImageAnimation = gsap.to(desktopMissionImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopMissionImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (desktopMissionImageAnimation.scrollTrigger) {
        scrollTriggers.push(desktopMissionImageAnimation.scrollTrigger);
      }
    }

    // Desktop Mission title animation
    if (desktopMissionTitleRef.current) {
      gsap.set(desktopMissionTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const desktopMissionTitleAnimation = gsap.to(desktopMissionTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopMissionTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (desktopMissionTitleAnimation.scrollTrigger) {
        scrollTriggers.push(desktopMissionTitleAnimation.scrollTrigger);
      }
    }

    // Desktop Mission description animation
    if (desktopMissionDescriptionRef.current) {
      gsap.set(desktopMissionDescriptionRef.current, {
        opacity: 0,
        y: 40,
      });

      const desktopMissionDescriptionAnimation = gsap.to(desktopMissionDescriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: desktopMissionDescriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (desktopMissionDescriptionAnimation.scrollTrigger) {
        scrollTriggers.push(desktopMissionDescriptionAnimation.scrollTrigger);
      }
    }

    return () => {
      // Cleanup ScrollTrigger instances
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <>
      {/* Main About Section */}
      <div className={layoutConfig.main.container.className}>
        {/* Image Section */}
        <div
          
          className={layoutConfig.main.imageSection.className}
          style={{
            backgroundColor: layoutConfig.main.imageSection.backgroundColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <div ref={aboutImageRef}>
          <Image
            src={images.about.src}
            alt={images.about.alt}
            className={images.about.className}
            quality={images.about.quality}
              width={images.about.width}
              height={images.about.height}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className={layoutConfig.main.textSection.className}>
          <div ref={aboutContentRef} className="">
            <Typography
              variant={textConfig.title.variant}
              color={textConfig.title.color as `#${string}` | "primary"}
              weight={textConfig.title.weight}
              align={textConfig.title.align}
              className={textConfig.title.className}
            >
              <AboutTitle
                text={textConfig.title.text} 
                wavyLetters={
                  textConfig.title.wavyLetter
                    ? [textConfig.title.wavyLetter]
                    : undefined
                }
              />
            </Typography>
            <Typography
              variant={textConfig.variant}
              color={textConfig.color as `#${string}` | "primary"}
              weight={textConfig.weight}
              className={textConfig.className}
            >
              {textConfig.paragraphs.map((paragraph, index) => (
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

      {/* Vision & Mission Section */}
      <div
        className={layoutConfig.visionMission.container.className}
        style={{
          backgroundColor: layoutConfig.visionMission.container.backgroundColor,
        }}
      >
        {/* Mobile Layout */}
        <div className={layoutConfig.visionMission.mobile.container.className}>
          {/* Vision Section */}
          <div className={layoutConfig.visionMission.mobile.section.className}>
            <div
              className={layoutConfig.visionMission.mobile.titleCell.className}
            >
              <div ref={mobileVisionTitleRef}>
                <Typography
                  variant="h3"
                  weight="semibold"
                  align="center"
                  color={
                    visionMissionConfig.titleColor as `#${string}` | "offset"
                  }
                  className={visionMissionConfig.titleClassName}
                >
                  <AboutTitle
                    text={visionMissionConfig.vision.title.text}
                    wavyLetters={visionMissionConfig.vision.title.wavyLetters}
                  />
                </Typography>
              </div>
            </div>
            <div
              className={layoutConfig.visionMission.mobile.imageCell.className}
            >
              <div ref={mobileVisionImageRef}>
                <Image
                  src={images.vision.src}
                  alt={images.vision.alt}
                  quality={images.vision.quality}
                  className={images.vision.className}
                  width={images.vision.width}
                  height={images.vision.height}
                />
              </div>
            </div>
            <div
              className={
                layoutConfig.visionMission.mobile.descriptionCell.className
              }
            >
              <div ref={mobileVisionDescriptionRef}>
                <Typography
                  variant="body2"
                  color={
                    visionMissionConfig.descriptionColor as `#${string}` | "white"
                  }
                  weight="normal"
                  align="center"
                  className={visionMissionConfig.descriptionClassName}
                >
                  {visionMissionConfig.vision.description}
                </Typography>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className={layoutConfig.visionMission.mobile.section.className}>
            <div
              className={layoutConfig.visionMission.mobile.imageCell.className}
            >
              <div ref={mobileMissionImageRef}>
                <Image
                  src={images.mission.src}
                  alt={images.mission.alt}
                  quality={images.mission.quality}
                  className={images.mission.className}
                  width={images.mission.width}
                  height={images.mission.height}
                />
              </div>
            </div>
            <div
              className={layoutConfig.visionMission.mobile.titleCell.className}
            >
              <div ref={mobileMissionTitleRef}>
                <Typography
                  variant="h3"
                  weight="semibold"
                  align="center"
                  color={
                    visionMissionConfig.titleColor as `#${string}` | "offset"
                  }
                  className={visionMissionConfig.titleClassName}
                >
                  <AboutTitle
                    text={visionMissionConfig.mission.title.text}
                    wavyLetters={visionMissionConfig.mission.title.wavyLetters}
                  />
                </Typography>
              </div>
            </div>
            <div
              className={
                layoutConfig.visionMission.mobile.descriptionCell.className
              }
            >
              <div ref={mobileMissionDescriptionRef}>
                <Typography
                  variant="body2"
                  color={
                    visionMissionConfig.descriptionColor as `#${string}` | "white"
                  }
                  weight="normal"
                  align="center"
                  className={`${visionMissionConfig.descriptionClassName} leading-[0.90]`}
                >
                  {visionMissionConfig.mission.description}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <Grid
          variant="custom"
          noContainer
          className={layoutConfig.visionMission.desktop.grid.className}
        >
          <GridCell
            className={
              layoutConfig.visionMission.desktop.decorativeCell.className
            }
          >
            <div
              className="w-full h-full"
              style={{
                backgroundColor:
                  layoutConfig.visionMission.desktop.decorativeCell
                    .backgroundColor,
              }}
            />
          </GridCell>
          <GridCell
            colSpan={4}
            className={`${layoutConfig.visionMission.desktop.titleCell.className} p-5`}
          >
            <div ref={desktopVisionTitleRef}>
              <Typography
                variant="h3"
                weight="semibold"
                align="center"
                color={visionMissionConfig.titleColor as `#${string}` | "offset"}
                className={visionMissionConfig.titleClassName}
              >
                <AboutTitle
                  text={visionMissionConfig.vision.title.text}
                  wavyLetters={visionMissionConfig.vision.title.wavyLetters}
                />
              </Typography>
            </div>
          </GridCell>
          <GridCell
            colSpan={4}
            rowSpan={3}
            colStart={6}
            className={layoutConfig.visionMission.desktop.imageCell.className}
          >
            <div ref={desktopVisionImageRef}>
              <Image
                src={images.visionDesktop.src}
                alt={images.visionDesktop.alt}
                quality={images.visionDesktop.quality}
                className={images.visionDesktop.className}
                width={images.visionDesktop.width}
                height={images.visionDesktop.height}
              />
            </div>
          </GridCell>
          <GridCell
            rowSpan={3}
            colStart={10}
            className={`${layoutConfig.visionMission.desktop.emptyCell.className} border border-[#FFFFFF]`}
          />
          <GridCell
            rowSpan={2}
            rowStart={2}
            className={`${layoutConfig.visionMission.desktop.emptyCell.className} border border-white`}
          />
          <GridCell
            colSpan={4}
            rowSpan={2}
            rowStart={2}
            className={`${layoutConfig.visionMission.desktop.descriptionCell.className} border border-[#FFFFFF]`}
          >
            <div ref={desktopVisionDescriptionRef}>
              <Typography
                variant="body2"
                color={
                  visionMissionConfig.descriptionColor as `#${string}` | "white"
                }
                weight="normal"
                className="tracking-wider font-ppmori text-xl leading-1.5 p-10"
              >
                {visionMissionConfig.vision.description}
              </Typography>
            </div>
          </GridCell>
          <GridCell
            rowSpan={3}
            rowStart={4}
            className={`${layoutConfig.visionMission.desktop.emptyCell.className} border border-[#FFFFFF]`}
          />
          <GridCell
            colSpan={4}
            rowSpan={3}
            rowStart={4}
            className={layoutConfig.visionMission.desktop.imageCell.className}
          >
            <div ref={desktopMissionImageRef}>
              <Image
                src={images.missionDesktop.src}
                alt={images.missionDesktop.alt}
                quality={images.missionDesktop.quality}
                className={images.missionDesktop.className}
                width={images.missionDesktop.width}
                height={images.missionDesktop.height}
              />
            </div>
          </GridCell>
          <GridCell
            colSpan={4}
            colStart={6}
            rowStart={4}
            className={`${layoutConfig.visionMission.desktop.missionTitleCell.className} p-5`}
          >
            <div ref={desktopMissionTitleRef}>
              <Typography
                variant="h3"
                weight="semibold"
                align="center"
                color={visionMissionConfig.titleColor as `#${string}` | "offset"}
                className={visionMissionConfig.titleClassName}
              >
                <AboutTitle
                  text={visionMissionConfig.mission.title.text}
                  wavyLetters={visionMissionConfig.mission.title.wavyLetters}
                />
              </Typography>
            </div>
          </GridCell>
          <GridCell
            colSpan={4}
            rowSpan={2}
            colStart={6}
            rowStart={5}
            className={`${layoutConfig.visionMission.desktop.missionDescriptionCell.className} border border-[#FFFFFF]`}
          >
            <div ref={desktopMissionDescriptionRef}>
              <Typography
                variant="body2"
                color={
                  visionMissionConfig.descriptionColor as `#${string}` | "white"
                }
                weight="normal"
                className="tracking-wider font-ppmori leading-[0.90] p-10"
              >
                {visionMissionConfig.mission.description}
              </Typography>
            </div>
          </GridCell>
          <GridCell
            colStart={10}
            rowStart={4}
            className={`${layoutConfig.visionMission.desktop.decorativeCell.className} border border-[#FFFFFF]`}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundColor:
                  layoutConfig.visionMission.desktop.decorativeCell
                    .backgroundColor,
              }}
            />
          </GridCell>
          <GridCell
            rowSpan={2}
            colStart={10}
            rowStart={5}
            className={`${layoutConfig.visionMission.desktop.emptyCell.className} border border-[#FFFFFF]`}
          />
        </Grid>
      </div>
    </>
  );
}
