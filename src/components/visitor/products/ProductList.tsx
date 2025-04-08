"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchProducts } from "@/store/productsSlice";
import ProductCard from "./ProductCard";
import { RootState, AppDispatch } from "@/store";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (filteredProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, filteredProducts.length]);

  if (loading) return <p>Produkte werden geladen...</p>;
  if (error) return <p>Fehler: {error}</p>;

  return (
    <ProductGrid>
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductList;
