// Types for Governance Hero component
import type { StaticImageData } from "next/image";

export interface TeamMember {
  name: string;
  icon: string;
  link: string;
  src: StaticImageData;
}

export interface Delegation {
  name: string;
  link: string;
  icon: StaticImageData;
}

export type GovernanceHeroImageConfig = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  width?: number;
  height?: number;
};

export type GovernanceHeroTextConfig = {
  title: {
    variant?: "h1";
    weight?: "semibold";
    align?: "center";
    color?: string;
    className?: string;
    text: string;
    wavyLetters: Array<{ letter: string; position: number }>;
  };
  description: {
    variant?: "body2";
    color?: string;
    weight?: "semibold";
    align?: "center";
    className?: string;
    text: string;
  };
  teamHeader: {
    variant?: "h3";
    color?: string;
    weight?: "normal";
    className?: string;
    text: string;
  };
  teamHeaderDesktop: {
    variant?: "h3";
    color?: string;
    weight?: "normal";
    className?: string;
    text: string;
  };
  delegationsTitle: {
    variant?: "h1" | "h2";
    className?: string;
    text: string;
    wavyLetters: Array<{ letter: string; position: number }>;
  };
  delegationsTitleDesktop: {
    variant?: "h2";
    className?: string;
    text: string;
    wavyLetters: Array<{ letter: string; position: number }>;
  };
  delegationButton: {
    variant?: "body2";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
  delegationButtonDesktop: {
    variant?: "body2";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
};

export type GovernanceHeroLayoutConfig = {
  mobile: {
    mainContent: {
      container: {
        className: string;
      };
      titleSection: {
        className: string;
        backgroundColor: string;
      };
      imageSection: {
        className: string;
      };
      textSection: {
        className: string;
      };
      teamHeader: {
        className: string;
        backgroundColor: string;
      };
      teamGrid: {
        className: string;
      };
      teamMemberCard: {
        className: string;
        imageContainer: {
          className: string;
        };
        image: {
          className: string;
        };
        nameContainer: {
          className: string;
        };
        name: {
          className: string;
        };
      };
    };
    delegations: {
      container: {
        className: string;
        backgroundColor: string;
      };
      titleSection: {
        className: string;
      };
      title: {
        className: string;
      };
      grid: {
        className: string;
      };
      buttonCell: {
        className: string;
      };
      button: {
        className: string;
      };
    };
  };
  desktop: {
    grid: {
      className: string;
    };
    emptyCell1: {
      rowSpan?: number;
      className: string;
    };
    imageCell: {
      colSpan?: number;
      rowSpan?: number;
      className: string;
    };
    textCell: {
      colSpan?: number;
      rowSpan?: number;
      colStart?: number;
      className: string;
    };
    emptyCell2: {
      rowSpan?: number;
      colStart?: number;
      className: string;
    };
    teamHeaderCell: {
      colSpan?: number;
      colStart?: number;
      rowStart?: number;
      className: string;
      backgroundColor: string;
    };
    teamMemberCell: {
      colSpan?: number;
      colStart?: number;
      rowStart?: number;
      className: string;
    };
    teamMemberLink: {
      className: string;
    };
    teamMemberImage: {
      className: string;
    };
    teamMemberName: {
      className: string;
    };
    delegations: {
      grid: {
        className: string;
        backgroundColor: string;
      };
      emptyCell1: {
        rowSpan?: number;
        className: string;
      };
      titleCell: {
        colSpan?: number;
        colStart?: number;
        className: string;
      };
      emptyCell2: {
        rowStart?: number;
        className: string;
      };
      buttonsCell: {
        colSpan?: number;
        rowStart?: number;
        className: string;
      };
      button: {
        className: string;
      };
      emptyCell3: {
        colStart?: number;
        rowStart?: number;
        className: string;
      };
    };
  };
};

export interface GovernanceHeroProps {}
