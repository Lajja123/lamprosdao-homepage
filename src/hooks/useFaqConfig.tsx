import { useMemo } from "react";
import top from "@/assests/Faq/top.svg";
import bottom from "@/assests/Faq/bottom.svg";
import question from "@/assests/Faq/question.svg";
import clip from "@/assests/Faq/clip.svg";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import type { StaticImageData } from "next/image";
import type {
  FaqImageConfig,
  FaqTextConfig,
  FaqArrowConfig,
  FaqLayoutConfig,
} from "@/types/home/faq";
import { colors } from "@/theme";

// FAQ component configuration hook
export const useFaqConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, FaqImageConfig> = {
      question: {
        src: question,
        alt: "question mark",
        className: "w-10 h-10 object-contain",
        width: 40,
        height: 40,
      },
      questionDesktop: {
        src: question,
        alt: "question mark",
        width: 200,
        height: 200,
      },
      clip: {
        src: clip,
        alt: "clip",
        className: "w-10 h-10 object-contain",
        width: 40,
        height: 40,
      },
      clipDesktop: {
        src: clip,
        alt: "clip",
        className: "w-[30%] sm:w-[40%] md:w-[50%] mx-auto clip-image",
        width: 200,
        height: 200,
      },
      expandIcon: {
        src: bottom,
        alt: "expand item",
        width: 24,
        height: 24,
      },
      collapseIcon: {
        src: top,
        alt: "collapse item",
        width: 24,
        height: 24,
      },
    };

    // Background image configurations
    const backgroundImages: Record<string, StaticImageData> = {
      arrowBg: bgImage2,
    };

    // Text configurations
    const textConfig: FaqTextConfig = {
      titleColor: colors.text.primary,
      questionColor: colors.text.primary,
      answerColor: colors.text.primary,
      numberColor: colors.text.primary,
      titleClassName: "font-ppmori uppercase leading-tight",
      questionClassName: "text-xs sm:text-sm md:text-base lg:text-lg",
      answerClassName: "text-xs sm:text-sm md:text-base lg:text-lg",
      numberClassName: "font-psygen text-xs sm:text-sm md:text-base lg:text-lg",
    };

    // Arrow configurations
    const arrowConfig: {
      desktop: FaqArrowConfig;
      mobile: FaqArrowConfig;
    } = {
      desktop: {
        size: 70,
        hoverScale: 1.2,
        hoverColor: colors.accent.lightGreen,
        transitionDuration: 0.3,
        className:
          "w-[30px] h-[30px] sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] group-hover:brightness-110",
      },
      mobile: {
        size: 30,
        hoverScale: 1.15,
        hoverColor: colors.accent.lightGreen,
        transitionDuration: 0.3,
        className:
          "w-8 h-6 sm:w-8 sm:h-8 transition-all duration-300 group-hover:brightness-110",
      },
    };

    // Layout configurations
    const layoutConfig: FaqLayoutConfig = {
      desktop: {
        grid: {
          className:
            "grid grid-cols-10 border border-black min-w-[640px] md:min-w-[768px] lg:min-w-[1024px]",
        },
        numberCell: {
          className:
            "col-span-2 sm:col-span-1 border-b border-r md:border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center",
        },
        contentCell: {
          className:
            "col-span-6 sm:col-span-8 border-b md:border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center min-w-0",
        },
        iconCell: {
          className:
            "col-span-2 sm:col-span-1 border-b md:border border-black p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center cursor-pointer group hover:bg-opacity-10 transition-all duration-300",
        },
        headerCell: {
          className:
            "row-start-4 flex w-full justify-center items-center border border-black p-2 sm:p-4 question-mark",
          backgroundColor: colors.background.light,
        },
        titleCell: {
          className:
            "col-span-4 row-start-4 border border-black flex justify-center items-center p-2 sm:p-4 faq-title",
        },
        arrowCell: {
          className: "relative border border-black",
        },
        clipCell: {
          className:
            "col-span-3 col-start-7 row-start-4 border border-black w-full flex justify-center items-center p-2 sm:p-4",
        },
      },
      mobile: {
        grid: {
          className: "grid grid-cols-10 border border-black min-w-[320px]",
        },
        headerRow: {
          className: "col-span-10 grid grid-cols-3 border-b border-black",
        },
        titleCell: {
          className:
            "col-span-2 border-r border-black flex justify-center items-center p-2",
        },
        questionCell: {
          className:
            "col-span-1 flex w-full justify-center items-center p-4 question-mark",
          backgroundColor: colors.background.light,
        },
        numberCell: {
          className:
            "col-span-2 sm:col-span-1 border-b border-r md:border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center",
        },
        contentCell: {
          className:
            "col-span-6 sm:col-span-8 border-b md:border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center min-w-0",
        },
        iconCell: {
          className:
            "col-span-2 sm:col-span-1 border-b md:border border-black p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center cursor-pointer group hover:bg-opacity-10 transition-all duration-300",
        },
        footerRow: {
          className: "col-span-10 grid grid-cols-3 border-t border-black",
        },
        arrowCell: {
          className: "col-span-1 relative border-r border-black",
        },
        clipCell: {
          className:
            "col-span-1 border-r border-black flex justify-center items-center p-4",
        },
      },
    };

    return {
      images,
      backgroundImages,
      textConfig,
      arrowConfig,
      layoutConfig,
    };
  }, []);

  return config;
};

export default useFaqConfig;
