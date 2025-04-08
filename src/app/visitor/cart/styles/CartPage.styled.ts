import styled from "styled-components";
import Link from "next/link";

export const CartContainer = styled.div`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 2rem;
  font-family: var(--font-family-body);
  color: var(--dark-color);
`;

export const CartHeader = styled.h1`
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 2rem;
  text-align: center;
`;

export const CartEmpty = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    font-size: 1.6rem;
    font-weight: var(--font-weight-semibold);
    margin-bottom: 1.5rem;
  }
`;

export const BackToShopLink = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; /* fallback */
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const CartCard = styled.div`
  display: flex;
  gap: 1.5rem;
  background-color: var(--light-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-light);
  flex-wrap: wrap;
`;

export const CartImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
  background-color: #f3f3f3;
`;

export const CartDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
    font-size: 0.95rem;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.5rem 0;

  button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.4rem 0.8rem;
    font-size: 1.1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #444;
    }
  }

  span {
    font-weight: var(--font-weight-semibold);
    min-width: 24px;
    text-align: center;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  color: var(--danger-color, #c0392b);
  border: none;
  font-size: 0.9rem;
  margin-top: 0.8rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartSummary = styled.div`
  text-align: center;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: var(--font-weight-bold);
  }
`;

export const SummaryButton = styled.button<{ dark?: boolean }>`
  padding: 0.9rem 1.8rem;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  margin: 0.5rem;
  cursor: pointer;
  font-weight: var(--font-weight-semibold);
  transition: all 0.3s ease;
  background-color: ${({ dark }) => (dark ? "var(--dark-color)" : "var(--primary-color)")};
  color: white;

  &:hover {
    background-color: ${({ dark }) =>
      dark ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.7)"};
  }
`;
