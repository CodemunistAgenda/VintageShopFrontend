// src/pages/Product/ProductStories.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./styles/ProductStories.scss";

const stories = [
  {
    slug: "annibale-colombo-sofa",
    title: "Die Reise eines Vintage-Sessels",
    product: "Annibale Colombo Sofa",
    image:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
    excerpt:
      "Ein Möbelstück mit Geschichte – wie es seinen Weg aus den 60er Jahren bis in dein Wohnzimmer fand.",
  },
  {
    slug: "red-lipstick",
    title: "Upcycled mit Stil: Handgemachte Kosmetiktasche",
    product: "Red Lipstick",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    excerpt:
      "Aus alten Materialien entsteht Neues. Entdecke die Geschichte hinter diesem Beauty-Liebling.",
  },
];

const ProductStories = () => {
  return (
    <div className="product-stories">
      <h1>Produktgeschichten</h1>
      <p className="intro-text">
        Hinter jedem Produkt steckt eine einzigartige Geschichte – von der
        Herkunft bis zu dir nach Hause.
      </p>

      <div className="stories-grid">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img
              src={story.image}
              alt={story.product}
              className="story-image"
            />
            <h3>{story.title}</h3>
            <p>{story.excerpt}</p>
            <Link to={`/stories/${story.slug}`} className="story-link">
              Mehr erfahren →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductStories;

