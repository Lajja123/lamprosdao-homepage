// Types for About Ethos component
import type { StaticImageData } from "next/image";

export type EthosVariant = "mobile" | "desktop";

export type EthosImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export type EthosItem = {
  number: string;
  title: string;
  content: string;
};

export type EthosTextConfig = {
  header: {
    title: {
      firstLine: {
        text: string;
        wavyLetters: Array<{ letter: string; position: number }>;
      };
      secondLine: {
        text: string;
        wavyLetters: Array<{ letter: string; position: number }>;
      };
    };
    variant?: "h1" | "h2";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  itemTitle: {
    variant?: "h6";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
  itemNumber: {
    variant?: "h2";
    color?: string;
    weight?: "normal";
    className?: string;
  };
  itemContent: {
    variant?: "h6";
    color?: string;
    weight?: "medium";
    className?: string;
  };
};

export type EthosLayoutConfig = {
  mobile: {
    header: {
      container: {
        className: string;
        backgroundColor: string;
      };
      imageContainer: {
        className: string;
      };
      titleContainer: {
        className: string;
      };
    };
    item: {
      container: {
        className: string;
      };
      header: {
        className: string;
      };
      titleCell: {
        className: string;
      };
      numberCell: {
        className: string;
        backgroundColor: string;
      };
      contentCell: {
        className: string;
      };
    };
  };
  desktop: {
    grid: {
      className: string;
    };
    header: {
      container: {
        className: string;
        backgroundColor: string;
      };
      titleContainer: {
        className: string;
      };
      imageContainer: {
        className: string;
      };
    };
    item: {
      titleCell: {
        className: string;
      };
      numberCell: {
        className: string;
        backgroundColor: string;
      };
      contentCell: {
        className: string;
      };
    };
  };
};

export interface EthosProps {
  variant?: EthosVariant;
}
