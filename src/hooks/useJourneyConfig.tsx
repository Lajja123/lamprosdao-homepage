import { useMemo } from "react";
import web12 from "@/assests/AboutUs/12.png";
import web34 from "@/assests/AboutUs/34.png";
import web56 from "@/assests/AboutUs/56.png";
import web78 from "@/assests/AboutUs/78.png";
import journeyContent from "@/data/journeyContent.json";
import type {
  JourneyImageConfig,
  JourneyItem,
  JourneyTextConfig,
  JourneyLayoutConfig,
} from "@/types/about/journey";
import { colors } from "@/theme";

// Color mapping for journey items
const colorMap: Record<string, string> = {
  yellow: colors.accent.yellow,
  lightBlue: colors.background.light,
  lightPurple: colors.accent.lightPurple,
  orange: colors.accent.orange,
};

// Journey component configuration hook
export const useJourneyConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, JourneyImageConfig> = {
      web12: {
        src: web12,
        alt: "Metallic sculpture",
        className: "w-16 h-16 md:w-full md:h-80 mx-auto object-contain",
        width: 400,
        height: 320,
      },
      web34: {
        src: web34,
        alt: "Metallic sculpture",
        className: "w-16 h-16 md:w-full md:h-80 mx-auto object-contain",
        width: 400,
        height: 320,
      },
      web56: {
        src: web56,
        alt: "Metallic sculpture",
        className: "w-16 h-16 md:w-full md:h-80 mx-auto object-contain",
        width: 400,
        height: 320,
      },
      web78: {
        src: web78,
        alt: "Metallic sculpture",
        className: "w-16 h-16 md:w-full md:h-80 mx-auto object-contain",
        width: 400,
        height: 320,
      },
    };

    // Transform journey data with color mapping
    const journeyData: JourneyItem[] = journeyContent.journeyItems.map(
      (item) => ({
        ...item,
        color: colorMap[item.color] || item.color,
      })
    );

    // Text configuration
    const textConfig: JourneyTextConfig = {
      header: {
        title: {
          text: "Our Web3 Journey",
          wavyLetters: [
            { letter: "U", position: 1 },
            { letter: "W", position: 5 },
            { letter: "J", position: 10 },
            { letter: "n", position: 14 },
            { letter: "y", position: 16 },
          ],
        },
        variant: "h2",
        color: colors.text.white,
        className: "uppercase font-ppmori tracking-wider",
      },
      itemDate: {
        variant: "h5",
        color: colors.text.white,
        weight: "bold",
        className: "uppercase tracking-wider font-ppmori",
      },
      itemTitle: {
        variant: "body1",
        color: colors.text.white,
        weight: "light",
        className: "tracking-wide font-ppmori",
      },
      itemNumber: {
        variant: "h2",
        color: colors.text.primary,
        weight: "normal",
        className: "font-psygen",
      },
    };

    // Layout configurations
    const layoutConfig: JourneyLayoutConfig = {
      mobile: {
        container: {
          className: "lg:hidden",
          backgroundColor: colors.primary.dark,
        },
        header: {
          className: "border border-white p-8 md:p-6",
        },
        item: {
          container: {
            className: "border border-white",
          },
          contentCell: {
            className: "flex-1 p-4 md:p-6",
            backgroundColor: "#222222",
          },
          numberCell: {
            className:
              "w-16 md:w-20 flex items-center justify-center border-l border-white p-4 md:p-6",
          },
        },
      },
      desktop: {
        grid: {
          className: "hidden lg:grid lg:grid-cols-10 lg:grid-rows-9",
          backgroundColor: colors.primary.dark,
        },
        header: {
          titleCell: {
            className:
              "border border-white flex items-center justify-center p-5",
          },
          emptyCell: {
            className: "border border-white",
          },
        },
        item: {
          imageCell: {
            className:
              "border border-white flex items-center justify-center p-5",
          },
          contentCell: {
            className:
              "border border-white flex flex-col justify-center gap-3 items-start px-15 py-5",
          },
          numberCell: {
            className: "border border-white flex items-center justify-center",
          },
        },
      },
    };

    // Desktop layout positions for each item
    const desktopItemPositions = [
      {
        // Item 0
        image: { colSpan: 4, rowSpan: 2, colStart: 2, rowStart: 2 },
        content: { colSpan: 3, colStart: 6, rowStart: 2 },
        number: { colStart: 9, rowStart: 2 },
      },
      {
        // Item 1
        number: { colStart: 6, rowStart: 3 },
        content: { colSpan: 3, colStart: 7, rowStart: 3 },
      },
      {
        // Item 2
        number: { colStart: 2, rowStart: 4 },
        content: { colSpan: 3, colStart: 3, rowStart: 4 },
        image: { colSpan: 4, rowSpan: 2, colStart: 6, rowStart: 4 },
      },
      {
        // Item 3
        content: { colSpan: 3, colStart: 2, rowStart: 5 },
        number: { colStart: 5, rowStart: 5 },
      },
      {
        // Item 4
        image: { colSpan: 4, rowSpan: 2, colStart: 2, rowStart: 6 },
        content: { colSpan: 3, colStart: 6, rowStart: 6 },
        number: { colStart: 9, rowStart: 6 },
      },
      {
        // Item 5
        number: { colStart: 6, rowStart: 7 },
        content: { colSpan: 3, colStart: 7, rowStart: 7 },
      },
      {
        // Item 6
        image: { colSpan: 4, rowSpan: 2, colStart: 6, rowStart: 8 },
        number: { colStart: 2, rowStart: 8 },
        content: { colSpan: 3, colStart: 3, rowStart: 8 },
      },
      {
        // Item 7
        content: { colSpan: 3, colStart: 2, rowStart: 9 },
        number: { colStart: 5, rowStart: 9 },
      },
    ];

    return {
      journeyData,
      images,
      textConfig,
      layoutConfig,
      desktopItemPositions,
    };
  }, []);

  return config;
};

export default useJourneyConfig;
