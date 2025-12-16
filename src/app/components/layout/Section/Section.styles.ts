"use client";

import styled, { css } from "styled-components";

import { cssVars, media } from "@/styles";
import { typographySizes } from "@/styles/typography";

export const SectionStyles = styled.section`
  display: block;

  ${({ color }) =>
    color === "primary" &&
    css`
      background-color: var(--color-black);
    `}

  ${({ color }) =>
    color === "secondary" &&
    css`
      background-color: var(--color-secondary);
    `}

  ${({ color }) =>
    color === "tertiary" &&
    css`
      background-color: var(--color-tertiary);
    `}

  ${({ color }) =>
    color === "quaternary" &&
    css`
      background-color: var(--color-quaternary);
    `}

  ${({ color }) =>
    color === "quinary" &&
    css`
      background-color: var(--color-quinary);
    `}

  ${({ color }) =>
    color === "senary" &&
    css`
      background-color: var(--color-senary);
    `}

  ${({ color }) =>
    color === "septenary" &&
    css`
      background-color: var(--color-septenary);
    `}

  ${({ color }) =>
    color === "black" &&
    css`
      background-color: var(--color-black);
    `}

  ${({ color }) =>
    color === "white" &&
    css`
      background-color: var(--color-white);
    `}
`;
