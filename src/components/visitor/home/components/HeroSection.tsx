import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { fetchProducts } from "@/store/productsSlice";
import type { AppDispatch, RootState } from "@/store";
import ProductSlider from "./ProductSlider";
import {
  HeroSectionWrapper,
  Content,
  Title,
  Highlight,
  Description,
  ButtonGroup,
  StyledLink,
} from "../styles/HeroSection.styles";

export default function HeroSection() {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <HeroSectionWrapper>
      <ProductSlider products={filteredProducts} />
      <Content>
        <Title>
          <Highlight>{t("hero.titleHighlight")}</Highlight> {t("hero.titleRest")}
        </Title>
        <Description>{t("hero.description")}</Description>
        <ButtonGroup>
          <StyledLink href="/visitor/products" $variant="primary">
            {t("hero.ctaCollections")} <FaArrowRight />
          </StyledLink>
          <StyledLink href="/visitor/stories" $variant="outline">
            {t("hero.ctaStory")}
          </StyledLink>
        </ButtonGroup>
      </Content>
    </HeroSectionWrapper>
  );
}
