// src/pages/Collection/CollectionPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slices/productSlice";
import ProductCard from "../Product/ProductCard";
import "../Product/styles/ProductList.scss";

const collectionTitles = {
  "60s": "60er Jahre Revival",
  "70s": "70er Boho-Chic",
  "80s": "80er Nostalgie",
  "90s": "90er Comeback",
  "all": "Alle Kollektionen",
};

const CollectionPage = () => {
  const { decade } = useParams();
  const dispatch = useDispatch();
  const { filteredProducts, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsInCollection =
    decade === "all"
      ? filteredProducts
      : filteredProducts.filter((product) => product.subCollection === decade);

  const title = collectionTitles[decade] || "Kollektion";

  if (loading) return <p>Produkte werden geladen...</p>;
  if (error) return <p>Fehler: {error}</p>;

  return (
    <div className="product-list-container">
      <h1 className="page-title">{title}</h1>
      <div className="product-grid">
        {productsInCollection.length > 0 ? (
          productsInCollection.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Keine Produkte in dieser Kollektion gefunden.</p>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
