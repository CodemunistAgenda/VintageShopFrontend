"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import {
  GiVintageRobot,
  GiRecycle,
  GiNotebook,
  GiDiamondTrophy,
} from "react-icons/gi";


export default function CategoriesSection() {
  const { t } = useTranslation();

  const categories = [
    {
      href: "/visitor/products/vintage",
      icon: <GiVintageRobot />,
      title: t("categories.vintage.title"),
      description: t("categories.vintage.description"),
    },
    {
      href: "/visitor/products/upcycled",
      icon: <GiRecycle />,
      title: t("categories.upcycled.title"),
      description: t("categories.upcycled.description"),
    },
    {
      href: "/visitor/products/designer",
      icon: <GiNotebook />,
      title: t("categories.designer.title"),
      description: t("categories.designer.description"),
    },
    {
      href: "/visitor/products/limited",
      icon: <GiDiamondTrophy />,
      title: t("categories.limited.title"),
      description: t("categories.limited.description"),
    },
  ];

  return (
    <StyledSection>
      <h2>{t("categories.heading")}</h2>
      <p className="subtitle">{t("categories.subtitle")}</p>
      <div className="grid">
        {categories.map((cat, idx) => (
          <Card href={cat.href} key={idx}>
            <Icon>{cat.icon}</Icon>
            <Title>{cat.title}</Title>
            <Description>{cat.description}</Description>
            <DiscoverLink>
              {t("categories.discover")} <FaArrowRight />
            </DiscoverLink>
          </Card>
        ))}
      </div>
    </StyledSection>
  );
}


const StyledSection = styled.section`
  padding: ${({ theme }) => theme.sectionPaddingLarge} ${({ theme }) => theme.containerPadding};
  background-color: ${({ theme }) => theme.sectionBackground};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin-bottom: 1rem;
    font-family: ${({ theme }) => theme.fonts.fontFamilyHeading};
  }

  p.subtitle {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.textSecondary};
    text-align: center;
    margin-bottom: 3rem;
    font-family: ${({ theme }) => theme.fonts.fontFamilyBody};
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.radii.lg};
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`;

const DiscoverLink = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease;
  cursor: pointer;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;
