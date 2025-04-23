// src/pages/About/About.tsx

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
`;

const AboutSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.primary};
`;

const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>Über Retroy</AboutTitle>
      
      <AboutSection>
        <SectionTitle>Unsere Geschichte</SectionTitle>
        <Paragraph>
          Retroy wurde 2020 mit einer einfachen Vision gegründet: Vintage-Schätze und nachhaltige Designs für bewusste Verbraucher zugänglich zu machen. Was als kleine Sammlung kuratierter Stücke begann, hat sich zu einer vielseitigen Plattform entwickelt, die Vintage-Liebhaber, Nachhaltigkeitsbefürworter und Designenthusiasten zusammenbringt.
        </Paragraph>
        <Paragraph>
          Unser Name "Retroy" verbindet die Begriffe "Retro" und "Joy" - die Freude am Zeitlosen. Wir glauben, dass gut gestaltete Objekte die Zeit überdauern und immer wieder Freude bereiten können.
        </Paragraph>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Unsere Mission</SectionTitle>
        <Paragraph>
          Wir sind überzeugt, dass nachhaltige Konsumgewohnheiten und ästhetisches Design Hand in Hand gehen können. Indem wir hochwertige Vintage-Stücke einer neuen Generation von Liebhabern zugänglich machen und mit unabhängigen Designern zusammenarbeiten, die von der Vergangenheit inspiriert sind, schaffen wir eine Brücke zwischen gestern und morgen.
        </Paragraph>
        <Paragraph>
          Jedes bei Retroy angebotene Produkt wird sorgfältig ausgewählt, aufbereitet und präsentiert, um sicherzustellen, dass es nicht nur ein Gegenstand ist, sondern ein Stück mit Geschichte und Charakter, das Ihr Zuhause und Leben bereichern wird.
        </Paragraph>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Nachhaltigkeit</SectionTitle>
        <Paragraph>
          Nachhaltigkeit steht im Mittelpunkt unserer Philosophie. Durch die Förderung der Wiederverwendung und Wertschätzung bereits vorhandener Produkte helfen wir, den Verbrauch neuer Ressourcen zu reduzieren. Unsere Verpackungen sind recyclebar, und wir arbeiten kontinuierlich daran, unseren ökologischen Fußabdruck zu minimieren.
        </Paragraph>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;