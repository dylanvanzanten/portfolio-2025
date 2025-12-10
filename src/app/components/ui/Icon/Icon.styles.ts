"use client";

import styled from "styled-components";

import { media } from "@/styles";

export const IconStyles = styled.span<{ size?: number; color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};

  ${media.md} {
    display: none;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
