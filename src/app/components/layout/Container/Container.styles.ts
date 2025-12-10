"use client";

import styled, { css } from "styled-components";

import { media } from "@/styles/globals";

interface StyledContainerProps {
  $fluid?: boolean;
  $gutter?: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({ $gutter }) =>
    $gutter !== false &&
    css`
      ${media.md} {
        padding-left: 4px;
        padding-right: 4px;
        margin-left: 0;
        margin-right: 0;
      }
    `}

  ${({ $fluid }) =>
    !$fluid &&
    css`
      ${media.md} {
        max-width: var(--container-md);
      }

      ${media.lg} {
        max-width: var(--container-lg);
      }

      ${media.xl} {
        max-width: var(--container-xl);
      }
    `}
`;

export default StyledContainer;
