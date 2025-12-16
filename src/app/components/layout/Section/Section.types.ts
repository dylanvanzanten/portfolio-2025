import { ReactNode } from "react";

export type SectionColor = "black" | "white";

export type SectionProps = {
  children: ReactNode;
  className?: string;
  color?: SectionColor;
};
