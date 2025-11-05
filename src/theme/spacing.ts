// Design tokens for spacing
export const spacing = {
  // Base spacing scale (in rem)
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "2.5rem", // 40px
  "3xl": "3rem", // 48px
  "4xl": "4rem", // 64px
  "5xl": "5rem", // 80px

  // Component-specific spacing (using Tailwind classes)
  hero: {
    mobile: {
      paddingTop: "py-7",
      paddingBottom: "py-7",
      paddingTopSm: "sm:pt-20",
      paddingBottomSm: "sm:pb-7",
    },
    desktop: {
      paddingTop: "md:pt-20",
      paddingTopLg: "lg:pt-40",
      paddingTop2xl: "2xl:pt-50",
      paddingBottom: "md:pb-20",
      paddingBottomLg: "lg:pb-10",
    },
    container: {
      marginBottom: "mb-10",
      marginBottomMd: "md:mb-20",
      marginBottom2xl: "2xl:mb-40",
      marginTopMd: "md:mt-20",
    },
  },

  // Typography spacing
  typography: {
    padding: {
      sm: "0.75rem 1rem", // px-3 py-3
      md: "0.5rem 1rem", // sm:px-4 sm:py-2
      lg: "0.75rem 1.5rem", // md:px-6 md:py-3
      xl: "1rem 2rem", // lg:px-8 lg:py-4
    },
  },

  // Layout spacing
  layout: {
    container: {
      width: "80%",
      marginX: "auto",
    },
  },

  // Positioning (using Tailwind classes)
  position: {
    top: {
      mobile: "top-50",
      desktop: "md:top-12",
    },
  },
} as const;

// Tailwind spacing classes for common use
export const spacingClasses = {
  padding: {
    xs: "p-1",
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
  },
  margin: {
    xs: "m-1",
    sm: "m-2",
    md: "m-4",
    lg: "m-6",
    xl: "m-8",
  },
  gap: {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  },
} as const;

export type SpacingToken = typeof spacing;

export default spacing;
