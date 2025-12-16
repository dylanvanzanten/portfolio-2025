"use client";

import { createGlobalStyle } from "styled-components";

import SanitizeStyle from "@/styles/sanitize";
import { Typography, inter, manrope } from "@/styles/typography";

// Breakpoints
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 767,
  lg: 980,
  xl: 1314,
  xxl: 1440,
} as const;

export type BreakpointKey = keyof typeof breakpoints;

// Container max-widths
export const containerWidths = {
  xs: "100%",
  sm: "540px",
  md: "720px",
  lg: "940px",
  xl: "1280px",
  xxl: "1400px",
} as const;

// Spacings
enum Spacings {
  xxs = 4,
  xs = 8,
  sm = 12,
  md = 16,
  lg = 20,
  "1xl" = 24,
  "2xl" = 32,
  "3xl" = 40,
  "4xl" = 48,
  "5xl" = 56,
  "6xl" = 64,
  "7xl" = 72,
  "8xl" = 80,
  "9xl" = 88,
  "10xl" = 96,
  "11xl" = 128,
  "12xl" = 160,
  "13xl" = 192,
  "14xl" = 224,
  "15xl" = 256,
}

// Media query helpers (min-width)
export const media = {
  xs: `@media (min-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  xxl: `@media (min-width: ${breakpoints.xxl}px)`,
} as const;

// Colors
export enum Colors {
  primary = "#",
  secondary = "#",
  tertiary = "#",
  quaternary = "#",
  quinary = "#",
  senary = "#",
  septenary = "#",
  octonary = "#",
  black = "#000000",
  white = "#FFFFFF",
}

// CSS Variables object for use in JS
export const cssVars = {
  breakpoint: {
    xs: `${breakpoints.xs}px`,
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`,
    xxl: `${breakpoints.xxl}px`,
  },
  container: containerWidths,
  spacings: Spacings,
  colors: Colors,
} as const;

// Global CSS Variables injection
export const GlobalStyles = createGlobalStyle`
  ${SanitizeStyle}
  ${Typography}

  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }
  
  :root {
    /* Breakpoints */
    --breakpoint-xs: ${breakpoints.xs}px;
    --breakpoint-sm: ${breakpoints.sm}px;
    --breakpoint-md: ${breakpoints.md}px;
    --breakpoint-lg: ${breakpoints.lg}px;
    --breakpoint-xl: ${breakpoints.xl}px;
    --breakpoint-xxl: ${breakpoints.xxl}px;

    /* Container max-widths */
    --container-xs: ${containerWidths.xs};
    --container-sm: ${containerWidths.sm};
    --container-md: ${containerWidths.md};
    --container-lg: ${containerWidths.lg};
    --container-xl: ${containerWidths.xl};
    --container-xxl: ${containerWidths.xxl};

    /* Colors */
    --color-primary: ${Colors.primary};
    --color-secondary: ${Colors.secondary};
    --color-tertiary: ${Colors.tertiary};
    --color-quaternary: ${Colors.quaternary};
    --color-quinary: ${Colors.quinary};
    --color-senary: ${Colors.senary};
    --color-septenary: ${Colors.septenary};
    --color-black: ${Colors.black};
    --color-white: ${Colors.white};

    /* Typography */
    --font-manrope: ${manrope.style.fontFamily};
    --font-inter: ${inter.style.fontFamily};
  }
`;
