import { useMemo } from "react";
import delegate from "@/assests/Governance/Delegate.png";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import uniswap from "@/assests/Governance/uniswap.svg";
import superfluid from "@/assests/Governance/superfluid_green.svg";
import scroll from "@/assests/Governance/scroll.svg";
import type {
  DelegateImageConfig,
  DelegateTextConfig,
  DelegateLayoutConfig,
  DelegateProtocol,
} from "@/types/governance/delegate";
import { colors } from "@/theme";

export const useDelegateConfig = () => {
  const config = useMemo(() => {
    // Image configurations
    const images: Record<string, DelegateImageConfig> = {
      delegate: {
        src: delegate,
        alt: "delegate",
        className: "w-[200px] md:w-[300px]",
        quality: 100,
      },
      delegateDesktop: {
        src: delegate,
        alt: "delegate",
        className: "w-[50%]",
        quality: 100,
      },
    };

    // Protocols
    const protocols: DelegateProtocol[] = [
      {
        name: "Arbitrum",
        img: arbitrum,
        alt: "arbitrum",
        href: "https://www.tally.xyz/gov/arbitrum/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25",
      },
      {
        name: "Optimism",
        img: op,
        alt: "optimism",
        href: "https://vote.optimism.io/delegates/lamprosdao.eth",
      },
      {
        name: "Uniswap",
        img: uniswap,
        alt: "uniswap",
        href: "https://www.tally.xyz/gov/uniswap/delegate/0xf070cd4b5ba73a6b6a939dde513f79862bffcd25",
      },
      {
        name: "Superfluid",
        img: superfluid,
        alt: "superfluid",
        href: "https://claim.superfluid.org/governance",
      },
      {
        name: "Scroll",
        img: scroll,
        alt: "scroll",
        href: "https://gov.scroll.io/delegates/lamprosdao.eth",
      },
    ];

    // Text configuration
    const textConfig: DelegateTextConfig = {
      title: {
        variant: "h1",
        color: "white",
        className: "tracking-wide uppercase text-center",
        text: "Delegate to Lampros DAO",
        wavyLetters: [
          { letter: "D", position: 1 },
          { letter: "g", position: 5 },
          { letter: "L", position: 9 },
          { letter: "P", position: 12 },
          { letter: "A", position: 17 },
        ],
      },
      titleDesktop: {
        variant: "h2",
        color: "white",
        className: "tracking-wide uppercase",
        text: "Delegate to Lampros DAO",
        wavyLetters: [
          { letter: "D", position: 1 },
          { letter: "g", position: 5 },
          { letter: "L", position: 9 },
          { letter: "P", position: 12 },
          { letter: "A", position: 17 },
        ],
      },
      descriptions: [
        "Delegate your tokens to our team and become a part of shaping the future of decentralized ecosystems.",
        "By delegating your tokens to our team, you enable us to represent your interests and drive meaningful governance decisions. Empower effective governance in Web3.",
      ],
      description: {
        variant: "subtitle2",
        color: "white",
        weight: "normal",
        align: "center",
        className: "tracking-wider font-ppmori text-sm md:text-base",
      },
      descriptionDesktop: {
        variant: "subtitle2",
        color: "white",
        weight: "normal",
        className: "tracking-wider font-ppmori max-w-[500px]",
      },
      verticalText: {
        variant: "caption",
        color: "white",
        weight: "normal",
        className: "[writing-mode:vertical-rl] rotate-180 tracking-[0.3em]",
        text: "[ Your Delegation Matters !! ]",
      },
      protocolButton: {
        variant: "body2",
        color: "white",
        weight: "bold",
        className: "font-ppmori text-sm md:text-base",
      },
      protocolButtonDesktop: {
        variant: "body2",
        color: "primary",
        weight: "bold",
        className:
          "font-ppmori hover:underline cursor-pointer whitespace-nowrap",
      },
    };

    // Layout configurations
    const layoutConfig: DelegateLayoutConfig = {
      mobile: {
        container: {
          className: "lg:hidden bg-[#1A1A1A]",
          backgroundColor: colors.primary.dark,
        },
        imageSection: {
          className:
            "border-b border-white p-4 md:p-6 flex items-center justify-center",
        },
        headerSection: {
          className: "p-4 md:p-6 flex items-center justify-center",
        },
        descriptionSection: {
          className: "p-4 md:p-6",
        },
        buttonsGrid: {
          className: "grid grid-cols-2 border border-white",
        },
        buttonCell: {
          className: "flex items-center gap-3 p-4 bg-[#1A1A1A] justify-center",
          backgroundColor: colors.primary.dark,
        },
        button: {
          className: "",
        },
      },
      desktop: {
        grid: {
          className: "hidden lg:grid lg:grid-cols-10 bg-[#1A1A1A]",
          backgroundColor: colors.primary.dark,
        },
        emptyCell1: {
          className: " border border-white botrder-t-none",
        },
        titleCell: {
          colSpan: 8,
          className:
            "col-span-8 border border-black flex item-center justify-center p-10",
        },
        emptyCell2: {
          colStart: 10,
          className: " border border-white botrder-t-none",
        },
        verticalTextCell: {
          rowSpan: 4,
          rowStart: 2,
          colSpan: 1,
          className:
            "row-span-4 row-start-2 border-l border-r border-b border-white flex items-end p-5 justify-center",
        },
        descriptionCell: {
          colSpan: 4,
          rowSpan: 2,
          rowStart: 2,
          className:
            "col-span-4 row-span-2 row-start-2 border border-white p-5 flex items-center flex-col gap-5 justify-center",
        },
        imageCell: {
          colSpan: 4,
          rowSpan: 2,
          colStart: 6,
          rowStart: 2,
          className:
            "col-span-4 row-span-2 col-start-6 row-start-2 border border-white flex items-center justify-center p-10",
        },
        accentCell: {
          rowSpan: 4,
          colStart: 10,
          rowStart: 2,
          colSpan: 1,
          className:
            "row-span-4 col-start-10 row-start-2 border border-white bg-[#CBE9FF]",
          backgroundColor: colors.background.light,
        },
        scrollRow: {
          colSpan: 8,
          colStart: 2,
          rowStart: 4,
          className:
            "col-span-8 col-start-2 row-start-4 bg-white overflow-x-hidden border-none",
          backgroundColor: colors.primary.white,
        },
        footerCell: {
          colSpan: 10,
          rowStart: 6,
          className:
            "col-span-10 row-start-6 bg-[#1A1A1A] p-10 border border-black",
          backgroundColor: colors.primary.dark,
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

export default useDelegateConfig;
