// Types for Governance RecentVotes component
import type { StaticImageData } from "next/image";
import type { Protocol } from "@/types";

export interface RecentVotesImageConfig {
  voteIcon: {
    src: string | StaticImageData;
    alt: string;
  };
  bgImage: {
    src: string | StaticImageData;
    alt: string;
  };
  voterIcon: {
    src: string | StaticImageData;
    alt: string;
  };
  linkLight: {
    src: string | StaticImageData;
    alt: string;
  };
}

export interface RecentVotesTextConfig {
  titleMobile: {
    variant?: "h1";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
  titleDesktop: {
    variant?: "h2";
    color?: string;
    weight?: "semibold";
    className?: string;
  };
  errorTitle: {
    variant?: "h3";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  errorMessage: {
    variant?: "body1";
    color?: string;
    weight?: "normal";
    className?: string;
  };
  noDataTitle: {
    variant?: "h3";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  noDataMessage: {
    variant?: "body1";
    color?: string;
    weight?: "normal";
    className?: string;
  };
  proposalId: {
    variant?: "h4";
    color?: string;
    weight?: "light";
    className?: string;
  };
  proposalIdMobile: {
    variant?: "h4";
    color?: string;
    weight?: "light";
    className?: string;
  };
  votedLabel: {
    variant?: "body1" | "subtitle2";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  result: {
    variant?: "body1" | "subtitle2";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  proposalTitle: {
    variant?: "body1";
    color?: string;
    weight?: "normal";
    className?: string;
  };
  protocolBadge: {
    variant?: "caption";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  typeBadge: {
    variant?: "caption";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  rationaleTitle: {
    variant?: "subtitle2";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  voterName: {
    variant?: "body2";
    color?: string;
    weight?: "medium";
    className?: string;
  };
  voterInfo: {
    variant?: "body1";
    color?: string;
    weight?: "normal";
    className?: string;
  };
  seeMoreButton: {
    label: string;
    color: string;
    textColor: string;
  };
}

export interface RecentVotesLayoutConfig {
  mobile: {
    container: {
      className: string;
    };
    header: {
      className: string;
      backgroundColor: string;
    };
    content: {
      className: string;
    };
    loadingCard: {
      className: string;
    };
    errorContainer: {
      className: string;
    };
    noDataContainer: {
      className: string;
    };
    voteCard: {
      className: string;
    };
    voteHeader: {
      className: string;
    };
    numberCell: {
      className: string;
    };
    statusCell: {
      className: string;
    };
    arrowCell: {
      className: string;
      backgroundColor: string;
    };
    proposalSection: {
      className: string;
    };
    expandableContent: {
      className: string;
      backgroundColor: string;
    };
    footer: {
      className: string;
      backgroundColor: string;
    };
  };
  desktop: {
    grid: {
      className: string;
    };
    iconCell: {
      className: string;
      backgroundColor: string;
    };
    headerCell: {
      colSpan?: number;
      className: string;
    };
    emptyCell: {
      colStart?: number;
      colSpan?: number;
      className: string;
    };
    loadingSkeleton: {
      className: string;
    };
    errorContainer: {
      colSpan?: number;
      rowStart?: number;
      className: string;
    };
    noDataContainer: {
      colSpan?: number;
      rowStart?: number;
      className: string;
    };
    proposalNumberCell: {
      className: string;
    };
    proposalStatusCell: {
      colSpan?: number;
      className: string;
    };
    proposalContentCell: {
      colSpan?: number;
      colStart?: number;
      className: string;
    };
    proposalArrowCell: {
      colStart?: number;
      className: string;
      backgroundColor: string;
    };
    expandableContentCell: {
      colSpan?: number;
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
}

export interface RecentVotesProps {}

export interface RecentVotesConfigHookReturn {
  images: RecentVotesImageConfig;
  protocols: Protocol[];
  textConfig: RecentVotesTextConfig;
  layoutConfig: RecentVotesLayoutConfig;
}
