"use client";
import Image from "next/image";
import { Typography } from "@/components/UI/Typography";
import { useHeroConfig } from "@/hooks/useHeroConfig";
import HeroTitleLine from "./HeroTitleLine";
import { colors, spacing } from "@/theme";

export default function Hero() {
  const { images, titleConfig, subtitleConfig, layoutConfig } = useHeroConfig();

  return (
    <>
      {/* Desktop */}
      <div
        className={`absolute w-full hidden md:block z-0 ${spacing.position.top.desktop}`}
      >
        <Image
          src={images.clip.src}
          alt={images.clip.alt}
          className={images.clip.className}
          quality={images.clip.quality}
          width={images.clip.width}
          height={images.clip.height}
        />
      </div>

      {/* Mobile */}

      <div className={`relative w-full block md:hidden z-0 `}>
        <Image
          src={images.vector.src}
          alt={images.vector.alt}
          className={images.vector.className}
          quality={images.vector.quality}
          width={images.vector.width}
          height={images.vector.height}
        />
      </div>

      {/* Main Container */}
      <div className="w-full h-max relative">
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block top-5">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            className={images.hero.className}
            width={images.hero.width}
            height={images.hero.height}
          />
        </div>

        {/* Mobile Title Section */}
        <div
          className={`relative w-full md:hidden ${spacing.hero.mobile.paddingTop} ${spacing.hero.mobile.paddingTopSm} ${spacing.hero.mobile.paddingBottomSm}`}
        >
          {titleConfig.mobile.lines.map((line, index) => (
            <div key={`mobile-line-${index}`}>
              <HeroTitleLine line={line} variant="mobile" />
            </div>
          ))}
        </div>

        {/* Desktop/Tablet Title Section */}
        <div
          className={`relative w-full hidden md:block ${spacing.hero.desktop.paddingTop} ${spacing.hero.desktop.paddingTopLg} ${spacing.hero.desktop.paddingTop2xl} ${spacing.hero.desktop.paddingBottomLg} ${spacing.hero.desktop.paddingBottom}`}
        >
          {titleConfig.desktop.lines.map((line, index) => (
            <>
              <div key={`desktop-line-${index}`}>
                <HeroTitleLine line={line} variant="desktop" />
              </div>
            </>
          ))}
        </div>

        {/* Subtitle Section */}
        <div
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
