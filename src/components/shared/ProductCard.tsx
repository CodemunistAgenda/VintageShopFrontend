// Produkt Karte mit allen API abrufen aus der DB// src/components/shared/ProductCard.tsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number | string;
  image: string;
  category: string;
  title: string;
  price: string;
  badge?: string;
}

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

const ProductCategory = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProductCard: React.FC<ProductCardProps> = ({ id, image, category, title, price, badge }) => {
  return (
    <Card>
      <Link to={`/produkt/${id}`}>
        {badge && <Badge>{badge}</Badge>}
        <ProductImage src={image} alt={title} />
        <ProductInfo>
          <ProductCategory>{category}</ProductCategory>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>€{price}</ProductPrice>
        </ProductInfo>
      </Link>
    </Card>
  );
};

export default ProductCard;