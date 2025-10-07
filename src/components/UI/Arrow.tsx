"use client";
import React from "react";

type ArrowDirection = "up" | "down" | "left" | "right";

interface ArrowProps {
  direction?: ArrowDirection;
  size?: number;
  color?: string;
  className?: string;
  rounded?: boolean;
}

const directionMap: Record<ArrowDirection, number> = {
  up: 90,
  down: 270,
  left: 0,
  right: 180,
};

export const Arrow: React.FC<ArrowProps> = ({
  direction = "right",
  size = 45,
  color = "white",
  className = "",
  rounded = true,
}) => {
  const rotation = directionMap[direction];

  const roundedClass = rounded ? "rounded-full" : "";

  return (
    <div
      className={`inline-flex items-center justify-center ${roundedClass} ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,

        border: rounded ? "1px solid white" : "none",
      }}
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 24.375V20.625H15V16.875H11.25V20.625H7.5V24.375H11.25V28.125H15V24.375H37.5ZM18.75 31.875H15V28.125H18.75V31.875ZM18.75 31.875H22.5V35.625H18.75V31.875ZM18.75 13.125H15V16.875H18.75V13.125ZM18.75 13.125H22.5V9.375H18.75V13.125Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Arrow;
