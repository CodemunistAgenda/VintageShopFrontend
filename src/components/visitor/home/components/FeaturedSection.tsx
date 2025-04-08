"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/productsSlice";
import type { AppDispatch, RootState } from "@/store";
import { useTranslation } from "react-i18next";


export default function FeaturedSection() {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading } = useSelector((state: RootState) => state.products);
  const { t } = useTranslation();

  useEffect(() => {
    if (filteredProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, filteredProducts.length]);

  const featured = filteredProducts.slice(0, 4);
  const badges = [t("badge.new"), t("badge.bestseller"), t("badge.limited"), t("badge.designer")];

  return (
    <Section>
      <SectionTitle>{t("featured.title")}</SectionTitle>
      <SectionSubtitle>{t("featured.subtitle")}</SectionSubtitle>

      <Grid>
        {featured.map((product, index) => (
          <ProductCard key={product._id}>
            <ImageContainer>
              {product.images?.[0] ? (
                <ProductImage
                  src={product.images[0]}
                  alt={product.title}
                />
              ) : (
                <PlaceholderIcon />
              )}
              <Badge>{badges[index] || t("badge.highlight")}</Badge>
            </ImageContainer>
            <Info>
              <Category>{product.category}</Category>
              <Title>{product.title}</Title>
              <Price>€{product.price.toFixed(2)}</Price>
            </Info>
          </ProductCard>
        ))}
      </Grid>

      <ActionWrapper>
        <ActionButton href="/visitor/products">
          {t("featured.viewAll")}
        </ActionButton>
      </ActionWrapper>
    </Section>
  );
}


const Section = styled.section`
  padding: ${({ theme }) => theme.sectionPaddingLarge} ${({ theme }) => theme.containerPadding};
  background-color: ${({ theme }) => theme.background};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.fontFamilyHeading};
  color: ${({ theme }) => theme.text};
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.textSecondary};
  font-family: ${({ theme }) => theme.fonts.fontFamilyBody};
  margin-bottom: ${({ theme }) => theme.sectionPaddingMedium};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.light};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundAlt};
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const PlaceholderIcon = styled(FaSearch)`
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.whiteColor};
  padding: 0.3rem 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

const Info = styled.div`
  padding: 1rem;
`;

const Category = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.4rem;
  font-family: ${({ theme }) => theme.fonts.fontFamilyBody};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.fontFamilyHeading};
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.primary};
`;

const ActionWrapper = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.sectionPaddingMedium};
`;

const ActionButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonTextColor};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.normal};

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
  }
`;
