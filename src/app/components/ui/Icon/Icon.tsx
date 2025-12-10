"use client";

import React from "react";

import { IconProps } from "@/components/ui/Icon/Icon.types";

import { IconStyles } from "@/components/ui/Icon/Icon.styles";

import SendIcon from "@/components/ui/Icon/Icons/Send";
import UserIcon from "@/components/ui/Icon/Icons/User";
import FlashIcon from "@/components/ui/Icon/Icons/Flash";
import BrandIcon from "@/components/ui/Icon/Icons/Brand";

const icons = {
  send: SendIcon,
  user: UserIcon,
  flash: FlashIcon,
  brand: BrandIcon,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconStyles className="icon" size={size} color={color}>
      <IconComponent />
    </IconStyles>
  );
};

export default Icon;
