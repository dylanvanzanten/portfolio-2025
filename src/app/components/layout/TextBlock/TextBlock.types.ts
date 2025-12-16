import { ReactNode } from "react";

export type TextBlockColumns = 1 | 2 | 3;

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextBlockProps = {
  children: ReactNode;
  className?: string;
  columns?: TextBlockColumns;
  title?: string;
  titleAs?: HeadingLevel;
};
