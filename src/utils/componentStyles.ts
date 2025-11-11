import { commonStyles, combineStyles } from "./commonStyles";

export const componentStyles = {
  // Research component styles
  research: {
    section: combineStyles(
      "relative w-full bg-[#121212] text-white",
      commonStyles.spacing.section
    ),
    grid: "grid grid-cols-6 grid-rows-5",
    contentArea: combineStyles(
      "col-span-3 row-span-4",
      commonStyles.border,
      commonStyles.spacing.container,
      commonStyles.spacing.section
    ),
    imageArea: "col-span-3 row-span-5 flex items-center",
    navigationArea: combineStyles(
      "col-start-4 row-start-5",
      commonStyles.border,
      commonStyles.flex.center,
      "relative"
    ),
    iconArea: combineStyles(
      "col-start-5 w-full row-start-5",
      commonStyles.border,
      commonStyles.flex.center
    ),
    arrowArea: combineStyles(
      "col-start-6 row-start-5",
      commonStyles.border,
      commonStyles.flex.center
    ),
    navigationButton: combineStyles(
      "p-3 mx-auto border border-[#FFFFFF] rounded-full",
      commonStyles.animation.transition
    ),
  },

  // Section2 component styles
  section2: {
    container: "w-full bg-white",
    grid: "grid grid-cols-10 grid-rows-6 border border-black",
    emptyCell: combineStyles(
      "border border-black h-30",
      commonStyles.animation.transition
    ),
    handCell: combineStyles(
      "border border-black h-30 bg-[#D0FFAC]",
      commonStyles.flex.center
    ),
    contentCell: combineStyles(
      "col-span-8 row-span-4 border border-black",
      commonStyles.flex.center,
      "gap-8 p-12 bg-white"
    ),
    arrowCell: combineStyles(
      "row-span-3 border border-black",
      commonStyles.flex.center,
      "relative"
    ),
    iconCell: combineStyles(
      "border border-black h-30",
      commonStyles.flex.center,
      "relative"
    ),
  },

  // Navbar component styles
  navbar: {
    container: "relative flex items-center md:items-start justify-between",
    logoArea: "flex-1 flex items-center p-10",
    centerArea: "hidden md:flex flex-1 justify-center",
    rightArea: "hidden md:flex flex-1 justify-end",
    mobileCenterArea: "flex md:hidden flex-1 justify-center",
    mobileRightArea: "flex md:hidden flex-1 justify-end",
    menuList: combineStyles(
      "fixed flex flex-col items-end gap-2 bg-[#FFFFFF] p-10 z-10 rounded-lg",
      commonStyles.animation.transition
    ),
    menuItem: combineStyles("group", commonStyles.animation.transition),
    menuLink: combineStyles(
      "uppercase tracking-wide group-hover:text-[#A885CD]",
      commonStyles.animation.transition
    ),
    mobileMenuButton: combineStyles(
      "inline-flex text-black items-center justify-center p-2 rounded-md",
      commonStyles.animation.transition
    ),
    mobileMenuPanel: combineStyles(
      "w-full mx-auto mt-3 rounded-xl border border-white/10 bg-black shadow-2xl backdrop-blur-md p-4",
      commonStyles.animation.transition
    ),
    mobileMenuList: "flex flex-col items-end gap-3",
  },
};

// Typography presets for common text patterns
export const typographyPresets = {
  heading: {
    hero: combineStyles(
      commonStyles.typography.heading.h1,
      "uppercase tracking-[-0.02em] leading-[0.95]"
    ),
    section: combineStyles(
      commonStyles.typography.heading.h2,
      "text-center uppercase tracking-wider"
    ),
    mobile: combineStyles(
      commonStyles.typography.heading.h3,
      "text-center uppercase tracking-wider"
    ),
  },
  body: {
    description: combineStyles(
      commonStyles.typography.body.medium,
      "max-w-xl leading-relaxed"
    ),
    content: combineStyles(
      commonStyles.typography.body.medium,
      "tracking-wide"
    ),
  },
  navigation: {
    link: combineStyles(
      commonStyles.typography.body.medium,
      "uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
    ),
    mobileLink: combineStyles(
      commonStyles.typography.body.medium,
      "uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
    ),
  },
};
