// Types for About Hero component
import type { StaticImageData } from "next/image";

export type AboutHeroVariant = "mobile" | "desktop";

export type AboutHeroImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type AboutHeroTextConfig = {
  title: {
    text: string;
    wavyLetter?: {
      letter: string;
      position: number;
    };
    variant?: "h1";
    color?: string;
    weight?: "semibold";
    align?: "left";
    className?: string;
  };
  paragraphs: string[];
  variant?: "body2";
  color?: string;
  weight?: "semibold";
  className?: string;
};

export type AboutHeroVisionMissionConfig = {
  vision: {
    title: {
      text: string;
      wavyLetters: Array<{ letter: string; position: number }>;
    };
    description: string;
  };
  mission: {
    title: {
      text: string;
      wavyLetters: Array<{ letter: string; position: number }>;
    };
    description: string;
  };
  titleColor?: string;
  descriptionColor?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export type AboutHeroLayoutConfig = {
  main: {
    container: {
      className: string;
    };
    imageSection: {
      className: string;
      backgroundColor: string;
    };
    textSection: {
      className: string;
    };
  };
  visionMission: {
    container: {
      className: string;
      backgroundColor: string;
    };
    mobile: {
      container: {
        className: string;
      };
      section: {
        className: string;
      };
      titleCell: {
        className: string;
      };
      imageCell: {
        className: string;
      };
      descriptionCell: {
        className: string;
      };
    };
    desktop: {
      grid: {
        className: string;
      };
      decorativeCell: {
        className: string;
        backgroundColor: string;
      };
      titleCell: {
        className: string;
      };
      imageCell: {
        className: string;
      };
      descriptionCell: {
        className: string;
      };
      emptyCell: {
        className: string;
      };
      missionTitleCell: {
        className: string;
      };
      missionDescriptionCell: {
        className: string;
      };
    };
  };
};

export interface AboutHeroProps {
  variant?: AboutHeroVariant;
}
