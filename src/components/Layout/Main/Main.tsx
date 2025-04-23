// src/components/Layout/Main/Main.tsx

import React from 'react';
import styled from 'styled-components';

interface MainProps {
  children: React.ReactNode;
}

const MainContainer = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Main: React.FC<MainProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;