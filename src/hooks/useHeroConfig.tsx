import { useMemo } from "react";
import type {
  HeroTitleConfig,
  HeroImageConfig,
  HeroSubtitleConfig,
  HeroLayoutConfig,
  HeroResponsiveConfig,
} from "@/types/home/hero";
import { colors, spacing } from "@/theme";
import clip from "@/assests/common/clip.svg";
import Vector from "@/assests/HeroSection1/Vector.svg";
import hero from "@/assests/HeroSection1/hero.png";

// Hero component configuration hook
export const useHeroConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, HeroImageConfig> = {
      clip: {
        src: clip,
        alt: "Clip decoration",
        className: "w-full",
        quality: 100,
        width: 1000,
        height: 1000,
      },
      vector: {
        src: Vector,
        alt: "Clip decoration",
        className: "w-full",
        quality: 100,
        width: 1000,
        height: 1000,
      },
      hero: {
        src: hero,
        alt: "Hero background",
        className: "h-full w-full",
        quality: 100,
        width: 1000,
        height: 1000,
      },
    };

    // Title configurations
    const titleConfig: {
      mobile: HeroTitleConfig;
      desktop: HeroTitleConfig;
    } = {
      mobile: {
        lines: [
          { text: "THE" },
          {
            text: "BEACON",
            wavyLetters: [{ letter: "a", position: 2 }],
          },
          { text: "OF" },
          {
            text: "BLOCKCHAIN",
            wavyLetters: [
              { letter: "l", position: 1 },
              { letter: "a", position: 7 },
              { letter: "i", position: 8 },
            ],
          },
        ],
      },
      desktop: {
        lines: [
          {
            text: "THE BEACON",
            wavyLetters: [{ letter: "a", position: 6 }],
          },
          {
            text: "OF BLOCKCHAIN",
            wavyLetters: [
              { letter: "l", position: 4 },
              { letter: "a", position: 10 },
              { letter: "i", position: 11 },
            ],
          },
        ],
      },
    };

    // Subtitle configuration
    const subtitleConfig: HeroSubtitleConfig = {
      text: "Driving Mainstream Adoption, Empowering Developers, and Cultivating the Future of Web3",
      variant: "h6",
      align: "center",
      weight: "semibold",
      color: "primary",
      className: `bg-[${colors.background.lightBlue}] font-ppmori px-3 py-3 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl`,
    };

    // Layout configurations
    const layoutConfig: HeroLayoutConfig = {
      container: {
        width: "100%",
        marginX: "auto",
        position: "relative",
      },
      decoration: {
        position: "absolute",
        top: "100%",
        width: "100%",
        zIndex: 0,
      },
      decorationMobile: {
        position: "relative",
      },
      background: {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        zIndex: 0,
        top: spacing.sm,
      },
      title: {
        position: "relative",
        width: "100%",
      },
      subtitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: spacing.layout.container.width,
        marginX: "auto",
      },
    };

    // Responsive configurations
    const responsiveConfig: HeroResponsiveConfig = {
      mobile: {
        show: true,
        hide: false,
      },
      desktop: {
        show: false,
        hide: true,
      },
    };

    return {
      images,
      titleConfig,
      subtitleConfig,
      layoutConfig,
      responsiveConfig,
    };
  }, []);

  return config;
};

export default useHeroConfig;
