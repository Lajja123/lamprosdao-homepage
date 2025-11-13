import { useMemo } from "react";
import clip from "@/assests/Contributions/clip.png";
import clip2 from "@/assests/Contributions/clip2.png";
import bgImage from "@/assests/common/bg.png";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import contributionsContent from "@/data/contributionsContent.json";
import type {
  ContributionsHeroImageConfig,
  ContributionsHeroTextConfig,
  ContributionsHeroLayoutConfig,
} from "@/types/contributions/hero";
import { colors } from "@/theme";
import { StaticImageData } from "next/image";

export const useContributionsHeroConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, ContributionsHeroImageConfig> = {
      clip: {
        src: clip,
        alt: "clip",
        className: "relative w-full h-full object-contain p-2 md:p-4 mx-auto",
        quality: 100,
      },
      clip2: {
        src: clip2,
        alt: "Metallic sculpture",
        className: "w-full mx-auto p-5",
        quality: 100,
      },
      clip2Desktop: {
        src: clip2,
        alt: "Metallic sculpture",
        className: "w-1/2 mx-auto",
        quality: 100,
      },

      arbitrum: {
        src: arbitrum,
        alt: "arbitrum",
        className: "w-6 md:w-10",
        quality: 100,
      },
      arbitrumDesktop: {
        src: arbitrum,
        alt: "arbitrum",
        className: "",
        quality: 100,
      },
      optimism: {
        src: op,
        alt: "optimism",
        className: "w-6 md:w-10",
        quality: 100,
      },
      optimismDesktop: {
        src: op,
        alt: "optimism",
        className: "",
        quality: 100,
      },
    };

    const backgroundImages: Record<string, StaticImageData> = {
      clipImage: bgImage,
      arrowBg: bgImage,
    };
    // Text configuration
    const textConfig: ContributionsHeroTextConfig = {
      intro: {
        paragraphs: [
          "At Lampros DAO, we actively contribute to both governance and research, ensuring that decentralized ecosystems remain transparent, efficient, and community-driven. Through governance, we engage in DAO discussions, voting, and proposal-making, helping shape the direction of decentralized decision-making. Our research efforts focus on analyzing governance structures, incentive programs, and power distribution to provide data-backed insights that drive informed decisions.",
          "By working across multiple DAOs, we aim to improve governance participation, develop analytical tools, and contribute to ecosystem growth. Our work helps communities navigate decentralization, ensuring long-term sustainability and inclusivity.",
        ],
        variant: "body2",
        color: colors.text.primary,
        weight: "semibold",
        className: "tracking-wider font-ppmori text-sm md:text-base",
      },
      chainButtons: {
        arbitrum: {
          label: "Arbitrum",
          variant: "subtitle2",
          color: colors.text.primary,
          weight: "semibold",
          className: "font-ppmori text-sm md:text-base",
        },
        optimism: {
          label: "Optimism",
          variant: "subtitle2",
          color: colors.text.primary,
          weight: "semibold",
          className: "font-ppmori text-sm md:text-base",
        },
      },
    };

    // Layout configurations
    const layoutConfig: ContributionsHeroLayoutConfig = {
      mobile: {
        grid: {
          className: "grid grid-cols-6",
        },
        clipImageCell: {
          className: "border border-black relative",
        },
        clip2ImageCell: {
          className:
            "border border-black bg-[#DFF48D] p-4 md:p-6 flex items-center justify-center",
          backgroundColor: colors.accent.yellow,
        },
        textCell: {
          className: "border border-black p-4 md:p-6",
        },
        chainSelection: {
          container: {
            className: "bg-[#1A1A1A]",
            backgroundColor: colors.primary.dark,
          },
          buttonContainer: {
            className: "flex flex-row justify-center  items-center ",
          },
          button: {
            baseClassName:
              "rounded-full py-2 px-6 flex items-center justify-center gap-4 shadow-lg w-full cursor-pointer transition-all duration-300",
            activeClassName: "bg-[#DFCDF2] hover:scale-105 ",
            inactiveClassName:
              "bg-gray-200 hover:bg-[#DFCDF2] hover:scale-105  ",
          },
        },
        dynamicContent: {
          titleCell: {
            className:
              "border border-black p-5 md:p-6 flex items-center justify-center",
          },
          subtitleCell: {
            className:
              "border border-black bg-[#CBE9FF] p-5 md:p-6 flex items-center justify-center",
            backgroundColor: colors.background.light,
          },
          descriptionCell: {
            className:
              "border border-black p-6 md:p-6 flex items-center justify-center",
          },
        },
      },
      desktop: {
        grid: {
          className: "hidden lg:grid lg:grid-cols-10",
        },
        clipImageCell: {
          className: "relative border border-black",
        },
        textCell: {
          colSpan: 5,
          className: "p-10",
        },
        clip2ImageCell: {
          colSpan: 5,
          colStart: 6,
          className: "bg-[#DFF48D] p-5 flex items-center justify-center",
          backgroundColor: colors.accent.yellow,
        },
        chainSelection: {
          grid: {
            className: "hidden lg:grid lg:grid-cols-10",
            backgroundColor: colors.primary.dark,
          },
          emptyCell: {
            className: "row-start-3 bg-[#1A1A1A]",
          },
          arbitrumButtonCell: {
            colSpan: 4,
            rowStart: 3,
            className:
              "col-span-4 row-start-3 border border-white bg-[#1A1A1A] flex items-center justify-center p-2",
          },
          optimismButtonCell: {
            colSpan: 4,
            colStart: 6,
            rowStart: 3,
            className:
              "col-span-4 col-start-6 row-start-3 border border-white bg-[#1A1A1A] flex items-center justify-center p-2",
          },
          button: {
            baseClassName:
              " rounded-full my-5 p-5 flex items-center justify-center gap-4 shadow-lg w-full mx-10 cursor-pointer transition-all duration-300",
            activeClassName: "bg-[#DFCDF2] hover:scale-105 ",
            inactiveClassName:
              "bg-gray-200 hover:bg-[#DFCDF2] hover:scale-105  ",
          },
        },
        dynamicContent: {
          grid: {
            className: "hidden lg:grid lg:grid-cols-10",
          },
          emptyCell1: {
            className: "",
          },
          titleCell: {
            colSpan: 8,
            className:
              "col-span-8 border border-black flex items-center justify-center p-10",
          },
          emptyCell2: {
            colStart: 10,
            className: "",
          },
          emptyCell3: {
            rowStart: 2,
            className: "",
          },
          subtitleCell: {
            colSpan: 8,
            rowStart: 2,
            className:
              "col-span-8 row-start-2 border border-black bg-[#CBE9FF] flex items-center justify-center p-5",
            backgroundColor: colors.background.light,
          },
          emptyCell4: {
            colStart: 10,
            rowStart: 2,
            className: "",
          },
          descriptionCell: {
            colSpan: 10,
            rowStart: 3,
            className:
              "col-span-10 row-start-3 border border-black flex items-center justify-center p-5",
          },
        },
      },
    };

    return {
      images,
      textConfig,
      layoutConfig,
      contributionsContent,
      backgroundImages,
    };
  }, []);

  return config;
};

export default useContributionsHeroConfig;
