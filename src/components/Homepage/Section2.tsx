"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hand from "@/assests/HeroSection2/hand.svg";
import hugeicon from "@/assests/HeroSection2/hugeicons.svg";
import bgImage1 from "@/assests/HeroSection2/arrow-bg.png";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import clip from "@/assests/HeroSection2/clip.png";
import arrow from "@/assests/HeroSection2/arrow.svg";
import Typography from "@/components/UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Section2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const hugeiconRef = useRef<HTMLDivElement>(null);

  // Add cursor-tracking ripple effects for interactive grid cells
  useEffect(() => {
    if (typeof window === "undefined") return;

    const interactiveCells = sectionRef.current?.querySelectorAll(
      ".grid-cell-interactive"
    );

    if (!interactiveCells) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const ripple = target.querySelector(".ripple-effect") as HTMLElement;
      if (!ripple) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add("active");

      setTimeout(() => {
        ripple.classList.remove("active");
      }, 800);
    };

    interactiveCells.forEach((cell) => {
      cell.addEventListener("mouseenter", handleMouseEnter as EventListener);
    });

    return () => {
      interactiveCells.forEach((cell) => {
        cell.removeEventListener(
          "mouseenter",
          handleMouseEnter as EventListener
        );
      });
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const elements = [
        { ref: handRef, delay: 0 },
        { ref: textRef, delay: 0.2 },
        { ref: arrowRef, delay: 0.15 },
        { ref: hugeiconRef, delay: 0.25 },
      ];

      elements.forEach(({ ref, delay }) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              delay,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Clip image with blur filter animation
      if (clipRef.current) {
        gsap.fromTo(
          clipRef.current,
          {
            opacity: 0,
            y: 30,
            filter: "blur(20px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            delay: 0.1,
            scrollTrigger: {
              trigger: clipRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      {/* Desktop Layout - Original 10-column grid */}
      <div className="hidden lg:block">
        <Grid>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell
            type="withHeight"
            className="bg-[#D0FFAC] flex items-center justify-center"
          >
            <Image
              src={hand}
              alt="hand"
              className=" mx-auto w-full h-full object-contain p-5"
            />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>

          <GridCell type="basic" className="p-10 grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="spannedContent">
            <div className="flex items-center justify-between w-full h-full">
              <div
                ref={clipRef}
                className="flex-shrink-0 w-1/3 h-full flex items-center justify-center"
              >
                <Image
                  src={clip}
                  alt="clip"
                  className="w-full h-full object-contain"
                  quality={100}
                />
              </div>

              <div
                ref={textRef}
                className="flex-1 w-2/3 pl-8 space-y-4 lg:space-y-8"
              >
                <Typography
                  variant="subtitle2"
                  color="primary"
                  weight="bold"
                  className="tracking-wide font-ppmori max-w-[800px]"
                >
                  In the vibrant world of blockchain, Lampros DAO stands as a
                  beacon, illuminating the path for innovators, dreamers, and
                  builders. Founded with a profound vision to seamlessly merge
                  blockchain technology with mainstream applications, we've
                  steadily grown into a robust community hub.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  weight="bold"
                  className="tracking-wide font-ppmori max-w-[800px]"
                >
                  Our ethos is rooted in fostering growth - both of the
                  individual and the collective. With each project we support,
                  every developer we guide, and each event we host, we inch
                  closer to a future where blockchain isn't just a buzzword, but
                  an integral part of our digital tapestry.
                </Typography>
              </div>
            </div>
          </GridCell>
          <GridCell type="basic" rowSpan={4} className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>

          <GridCell type="arrow">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${bgImage1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={arrow}
              alt="arrow"
              className="relative w-full h-full object-contain p-2 mx-auto "
            />
          </GridCell>

          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell className="relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${bgImage2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={hugeicon}
              alt="hugeicon"
              className="relative mx-auto w-full h-full object-contain p-5"
            />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
          <GridCell type="withHeight" className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>
        </Grid>
      </div>

      {/* Mobile Layout - 3-column grid */}
      <div className="lg:hidden">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[320px] grid grid-cols-3 border border-black">
            <div className="border border-black relative min-h-[80px] bg-[#D0FFAC] flex items-center justify-center">
              <Image
                src={hand}
                alt="hand"
                className="mx-auto w-full h-full object-contain p-5"
              />
            </div>
            <div className="border border-black relative min-h-[80px] grid-cell-interactive">
              <div className="ripple-effect" />
              <div className="pattern-overlay" />
            </div>
            <div className="border border-black relative min-h-[80px] grid-cell-interactive">
              <div className="ripple-effect" />
              <div className="pattern-overlay" />
            </div>

            <div className="col-span-3 border border-black flex items-center justify-center p-4 bg-white">
              <div className="w-full space-y-4">
                <Typography
                  variant="subtitle2"
                  color="primary"
                  weight="semibold"
                  className="tracking-wide font-ppmori text-sm sm:text-base"
                >
                  In the vibrant world of blockchain, Lampros DAO stands as a
                  beacon, illuminating the path for innovators, dreamers, and
                  builders. Founded with a profound vision to seamlessly merge
                  blockchain technology with mainstream applications, we've
                  steadily grown into a robust community hub.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  weight="bold"
                  className="tracking-wide font-ppmori text-sm sm:text-base"
                >
                  Our ethos is rooted in fostering growth - both of the
                  individual and the collective. With each project we support,
                  every developer we guide, and each event we host, we inch
                  closer to a future where blockchain isn't just a buzzword, but
                  an integral part of our digital tapestry.
                </Typography>
              </div>
            </div>

            <div className="border border-black relative min-h-[80px] grid-cell-interactive">
              <div className="ripple-effect" />
              <div className="pattern-overlay" />
            </div>
            <div className="border border-black relative min-h-[80px] grid-cell-interactive">
              <div className="ripple-effect" />
              <div className="pattern-overlay" />
            </div>
            <div className="  relative min-h-[80px] flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${bgImage2.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <Image
                src={hugeicon}
                alt="hugeicon"
                className="relative mx-auto w-full h-full object-contain p-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
