import { useMemo } from "react";
import about from "@/assests/AboutUs/about.png";
import vision from "@/assests/AboutUs/vision.png";
import mission from "@/assests/AboutUs/mission.png";
import type {
  AboutHeroImageConfig,
  AboutHeroTextConfig,
  AboutHeroVisionMissionConfig,
  AboutHeroLayoutConfig,
} from "@/types/about/hero";
import { colors } from "@/theme";

export const useAboutHeroConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, AboutHeroImageConfig> = {
      about: {
        src: about,
        alt: "Metallic sculpture",
        className:
          "w-[80%] h-auto mx-auto max-h-[400px] lg:max-h-none lg:h-full object-contain",
        quality: 100,
        width: 800,
        height: 800,
      },
      vision: {
        src: vision,
        alt: "Vision illustration",
        quality: 100,
        className: "object-contain w-full mx-auto",
        width: 600,
        height: 600,
      },
      visionDesktop: {
        src: vision,
        alt: "Vision illustration",
        quality: 100,
        className: "w-16 h-16 md:w-full md:h-100 mx-auto object-contain",
        width: 600,
        height: 600,
      },
      mission: {
        src: mission,
        alt: "Mission illustration",
        quality: 100,
        className: "w-full object-contain",
        width: 600,
        height: 600,
      },
      missionDesktop: {
        src: mission,
        alt: "Mission illustration",
        quality: 100,
        className: "w-16 h-16 md:w-full md:h-100 mx-auto object-contain",
        width: 600,
        height: 600,
      },
    };

    // Text configuration
    const textConfig: AboutHeroTextConfig = {
      title: {
        text: "About US",
        wavyLetter: {
          letter: "U",
          position: 6,
        },
        variant: "h1",
        color: colors.text.primary,
        weight: "semibold",
        align: "left",
        className: "font-ppmori uppercase leading-tight md:hidden block",
      },
      paragraphs: [
        "Lampros DAO was founded by a group of individuals with a shared vision for governance and decentralization. Our north star is to support and grow Ethereum, and we contribute to this goal by actively participating in various Layer 2s.",
        "We believe blockchain is not just about technology, it's about the people, communities, and ideas that drive it forward. Our ethos is rooted in fostering growth, both for individuals and the ecosystem, ensuring that governance, research, and education remain accessible to all. Through proposal discussions, governance research, and ecosystem-building, we help shape the future of decentralized networks.",
        "At Lampros DAO, we are supporting a movement, a movement where public goods, developer support, and open collaboration take centre stage. We envision a future where blockchain technology seamlessly integrates into everyday life, making Web3 more inclusive, sustainable, and impactful.",
        "We are building on this foundation. Join us as we shape the future of decentralized governance and Ethereum's Layer 2 ecosystems.",
      ],
      variant: "body2",
      color: colors.text.primary,
      weight: "semibold",
      className:
        "tracking-wider font-ppmori leading-1.5 mx-auto px-2 md:px-6 lg:px-10 py-4 md:py-6 lg:py-10 text-sm md:text-base lg:text-lg",
    };

    // Vision & Mission configuration
    const visionMissionConfig: AboutHeroVisionMissionConfig = {
      vision: {
        title: {
          text: "vision",
          wavyLetters: [
            { letter: "i", position: 1 },
            { letter: "i", position: 4 },
          ],
        },
        description:
          "To be the global nexus where blockchain technology seamlessly integrates into everyday life, creating a decentralized and empowered future for all.",
      },
      mission: {
        title: {
          text: "mission",
          wavyLetters: [
            { letter: "i", position: 1 },
            { letter: "i", position: 5 },
          ],
        },
        description:
          "Lampros DAO is dedicated to cultivating trailblazing web3 leaders, amplifying open-source breakthroughs across multiple blockchain terrains, and building a community bound by shared growth and decentralized principles.",
      },
      titleColor: colors.accent.offset,
      descriptionColor: colors.text.white,
      titleClassName: "uppercase font-csbohemian tracking-wider leading-[0.95]",
      descriptionClassName:
        "tracking-wider font-ppmori text-sm md:text-base leading-1.5",
    };

    // Layout configurations
    const layoutConfig: AboutHeroLayoutConfig = {
      main: {
        container: {
          className: "flex flex-col lg:grid lg:grid-cols-10 lg:grid-rows-6",
        },
        imageSection: {
          className:
            "lg:col-span-4 lg:row-span-6 w-full p-4 md:p-6 lg:p-10 border border-black order-1 lg:order-1",
          backgroundColor: colors.accent.lightGreen,
        },
        textSection: {
          className:
            "lg:col-span-6 lg:row-span-6 lg:col-start-5 border border-black p-4 md:p-6 lg:p-10 flex flex-col justify-center order-2 lg:order-2",
        },
      },
      visionMission: {
        container: {
          className: "",
          backgroundColor: colors.primary.dark,
        },
        mobile: {
          container: {
            className: "flex flex-col lg:hidden",
          },
          section: {
            className: "flex flex-col",
          },
          titleCell: {
            className:
              "border border-[#FFFFFF] p-4 flex items-center justify-center",
          },
          imageCell: {
            className:
              "border border-[#FFFFFF] p-4 flex items-center justify-center w-full",
          },
          descriptionCell: {
            className:
              "border border-[#FFFFFF] p-4 flex items-center justify-center",
          },
        },
        desktop: {
          grid: {
            className: "hidden lg:grid lg:grid-cols-10 lg:grid-rows-6",
          },
          decorativeCell: {
            className: "border border-white",
            backgroundColor: colors.accent.lightPurple,
          },
          titleCell: {
            className:
              "p-5 border border-white flex items-center justify-center",
          },
          imageCell: {
            className:
              "border border-white p-5 w-full flex items-center justify-center",
          },
          descriptionCell: {
            className: "flex items-center justify-center",
          },
          emptyCell: {
            className: "border border-white",
          },
          missionTitleCell: {
            className: "border border-white flex items-center justify-center",
          },
          missionDescriptionCell: {
            className: "flex items-center justify-center",
          },
        },
      },
    };

    return {
      images,
      textConfig,
      visionMissionConfig,
      layoutConfig,
    };
  }, []);

  return config;
};

export default useAboutHeroConfig;
