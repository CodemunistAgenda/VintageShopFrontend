// src/components/shared/Button/Button.tsx

import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};

  /* Variant styles */
  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.backgroundAlt};
          color: ${theme.colors.text};
          border: none;
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background-color: ${theme.colors.primary};
            color: white;
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: ${theme.colors.primary};
          color: white;
          border: none;
          
          &:hover {
            background-color: ${theme.colors.primaryHover};
          }
        `;
    }
  }}

  /* Size styles */
  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0.5rem 1rem;
          font-size: ${theme.fontSizes.sm};
        `;
      case 'large':
        return css`
          padding: 1rem 2rem;
          font-size: ${theme.fontSizes.lg};
        `;
      case 'medium':
      default:
        return css`
          padding: 0.75rem 1.5rem;
          font-size: ${theme.fontSizes.base};
        `;
    }
  }}

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export default Button;