"use client";

import React from "react";

import { SectionStyles } from "@/components/layout/Section/Section.styles";

import { SectionProps } from "@/components/layout/Section/Section.types";

const Section: React.FC<SectionProps> = ({ children, className, color }) => {
  return (
    <SectionStyles className={className} color={color}>
      {children}
    </SectionStyles>
  );
};

export default Section;
