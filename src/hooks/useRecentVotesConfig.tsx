import { useMemo } from "react";
import vote1 from "@/assests/Governance/Vote.svg";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import uniswap from "@/assests/Governance/uniswap.svg";
import superfluid from "@/assests/Governance/superfluid_green.svg";
import scroll from "@/assests/Governance/scroll.png";
import bgImage1 from "@/assests/Governance/reportbg.png";
import linkLight from "@/assests/Governance/link-light.png";
import voterIcon from "@/assests/Governance/voter.svg";
import type {
  RecentVotesImageConfig,
  RecentVotesTextConfig,
  RecentVotesLayoutConfig,
  RecentVotesConfigHookReturn,
} from "@/types/governance/recentVotes";
import type { Protocol } from "@/types/governance";
import { colors } from "@/theme";

export const useRecentVotesConfig = (): RecentVotesConfigHookReturn => {
  const config = useMemo(() => {
    // Image configurations
    const images: RecentVotesImageConfig = {
      voteIcon: {
        src: vote1,
        alt: "vote1",
      },
      bgImage: {
        src: bgImage1,
        alt: "background",
      },
      voterIcon: {
        src: voterIcon,
        alt: "voter",
      },
      linkLight: {
        src: linkLight,
        alt: "link",
      },
    };

    // Protocols
    const protocols: Protocol[] = [
      {
        name: "Arbitrum",
        value: "arbitrum",
        icon: arbitrum,
        link: "https://forum.arbitrum.foundation/t/lampros-dao-delegate-communication-thread/26642",
        className: "w-5 md:w-7 object-contain",
      },
      {
        name: "Optimism",
        value: "optimism",
        icon: op,
        link: "https://vote.optimism.io/delegates/lamprosdao.eth",
        className: "w-5 md:w-7 object-contain  ",
      },
      {
        name: "Uniswap",
        value: "uniswap",
        icon: uniswap,
        link: "",
        className: "w-5 md:w-7 object-contain  ",
      },
      {
        name: "Superfluid",
        value: "superfluid",
        icon: superfluid,
        link: "https://forum.superfluid.org/t/lampros-dao-delegate-thread/266",
        className: "w-5 md:w-7 object-contain  ",
      },
      {
        name: "Scroll",
        value: "scroll",
        icon: scroll,
        link: "",
        className:
          "w-5 md:w-7 rounded-full bg-[#FFEEDA] object-contain border ",
      },
    ];

    // Text configuration
    const textConfig: RecentVotesTextConfig = {
      titleMobile: {
        variant: "h1",
        color: "primary",
        weight: "semibold",
        className: "tracking-wider",
      },
      titleDesktop: {
        variant: "h2",
        color: "primary",
        weight: "semibold",
        className: "tracking-wide",
      },
      errorTitle: {
        variant: "h3",
        color: "primary",
        weight: "medium",
        className: "mb-2 text-lg md:text-xl",
      },
      errorMessage: {
        variant: "body1",
        color: "primary",
        weight: "normal",
        className: "text-sm md:text-base",
      },
      noDataTitle: {
        variant: "h3",
        color: "primary",
        weight: "medium",
        className: "mb-2 text-lg md:text-xl",
      },
      noDataMessage: {
        variant: "body1",
        color: "primary",
        weight: "normal",
        className: "text-sm md:text-base",
      },
      proposalId: {
        variant: "h4",
        color: "primary",
        weight: "light",
        className: "font-psygen",
      },
      proposalIdMobile: {
        variant: "h4",
        color: "primary",
        weight: "light",
        className: "font-psygen text-lg md:text-xl",
      },
      votedLabel: {
        variant: "body1",
        color: "primary",
        weight: "medium",
        className: "font-ppmori",
      },
      result: {
        variant: "body1",
        color: "primary",
        weight: "medium",
        className: "",
      },
      proposalTitle: {
        variant: "body1",
        color: "primary",
        weight: "normal",
        className: "mb-4 mx-w-[600px]",
      },
      protocolBadge: {
        variant: "caption",
        color: "accent",
        weight: "medium",
        className: "",
      },
      typeBadge: {
        variant: "caption",
        color: "accent",
        weight: "medium",
        className: "",
      },
      rationaleTitle: {
        variant: "subtitle2",
        color: "primary",
        weight: "medium",
        className: "mb-3",
      },
      voterName: {
        variant: "body2",
        color: "primary",
        weight: "medium",
        className: "mb-1",
      },
      voterInfo: {
        variant: "body1",
        color: "primary",
        weight: "normal",
        className: "",
      },
      seeMoreButton: {
        label: "See More",
        color: "#000000",
        textColor: "#FFFFFF",
      },
    };

    // Layout configurations
    const layoutConfig: RecentVotesLayoutConfig = {
      mobile: {
        container: {
          className: "lg:hidden",
        },
        header: {
          className:
            "border border-black p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#CBE9FF]",
          backgroundColor: colors.background.light,
        },
        content: {
          className: "",
        },
        loadingCard: {
          className: "mb-4 p-4 border border-gray-200 rounded-lg",
        },
        errorContainer: {
          className: "text-center p-5",
        },
        noDataContainer: {
          className: "text-center p-5",
        },
        voteCard: {
          className: "",
        },
        voteHeader: {
          className: "flex items-stretch border border-black",
        },
        numberCell: {
          className:
            "w-14 md:w-16 p-3 border-r border-black flex items-center justify-center",
        },
        statusCell: {
          className: "flex-1 p-3 flex items-start justify-start gap-2 flex-col",
        },
        arrowCell: {
          className: " bg-[#1A1A1A] flex items-center justify-center  px-10",
          backgroundColor: colors.primary.dark,
        },
        proposalSection: {
          className: "p-4",
        },
        expandableContent: {
          className: "mt-0 pt-4 border-t border-black p-4",
          backgroundColor: colors.background.light,
        },
        footer: {
          className:
            "border border-black bg-[#DFF48D] p-5 md:p-6 flex items-center justify-center",
          backgroundColor: colors.background.light,
        },
      },
      desktop: {
        grid: {
          className: "hidden lg:grid lg:grid-cols-8",
        },
        iconCell: {
          className:
            "border-b border-black bg-[#C5D9E8] p-6 flex items-center justify-center",
          backgroundColor: colors.background.light,
        },
        headerCell: {
          colSpan: 6,
          className:
            "col-span-6 border border-black p-10 flex items-center justify-between",
        },
        emptyCell: {
          colStart: 8,
          colSpan: 1,
          className: "",
        },
        loadingSkeleton: {
          className: "",
        },
        errorContainer: {
          colSpan: 8,
          rowStart: 2,
          className:
            "col-span-8 row-start-2 border border-black p-8 flex items-center justify-center",
        },
        noDataContainer: {
          colSpan: 8,
          rowStart: 2,
          className:
            "col-span-8 row-start-2 border border-black p-8 flex items-center justify-center",
        },
        proposalNumberCell: {
          className: "border border-black p-6 flex items-center justify-center",
        },
        proposalStatusCell: {
          colSpan: 2,
          className:
            "col-span-2 border border-black p-6 flex items-start justify-center flex-col gap-3",
        },
        proposalContentCell: {
          colSpan: 4,
          colStart: 4,
          className: "col-span-4 col-start-4 border border-black p-6",
        },
        proposalArrowCell: {
          colStart: 8,
          className:
            "relative col-start-8 border-b border-white bg-[#2A2A2A] flex items-center justify-center cursor-pointer hover:bg-[#3A3A3A] transition-colors",
          backgroundColor: colors.primary.dark,
        },
        expandableContentCell: {
          colSpan: 8,
          className: "col-span-8 border border-black bg-gray-50 p-6",
          backgroundColor: colors.background.light,
        },
        footerCell: {
          colSpan: 9,
          rowStart: 11,
          className:
            "col-span-9 row-start-11 border border-black bg-[#DFF48D] p-10 flex items-center justify-center",
          backgroundColor: colors.accent.yellow,
        },
      },
    };

    return {
      images,
      protocols,
      textConfig,
      layoutConfig,
    };
  }, []);

  return config;
};

export default useRecentVotesConfig;
