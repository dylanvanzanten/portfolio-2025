"use client";

import React from "react";

import StyledGridBlock from "@/components/layout/GridBlock/GridBlock.styles";
import { GridBlockProps } from "@/components/layout/GridBlock/GridBlock.types";

const GridBlock: React.FC<GridBlockProps> = ({
  children,
  cols,
  gutter,
  className,
}) => {
  return (
    <StyledGridBlock $cols={cols} $gutter={gutter} className={className}>
      {children}
    </StyledGridBlock>
  );
};

export default GridBlock;
