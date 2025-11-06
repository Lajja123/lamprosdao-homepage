// Types for Contributions Reports component
import type { StaticImageData } from "next/image";

export interface ContributionItem {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  link?: string;
  buttonColor: string;
  buttonTextColor: string;
}

export type ContributionsReportsImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type ContributionsReportsTextConfig = {
  header: {
    variant?: "h4" | "subtitle1";
    color?: string;
    weight?: "semibold";
    align?: "center";
    className?: string;
  };
  headerDesktop: {
    variant?: "subtitle1";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
  itemNumber: {
    variant?: "h5";
    color?: string;
    weight?: "bold";
    className?: string;
  };
  itemNumberDesktop: {
    variant?: "h5";
    color?: string;
    weight?: "bold";
    className?: string;
  };
  itemTitle: {
    variant?: "h5";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
  itemTitleDesktop: {
    variant?: "h5";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
  itemDescription: {
    variant?: "body2";
    color?: string;
    weight?: "normal";
    className?: string;
  };
  itemDescriptionDesktop: {
    variant?: "body2";
    color?: string;
    weight?: "normal";
    className?: string;
  };
  seeMoreButton: {
    label: string;
    color: string;
    textColor: string;
  };
};

export type ContributionsReportsLayoutConfig = {
  mobile: {
    container: {
      className: string;
      backgroundColor: string;
    };
    header: {
      className: string;
    };
    item: {
      container: {
        className: string;
      };
      headerRow: {
        className: string;
      };
      numberCell: {
        className: string;
      };
      titleCell: {
        className: string;
      };
      body: {
        className: string;
      };
      button: {
        className: string;
      };
    };
    footer: {
      className: string;
      backgroundColor: string;
    };
  };
  desktop: {
    grid: {
      className: string;
      backgroundColor: string;
    };
    header: {
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
    };
    item: {
      numberCell: {
        className: string;
      };
      titleCell: {
        colSpan?: number;
        className: string;
      };
      spacerCell: {
        className: string;
      };
      descriptionCell: {
        colSpan?: number;
        className: string;
      };
      descriptionSpacerCell: {
        colStart?: number;
        className: string;
      };
      button: {
        className: string;
      };
    };
    footer: {
      colSpan?: number;
      className: string;
      backgroundColor: string;
    };
  };
};

export interface ContributionsReportsProps {
  activeChain: "arbitrum" | "optimism";
}
