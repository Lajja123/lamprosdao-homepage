import { useMemo } from "react";
import Clip from "@/assests/HeroSection3/Clip.svg";
import Clip2 from "@/assests/HeroSection3/Clip2.svg";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import type { StaticImageData } from "next/image";
import type {
  ResearchImageConfig,
  ResearchTextConfig,
  ResearchButtonConfig,
  ResearchArrowConfig,
  ResearchLayoutConfig,
  TitleWavyConfig,
} from "@/types/home/research";
import { colors } from "@/theme";

// Research component configuration hook
export const useResearchConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, ResearchImageConfig> = {
      clip: {
        src: Clip,
        alt: "Metallic sculpture",
        className:
          "w-[40%] sm:w-[45%] md:w-[50%] lg:w-[55%] xl:w-[60%] mx-auto",
        width: 800,
        height: 800,
      },
      clipMobile: {
        src: Clip,
        alt: "Metallic sculpture",
        className:
          "w-[60%] sm:w-[45%] md:w-[50%] lg:w-[55%] xl:w-[60%] mx-auto",
        width: 800,
        height: 800,
      },
      clip2: {
        src: Clip2,
        alt: "Emblem",
        className: "p-3 sm:p-4 md:p-5 w-full",
        width: 200,
        height: 200,
      },
      clip2Mobile: {
        src: Clip2,
        alt: "Emblem",
        className: "w-full sm:w-16 sm:h-16 md:w-20 md:h-20",
        width: 200,
        height: 200,
      },
    };

    // Background image configurations
    const backgroundImages: Record<string, StaticImageData> = {
      arrowBg: bgImage2,
    };

    // Text configurations
    const textConfig: ResearchTextConfig = {
      titleColor: colors.text.lightGreen,
      descriptionColor: colors.text.gray,
      titleClassName: "uppercase tracking-[-0.02em] leading-[0.95]",
      descriptionClassName:
        "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed text-sm sm:text-base md:text-lg",
    };

    // Button configuration
    const buttonConfig: ResearchButtonConfig = {
      label: "Know More",
      color: colors.accent.lightGreen,
      textColor: colors.primary.black,
    };

    // Arrow configurations
    const arrowConfig: {
      desktop: ResearchArrowConfig;
      mobile: ResearchArrowConfig;
    } = {
      desktop: {
        size: 70,
        hoverScale: 1.2,
        hoverColor: colors.accent.lightGreen,
        className:
          "sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] transition-all duration-300 group-hover:brightness-110",
      },
      mobile: {
        size: 30,
        hoverScale: 1.15,
        hoverColor: colors.accent.lightGreen,
        transitionDuration: 0.3,
        className:
          "w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 group-hover:brightness-110",
      },
    };

    // Title wavy letter configurations
    const titleWavyConfigs: Record<string, TitleWavyConfig> = {
      "Our Journey & Impact": {
        text: "Our Journey & Impact",
        wavyLetters: [
          { letter: "O", position: 0 },
          { letter: "J", position: 10 },
          { letter: "I", position: 22 },
        ],
      },
      "Governance & Research": {
        text: "Governance & Research",
        wavyLetters: [
          { letter: "G", position: 0 },
          { letter: "R", position: 16 },
        ],
      },
      "Workshops & Education": {
        text: "Workshops & Education",
        wavyLetters: [
          { letter: "W", position: 0 },
          { letter: "E", position: 12 },
        ],
      },
    };

    // Layout configurations
    const layoutConfig: ResearchLayoutConfig = {
      desktop: {
        container: {
          className: "w-full text-white",
          backgroundColor: colors.dark.background,
        },
        grid: {
          className: "hidden lg:block",
        },
        imageCell: {
          className: "relative overflow-hidden",
        },
        contentCell: {
          className:
            "space-y-4 sm:space-y-5 md:space-y-6 px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-10 flex flex-col justify-center",
        },
        iconCell: {
          className: "relative overflow-hidden",
        },
      },
      mobile: {
        container: {
          className: "w-full text-white",
          backgroundColor: colors.dark.background,
        },
        grid: {
          className: "w-full overflow-x-auto",
        },
        imageCell: {
          className: "border-b border-white",
        },
        contentCell: {
          className: "col-span-3 p-4 sm:p-6",
        },
        navigationCell: {
          className: "col-span-3 grid grid-cols-3",
        },
      },
    };

    return {
      images,
      backgroundImages,
      textConfig,
      buttonConfig,
      arrowConfig,
      titleWavyConfigs,
      layoutConfig,
    };
  }, []);

  return config;
};

export default useResearchConfig;
