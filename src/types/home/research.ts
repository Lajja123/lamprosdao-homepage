// Types for Research component
import type { StaticImageData } from "next/image";

export type ResearchVariant = "mobile" | "desktop";

export type ResearchImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type ResearchTextConfig = {
  titleColor: string;
  descriptionColor: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export type ResearchButtonConfig = {
  label: string;
  color: string;
  textColor: string;
  className?: string;
};

export type ResearchArrowConfig = {
  size: number;
  hoverScale: number;
  hoverColor: string;
  className?: string;
  transitionDuration?: number;
};

export type ResearchLayoutConfig = {
  desktop: {
    container: {
      className: string;
      backgroundColor: string;
    };
    grid: {
      className: string;
    };
    imageCell: {
      className: string;
    };
    contentCell: {
      className: string;
    };
    iconCell: {
      className: string;
    };
  };
  mobile: {
    container: {
      className: string;
      backgroundColor: string;
    };
    grid: {
      className: string;
    };
    imageCell: {
      className: string;
    };
    contentCell: {
      className: string;
    };
    navigationCell: {
      className: string;
    };
  };
};

export type WavyLetterConfig = {
  letter: string;
  position: number;
};

export type TitleWavyConfig = {
  text: string;
  wavyLetters: WavyLetterConfig[];
};

export interface ResearchProps {
  variant?: ResearchVariant;
}
