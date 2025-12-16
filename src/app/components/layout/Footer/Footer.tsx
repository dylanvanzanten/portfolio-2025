"use client";

import { FooterStyles } from "@/components/layout/Footer/Footer.styles";
import Container from "@/components/layout/Container";
import GridBlock from "@/components/layout/GridBlock/GridBlock";

const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <GridBlock cols={1}>
          <p>Footer</p>
        </GridBlock>
        <GridBlock cols={{ xs: 1, md: 2 }}>
          <p>Footer</p>
        </GridBlock>
        <GridBlock cols={{ xs: 1, md: 2 }}>
          <p>Footer</p>
          <p>Footer</p>
        </GridBlock>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
