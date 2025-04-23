// src/pages/Cart/Cart.tsx

import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[4]};
  max-width: 1000px;
  margin: 0 auto;
`;

const CartTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[12]} 0;
`;

const EmptyCartMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ShopNowButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const Cart: React.FC = () => {
  // In einer echten Anwendung würden wir hier den Warenkorb-Zustand aus Redux oder einem anderen State-Management abrufen
  const cartItems = [];
  
  return (
    <CartContainer>
      <CartTitle>Warenkorb</CartTitle>
      
      {cartItems.length === 0 ? (
        <EmptyCart>
          <EmptyCartMessage>Ihr Warenkorb ist leer.</EmptyCartMessage>
          <ShopNowButton onClick={() => window.location.href = '/shop'}>
            Jetzt einkaufen
          </ShopNowButton>
        </EmptyCart>
      ) : (
        <div>
          {/* Hier würden die Warenkorbartikel angezeigt werden */}
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;