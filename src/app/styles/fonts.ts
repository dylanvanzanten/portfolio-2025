import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "../../../public/fonts/Manrope-VariableFont_wght.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Manrope-VariableFont_wght.woff",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const inter = localFont({
  src: [
    {
      path: "../../../public/fonts/Inter-VariableFont_opsz,wght.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Inter-VariableFont_opsz,wght.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
