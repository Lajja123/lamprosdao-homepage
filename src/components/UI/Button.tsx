"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Typography } from "@/components/UI/Typography";

type ButtonVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "light-green"
  | "light-purple"
  | "light-gray"
  | "dark-brown";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string; // hex or css color
  textColor?: string; // hex or css color
  variant?: ButtonVariant;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const roundedClassMap: Record<NonNullable<ButtonProps["rounded"]>, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export const Button: React.FC<ButtonProps> = ({
  label,
  color = "#B3F4A6",
  textColor = "#0B0B0B",
  variant = "solid",
  rounded = "full",
  className = "",
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  type Palette =
    | "primary"
    | "secondary"
    | "accent"
    | "white"
    | "gray"
    | "dark"
    | "gradient";

  const isPalette = (val: string): val is Palette => {
    return (
      val === "primary" ||
      val === "secondary" ||
      val === "accent" ||
      val === "white" ||
      val === "gray" ||
      val === "dark" ||
      val === "gradient"
    );
  };
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const base =
    "inline-flex items-center justify-center transition will-change-transform px-5";
  const radius = roundedClassMap[rounded];

  const style: React.CSSProperties = {};
  let variantClasses = "";

  // Color mapping for new variants
  const getVariantColor = (variant: ButtonVariant) => {
    const colorMap = {
      "light-green": "#D0FFAC",
      "light-purple": "#DFCDF2",
      "light-gray": "#FFFFFF",
      "dark-brown": "#2F2B2B",
    };
    return colorMap[variant as keyof typeof colorMap] || color;
  };

  if (variant === "solid") {
    style.background = color;
    style.color = textColor;
    variantClasses = "px-6 py-4";
  } else if (variant === "outline") {
    style.color = textColor || color;
    style.borderColor = color;
    style.borderWidth = 1;
    variantClasses = "px-6 py-3 bg-transparent";
  } else if (variant === "ghost") {
    style.color = textColor || color;
    variantClasses = "px-6 py-3 bg-transparent";
  } else {
    // New color variants (light-green, light-purple, light-gray, dark-brown)
    style.background = getVariantColor(variant);
    style.color = variant === "light-gray" ? "#000000" : "#FFFFFF";
    variantClasses = "px-6 py-4";
  }

  // Narrow Typography color type to satisfy its union (hex or palette keys)
  const typographyColor: Palette | `#${string}` =
    textColor && textColor.startsWith("#")
      ? (textColor as `#${string}`)
      : isPalette(textColor)
      ? textColor
      : "primary";

  return (
    <button
      ref={buttonRef}
      className={[base, radius, className].filter(Boolean).join(" ")}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <Typography
        variant="button"
        color={
          typographyColor as
            | "primary"
            | "secondary"
            | "accent"
            | "white"
            | "dark"
            | "gradient"
            | `#${string}`
            | "offset"
            | undefined
        }
        align="center"
        weight="medium"
        className={["pointer-events-none select-none", variantClasses].join(
          " "
        )}
      >
        {label}
      </Typography>
    </button>
  );
};

export default Button;
