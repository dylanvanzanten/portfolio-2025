"use client";

import React from "react";
import StyledComponentsRegistry from "./registery";
import { GlobalStyles } from "@/styles/globals";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {children}
    </StyledComponentsRegistry>
  );
}
