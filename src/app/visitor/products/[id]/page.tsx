"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "@/store/productsSlice";
import styled from "styled-components";
import Image from "next/image";
import type { RootState, AppDispatch } from "@/store";

const ProductDetailWrapper = styled.section`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProductImage = styled.div`
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  border-radius: 8px;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

const ProductContent = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

const ProductDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const { singleProduct, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    const productId = params?.id?.toString();
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, params?.id]);

  if (loading) return <p>Produkt wird geladen...</p>;
  if (error) return <p>Fehler: {error}</p>;
  if (!singleProduct) return <p>Produkt nicht gefunden.</p>;

  const { title, price, description, images } = singleProduct;

  return (
    <ProductDetailWrapper>
      <ProductImage>
        <Image
          src={images?.[0] || "/placeholder.jpg"}
          alt={title || "Produktbild"}
          width={1000}
          height={600}
        />
      </ProductImage>

      <ProductContent>
        <h1>{title}</h1>
        <p className="price">
          {typeof price === "number" ? `${price.toFixed(2)} €` : "-"}
        </p>
        <p>{description}</p>
      </ProductContent>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
