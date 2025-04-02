// src/pages/products/ProductDetail.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "@/store/slices/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, loading, error } = useSelector((state) => state.product);

  // 🔄 Einzelnes Produkt abrufen, wenn ID vorhanden ist
  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [id, dispatch]);

  // ⏳ Ladeanzeige
  if (loading) return <p>Produkt wird geladen...</p>;

  // ❌ Fehlermeldung
  if (error) return <p>Fehler: {error}</p>;

  // ⚠️ Kein Produkt gefunden
  if (!singleProduct) return <p>Produkt nicht gefunden.</p>;

  // 🧩 Produktdetails extrahieren
  const {
    title,
    description,
    price,
    stock,
    category,
    brand,
    images = [],
  } = singleProduct;

  // ✅ Produktdetails anzeigen
  return (
    <div className="product-detail">
      <div className="image-gallery">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Bild ${i + 1}`} />
        ))}
      </div>
      <div className="product-info">
        <h2>{title}</h2>
        <p><strong>Marke:</strong> {brand}</p>
        <p><strong>Kategorie:</strong> {category}</p>
        <p><strong>Lagerbestand:</strong> {stock}</p>
        <p><strong>Preis:</strong> {price} €</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

