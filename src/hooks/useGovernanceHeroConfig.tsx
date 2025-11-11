import { useMemo } from "react";
import clip from "@/assests/Governance/clip.png";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import superfluid from "@/assests/Governance/superfluid_green.svg";
import euphoria from "@/assests/Governance/euphoria.jpg";
import hirangi from "@/assests/Governance/hirangi.jpg";
import chain from "@/assests/Governance/chain-l.jpg";
import link from "@/assests/Governance/link.svg";
import scroll from "@/assests/Governance/scroll.png";
import uniswap from "@/assests/Governance/uniswap.svg";
import type {
  GovernanceHeroImageConfig,
  GovernanceHeroTextConfig,
  GovernanceHeroLayoutConfig,
  TeamMember,
  Delegation,
} from "@/types/governance/hero";
import { colors } from "@/theme";

export const useGovernanceHeroConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, GovernanceHeroImageConfig> = {
      clip: {
        src: clip,
        alt: "Metallic sculpture",
        className: "w-[200px] md:w-[200px]",
        quality: 100,
      },
      clipDesktop: {
        src: clip,
        alt: "Metallic sculpture",
        className: "w-[200px] md:w-[250px]",
        quality: 100,
      },
      link: {
        src: link,
        alt: "link",
        className: "w-10",
        quality: 100,
      },
      linkDesktop: {
        src: link,
        alt: "link",
        className: "w-8",
        quality: 100,
      },
    };

    // Team members
    const teamMembers: TeamMember[] = [
      {
        name: "Euphoria",
        icon: "↗",
        link: "https://x.com/Euphoria_0077",
        src: euphoria,
      },
      {
        name: "Chain_L",
        icon: "↗",
        link: "https://x.com/chain_haya",
        src: chain,
      },
      {
        name: "Hirangi",
        icon: "↗",
        link: "https://x.com/HirangiPandya",
        src: hirangi,
      },
    ];

    // Delegations
    const delegations: Delegation[] = [
      {
        name: "Arbitrum",
        link: "https://www.tally.xyz/gov/arbitrum/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25",
        icon: arbitrum,
        className: "w-7 md:w-8 object-contain ",
      },
      {
        name: "Optimism",
        link: "https://vote.optimism.io/delegates/lamprosdao.eth",
        icon: op,
        className: "w-7 md:w-8 object-contain ",
      },
      {
        name: "Scroll",
        link: "https://gov.scroll.io/delegates/lamprosdao.eth",
        icon: scroll,
        className:
          "w-7 md:w-8 rounded-full bg-[#FFEEDA] object-contain border ",
      },
      {
        name: "Superfluid",
        link: "https://claim.superfluid.org/governance",
        icon: superfluid,
        className:
          "w-7 md:w-8 rounded-full bg-[#FFEEDA] object-contain border ",
      },
      {
        name: "Uniswap",
        link: "https://www.tally.xyz/gov/uniswap/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25",
        icon: uniswap,
        className: "w-7 md:w-8 object-contain ",
      },
    ];

    // Text configuration
    const textConfig: GovernanceHeroTextConfig = {
      title: {
        variant: "h1",
        weight: "semibold",
        align: "center",
        color: "light-purple",
        className:
          "uppercase font-csbohemian tracking-wider leading-[0.95] border-b border-gray py-5",
        text: "Governance",
        wavyLetters: [
          { letter: "o", position: 2 },
          { letter: "e", position: 4 },
        ],
      },
      description: {
        variant: "body2",
        color: "primary",
        weight: "semibold",
        align: "center",
        className:
          "tracking-wider font-ppmori text-sm md:text-base text-center",
        text: "Lampros DAO is an open community of builders and governance enthusiasts committed to transparency, decentralization, and inclusivity. Through active participation in governance and collaborative efforts, we strive to create a more transparent, inclusive, and resilient Web3 landscape.",
      },
      teamHeader: {
        variant: "h3",
        color: "primary",
        weight: "normal",
        className: "tracking-wider font-ppmori text-xl md:text-2xl text-center",
        text: "Our Team Members",
      },
      teamHeaderDesktop: {
        variant: "h3",
        color: "primary",
        weight: "normal",
        className: "tracking-wider font-ppmori text-3xl",
        text: "Our Team Members",
      },
      delegationsTitle: {
        variant: "h1",
        className: "tracking-wider font-ppmori text-white",
        text: "OUR DELEGATIONS",
        wavyLetters: [
          { letter: "U", position: 2 },
          { letter: "E", position: 4 },
          { letter: "A", position: 6 },
          { letter: "N", position: 8 },
        ],
      },
      delegationsTitleDesktop: {
        variant: "h2",
        className: "tracking-wider font-ppmori text-white",
        text: "OUR DELEGATIONS",
        wavyLetters: [
          { letter: "U", position: 2 },
          { letter: "E", position: 4 },
          { letter: "A", position: 6 },
          { letter: "N", position: 8 },
        ],
      },
      delegationButton: {
        variant: "body2",
        color: "primary",
        weight: "semibold",
        className: "font-ppmori text-sm md:text-base",
      },
      delegationButtonDesktop: {
        variant: "body2",
        color: "primary",
        weight: "semibold",
        className: "font-ppmori hover:underline",
      },
    };

    // Layout configurations
    const layoutConfig: GovernanceHeroLayoutConfig = {
      mobile: {
        mainContent: {
          container: {
            className: "flex flex-col",
          },
          titleSection: {
            className: "bg-[#000000]",
            backgroundColor: colors.primary.black,
          },
          imageSection: {
            className: "p-5 md:p-6 flex items-center justify-center",
          },
          textSection: {
            className: "p-4 md:p-6 flex items-center justify-center",
          },
          teamHeader: {
            className:
              "bg-[#DFCDF2] p-6 md:p-6 flex items-center justify-center",
            backgroundColor: colors.accent.lightPurple,
          },
          teamGrid: {
            className: "grid grid-cols-3 border-t border-black",
          },
          teamMemberCard: {
            className:
              "flex flex-col items-center justify-between  border-r last:border-r-0 border-black hover:opacity-80 transition-opacity duration-300",
            imageContainer: {
              className: "w-full flex items-center justify-center p-6",
            },
            image: {
              className: "w-14 h-14 rounded-full border-1 border-black",
            },
            nameContainer: {
              className:
                "w-full border-t border-black p-3 flex items-center justify-center",
            },
            name: {
              className: "font-ppmori text-xs md:text-base text-center",
            },
          },
        },
        delegations: {
          container: {
            className: "bg-[#1A1A1A] ",
            backgroundColor: colors.primary.dark,
          },
          titleSection: {
            className:
              "p-6 md:p-6 flex items-center justify-center border-b border-white",
          },
          title: {
            className: "tracking-wider font-ppmori text-white",
          },
          grid: {
            className: "grid grid-cols-2",
          },
          buttonCell: {
            className: "p-6 flex items-center justify-center",
          },
          button: {
            className:
              "rounded-full py-2 px-6 flex items-center justify-center gap-4 shadow-lg bg-white cursor-pointer transition-all duration-300 hover:scale-105",
          },
        },
      },
      desktop: {
        grid: {
          className: "hidden lg:grid lg:grid-cols-8",
        },
        emptyCell1: {
          rowSpan: 3,
          className: "col-span-1",
        },
        imageCell: {
          colSpan: 2,
          rowSpan: 2,
          className: "p-5 flex items-center justify-center",
        },
        textCell: {
          colSpan: 4,
          rowSpan: 2,
          colStart: 4,
          className: "col-start-4 flex items-center justify-center p-5",
        },
        emptyCell2: {
          rowSpan: 3,
          colStart: 8,
          className: "",
        },
        teamHeaderCell: {
          colSpan: 6,
          colStart: 2,
          rowStart: 3,
          className:
            "col-start-2 row-start-3 bg-[#DFCDF2] flex items-center justify-center p-10",
          backgroundColor: colors.accent.lightPurple,
        },
        teamMemberCell: {
          colSpan: 2,
          className: "flex items-center justify-center p-10 gap-4",
        },
        teamMemberLink: {
          className:
            "flex items-center hover:opacity-80 transition-opacity duration-300",
        },
        teamMemberImage: {
          className: "w-12 h-12 rounded-full border-1 border-black",
        },
        teamMemberName: {
          className: "font-ppmori",
        },
        delegations: {
          grid: {
            className: "grid-cols-8 mt-0 bg-[#1A1A1A] hidden lg:grid",
            backgroundColor: colors.primary.dark,
          },
          emptyCell1: {
            rowSpan: 3,
            className: "border border-white",
          },
          titleCell: {
            colSpan: 6,
            colStart: 2,
            className: "col-start-2 flex items-center justify-center p-10",
          },
          emptyCell2: {
            rowStart: 2,
            className: "border border-white",
          },
          buttonsCell: {
            colSpan: 6,
            rowStart: 2,
            className:
              "row-start-2 px-6 py-10 border border-white flex flex-row justify-around items-center gap-5",
          },
          button: {
            className:
              "rounded-full px-6 py-4 flex border border-white items-center justify-center gap-3 shadow-lg cursor-pointer transition-all duration-300 bg-white scale-105",
          },
          emptyCell3: {
            colStart: 8,
            rowStart: 3,
            className: "border border-white ",
          },
        },
      },
    };

    return {
      images,
      teamMembers,
      delegations,
      textConfig,
      layoutConfig,
    };
  }, []);

  return config;
};

export default useGovernanceHeroConfig;
