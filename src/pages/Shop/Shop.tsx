// src/pages/Shop/Shop.tsx

import React from 'react';
import styled from 'styled-components';

const ShopContainer = styled.div`
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
`;

const ShopTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space[4]};
`;

const ProductCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[4]};
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  margin-bottom: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

const ProductTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

const ProductPrice = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.primary};
`;

// Beispielprodukte
const dummyProducts = [
  { id: 1, title: 'Vintage Sessel', price: 249.99 },
  { id: 2, title: 'Designer Lampe', price: 129.99 },
  { id: 3, title: 'Retro Uhr', price: 89.99 },
  { id: 4, title: 'Upcycled Vase', price: 59.99 },
];

const Shop: React.FC = () => {
  return (
    <ShopContainer>
      <ShopTitle>Unsere Produkte</ShopTitle>
      <ProductGrid>
        {dummyProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price.toFixed(2)} €</ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
    </ShopContainer>
  );
};

export default Shop;