// src/components/Home/CollectionsSection.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { GiVintageRobot, GiRecycle, GiNotebook, GiDiamondTrophy } from 'react-icons/gi';

const SectionContainer = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background-color:rgb(255, 255, 255) !important;
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

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  padding: 3rem 2rem;
  border-radius: 4px;
  transition: transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
  position: relative;
  box-shadow: -2px 0px 5px lightgrey;

  /* WICHTIG: Für echten 3D Effekt */
  transform-style: preserve-3d;
  perspective: 20px;

  /* Kippachse am unteren Rand */
  transform-origin: bottom center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: skewX(-10deg);
    transform-origin: left;
  }

  &:hover {
  transform: rotateX(-10deg) translateY(-20px) scale(1.01);
  box-shadow: 
  0 40px 60px -10px ${({ theme }) => theme.colors.boxShadowCard},
  0 15px 0px -20px rgba(131, 131, 131, 0.1);
  }
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundIcon};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
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

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const CollectionsSection = () => {
  const collections = [
    {
      icon: <GiVintageRobot />,
      title: 'Vintage-Schätze',
      description: 'Handverlesene Stücke mit Geschichte und Charakter',
      link: '/shop/vintage'
    },
    {
      icon: <GiRecycle />,
      title: 'Upcycling-Produkte',
      description: 'Kreativ wiederbelebte Materialien mit neuer Bestimmung',
      link: '/shop/upcycled'
    },
    {
      icon: <GiNotebook />,
      title: 'Designer-Kollektionen',
      description: 'Vintage-inspirierte Kreationen unabhängiger Designer',
      link: '/shop/designer'
    },
    {
      icon: <GiDiamondTrophy />,
      title: 'Limitierte Editionen',
      description: 'Exklusive Sammlerstücke in begrenzter Auflage',
      link: '/shop/limited'
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Unsere Kollektionen</SectionTitle>
      <SectionSubtitle>Entdecke unsere sorgfältig kuratierten Kollektionen</SectionSubtitle>
      
      <CardsGrid>
        {collections.map((collection, index) => (
          <Card key={index}>
            <IconCircle>
              {collection.icon}
            </IconCircle>
            <CardTitle>{collection.title}</CardTitle>
            <CardDescription>{collection.description}</CardDescription>
            <CardLink to={collection.link}>
              Entdecken <FaArrowRight />
            </CardLink>
          </Card>
        ))}
      </CardsGrid>
    </SectionContainer>
  );
};

export default CollectionsSection;