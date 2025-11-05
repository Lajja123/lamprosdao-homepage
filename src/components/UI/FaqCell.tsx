"use client";
import Image from "next/image";
import { Typography } from "@/components/UI/Typography";
import { combineStyles } from "@/utils/commonStyles";
import type { FaqImageConfig } from "@/types/home/faq";
import { colors } from "@/theme";

interface NumberCellProps {
  number: string;
  rowStart?: string;
  className?: string;
  numberClassName?: string;
  numberColor?:
    | "primary"
    | "secondary"
    | "accent"
    | "white"
    | "offset"
    | "yellow"
    | "dark"
    | "gradient"
    | "light-green"
    | "light-purple"
    | "light-gray"
    | "dark-brown"
    | `#${string}`;
}

export const NumberCell = ({
  number,
  rowStart,
  className,
  numberClassName,
  numberColor = "primary",
}: NumberCellProps) => (
  <div
    className={combineStyles(
      "col-span-2 sm:col-span-1 border-b border-r md:border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center",
      rowStart ? `row-start-${rowStart}` : "",
      className || ""
    )}
  >
    <Typography
      variant="h5"
      color={numberColor}
      weight="semibold"
      className={
        numberClassName ||
        "font-psygen text-xs sm:text-sm md:text-base lg:text-lg"
      }
    >
      {number}
    </Typography>
  </div>
);

interface ContentCellProps {
  children: React.ReactNode;
  rowStart?: string;
  className?: string;
}

export const ContentCell = ({
  children,
  rowStart,
  className,
}: ContentCellProps) => (
  <div
    className={combineStyles(
      "col-span-6 sm:col-span-8 border-b md:border border-black p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center min-w-0",
      rowStart ? `row-start-${rowStart}` : "",
      className || ""
    )}
  >
    <div className="flex-1 min-w-0 px-1 sm:px-2 md:px-4 lg:px-6 xl:px-10 py-2 sm:py-2">
      {children}
    </div>
  </div>
);

interface IconCellProps {
  rowStart?: string;
  onClick?: () => void;
  isExpanded?: boolean;
  iconRef?: React.RefObject<HTMLDivElement>;
  expandIcon?: FaqImageConfig;
  collapseIcon?: FaqImageConfig;
  className?: string;
  iconClassName?: string;
}

export const IconCell = ({
  rowStart,
  onClick,
  isExpanded = false,
  iconRef,
  expandIcon,
  collapseIcon,
  className,
  iconClassName,
}: IconCellProps) => {
  const icon = isExpanded ? collapseIcon : expandIcon;

  if (!icon) return null;

  return (
    <div
      ref={iconRef}
      className={combineStyles(
        "col-span-2 sm:col-span-1 border-b md:border border-black p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex items-center justify-center cursor-pointer group hover:bg-opacity-10 transition-all duration-300",
        rowStart ? `row-start-${rowStart}` : "",
        className || ""
      )}
      onClick={onClick}
    >
      <Image
        src={icon.src}
        alt={icon.alt}
        style={{ backgroundColor: colors.background.purple }}
        width={icon.width || 20}
        height={icon.height || 20}
        className={combineStyles(
          " p-2 rounded-lg w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 ",
          iconClassName || ""
        )}
      />
    </div>
  );
};
