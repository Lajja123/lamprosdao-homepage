"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from "@/assests/HeroSection1/hero.png";
import clip from "@/assests/common/clip.svg";
import { Typography } from "@/components/UI/Typography"; // adjust path

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const wavyLettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Set 3D transform perspective for depth
      gsap.set(heroRef.current, { perspective: 1000 });

      // Master timeline for mount animations
      const masterTimeline = gsap.timeline({ delay: 0.2 });

      //  Clip image - Creative entrance with rotation and blur
      if (clipRef.current) {
        gsap.set(clipRef.current, {
          opacity: 0,
          y: -50,
          scale: 0.8,
          rotation: -5,
          filter: "blur(20px)",
        });
        masterTimeline.to(clipRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
        });
      }

      //  Title Line 1 - Creative 3D reveal with blur effect
      if (titleLine1Ref.current) {
        const children = Array.from(
          titleLine1Ref.current.children
        ) as HTMLElement[];
        gsap.set(titleLine1Ref.current, {
          opacity: 0,
          filter: "blur(20px)",
        });

        // Animate the container
        masterTimeline.to(titleLine1Ref.current, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        });

        // Stagger animation for text elements inside
        if (children.length > 0) {
          gsap.set(children, {
            opacity: 0,
            y: 80,
            rotationX: 45,
            scale: 0.8,
          });

          masterTimeline.to(
            children,
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              scale: 1,
              duration: 1,
              stagger: 0.08,
              ease: "power3.out",
            },
            0.3
          );
        }
      }

      // Title Line 2 - Similar effect with delay
      if (titleLine2Ref.current) {
        const children = Array.from(
          titleLine2Ref.current.children
        ) as HTMLElement[];
        gsap.set(titleLine2Ref.current, {
          opacity: 0,
          filter: "blur(20px)",
        });

        masterTimeline.to(
          titleLine2Ref.current,
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          },
          0.4
        );

        if (children.length > 0) {
          gsap.set(children, {
            opacity: 0,
            y: 80,
            rotationX: 45,
            scale: 0.8,
          });

          masterTimeline.to(
            children,
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              scale: 1,
              duration: 1,
              stagger: 0.08,
              ease: "power3.out",
            },
            0.7
          );
        }
      }

      // Tagline - Word-by-word reveal with magnetic hover effect
      if (taglineRef.current) {
        gsap.set(taglineRef.current, {
          opacity: 0,
          scale: 0.7,
          y: 40,
          filter: "blur(15px)",
        });
        masterTimeline.to(
          taglineRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.6"
        );

        // Magnetic cursor effect on tagline
        const handleTaglineHover = (e: MouseEvent) => {
          if (!taglineRef.current) return;
          const rect = taglineRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(taglineRef.current, {
            x: x * 0.1,
            y: y * 0.1,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleTaglineLeave = () => {
          if (!taglineRef.current) return;
          gsap.to(taglineRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
          });
        };

        taglineRef.current.addEventListener("mousemove", handleTaglineHover);
        taglineRef.current.addEventListener("mouseleave", handleTaglineLeave);
      }

      // Scroll-based interactions - Dynamic depth effect
      if (titleLine1Ref.current && titleLine2Ref.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          onUpdate: (self) => {
            const progress = self.progress;
            // Subtle 3D tilt effect based on scroll
            gsap.set([titleLine1Ref.current, titleLine2Ref.current], {
              rotationY: progress * 2,
              scale: 1 - progress * 0.05,
              opacity: 1 - progress * 0.3,
            });
          },
        });
      }

      //  Background glow effect on scroll
      if (imageRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(imageRef.current, {
              filter: `brightness(${1 - progress * 0.3}) saturate(${
                1 + progress * 0.2
              })`,
            });
          },
        });
      }
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Clip Image - Top Center */}
      <div ref={clipRef} className="absolute top-12 w-full hidden sm:block z-0">
        <Image
          src={clip}
          alt="Clip decoration"
          className="w-full"
          quality={100}
        />
      </div>

      <div ref={heroRef} className="w-full h-max relative ">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block top-5">
          <Image
            src={hero}
            alt="Hero background"
            className="h-full w-full "
            fill
            sizes="100vw"
          />
        </div>

        {/* Title Section */}
        <div className="relative  w-full md:pt-20 lg:pt-40 2xl:pt-50 lg:pb-10 md:pb-20 py-7 sm:pt-20 sm:pb-7 ">
          <div ref={titleLine2Ref}>
            <Typography
              variant="h1"
              weight="normal"
              align="center"
              color="dark"
              className="uppercase leading-tight font-ppmori "
            >
              <span className="inline-block">The Be</span>
              <span
                ref={(el) => {
                  if (el) wavyLettersRef.current[0] = el;
                }}
                className="uppercase font-bohemian wavy-letter inline-block"
              >
                a
              </span>
              <span className="inline-block">con</span>
            </Typography>
          </div>
          <div ref={titleLine1Ref}>
            <Typography
              variant="h1"
              weight="normal"
              align="center"
              color="dark"
              className="uppercase  font-ppmori "
            >
              <span className="inline-block">Of B</span>
              <span
                ref={(el) => {
                  if (el) wavyLettersRef.current[1] = el;
                }}
                className="font-bohemian wavy-letter inline-block"
              >
                l
              </span>
              <span className="inline-block">ockch</span>
              <span
                ref={(el) => {
                  if (el) wavyLettersRef.current[2] = el;
                }}
                className="font-bohemian wavy-letter inline-block"
              >
                a
              </span>
              <span
                ref={(el) => {
                  if (el) wavyLettersRef.current[3] = el;
                }}
                className="font-bohemian wavy-letter inline-block"
              >
                i
              </span>
              <span className="inline-block">n</span>
            </Typography>
          </div>
        </div>
        <div className="flex items-center justify-center relative md:top-0 w-[80%] mx-auto top-0 mb-10 md:mb-20 2xl:mb-40 md:mt-20">
          <div ref={taglineRef}>
            <Typography
              variant="h6"
              align="center"
              weight="semibold"
              color="primary"
              className="bg-[#DFEAF9] font-ppmori px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl  "
            >
              Driving Mainstream Adoption, Empowering Developers, and
              Cultivating the Future of Web3
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
