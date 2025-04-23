// src/components/Home/ValuesSection.tsx
import styled from 'styled-components';
import { FaLeaf, FaStar, FaHistory } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 1.5rem auto 0;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ValueCard = styled.div`
  position: relative;
  background-color: #f9f9f9;
  padding: 3rem 2rem;
  border-radius: 4px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-left: none;
    border-radius: 0 4px 4px 0;
    opacity: 0.2;
    pointer-events: none;
  }
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
  color: black;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ValuesSection = () => {
  const values = [
    {
      icon: <FaLeaf />,
      title: 'Nachhaltigkeit',
      description: 'Wir setzen auf Wiederverwendung und ressourcenschonende Praktiken, um die Umweltbelastung zu reduzieren.'
    },
    {
      icon: <FaStar />,
      title: 'Qualität',
      description: 'Jedes Stück wird sorgfältig geprüft, um langlebige und zeitlose Produkte zu garantieren.'
    },
    {
      icon: <FaHistory />,
      title: 'Geschichte',
      description: 'Unsere Produkte erzählen Geschichten aus verschiedenen Epochen und bewahren kulturelles Erbe.'
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Unsere Werte</SectionTitle>
      <SectionSubtitle>Was Retroy besonders macht</SectionSubtitle>
      
      <ValuesGrid>
        {values.map((value, index) => (
          <ValueCard key={index}>
            <IconCircle>
              {value.icon}
            </IconCircle>
            <ValueTitle>{value.title}</ValueTitle>
            <ValueDescription>{value.description}</ValueDescription>
          </ValueCard>
        ))}
      </ValuesGrid>
    </SectionContainer>
  );
};

export default ValuesSection;