// Types for FAQ component
import type { StaticImageData } from "next/image";

export type FaqVariant = "mobile" | "desktop";

export type FaqImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type FaqTextConfig = {
  titleColor: string;
  questionColor: string;
  answerColor: string;
  numberColor: string;
  titleClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
  numberClassName?: string;
};

export type FaqArrowConfig = {
  size: number;
  hoverScale: number;
  hoverColor: string;
  transitionDuration?: number;
  className?: string;
};

export type FaqLayoutConfig = {
  desktop: {
    grid: {
      className: string;
    };
    numberCell: {
      className: string;
    };
    contentCell: {
      className: string;
    };
    iconCell: {
      className: string;
    };
    headerCell: {
      className: string;
      backgroundColor: string;
    };
    titleCell: {
      className: string;
    };
    arrowCell: {
      className: string;
    };
    clipCell: {
      className: string;
    };
  };
  mobile: {
    grid: {
      className: string;
    };
    headerRow: {
      className: string;
    };
    titleCell: {
      className: string;
    };
    questionCell: {
      className: string;
      backgroundColor: string;
    };
    numberCell: {
      className: string;
    };
    contentCell: {
      className: string;
    };
    iconCell: {
      className: string;
    };
    footerRow: {
      className: string;
    };
    arrowCell: {
      className: string;
    };
    clipCell: {
      className: string;
    };
  };
};

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqProps {
  variant?: FaqVariant;
}
