import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: "../../../public/fonts/roboto-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roboto-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

// Typography Sizes
enum typographySizes {
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

enum typographyWeights {
  regular = 400,
  medium = 500,
}

enum typographyStyles {
  normal = "normal",
  italic = "italic",
}

const typographyStyle = {
  roboto,
  typographySizes,
  typographyWeights,
  typographyStyles,
};

export default typographyStyle;
