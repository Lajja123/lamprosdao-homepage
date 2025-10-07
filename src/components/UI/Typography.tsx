import React from "react";

// Typography variants interface
interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
    | "button"
    | "logo"
    | "accent";
  color?:
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
    | `#${string}`; // allow hex colors like #1a1a1a
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  children: React.ReactNode;
}

// Typography styles mapping
const getTypographyStyles = (variant: string) => {
  const styles = {
    h1: "text-3xl md:text-4xl lg:text-6xl leading-tight tracking-tight",
    h2: "text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight",
    h3: "text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight",
    h4: "text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight",
    h5: "text-lg md:text-xl lg:text-2xl leading-snug",
    h6: "text-base md:text-lg lg:text-xl leading-snug",
    subtitle1: "text-lg md:text-xl leading-relaxed tracking-wide",
    subtitle2: "text-base md:text-lg leading-relaxed tracking-wide",
    body1: "text-base leading-relaxed",
    body2: "text-sm leading-relaxed",
    caption: "text-xs leading-normal tracking-wide ",
    overline: "text-xs leading-normal tracking-widest ",
    button:
      "text-sm md:text-base leading-none tracking-wide uppercase font-medium font-ppmori",
    logo: "text-2xl md:text-3xl lg:text-4xl leading-none tracking-wider font-light",
    accent: "text-lg md:text-xl leading-relaxed tracking-wide",
  };

  return styles[variant as keyof typeof styles] || styles.body1;
};

// Color styles mapping
const getColorStyles = (color: string) => {
  const colors = {
    // mapped to your project palette only
    primary: "text-[#1A1A1A]",
    secondary: "text-[#000000]",
    accent: "text-[#A885CD]",
    offset: "text-[#F3FBD4]",
    white: "text-[#FFFFFF]",
    yellow: "text-[#DFF48D]",
    // New button background colors
    "light-green": "text-[#D0FFAC]",
    "light-purple": "text-[#DFCDF2]",
    "light-gray": "text-[#FFFFFF]",
    "dark-brown": "text-[#2F2B2B]",
  };

  // If a hex color is provided, use tailwind arbitrary value syntax
  if (color.startsWith("#")) {
    return `text-[${color}]`;
  }

  return colors[color as keyof typeof colors] || colors.primary;
};

// Weight styles mapping
const getWeightStyles = (weight: string) => {
  const weights = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  return weights[weight as keyof typeof weights] || weights.normal;
};

// Alignment styles mapping
const getAlignStyles = (align: string) => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  return alignments[align as keyof typeof alignments] || alignments.left;
};

// Main Typography component
export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  color = "primary",
  weight = "normal",
  align = "left",
  className = "",
  children,
  ...props
}) => {
  // Get element tag based on variant
  const getElement = () => {
    const elementMap = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      caption: "span",
      overline: "span",
      button: "span",
      logo: "div",
      accent: "span",
    };

    return elementMap[variant as keyof typeof elementMap] || "p";
  };

  const Element = getElement() as keyof React.JSX.IntrinsicElements;

  // Combine all styles
  const combinedClassName = [
    "font-mori", // Base font family is PPMori
    getTypographyStyles(variant),
    getColorStyles(color),
    getWeightStyles(weight),
    getAlignStyles(align),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return React.createElement(
    Element,
    { className: combinedClassName, ...props },
    children
  );
};

// Export default
export default Typography;
