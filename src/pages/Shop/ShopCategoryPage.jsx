// src/pages/Shop/ShopCategoryPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slices/productSlice";
import ProductCard from "../Product/ProductCard";
import "../Product/styles/ProductList.scss";

const categoryTitles = {
  vintage: "Vintage-Schätze",
  upcycled: "Upcycling-Produkte",
  designer: "Designer-Kollektionen",
  limited: "Limitierte Editionen",
};

const ShopCategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { filteredProducts, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsInCategory = filteredProducts.filter(
    (product) => product.collectionName === category
  );

  const title = categoryTitles[category] || "Kollektion";

  if (loading) return <p>Produkte werden geladen...</p>;
  if (error) return <p>Fehler: {error}</p>;

  return (
    <div className="product-list-container">
      <h1 className="page-title">{title}</h1>
      <div className="product-grid">
        {productsInCategory.length > 0 ? (
          productsInCategory.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Keine Produkte in dieser Kollektion gefunden.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategoryPage;

