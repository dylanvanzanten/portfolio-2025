import styled, { css } from "styled-components";

import { TextBlockColumns } from "@/components/layout/TextBlock/TextBlock.types";

import { cssVars, media } from "@/styles";
import { typographySizes } from "@/styles/typography";

export const TextBlockStyles = styled.div<{ $columns: TextBlockColumns }>`
  ${({ $columns }) =>
    $columns > 1 &&
    css`
      column-count: ${$columns};
      column-gap: 2rem;
    `}

  .text-block__title {
    margin-bottom: ${cssVars.spacings.md}px;
  }
`;
