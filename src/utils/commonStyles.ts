// Common styles utility for consistent styling across components
export const commonStyles = {
  // Borders
  border: "border border-[#000000]",
  borderBlack: "border border-black",

  // Padding
  padding: {
    sm: "p-4",
    md: "p-6",
    lg: "p-10",
    xl: "p-12",
  },

  // Margins
  margin: {
    sm: "m-4",
    md: "m-6",
    lg: "m-10",
    xl: "m-12",
  },

  // Flex layouts
  flex: {
    center: "flex items-center justify-center",
    centerRow: "flex flex-row justify-between items-center",
    centerCol: "flex flex-col justify-center items-center",
    between: "flex justify-between items-center",
    start: "flex items-start justify-start",
    end: "flex items-end justify-end",
  },

  // Grid layouts
  grid: {
    cols10: "grid grid-cols-10",
    cols12: "grid grid-cols-12",
    auto: "grid grid-cols-auto",
  },

  // Backgrounds
  background: {
    dark: "bg-[#1a1a1a]",
    light: "bg-[#CBE9FF]",
    purple: "bg-[#DFCDF2]",
    white: "bg-white",
    black: "bg-black",
  },

  // Text colors
  text: {
    primary: "text-black",
    secondary: "text-gray-600",
    white: "text-white",
    purple: "text-purple-600",
  },

  // Rounded corners
  rounded: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },

  // Shadows
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  },

  // Ring (outline)
  ring: {
    white: "ring-1 ring-white",
    black: "ring-1 ring-black",
    gray: "ring-1 ring-gray-300",
  },

  // Common component styles
  components: {
    // Button styles
    button: {
      primary:
        "bg-black text-white px-6 py-3 rounded-lg border border-black hover:bg-white hover:text-black transition-colors",
      secondary:
        "bg-white text-black px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition-colors",
      icon: "p-3 rounded-lg border border-black hover:bg-gray-100 transition-colors",
    },

    // Card styles
    card: {
      default: "border border-[#000000] p-6 rounded-lg bg-white",
      elevated: "border border-[#000000] p-6 rounded-lg bg-white shadow-md",
    },

    // Icon container styles
    iconContainer: {
      default: "p-3 rounded-lg border border-black",
      purple: "bg-[#DFCDF2] p-3 rounded-lg border border-black",
      dark: "bg-[#1a1a1a] p-3 rounded-lg border border-black",
    },

    // Navigation styles
    navButton:
      "p-3 rounded-full ring-1 ring-white hover:bg-white hover:text-black transition-colors",

    // Grid cell styles
    gridCell: {
      number: "border border-[#000000] p-10 flex items-center justify-center",
      content:
        "col-span-9 border border-[#000000] p-10 flex flex-row justify-between items-center px-4 min-w-0",
      title:
        "col-span-4 row-start-4 border border-[#000000] flex justify-center items-center",
      question:
        "row-start-4 bg-[#CBE9FF] flex w-full justify-center items-center border border-[#000000]",
      navigation: "border border-[#000000] flex items-center justify-center",
      clip: "col-span-3 col-start-7 row-start-4 border border-[#000000] w-full flex justify-center items-center",
    },
  },

  // Typography classes
  typography: {
    heading: {
      h1: "text-4xl md:text-5xl font-bold tracking-tight",
      h2: "text-3xl md:text-4xl font-bold tracking-tight",
      h3: "text-2xl md:text-3xl font-semibold",
      h4: "text-xl md:text-2xl font-semibold",
    },
    body: {
      large: "text-lg md:text-xl",
      medium: "text-base md:text-lg",
      small: "text-sm md:text-base",
    },
    // Text wrapping utilities
    wrap: {
      normal: "break-normal",
      words: "break-words",
      all: "break-all",
      keep: "break-keep",
    },
  },

  // Spacing utilities
  spacing: {
    section: "py-16 md:py-24",
    container: "px-4 md:px-6 lg:px-8",
    gap: {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },
  },

  // Animation classes
  animation: {
    transition: "transition-all duration-300 ease-in-out",
    hover: "hover:scale-105 hover:shadow-lg transition-transform duration-200",
    fade: "opacity-0 animate-fade-in",
  },
};

// Helper functions for combining styles
export const combineStyles = (...styles: (string | undefined)[]): string => {
  return styles.filter(Boolean).join(" ");
};

// Common style presets for specific use cases
export const stylePresets = {
  // FAQ specific styles
  faq: {
    numberCell: combineStyles(commonStyles.components.gridCell.number),
    contentCell: combineStyles(commonStyles.components.gridCell.content),
    questionCell: combineStyles(commonStyles.components.gridCell.question),
    titleCell: combineStyles(commonStyles.components.gridCell.title),
    navCell: combineStyles(commonStyles.components.gridCell.navigation),
    clipCell: combineStyles(commonStyles.components.gridCell.clip),
  },

  // Button presets
  buttons: {
    primary: combineStyles(commonStyles.components.button.primary),
    secondary: combineStyles(commonStyles.components.button.secondary),
    icon: combineStyles(commonStyles.components.button.icon),
  },

  // Card presets
  cards: {
    default: combineStyles(commonStyles.components.card.default),
    elevated: combineStyles(commonStyles.components.card.elevated),
  },
};
