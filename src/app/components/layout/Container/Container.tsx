"use client";

import React from "react";

import StyledContainer from "@/components/layout/Container/Container.styles";
import { ContainerProps } from "@/components/layout/Container/Container.types";

const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  gutter = true,
  className,
}) => {
  return (
    <StyledContainer $fluid={fluid} $gutter={gutter} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
