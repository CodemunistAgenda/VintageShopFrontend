"use client";

import { FaLeaf, FaStar, FaRegClock } from "react-icons/fa";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function ValuesSection() {
  const { t } = useTranslation();

  const values = [
    {
      icon: <FaLeaf />,
      title: t("values.sustainability.title"),
      text: t("values.sustainability.description"),
    },
    {
      icon: <FaStar />,
      title: t("values.quality.title"),
      text: t("values.quality.description"),
    },
    {
      icon: <FaRegClock />,
      title: t("values.heritage.title"),
      text: t("values.heritage.description"),
    },
  ];

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t("values.sectionTitle")}</SectionTitle>
        <SectionSubtitle>{t("values.sectionSubtitle")}</SectionSubtitle>
      </SectionHeader>

      <Grid>
        {values.map((val, idx) => (
          <Card key={idx}>
            <IconWrapper>{val.icon}</IconWrapper>
            <Title>{val.title}</Title>
            <Description>{val.text}</Description>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}




const Section = styled.section`
  padding: ${({ theme }) => theme.sectionPaddingLarge} ${({ theme }) => theme.containerPadding};
  background-color: ${({ theme }) => theme.sectionBackground};
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.sectionPaddingMedium};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.fonts.fontFamilyHeading};
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textSecondary};
  font-family: ${({ theme }) => theme.fonts.fontFamilyBody};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 2rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.fontFamilyHeading};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.fonts.fontFamilyBody};
`;
