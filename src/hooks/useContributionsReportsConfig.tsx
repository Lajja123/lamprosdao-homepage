import { useMemo } from "react";
import bgImage from "@/assests/common/bg.png";
import contributionsData from "@/data/contributionsContent.json";
import type {
  ContributionsReportsImageConfig,
  ContributionsReportsTextConfig,
  ContributionsReportsLayoutConfig,
} from "@/types/contributions/reports";
import { colors } from "@/theme";
import { StaticImageData } from "next/image";

export const useContributionsReportsConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const backgroundImages: Record<string, StaticImageData> = {
      reportsImage: bgImage,
    };

    // Text configuration
    const textConfig: ContributionsReportsTextConfig = {
      header: {
        variant: "h4",
        color: "yellow",
        weight: "semibold",
        align: "center",
        className: "uppercase tracking-wider font-ppmori",
      },
      headerDesktop: {
        variant: "subtitle1",
        color: "yellow",
        weight: "semibold",
        className: "uppercase tracking-wider font-ppmori",
      },
      itemNumber: {
        variant: "h5",
        color: "white",
        weight: "bold",
        className:
          "uppercase tracking-wider font-psygen z-10 text-lg md:text-xl",
      },
      itemNumberDesktop: {
        variant: "h5",
        color: "white",
        weight: "bold",
        className: "uppercase tracking-wider font-psygen z-10",
      },
      itemTitle: {
        variant: "h5",
        color: "white",
        weight: "semibold",
        className: "uppercase tracking-wider font-ppmori text-sm md:text-base",
      },
      itemTitleDesktop: {
        variant: "h5",
        color: "white",
        weight: "semibold",
        className: "uppercase tracking-wider font-ppmori",
      },
      itemDescription: {
        variant: "body2",
        color: "white",
        weight: "normal",
        className: "tracking-wider font-ppmori text-sm md:text-base mb-6",
      },
      itemDescriptionDesktop: {
        variant: "body2",
        color: "white",
        weight: "normal",
        className: "tracking-wider font-ppmori max-w-[600px]",
      },
      seeMoreButton: {
        label: "See More",
        color: "#D0FFAC",
        textColor: "#0B0B0B",
      },
    };

    // Layout configurations
    const layoutConfig: ContributionsReportsLayoutConfig = {
      mobile: {
        container: {
          className: "lg:hidden bg-[#1A1A1A]",
          backgroundColor: colors.primary.dark,
        },
        header: {
          className:
            "border-b border-white p-4 md:p-6 flex items-center justify-center",
        },
        item: {
          container: {
            className: "border border-white",
          },
          headerRow: {
            className: "flex items-stretch bg-[#1A1A1A] border-b border-white",
          },
          numberCell: {
            className:
              "w-14 md:w-16 p-4 border-r border-white relative flex items-center justify-center",
          },
          titleCell: {
            className: "flex-1 p-4",
          },
          body: {
            className: "p-4 md:p-6 bg-[#1A1A1A] border-t border-white",
          },
          button: {
            className: "p-3",
          },
        },
        footer: {
          className:
            "border-t border-white p-6 md:p-6 flex items-center justify-center bg-[#000000]",
          backgroundColor: colors.primary.black,
        },
      },
      desktop: {
        grid: {
          className: "hidden lg:grid lg:grid-cols-10 bg-[#1A1A1A]",
          backgroundColor: colors.primary.dark,
        },
        header: {
          emptyCell1: {
            className: "",
          },
          titleCell: {
            colSpan: 8,
            className:
              "col-span-8 border-b border-r border-l border-white flex items-center justify-center p-10",
          },
          emptyCell2: {
            colStart: 10,
            className: "",
          },
        },
        item: {
          numberCell: {
            className:
              "border border-white relative flex items-center justify-center",
          },
          titleCell: {
            colSpan: 4,
            className:
              "col-span-4 border border-white flex items-center justify-start p-10",
          },
          spacerCell: {
            className: "",
          },
          descriptionCell: {
            colSpan: 4,
            className:
              "col-span-4 border-r border-white p-10 flex flex-col gap-6",
          },
          descriptionSpacerCell: {
            colStart: 6,
            className: "",
          },
          button: {
            className: "",
          },
        },
        footer: {
          colSpan: 10,
          className:
            "col-span-10 border-t border-white p-10 flex items-center justify-center bg-[#000000]",
          backgroundColor: colors.primary.black,
        },
      },
    };

    return {
      backgroundImages,
      textConfig,
      layoutConfig,
      contributionsData,
    };
  }, []);

  return config;
};

export default useContributionsReportsConfig;
