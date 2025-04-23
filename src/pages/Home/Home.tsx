// src/pages/Home/Home.tsx
import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import CollectionsSection from '../../components/home/CollectionsSection';
import HighlightsSection from '../../components/home/HighlightsSection';
import ValuesSection from '../../components/home/ValuesSection';
import NewsletterSection from '../../components/home/NewsletterSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <HighlightsSection />
      <ValuesSection />
      <NewsletterSection />
    </>
  );
};

export default Home;