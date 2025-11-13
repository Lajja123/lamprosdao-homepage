import { useMemo } from "react";
import hand from "@/assests/HeroSection2/hand.svg";
import hugeicon from "@/assests/HeroSection2/hugeicons.svg";
import bgImage from "@/assests/common/bg.png";
import clip from "@/assests/HeroSection2/clip.png";
import arrow from "@/assests/HeroSection2/arrow.svg";
import mobileBgImage from "@/assests/HeroSection2/m-bg.png";
import mobileArrow from "@/assests/HeroSection2/m-arrow.svg";
import type { StaticImageData } from "next/image";
import type {
  Section2ImageConfig,
  Section2TextConfig,
  Section2LayoutConfig,
} from "@/types/home/section2";
import { colors, spacing } from "@/theme";

// Section2 component configuration hook
export const useSection2Config = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, Section2ImageConfig> = {
      hand: {
        src: hand,
        alt: "hand",
        className: "mx-auto w-full h-full object-contain p-5",
        width: 500,
        height: 500,
      },
      hugeicon: {
        src: hugeicon,
        alt: "hugeicon",
        className: "relative mx-auto w-full h-full object-contain p-5",
        width: 500,
        height: 500,
      },
      clip: {
        src: clip,
        alt: "clip",
        className: "w-full h-full object-contain",
        quality: 85,
        width: 800,
        height: 800,
      },
      arrow: {
        src: arrow,
        alt: "arrow",
        className: "relative w-full h-full object-contain p-2 mx-auto",
        width: 300,
        height: 300,
      },
      mobileArrow: {
        src: mobileArrow,
        alt: "arrow",
        className: "relative mx-auto object-contain p-5 flex justify-center",
        width: 100,
      },
    };

    // Background image configurations
    const backgroundImages: Record<string, StaticImageData> = {
      arrowBg: bgImage,
      hugeiconBg: bgImage,
      mobileBg: mobileBgImage,
    };

    // Text configuration
    const textConfig: Section2TextConfig = {
      paragraphs: [
        "In the vibrant world of blockchain, Lampros DAO stands as a beacon, illuminating the path for innovators, dreamers, and builders. Founded with a profound vision to seamlessly merge blockchain technology with mainstream applications, we've steadily grown into a robust community hub.",
        "Our ethos is rooted in fostering growth - both of the individual and the collective. With each project we support, every developer we guide, and each event we host, we inch closer to a future where blockchain isn't just a buzzword, but an integral part of our digital tapestry.",
      ],
      variant: "subtitle2",
      color: "primary",
      weight: "bold",
      className: "tracking-wide font-ppmori max-w-[800px]",
    };

    // Layout configurations
    const layoutConfig: Section2LayoutConfig = {
      desktop: {
        grid: {
          className: "hidden lg:block",
        },
        handCell: {
          className: "bg-[#D0FFAC] flex items-center justify-center",
          backgroundColor: colors.accent.lightGreen,
        },
        contentCell: {
          className: "flex items-center justify-between w-full h-full",
        },
        clipContainer: {
          className:
            "flex-shrink-0 w-1/3 h-full flex items-center justify-center",
        },
        textContainer: {
          className: "flex-1 w-2/3 pl-8 space-y-4 lg:space-y-8",
        },
        arrowCell: {
          className: "relative",
        },
        iconCell: {
          className: "relative",
        },
      },
      mobile: {
        grid: {
          className: "grid grid-cols-5 grid-rows-10",
        },
        arrowCell: {
          className:
            "col-span-2 border border-black relative flex items-center justify-center",
        },
        clipContainer: {
          className: "w-full flex items-center justify-center",
        },
        textContainer: {
          className: "flex-1 px-5 py-5",
        },
        iconCell: {
          className: "col-start-1 row-start-6 border border-black relative",
        },
        handCell: {
          className: "bg-[#D0FFAC] flex items-center justify-center",
          backgroundColor: colors.accent.lightGreen,
        },
      },
    };

    return {
      images,
      backgroundImages,
      textConfig,
      layoutConfig,
    };
  }, []);

  return config;
};

export default useSection2Config;
