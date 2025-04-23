// src/components/shared/CategoryCard.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 3rem 2rem;
  border-radius: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
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

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
  
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

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, link }) => {
  return (
    <Card>
      <IconCircle>
        {icon}
      </IconCircle>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardLink to={link}>
        Entdecken <FaArrowRight />
      </CardLink>
    </Card>
  );
};

export default CategoryCard;