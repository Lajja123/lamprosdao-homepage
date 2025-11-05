import { useMemo } from "react";
import ethos from "@/assests/AboutUs/ethos.png";
import ethosContent from "@/data/ethosContent.json";
import type {
  EthosImageConfig,
  EthosItem,
  EthosTextConfig,
  EthosLayoutConfig,
} from "@/types/about/ethos";
import { colors } from "@/theme";

// Ethos component configuration hook
export const useEthosConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, EthosImageConfig> = {
      ethos: {
        src: ethos,
        alt: "Metallic sculpture",
        className: "w-[150px]",
        width: 300,
        height: 300,
      },
      ethosDesktop: {
        src: ethos,
        alt: "Metallic sculpture",
        className: "w-[300px]",
        width: 600,
        height: 600,
      },
    };

    // Text configuration
    const textConfig: EthosTextConfig = {
      header: {
        title: {
          firstLine: {
            text: "OUR",
            wavyLetters: [{ letter: "U", position: 1 }],
          },
          secondLine: {
            text: "ETHOS",
            wavyLetters: [{ letter: "H", position: 2 }],
          },
        },
        variant: "h2",
        color: colors.text.primary,
        weight: "medium",
        className: " leading-none font-csbohemian tracking-wider text-center",
      },
      itemTitle: {
        variant: "h6",
        color: colors.text.primary,
        weight: "semibold",
        className: "uppercase tracking-wider font-ppmori text-sm md:text-base",
      },
      itemNumber: {
        variant: "h2",
        color: colors.text.primary,
        weight: "normal",
        className: "font-psygen text-2xl md:text-3xl",
      },
      itemContent: {
        variant: "h6",
        color: colors.text.primary,
        weight: "medium",
        className: "font-ppmori text-sm md:text-base leading-relaxed",
      },
    };

    // Layout configurations
    const layoutConfig: EthosLayoutConfig = {
      mobile: {
        header: {
          container: {
            className: "p-4 md:p-6 border border-black",
            backgroundColor: colors.background.light,
          },
          imageContainer: {
            className: "",
          },
          titleContainer: {
            className: "flex items-center justify-around",
          },
        },
        item: {
          container: {
            className: "border border-black",
          },
          header: {
            className: "flex",
          },
          titleCell: {
            className: "flex-1 p-4 md:p-6",
          },
          numberCell: {
            className:
              "w-16 md:w-20 flex items-center justify-center border-l border-black p-4 md:p-6",
            backgroundColor: colors.accent.yellow,
          },
          contentCell: {
            className: "p-4 md:p-6 border-t border-black",
          },
        },
      },
      desktop: {
        grid: {
          className: "hidden lg:grid lg:grid-cols-10",
        },
        header: {
          container: {
            className:
              "col-span-5 row-span-3 w-full p-5 border border-black flex flex-row justify-center gap-3 items-center",
            backgroundColor: colors.background.light,
          },
          titleContainer: {
            className: "",
          },
          imageContainer: {
            className: "",
          },
        },
        item: {
          titleCell: {
            className:
              "border border-black px-15 py-10 flex items-center justify-start",
          },
          numberCell: {
            className: "flex items-center justify-center border border-black",
            backgroundColor: colors.accent.yellow,
          },
          contentCell: {
            className:
              "border border-black flex items-center justify-start px-15 py-10",
          },
        },
      },
    };

    // Desktop layout positions for each item
    const desktopItemPositions = [
      {
        // Item 0
        title: { colSpan: 4, rowStart: 1 },
        number: { colStart: 10, rowStart: 1 },
        content: { colSpan: 5, rowSpan: 2, colStart: 6, rowStart: 2 },
      },
      {
        // Item 1
        number: { colStart: 5, rowStart: 4 },
        title: { colSpan: 4, colStart: 1, rowStart: 4 },
        content: { colSpan: 5, rowSpan: 2, colStart: 1, rowStart: 5 },
      },
      {
        // Item 2
        title: { colSpan: 4, colStart: 6, rowStart: 4 },
        number: { colStart: 10, rowStart: 4 },
        content: { colSpan: 5, rowSpan: 2, colStart: 6, rowStart: 5 },
      },
      {
        // Item 3
        title: { colSpan: 4, rowStart: 7 },
        number: { colStart: 5, rowStart: 7 },
        content: { colSpan: 5, rowSpan: 2, colStart: 1, rowStart: 8 },
      },
      {
        // Item 4
        title: { colSpan: 4, colStart: 6, rowStart: 7 },
        number: { colStart: 10, rowStart: 7 },
        content: { colSpan: 5, colStart: 6 },
      },
    ];

    return {
      ethosData: ethosContent.ethosItems as EthosItem[],
      images,
      textConfig,
      layoutConfig,
      desktopItemPositions,
    };
  }, []);

  return config;
};

export default useEthosConfig;
