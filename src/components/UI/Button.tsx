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
  children?: React.ReactNode;
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
  children,
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

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Initial animation on mount
    gsap.fromTo(
      button,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Click animation
    const handleClick = () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("click", handleClick);
    };
  }, []);

  const base =
    "inline-flex items-center justify-center transition will-change-transform px-2 sm:px-3 md:px-6 py-2 sm:py-2 cursor-pointer";
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
    variantClasses = "px-2 sm:px-4 py-0 sm:py-2";
  } else if (variant === "outline") {
    style.color = textColor || color;
    style.borderColor = color;
    style.borderWidth = 1;
    variantClasses = "px-2 sm:px-4 py-0 sm:py-2 bg-transparent";
  } else if (variant === "ghost") {
    style.color = textColor || color;
    variantClasses = "px-2 sm:px-4 py-0 sm:py-2 bg-transparent";
  } else {
    // New color variants (light-green, light-purple, light-gray, dark-brown)
    style.background = getVariantColor(variant);
    style.color = variant === "light-gray" ? "#000000" : "#FFFFFF";
    variantClasses = "px-2 sm:px-4 py-0 sm:py-0";
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
      <div className="flex items-center gap-2">
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
          weight="bold"
          className={["pointer-events-none select-none text-sm sm:text-base", variantClasses].join(
            " "
          )}
        >
          {label}
        </Typography>
        {children}
      </div>
    </button>
  );
};

export default Button;
