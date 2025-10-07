// Typography scale and font families

export type FontDefinition = {
  fontFamily: string;
  fontWeight?: number | string;
  lineHeight?: string | number;
  letterSpacing?: string;
  fontSize?: string;
};

export const fontFamilies = {
  display: "var(--font-display)", // CS Bohemian Demo
  body: "var(--font-body)", // PP Mori
  mono: 'var(--font-geist-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)',
} as const;

export const typeScale = {
  // Display / Headings use CS Bohemian Demo
  display2: {
    fontFamily: fontFamilies.display,
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    fontSize: "clamp(2.5rem, 2.1rem + 1.5vw, 4rem)",
  },
  display1: {
    fontFamily: fontFamilies.display,
    fontWeight: 700,
    lineHeight: 1.12,
    letterSpacing: "-0.02em",
    fontSize: "clamp(2rem, 1.7rem + 1vw, 3rem)",
  },
  h1: {
    fontFamily: fontFamilies.display,
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    fontSize: "2rem",
  },
  h2: {
    fontFamily: fontFamilies.display,
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-0.005em",
    fontSize: "1.75rem",
  },
  h3: {
    fontFamily: fontFamilies.display,
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "0",
    fontSize: "1.5rem",
  },
  // Body / UI use PP Mori
  bodyLg: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0",
    fontSize: "1.125rem",
  },
  body: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    lineHeight: 1.65,
    letterSpacing: "0",
    fontSize: "1rem",
  },
  bodySm: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0",
    fontSize: "0.875rem",
  },
  caption: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
    fontSize: "0.75rem",
  },
  overline: {
    fontFamily: fontFamilies.body,
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "0.08em",
    fontSize: "0.75rem",
  },
} as const satisfies Record<string, FontDefinition>;

export type Typography = {
  fontFamilies: typeof fontFamilies;
  typeScale: typeof typeScale;
};

export const typography: Typography = {
  fontFamilies,
  typeScale,
};

export default typography;
