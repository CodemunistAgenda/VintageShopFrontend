// src/pages/products/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./styles/ProductCard.scss"; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">{product.price} €</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
