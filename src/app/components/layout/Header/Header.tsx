"use client";

import React from "react";
import Link from "next/link";

import {
  HeaderProps,
  NavigationItem,
} from "@/components/layout/Header/Header.types";
import { IconList } from "@/components/ui/Icon/Icon.types";

import { useTranslations } from "next-intl";

import StyledHeader from "@/components/layout/Header/Header.styles";

import headerMock from "@/components/layout/Header/Header.mock";

import GridBlock from "@/components/layout/GridBlock/GridBlock";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";

const Header: React.FC<HeaderProps> = () => {
  const navigation: NavigationItem[] = headerMock.navigation.map(
    (item: any) => ({
      ...item,
      icon: item.icon || null,
    })
  );

  const t = useTranslations("header");

  return (
    <StyledHeader>
      <GridBlock cols={{ xs: 1 }} className="header__content">
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
        <Button
          variant="primary"
          size="medium"
          className="header__content-contact-button"
        >
          <span>{t("contact")}</span>
        </Button>
        <nav className="navigation">
          <ul>
            {navigation.map((item: NavigationItem) => (
              <li key={item.href}>
                <Link href={item.href} className="navigation__link">
                  {item.icon ? (
                    <Icon
                      name={item.icon as IconList}
                      color="black"
                      size={24}
                    />
                  ) : null}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </GridBlock>
    </StyledHeader>
  );
};

export default Header;
