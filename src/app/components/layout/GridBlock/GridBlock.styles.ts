"use client";

import styled, { css } from "styled-components";
import { media, BreakpointKey } from "@/styles/globals";
import { ResponsiveCols } from "@/components/layout/GridBlock/GridBlock.types";

interface StyledGridBlockProps {
  $cols?: number | ResponsiveCols;
  $gutter?: boolean;
}

const breakpointOrder: BreakpointKey[] = ["xs", "sm", "md", "lg", "xl", "xxl"];

const getColStyles = (cols: number) => css`
  flex: ${cols} 0 calc(100% / ${cols});
  max-width: calc(100% / ${cols});
`;

const StyledGridBlock = styled.div<StyledGridBlockProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ $cols = 1 }) => {
    if (typeof $cols === "number") {
      return getColStyles($cols);
    }

    return breakpointOrder.map((breakpoint) => {
      const colValue = $cols[breakpoint];
      if (colValue === undefined) return null;

      return css`
        ${media[breakpoint]} {
          ${getColStyles(colValue)}
        }
      `;
    });
  }}

  ${({ $gutter = true }) =>
    $gutter &&
    css`
      padding-left: 1rem;
      padding-right: 1rem;
    `}
`;

export default StyledGridBlock;
