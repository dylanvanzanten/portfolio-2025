"use client";

import { ReactNode } from "react";
import { BreakpointKey } from "@/styles/globals";

export type ResponsiveCols = Partial<Record<BreakpointKey, number>>;

export interface GridBlockProps {
  children: ReactNode;
  cols?: number | ResponsiveCols;
  gutter?: boolean;
  className?: string;
}
