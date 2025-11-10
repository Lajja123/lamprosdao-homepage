// Design tokens for colors
export const colors = {
  // Primary colors
  primary: {
    dark: "#1A1A1A",
    black: "#000000",
    white: "#FFFFFF",
  },

  // Accent colors
  accent: {
    purple: "#A885CD",
    yellow: "#DFF48D",
    lightGreen: "#D0FFAC",
    lightPurple: "#DFCDF2",
    offset: "#F3FBD4",
    orange: "#FFBDA9",
  },

  // Background colors
  background: {
    light: "#CBE9FF",
    dark: "#1a1a1a",
    white: "#FFFFFF",
    black: "#000000",
    lightBlue: "#DFEAF9",
    purple: "#DFCDF2",
    darkBrown: "#2F2B2B",
  },

  // Text colors
  text: {
    primary: "#1A1A1A",
    secondary: "#000000",
    white: "#FFFFFF",
    dark: "#1A1A1A",
    lightGray: "#FFFFFF",
    darkBrown: "#2F2B2B",
    lightGreen: "#E9FCE4",
    gray: "#C7C7C7",
  },

  // Background colors for dark sections
  dark: {
    background: "#121212",
  },
} as const;

// Type exports for colors
export type ColorToken =
  | (typeof colors.primary)[keyof typeof colors.primary]
  | (typeof colors.accent)[keyof typeof colors.accent]
  | (typeof colors.background)[keyof typeof colors.background]
  | (typeof colors.text)[keyof typeof colors.text];

export default colors;
