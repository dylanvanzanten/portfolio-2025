import { useTranslations } from "next-intl";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section/Section";
import GridBlock from "@/components/layout/GridBlock/GridBlock";
import TextBlock from "@/components/layout/TextBlock/TextBlock";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <Container>
      <Section>
        <GridBlock cols={1}>
          <TextBlock columns={1} title={t("title")} titleAs="h6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </TextBlock>
        </GridBlock>
      </Section>
    </Container>
  );
}
