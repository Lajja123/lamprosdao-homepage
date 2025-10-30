"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Clip from "@/assests/HeroSection3/Clip.svg";
import Clip2 from "@/assests/HeroSection3/Clip2.svg";
import { Typography } from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import Arrow from "../UI/Arrow";
import Grid, { GridCell } from "@/components/UI/Grid";
import researchContent from "@/data/researchContent.json";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Research() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { researchItems } = researchContent;
  const currentItem = researchItems[currentIndex];

  // Refs for animation elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<HTMLButtonElement>(null);
  const rightArrowRef = useRef<HTMLButtonElement>(null);
  const clip2Ref = useRef<HTMLDivElement>(null);

  // Mobile refs
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const mobileTitleRef = useRef<HTMLDivElement>(null);
  const mobileDescriptionRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLDivElement>(null);

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

  // Scroll-triggered reveal animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Main image - blur and scale reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.8,
            filter: "blur(20px)",
            rotation: -5,
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            rotation: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Content section - slide in from right with stagger
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Title - letter-by-letter reveal with stagger
      if (titleRef.current) {
        const titleElements = titleRef.current.querySelectorAll(
          "span, .font-bohemian"
        );
        gsap.fromTo(
          titleElements.length > 0 ? titleElements : titleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Description - fade in with delay
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: descriptionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Button - scale and fade
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Clip2 image - rotate and scale reveal with continuous pulse
      if (clip2Ref.current) {
        gsap.fromTo(
          clip2Ref.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: clip2Ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onComplete: () => {
              // Continuous subtle pulse animation
              gsap.to(clip2Ref.current, {
                scale: 1.05,
                duration: 2,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
              });
            },
          }
        );
      }

      // Mobile animations
      if (mobileContentRef.current) {
        gsap.fromTo(
          mobileContentRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mobileContentRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (mobileTitleRef.current) {
        const mobileTitleElements = mobileTitleRef.current.querySelectorAll(
          "span, .font-bohemian"
        );
        gsap.fromTo(
          mobileTitleElements.length > 0
            ? mobileTitleElements
            : mobileTitleRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mobileTitleRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (mobileDescriptionRef.current) {
        gsap.fromTo(
          mobileDescriptionRef.current,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mobileDescriptionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (mobileButtonRef.current) {
        gsap.fromTo(
          mobileButtonRef.current,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.25,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mobileButtonRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Parallax effect on background images
      const arrowBgElements = sectionRef.current?.querySelectorAll(".arrow-bg");
      arrowBgElements?.forEach((el) => {
        gsap.to(el, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Re-animate content when currentIndex changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elementsToAnimate = [
      titleRef.current,
      descriptionRef.current,
      buttonRef.current,
      mobileTitleRef.current,
      mobileDescriptionRef.current,
      mobileButtonRef.current,
    ].filter(Boolean);

    if (elementsToAnimate.length > 0) {
      // Quick fade out then fade in with scale
      gsap.to(elementsToAnimate, {
        opacity: 0,
        y: -10,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.fromTo(
            elementsToAnimate,
            {
              opacity: 0,
              y: 10,
              scale: 0.98,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            }
          );
        },
      });
    }
  }, [currentIndex]);

  // Function to render title with wavy letters (static styling only)
  const renderTitleWithWavyLetters = (title: string) => {
    switch (title) {
      case "Our Journey & Impact":
        return (
          <>
            <span className="uppercase font-bohemian inline-block">O</span>
            ur <span className="uppercase font-bohemian inline-block">J</span>
            ourney &{" "}
            <span className="uppercase font-bohemian inline-block">I</span>
            mpact
          </>
        );
      case "Governance & Research":
        return (
          <>
            <span className="uppercase font-bohemian inline-block">G</span>
            overnance &{" "}
            <span className="uppercase font-bohemian inline-block">R</span>
            esearch
          </>
        );
      case "Workshops & Education":
        return (
          <>
            <span className="uppercase font-bohemian inline-block">W</span>
            orkshops &{" "}
            <span className="uppercase font-bohemian inline-block">E</span>
            ducation
          </>
        );
      default:
        return title;
    }
  };

  return (
    <div ref={sectionRef} className="w-full bg-[#121212] text-white">
      {/* Desktop Layout - Original research grid */}
      <div className="hidden lg:block">
        <Grid variant="research" className="relative w-full">
          {/* Main image - spans 3 columns, 5 rows */}
          <GridCell type="researchImage" ref={imageRef}>
            <Image
              src={Clip}
              alt="Metallic sculpture"
              className="w-[40%] sm:w-[45%] md:w-[50%] lg:w-[55%] xl:w-[60%] mx-auto"
            />
          </GridCell>

          {/* Content section - spans 3 columns, 4 rows */}
          <GridCell type="researchContent">
            <div
              ref={contentRef}
              className="space-y-4 sm:space-y-5 md:space-y-6 px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-10  flex flex-col justify-center"
            >
              <div ref={titleRef}>
                <Typography
                  variant="h2"
                  weight="normal"
                  align="left"
                  color="#E9FCE4"
                  className="uppercase tracking-[-0.02em] leading-[0.95]"
                >
                  {renderTitleWithWavyLetters(currentItem.title)}
                </Typography>
              </div>

              <div ref={descriptionRef}>
                <Typography
                  variant="subtitle2"
                  weight="normal"
                  color="#C7C7C7"
                  className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed text-sm sm:text-base md:text-lg"
                >
                  {currentItem.description}
                </Typography>
              </div>

              <div ref={buttonRef}>
                <Link
                  href={currentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    label="Know More"
                    color="#D0FFAC"
                    textColor="#000000"
                  />
                </Link>
              </div>
            </div>
          </GridCell>

          {/* Arrow cell - row 5, column 4 */}
          <GridCell type="researchIcon" className="relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${bgImage2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <button
              ref={leftArrowRef}
              onClick={handlePrevious}
              className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden group"
            >
              <Arrow
                direction="left"
                size={70}
                hoverScale={1.2}
                hoverColor="#D0FFAC"
                className="sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          </GridCell>

          {/* Clip2 image - row 5, column 5 */}
          <GridCell type="researchIcon" className="col-start-5 row-start-5 p-5">
            <div ref={clip2Ref}>
              <Image
                src={Clip2}
                alt="Emblem"
                className="p-3 sm:p-4 md:p-5 w-full"
              />
            </div>
          </GridCell>

          {/* Arrow right - row 5, column 6 */}
          <GridCell
            type="researchIcon"
            className="col-start-6 row-start-5 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 "
              style={{
                backgroundImage: `url(${bgImage2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <button
              ref={rightArrowRef}
              onClick={handleNext}
              className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden group"
            >
              <Arrow
                direction="right"
                size={70}
                hoverScale={1.2}
                hoverColor="#D0FFAC"
                className="sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          </GridCell>
        </Grid>
      </div>

      {/* Mobile Layout - Grid-like structure */}
      <div className="lg:hidden">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[320px] grid grid-cols-3 border border-white">
            <GridCell
              type="researchImage"
              ref={imageRef}
              className="border-b border-white"
            >
              <Image
                src={Clip}
                alt="Metallic sculpture"
                className="w-[60%] sm:w-[45%] md:w-[50%] lg:w-[55%] xl:w-[60%] mx-auto"
              />
            </GridCell>
            {/* Row 1 - Main content spanning all columns */}
            <div className="col-span-3 p-4 sm:p-6">
              <div
                ref={mobileContentRef}
                className="space-y-6 sm:space-y-8 py-8 sm:py-12"
              >
                <div ref={mobileTitleRef}>
                  <Typography
                    variant="h2"
                    weight="normal"
                    align="center"
                    color="#E9FCE4"
                    className="uppercase "
                  >
                    {renderTitleWithWavyLetters(currentItem.title)}
                  </Typography>
                </div>

                <div ref={mobileDescriptionRef}>
                  <Typography
                    variant="subtitle2"
                    weight="normal"
                    color="#C7C7C7"
                    align="center"
                  >
                    {currentItem.description}
                  </Typography>
                </div>

                <div
                  ref={mobileButtonRef}
                  className="flex justify-center sm:justify-start"
                >
                  <Link
                    href={currentItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      label="Know More"
                      color="#D0FFAC"
                      textColor="#000000"
                      className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2 - Navigation controls in grid format */}
            {/* Left arrow */}
            <div className="border border-white relative min-h-[80px] flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${bgImage2.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
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

            {/* Clip2 image - center */}
            <div className="border border-white flex items-center justify-center p-5">
              <Image
                src={Clip2}
                alt="Emblem"
                className="w-full sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            </div>

            {/* Right arrow */}
            <div className="border border-white relative min-h-[80px] flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${bgImage2.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
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
  );
}
