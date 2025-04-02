import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slices/productSlice";
import ProductCard from "./ProductCard"; // ✅ Import eklendi
import "./styles/ProductList.scss";

const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredProducts, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Produkte werden geladen...</p>;
  if (error) return <p>Fehler: {error}</p>;

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
