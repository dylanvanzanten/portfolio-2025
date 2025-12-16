"use client";

import { css } from "styled-components";

// Re-export fonts from fonts.ts for backwards compatibility
export { inter, manrope } from "./fonts";

// Typography Sizes
export enum typographySizes {
  xs = 12,
  sm = 14,
  md = 16,
  lg = 18,
  "1xl" = 20,
  "2xl" = 24,
  "3xl" = 30,
  "4xl" = 36,
  "5xl" = 48,
  "6xl" = 60,
  "7xl" = 72,
  "8xl" = 96,
  "9xl" = 128,
  "10xl" = 160,
}

export enum typographyWeights {
  light = 300,
  regular = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
  extrabold = 800,
  black = 900,
}

export enum typographyStyles {
  normal = "normal",
  italic = "italic",
}

// Typography CSS - uses CSS variables set by Next.js fonts
export const Typography = css`
  body {
    line-height: 1.25;
    font-weight: 300;
    font-family: var(--font-inter), system-ui, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-manrope), system-ui, sans-serif;
    margin: 0;
  }

  h1 {
    font-size: ${typographySizes["6xl"]}px;
    font-weight: ${typographyWeights.bold};
  }

  h2 {
    font-size: ${typographySizes["5xl"]}px;
    font-weight: ${typographyWeights.bold};
  }

  h3 {
    font-size: ${typographySizes["4xl"]}px;
    font-weight: ${typographyWeights.bold};
  }

  h4 {
    font-size: ${typographySizes["3xl"]}px;
    font-weight: ${typographyWeights.bold};
  }

  h5 {
    font-size: ${typographySizes["2xl"]}px;
    font-weight: ${typographyWeights.bold};
  }

  h6 {
    font-size: ${typographySizes["1xl"]}px;
    font-weight: ${typographyWeights.bold};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
