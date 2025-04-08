import styled from "styled-components";
import Link from "next/link";

export const HeroSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 4rem;
  background: ${({ theme }) => theme.heroBackground};
  gap: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 1.5rem;
  }
`;

export const Content = styled.div`
  width: 50%;
  flex-shrink: 0;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CarouselWrapper = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;

  @media (max-width: 768px) {
    order: 2;
    margin-top: 2rem;
    width: 100%;
  }
`;


export const Title = styled.h1`
  font-family: var(--font-family-heading);
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.primary};
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.3;
  }
`;

export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)<{ $variant?: "primary" | "outline" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  font-family: var(--font-family-body);
  font-size: 1rem;
  transition: background-color 0.3s ease;

  background-color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.primary : "transparent"};
  color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.buttonText : theme.primary};
  border: ${({ $variant, theme }) =>
    $variant === "outline" ? `2px solid ${theme.primary}` : "none"};

  &:hover {
    background-color: ${({ $variant, theme }) =>
      $variant === "primary"
        ? theme.primaryHover
        : theme.primaryTransparent || "rgba(217, 164, 65, 0.1)"};
  }
`;



export const Slide = styled.div`
  width: 100%;
  display: flex;
  transition: transform 0.6s ease-in-out;
  position: relative;

  & > div {
    width: 100%;
  }
`;

export const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? "left: -1.5rem;" : "right: -1.5rem;")}
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.text};
  font-size: 1.2rem;
  padding: 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryTransparent || "rgba(217, 164, 65, 0.1)"};
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: -1.5rem;
    ${({ left }) => (left ? "left: 1rem;" : "right: 1rem;")}
  }
`;


