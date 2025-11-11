// Centralized theme exports
import { colors } from "./colors";
import { spacing } from "./spacing";

export { colors, type ColorToken } from "./colors";
export { spacing, spacingClasses, type SpacingToken } from "./spacing";


// Theme configuration type
export type Theme = {
  colors: typeof colors;
  spacing: typeof spacing;
};

// Complete theme object
export const theme: Theme = {
  colors,
  spacing,
};

export default theme;
