// Types for Section2 component
import type { StaticImageData } from "next/image";

export type Section2Variant = "mobile" | "desktop";

export type Section2ImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type Section2TextConfig = {
  paragraphs: string[];
  variant?: "subtitle2";
  color?: "primary";
  weight?: "bold";
  className?: string;
};

export type Section2LayoutConfig = {
  desktop: {
    grid: {
      className: string;
    };
    handCell: {
      className: string;
      backgroundColor: string;
    };
    contentCell: {
      className: string;
    };
    clipContainer: {
      className: string;
    };
    textContainer: {
      className: string;
    };
    arrowCell: {
      className: string;
    };
    iconCell: {
      className: string;
    };
  };
  mobile: {
    grid: {
      className: string;
    };
    arrowCell: {
      className: string;
    };
    clipContainer: {
      className: string;
    };
    textContainer: {
      className: string;
    };
    iconCell: {
      className: string;
    };
    handCell: {
      className: string;
      backgroundColor: string;
    };
  };
};

export interface Section2Props {
  variant?: Section2Variant;
}
