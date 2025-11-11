"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Typography } from "@/components/UI/Typography";
import { useHeroConfig } from "@/hooks/useHeroConfig";
import HeroTitleLine from "./HeroTitleLine";
import { colors, spacing } from "@/theme";
import clip from "@/assests/common/clip.svg";
import Vector from "@/assests/HeroSection1/Vector.svg";
import hero from "@/assests/HeroSection1/hero.png";

export default function Hero() {
  const { images, titleConfig, subtitleConfig, layoutConfig } = useHeroConfig();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleMobileRef = useRef<HTMLDivElement>(null);
  const titleDesktopRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Use requestAnimationFrame to avoid blocking initial render
    const rafId = requestAnimationFrame(() => {
      // Create master timeline with smooth easing
      const masterTl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.1,
      });

      // Animate mobile title lines with enhanced stagger and scale
      if (titleMobileRef.current) {
        const mobileLines = Array.from(titleMobileRef.current.children);

        mobileLines.forEach((line, index) => {
          // Set initial state with more dramatic effect
          gsap.set(line, {
            y: 60,
            opacity: 0,
            scale: 0.95,
            rotationX: 15,
          });

          // Animate each line with individual timing
          masterTl.to(
            line,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: "power3.out",
            },
            index * 0.2
          );
        });
      }

      // Animate desktop title lines with enhanced stagger and scale
      if (titleDesktopRef.current) {
        const desktopLines = Array.from(titleDesktopRef.current.children);

        desktopLines.forEach((line, index) => {
          // Set initial state with more dramatic effect
          gsap.set(line, {
            y: 60,
            opacity: 0,
            scale: 0.95,
            rotationX: 15,
          });

          // Animate each line with individual timing
          masterTl.to(
            line,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: "power3.out",
            },
            index * 0.2
          );
        });
      }

      // Animate subtitle with smooth fade and slide
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, {
          y: 40,
          opacity: 0,
          scale: 0.98,
        });

        masterTl.to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          ">0.2" // Start 0.4s after previous animation
        );
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [titleConfig]);

  return (
    <>
      {/* Desktop */}
      <div
        className={`absolute w-full hidden md:block z-0 ${spacing.position.top.desktop}`}
      >
        <Image
          src={clip}
          alt="clip"
          className={images.clip.className}
          quality={75}
          width={images.clip.width}
          height={images.clip.height}
          priority
          sizes="100vw"
        />
      </div>

      {/* Mobile */}

      <div className={`relative w-full block md:hidden z-0 `}>
        <Image
          src={Vector}
          alt="Vector"
          className={images.vector.className}
          quality={75}
          width={images.vector.width}
          height={images.vector.height}
          priority
          sizes="100vw"
        />
      </div>

      {/* Main Container */}
      <div ref={heroRef} className="w-full h-max relative">
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block top-5">
          <Image
            src={hero}
            alt="hero"
            className={images.hero.className}
            width={images.hero.width}
            height={images.hero.height}
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
          />
        </div>

        {/* Mobile Title Section */}
        <div
          ref={titleMobileRef}
          className={`relative w-full md:hidden ${spacing.hero.mobile.paddingTop} ${spacing.hero.mobile.paddingTopSm} ${spacing.hero.mobile.paddingBottomSm}`}
        >
          {titleConfig.mobile.lines.map((line, index) => (
            <div key={`mobile-line-${index}`} className="hero-title-line">
              <HeroTitleLine line={line} variant="mobile" />
            </div>
          ))}
        </div>

        {/* Desktop/Tablet Title Section */}
        <div
          ref={titleDesktopRef}
          className={`relative w-full hidden md:block ${spacing.hero.desktop.paddingTop} ${spacing.hero.desktop.paddingTopLg} ${spacing.hero.desktop.paddingTop2xl} ${spacing.hero.desktop.paddingBottomLg} ${spacing.hero.desktop.paddingBottom}`}
        >
          {titleConfig.desktop.lines.map((line, index) => (
            <div key={`desktop-line-${index}`} className="hero-title-line">
              <HeroTitleLine line={line} variant="desktop" />
            </div>
          ))}
        </div>

        {/* Subtitle Section */}
        <div
          ref={subtitleRef}
          className={`flex items-center justify-center relative w-[80%] mx-auto top-0 ${spacing.hero.container.marginBottom} ${spacing.hero.container.marginBottomMd} ${spacing.hero.container.marginBottom2xl} ${spacing.hero.container.marginTopMd}`}
        >
          <div
            style={{ backgroundColor: colors.background.lightBlue }}
            className={subtitleConfig.className}
          >
            <Typography
              variant={subtitleConfig.variant}
              align={subtitleConfig.align}
              weight={subtitleConfig.weight}
              color={subtitleConfig.color}
            >
              {subtitleConfig.text}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
