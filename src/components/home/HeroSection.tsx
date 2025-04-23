// src/components/Home/HeroSection.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  padding: 8rem 4rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background-image: url('/images/hero-pattern.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    opacity: 0.15;
    z-index: 1;
  }
`;

const Content = styled.div`
  max-width: 700px;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  .highlight {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2.5rem;
  max-width: 550px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 2px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
  
  svg {
    font-size: 0.8rem;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.9rem 1.8rem;
  border-radius: 2px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: white;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>
          <span className="highlight">Vintage</span> neu<br />entdecken
        </Title>
        <Subtitle>
          Einzigartige Schätze und zeitlose Designs für einen nachhaltigen Lebensstil.
        </Subtitle>
        <ButtonGroup>
          <PrimaryButton to="/kollektionen">
            Kollektionen entdecken <FaArrowRight />
          </PrimaryButton>
          <SecondaryButton to="/ueber-uns">
            Unsere Geschichte
          </SecondaryButton>
        </ButtonGroup>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;