"use client";

import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  fluid?: boolean;
  gutter?: boolean;
  className?: string;
}

