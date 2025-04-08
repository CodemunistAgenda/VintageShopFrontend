"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { IProduct } from "@/types/product";

interface ProductCardProps {
  product: IProduct;
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardBody = styled.div`
  padding: 1rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/visitor/products/${product._id}`} passHref>
      <Card>
        <ImageWrapper>
          <img
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.title}
          />
        </ImageWrapper>
        <CardBody>
          <h3>{product.title}</h3>
          <p>{product.price.toFixed(2)} €</p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
