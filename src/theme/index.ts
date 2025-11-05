// Centralized theme exports
import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export { colors, type ColorToken } from "./colors";
export { spacing, spacingClasses, type SpacingToken } from "./spacing";
export {
  typography,
  fontFamilies,
  typeScale,
  type Typography,
  type FontDefinition,
} from "./typography";

// Theme configuration type
export type Theme = {
  colors: typeof colors;
  spacing: typeof spacing;
  typography: typeof typography;
};

// Complete theme object
export const theme: Theme = {
  colors,
  spacing,
  typography,
};

export default theme;
