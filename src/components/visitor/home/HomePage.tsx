"use client";

import { useEffect } from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedSection from "./components/FeaturedSection";
import ValuesSection from "./components/ValuesSection";
import NewsletterBanner from "./components/NewsletterBanner";

const HomeContainer = styled.div``;

const HomeMain = styled.main``;

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer>
      <HomeMain>
        <HeroSection />
        <CategoriesSection />
        <FeaturedSection />
        <ValuesSection />
        <NewsletterBanner />
      </HomeMain>
    </HomeContainer>
  );
}
