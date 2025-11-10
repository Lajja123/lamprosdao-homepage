// Types for Governance Delegate component
import type { StaticImageData } from "next/image";

export interface Protocol {
  name: string;
  img: StaticImageData;
  alt: string;
  href: string;
}

export type DelegateImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type DelegateTextConfig = {
  title: {
    variant?: "h1" | "h2";
    color?: string;
    className?: string;
    text: string;
    wavyLetters: Array<{ letter: string; position: number }>;
  };
  titleDesktop: {
    variant?: "h2";
    color?: string;
    className?: string;
    text: string;
    wavyLetters: Array<{ letter: string; position: number }>;
  };
  descriptions: string[];
  description: {
    variant?: "subtitle2";
    color?: string;
    weight?: "normal";
    align?: "center";
    className?: string;
  };
  descriptionDesktop: {
    variant?: "subtitle2";
    color?: string;
    weight?: "normal";
    className?: string;
  };
  verticalText: {
    variant?: "caption";
    color?: string;
    weight?: "normal";
    className?: string;
    text: string;
  };
  protocolButton: {
    variant?: "body2";
    color?: string;
    weight?: "bold";
    className?: string;
  };
  protocolButtonDesktop: {
    variant?: "body2";
    color?: string;
    weight?: "bold";
    className?: string;
  };
};

export type DelegateLayoutConfig = {
  mobile: {
    container: {
      className: string;
      backgroundColor: string;
    };
    imageSection: {
      className: string;
    };
    headerSection: {
      className: string;
    };
    descriptionSection: {
      className: string;
    };
    buttonsGrid: {
      className: string;
    };
    buttonCell: {
      className: string;
      backgroundColor: string;
    };
    button: {
      className: string;
    };
  };
  desktop: {
    grid: {
      className: string;
      backgroundColor: string;
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
    verticalTextCell: {
      rowSpan?: number;
      rowStart?: number;
      colSpan?: number;
      className: string;
    };
    descriptionCell: {
      colSpan?: number;
      rowSpan?: number;
      rowStart?: number;
      className: string;
    };
    imageCell: {
      colSpan?: number;
      rowSpan?: number;
      colStart?: number;
      rowStart?: number;
      className: string;
    };
    accentCell: {
      rowSpan?: number;
      colStart?: number;
      rowStart?: number;
      colSpan?: number;
      className: string;
      backgroundColor: string;
    };
    scrollRow: {
      colSpan?: number;
      colStart?: number;
      rowStart?: number;
      className: string;
      backgroundColor: string;
    };
    footerCell: {
      colSpan?: number;
      rowStart?: number;
      className: string;
      backgroundColor: string;
    };
  };
};

export interface DelegateProps {}
