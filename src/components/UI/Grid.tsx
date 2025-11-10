import React, { forwardRef } from "react";
import { stylePresets } from "@/utils/commonStyles";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  rows?: number;
  variant?: "default" | "research" | "custom";
  noContainer?: boolean;
}

interface GridCellProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  colStart?: number;
  rowStart?: number;
  type?:
    | "basic"
    | "withHeight"
    | "spannedContent"
    | "arrow"
    | "icon"
    | "researchContent"
    | "researchImage"
    | "researchArrow"
    | "researchIcon";
}

export const Grid: React.FC<GridProps> = ({
  children,
  className = "",
  variant = "default",
  noContainer = false,
  style,
  ...rest
}) => {
  const getGridClass = () => {
    if (variant === "research") {
      return stylePresets.grid.research;
    }
    if (variant === "custom") {
      return ""; // For custom variant, className should contain all grid classes
    }
    return stylePresets.grid.responsive;
  };

  // If noContainer is true, just render the grid div without wrappers
  if (noContainer) {
    return (
      <div className={`${getGridClass()} ${className}`} style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <div className="w-full ">
      <div className={stylePresets.grid.container}>
        <div
          className={`${getGridClass()} ${className}`}
          style={style}
          {...rest}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const GridCell = forwardRef<HTMLDivElement, GridCellProps>(
  (
    {
      children,
      className = "",
      colSpan,
      rowSpan,
      colStart,
      rowStart,
      type = "basic",
      style,
      ...rest
    },
    ref
  ) => {
    const getCellClass = () => {
      switch (type) {
        case "withHeight":
          return stylePresets.cells.withHeight;
        case "spannedContent":
          return stylePresets.cells.spannedContent;
        case "arrow":
          return stylePresets.cells.arrow;
        case "icon":
          return stylePresets.cells.icon;
        case "researchContent":
          return stylePresets.cells.researchContent;
        case "researchImage":
          return stylePresets.cells.researchImage;
        case "researchArrow":
          return stylePresets.cells.researchArrow;
        case "researchIcon":
          return stylePresets.cells.researchIcon;
        default:
          return stylePresets.cells.basic;
      }
    };

    const spanClasses = [];
    if (colSpan) spanClasses.push(`col-span-${colSpan}`);
    if (rowSpan) spanClasses.push(`row-span-${rowSpan}`);
    if (colStart) spanClasses.push(`col-start-${colStart}`);
    if (rowStart) spanClasses.push(`row-start-${rowStart}`);

    return (
      <div
        ref={ref}
        className={`${getCellClass()} ${spanClasses.join(" ")} ${className}`}
        style={style}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default Grid;
