// src/components/Layout/Layout/Layout.tsx
import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Main = styled.main`
  min-height: 70vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;