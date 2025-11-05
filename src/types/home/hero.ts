// Types for Hero component
import type { StaticImageData } from "next/image";

export type HeroVariant = "mobile" | "desktop";

export type HeroImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type HeroTitleConfig = {
  lines: HeroTitleLine[];
};

export type HeroTitleLine = {
  text: string;
  wavyLetters?: WavyLetter[];
};

export type WavyLetter = {
  letter: string;
  position: number; // Position in the text string
};

export type HeroSubtitleConfig = {
  text: string;
  variant?: "h6";
  align?: "center";
  weight?: "semibold";
  color?: "primary";
  className?: string;
};

export type HeroLayoutConfig = {
  container: {
    width: string;
    marginX: "auto";
    marginTop?: string;
    marginBottom?: string;
    position?: "relative";
  };
  decoration: {
    position: "absolute";
    top: string;
    width: string;
    zIndex: number;
  };
  decorationMobile: {
    position: "relative";
  };
  background: {
    position: "absolute";
    inset: string;
    width: string;
    height: string;
    zIndex: number;
    top?: string;
  };
  title: {
    position: "relative";
    width: string;
    paddingTop?: string;
    paddingBottom?: string;
  };
  subtitle: {
    display: "flex";
    alignItems: "center";
    justifyContent: "center";
    position: "relative";
    width: string;
    marginX: "auto";
    marginTop?: string;
    marginBottom?: string;
  };
};

export type HeroResponsiveConfig = {
  mobile: {
    show: boolean;
    hide: boolean;
  };
  desktop: {
    show: boolean;
    hide: boolean;
  };
};

export interface HeroProps {
  variant?: HeroVariant;
}
