// Types for About Journey component
import type { StaticImageData } from "next/image";

export type JourneyVariant = "mobile" | "desktop";

export type JourneyImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export type JourneyItem = {
  number: string;
  date: string;
  title: string;
  color: string;
};

export type JourneyTextConfig = {
  header: {
    title: {
      text: string;
      wavyLetters: Array<{ letter: string; position: number }>;
    };
    variant?: "h2";
    color?: string;
    className?: string;
  };
  itemDate: {
    variant?: "h5";
    color?: string;
    weight?: "bold";
    className?: string;
  };
  itemTitle: {
    variant?: "body1";
    color?: string;
    weight?: "light";
    className?: string;
  };
  itemNumber: {
    variant?: "h2";
    color?: string;
    weight?: "normal";
    className?: string;
  };
};

export type JourneyLayoutConfig = {
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
      contentCell: {
        className: string;
        backgroundColor: string;
      };
      numberCell: {
        className: string;
      };
    };
  };
  desktop: {
    grid: {
      className: string;
      backgroundColor: string;
    };
    header: {
      titleCell: {
        className: string;
      };
      emptyCell: {
        className: string;
      };
    };
    item: {
      imageCell: {
        className: string;
      };
      contentCell: {
        className: string;
      };
      numberCell: {
        className: string;
      };
    };
  };
};

export interface JourneyProps {
  variant?: JourneyVariant;
}
