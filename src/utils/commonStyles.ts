export const commonStyles = {
  border: "border border-[#000000]",
  borderBlack: "border border-black",

  padding: {
    sm: "p-4",
    md: "p-6",
    lg: "p-10",
    xl: "p-12",
  },

  margin: {
    sm: "m-4",
    md: "m-6",
    lg: "m-10",
    xl: "m-12",
  },

  flex: {
    center: "flex items-center justify-center",
    centerRow: "flex flex-row justify-between items-center",
    centerCol: "flex flex-col justify-center items-center",
    between: "flex justify-between items-center",
    start: "flex items-start justify-start",
    end: "flex items-end justify-end",
  },

  grid: {
    cols10: "grid grid-cols-10",
    cols12: "grid grid-cols-12",
    cols6: "grid grid-cols-6",
    auto: "grid grid-cols-auto",
    standard10: "grid grid-cols-10 border border-black",
    container: "w-full overflow-x-auto",
    responsive:
      "min-w-[768px] lg:min-w-[1024px] grid grid-cols-8 lg:grid-cols-10 border border-black",
    research:
      "min-w-[320px] sm:min-w-[640px] md:min-w-[768px] grid grid-cols-6 ",
  },

  background: {
    dark: "bg-[#1a1a1a]",
    light: "bg-[#CBE9FF]",
    purple: "bg-[#DFCDF2]",
    white: "bg-white",
    black: "bg-black",
  },

  text: {
    primary: "text-black",
    secondary: "text-gray-600",
    white: "text-white",
    purple: "text-purple-600",
  },

  rounded: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },

  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  },

  ring: {
    white: "ring-1 ring-white",
    black: "ring-1 ring-black",
    gray: "ring-1 ring-gray-300",
  },

  components: {
    button: {
      primary:
        "bg-black text-white px-6 py-3 rounded-lg border border-black hover:bg-white hover:text-black transition-colors",
      secondary:
        "bg-white text-black px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition-colors",
      icon: "p-3 rounded-lg border border-black hover:bg-gray-100 transition-colors",
    },

    card: {
      default: "border border-[#000000] p-6 rounded-lg bg-white",
      elevated: "border border-[#000000] p-6 rounded-lg bg-white shadow-md",
    },

    iconContainer: {
      default: "p-1 md:p-3 rounded-lg border border-black",
      purple: "bg-[#DFCDF2] p-1 md:p-3 rounded-lg border border-black",
      dark: "bg-[#1a1a1a] p-1 md:p-3 rounded-lg border border-black",
    },

    navButton:
      "p-3 rounded-full ring-1 ring-white hover:bg-white hover:text-black transition-colors",

    gridCell: {
      basic: "border border-black ",
      withHeight: "border border-black relative",
      number: "border border-[#000000] p-10 flex items-center justify-center",
      content:
        "col-span-9 border border-[#000000] p-10 flex flex-row justify-between items-center px-4 min-w-0",
      title:
        "col-span-4 row-start-4 border border-[#000000] flex justify-center items-center",
      question:
        "row-start-4 bg-[#CBE9FF] flex w-full justify-center items-center border border-[#000000]",
      navigation: "border border-[#000000] flex items-center justify-center",
      clip: "col-span-3 col-start-7 row-start-4 border border-[#000000] w-full flex justify-center items-center",
      spannedContent:
        "col-span-6 lg:col-span-8 row-span-4 border border-black flex items-center justify-center gap-4 lg:gap-8 p-6 lg:p-12 bg-white",
      arrow:
        "row-span-3 border border-black relative flex items-center justify-center",
      icon: "border border-black h-30 relative flex items-center justify-center",
      researchContent:
        "col-span-3 row-span-4 border-l border-t  border-white flex items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]",
      researchImage:
        "col-span-3 row-span-5 flex items-center min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]",
      researchArrow:
        "col-start-4 row-start-5 col-span-1 row-span-1 border border-white relative flex items-center justify-center",
      researchIcon:
        "col-span-1 row-span-1 border border-white flex items-center justify-center",
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

export const stylePresets = {
  grid: {
    container: combineStyles(commonStyles.grid.container),
    standard: combineStyles(commonStyles.grid.standard10),
    responsive: combineStyles(commonStyles.grid.responsive),
    research: combineStyles(commonStyles.grid.research),
  },

  cells: {
    basic: combineStyles(commonStyles.components.gridCell.basic),
    withHeight: combineStyles(commonStyles.components.gridCell.withHeight),
    spannedContent: combineStyles(
      commonStyles.components.gridCell.spannedContent
    ),
    arrow: combineStyles(commonStyles.components.gridCell.arrow),
    icon: combineStyles(commonStyles.components.gridCell.icon),
    researchContent: combineStyles(
      commonStyles.components.gridCell.researchContent
    ),
    researchImage: combineStyles(
      commonStyles.components.gridCell.researchImage
    ),
    researchArrow: combineStyles(
      commonStyles.components.gridCell.researchArrow
    ),
    researchIcon: combineStyles(commonStyles.components.gridCell.researchIcon),
  },

  // FAQ specific styles
  faq: {
    numberCell: combineStyles(commonStyles.components.gridCell.number),
    contentCell: combineStyles(commonStyles.components.gridCell.content),
    questionCell: combineStyles(commonStyles.components.gridCell.question),
    titleCell: combineStyles(commonStyles.components.gridCell.title),
    navCell: combineStyles(commonStyles.components.gridCell.navigation),
    clipCell: combineStyles(commonStyles.components.gridCell.clip),
    itemContainer: "border border-black p-4 mb-2 bg-white",
    questionRow:
      "flex items-center justify-between cursor-pointer hover:bg-gray-50 p-4 border-b border-gray-200",
    answerRow:
      "p-4 bg-gray-50 border-b border-gray-200 transition-all duration-300 ease-in-out",
    expandIcon: "w-6 h-6 transition-transform duration-300",
    gridContainer: "grid grid-cols-1 gap-4",
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
