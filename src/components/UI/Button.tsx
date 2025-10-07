"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Typography } from "@/components/UI/Typography";

type ButtonVariant = "solid" | "outline" | "ghost";

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
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const el = buttonRef.current;

    // set initial
    gsap.set(el, { transformOrigin: "50% 50%" });

    const enter = () => {
      tlRef.current?.kill();
      tlRef.current = gsap.to(el, {
        duration: 0.35,
        y: -2,
        scale: 1.02,
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        ease: "power2.out",
      });
    };

    const leave = () => {
      tlRef.current?.kill();
      tlRef.current = gsap.to(el, {
        duration: 0.35,
        y: 0,
        scale: 1,
        boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  const base =
    "inline-flex items-center justify-center transition will-change-transform";
  const radius = roundedClassMap[rounded];

  const style: React.CSSProperties = {};
  let variantClasses = "";

  if (variant === "solid") {
    style.background = color;
    style.color = textColor;
    variantClasses = "px-6 py-4";
  } else if (variant === "outline") {
    style.color = textColor || color;
    style.borderColor = color;
    style.borderWidth = 1;
    variantClasses = "px-6 py-3 bg-transparent";
  } else {
    // ghost
    style.color = textColor || color;
    variantClasses = "px-6 py-3 bg-transparent";
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
        color={typographyColor as "primary" | "secondary" | "accent" | "white" | "dark" | "gradient" | `#${string}` | "offset" | undefined}
        align="center"
        weight="medium"
        className={["pointer-events-none select-none", variantClasses].join(" ")}
      >
        
      
        {label}
      </Typography>
    </button>
  );
};

export default Button;
