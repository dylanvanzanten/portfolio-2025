import { Manrope, Inter } from "next/font/google";

// Font instances - must be used in layout.tsx to load the fonts
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


