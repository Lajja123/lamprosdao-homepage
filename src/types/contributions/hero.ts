// Types for Contributions Hero component
import type { StaticImageData } from "next/image";

export type ContributionsHeroImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type ContributionsHeroTextConfig = {
  intro: {
    paragraphs: string[];
    variant?: "body2";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
  chainButtons: {
    arbitrum: {
      label: string;
      variant?: "subtitle2";
      color?: string;
      weight?: "semibold";
      className?: string;
    };
    optimism: {
      label: string;
      variant?: "subtitle2";
      color?: string;
      weight?: "semibold";
      className?: string;
    };
  };
};

export type ContributionsHeroLayoutConfig = {
  mobile: {
    grid: {
      className: string;
    };
    clipImageCell: {
      className: string;
    };
    clip2ImageCell: {
      className: string;
      backgroundColor: string;
    };
    textCell: {
      className: string;
    };
    chainSelection: {
      container: {
        className: string;
        backgroundColor: string;
      };
      buttonContainer: {
        className: string;
      };
      button: {
        baseClassName: string;
        activeClassName: string;
        inactiveClassName: string;
      };
    };
    dynamicContent: {
      titleCell: {
        className: string;
      };
      subtitleCell: {
        className: string;
        backgroundColor: string;
      };
      descriptionCell: {
        className: string;
      };
    };
  };
  desktop: {
    grid: {
      className: string;
    };
    clipImageCell: {
      colSpan?: number;
      className: string;
    };
    textCell: {
      colSpan?: number;
      className: string;
    };
    clip2ImageCell: {
      colSpan?: number;
      colStart?: number;
      className: string;
      backgroundColor: string;
    };
    chainSelection: {
      grid: {
        className: string;
        backgroundColor: string;
      };
      emptyCell: {
        className: string;
      };
      arbitrumButtonCell: {
        colSpan?: number;
        rowStart?: number;
        className: string;
      };
      optimismButtonCell: {
        colSpan?: number;
        colStart?: number;
        rowStart?: number;
        className: string;
      };
      button: {
        baseClassName: string;
        activeClassName: string;
        inactiveClassName: string;
      };
    };
    dynamicContent: {
      grid: {
        className: string;
      };
      emptyCell1: {
        className: string;
      };
      titleCell: {
        colSpan?: number;
        className: string;
      };
      emptyCell2: {
        colStart?: number;
        className: string;
      };
      emptyCell3: {
        rowStart?: number;
        className: string;
      };
      subtitleCell: {
        colSpan?: number;
        rowStart?: number;
        className: string;
        backgroundColor: string;
      };
      emptyCell4: {
        colStart?: number;
        rowStart?: number;
        className: string;
      };
      descriptionCell: {
        colSpan?: number;
        rowStart?: number;
        className: string;
      };
    };
  };
};

export interface ContributionsHeroProps {
  activeChain: "arbitrum" | "optimism";
  onChainChange: (chain: "arbitrum" | "optimism") => void;
}
