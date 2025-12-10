"use client";

import React from "react";
import Link from "next/link";

import {
  HeaderProps,
  NavigationItem,
} from "@/components/layout/Header/Header.types";
import StyledHeader from "@/components/layout/Header/Header.styles";
import headerMock from "@/components/layout/Header/Header.mock";

import Container from "@/components/layout/Container/Container";
import GridBlock from "@/components/layout/GridBlock/GridBlock";
import Icon from "@/components/ui/Icon/Icon";
import { PossibleIcons } from "@/components/ui/Icon/Icon.types";

const Header: React.FC<HeaderProps> = () => {
  const navigation: NavigationItem[] = headerMock.navigation.map(
    (item: any) => ({
      ...item,
      icon: item.icon || null,
    })
  );

  return (
    <StyledHeader>
      <Container fluid>
        <GridBlock cols={{ xs: 1 }}>
          <Link
            href={headerMock.brand.homeHref || "/"}
            title={headerMock.brand.logoAltText}
            className="logo"
          >
            <img
              src={headerMock.brand.logoSrc}
              alt={headerMock.brand.logoAltText}
            />
          </Link>
          <nav className="navigation">
            <ul>
              {navigation.map((item: NavigationItem) => (
                <li key={item.href}>
                  <Link href={item.href} className="navigation__link">
                    {item.label}
                    {item.icon ? (
                      <Icon
                        name={item.icon as PossibleIcons}
                        color="black"
                        size={24}
                      />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </GridBlock>
      </Container>
    </StyledHeader>
  );
};

export default Header;
