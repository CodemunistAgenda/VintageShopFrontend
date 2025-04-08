"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/productsSlice";
import ProductList from "@/components/visitor/products/ProductList";
import type { AppDispatch, RootState } from "@/store";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  min-height: 100vh;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const Message = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.1rem;
`;

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (filteredProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, filteredProducts.length]);

  return (
    <PageWrapper>
      <Heading>Unsere Produkte</Heading>
      {loading && <Message>Produkte werden geladen...</Message>}
      {error && <Message>Fehler: {error}</Message>}
      {!loading && !error && <ProductList products={filteredProducts} />}
    </PageWrapper>
  );
};

export default ProductsPage;