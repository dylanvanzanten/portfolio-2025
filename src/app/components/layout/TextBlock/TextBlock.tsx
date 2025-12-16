"use client";

import React from "react";

import { TextBlockStyles } from "@/components/layout/TextBlock/TextBlock.styles";

import { TextBlockProps } from "@/components/layout/TextBlock/TextBlock.types";

const TextBlock: React.FC<TextBlockProps> = ({
  children,
  className,
  columns = 1,
  title,
  titleAs: TitleTag = "h1",
}) => {
  return (
    <TextBlockStyles className={className} $columns={columns}>
      {title && <TitleTag className="text-block__title">{title}</TitleTag>}
      {children}
    </TextBlockStyles>
  );
};

export default TextBlock;
