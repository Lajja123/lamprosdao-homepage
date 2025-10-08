import React from "react";
import { stylePresets } from "@/utils/commonStyles";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  rows?: number;
  variant?: "default" | "research";
}

interface GridCellProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
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
}) => {
  const getGridClass = () => {
    if (variant === "research") {
      return stylePresets.grid.research;
    }
    return stylePresets.grid.responsive;
  };

  return (
    <div className="w-full ">
      <div className={stylePresets.grid.container}>
        <div className={`${getGridClass()} ${className}`}>{children}</div>
      </div>
    </div>
  );
};

export const GridCell: React.FC<GridCellProps> = ({
  children,
  className = "",
  colSpan,
  rowSpan,
  type = "basic",
}) => {
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

  return (
    <div className={`${getCellClass()} ${spanClasses.join(" ")} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
