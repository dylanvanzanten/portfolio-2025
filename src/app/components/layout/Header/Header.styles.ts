"use client";

import styled from "styled-components";

import { media, cssVars } from "@/styles/globals";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;

  .logo {
    max-width: 120px;
    width: 100%;
    height: 100%;
    display: flex;
    align-self: center;
    flex-shrink: 0;
    margin: 0;

    ${media.md} {
      margin: 0 ${cssVars.spacings.lg}px 0 0;
    }

    img {
      width: 100%;
    }
  }

  .header__content {
    justify-content: space-between;

    ${media.md} {
      justify-content: flex-start;
    }

    &-contact-button {
      display: block;

      ${media.md} {
        display: none;
      }
    }
  }

  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    border-top: 1px solid #eaeaea;
    z-index: 1000;
    padding: ${cssVars.spacings.lg}px 0;

    /* Add safe area padding for devices with home indicators (iPhone X+) */
    padding-bottom: calc(
      ${cssVars.spacings.lg}px + env(safe-area-inset-bottom)
    );

    ${media.md} {
      position: static;
      background: transparent;
      border-top: none;
      margin-left: auto;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0;
      margin: 0;

      ${media.md} {
        justify-content: space-between;
      }

      li {
        flex: 1;
        text-align: center;

        ${media.md} {
          flex: initial;
          text-align: left;
        }

        .navigation__link {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: ${cssVars.spacings.xs}px;
          padding: ${cssVars.spacings.xs}px;
          font-size: 12px;

          ${media.md} {
            flex-direction: row;
            margin: 0 ${cssVars.spacings.lg}px;
            padding: ${cssVars.spacings.lg}px 0;
            font-size: inherit;
          }
        }
      }
    }
  }
`;

export default StyledHeader;
