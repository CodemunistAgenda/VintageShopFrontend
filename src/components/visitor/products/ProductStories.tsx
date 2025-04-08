"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

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

const ProductStoriesWrapper = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  text-align: center;

  h1 {
    font-family: var(--font-family-heading);
    font-size: 2.5rem;
    color: var(--dark-color);
    margin-bottom: 1rem;
  }

  .intro-text {
    font-size: 1.1rem;
    color: var(--dark-color);
    opacity: 0.8;
    max-width: 700px;
    margin: 0 auto 3rem;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .story-card {
    background-color: var(--light-color);
    border-radius: var(--border-radius-small);
    padding: 2rem;
    box-shadow: var(--shadow-light);
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    }

    .story-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: var(--border-radius-small);
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.3rem;
      font-family: var(--font-family-heading);
      font-weight: var(--font-weight-bold);
      margin-bottom: 0.8rem;
      color: var(--dark-color);
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.2rem;
      color: var(--dark-color);
    }

    .story-link {
      font-weight: var(--font-weight-semibold);
      color: var(--primary-color);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-dark);
      }
    }
  }

  @media (max-width: 600px) {
    .stories-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const ProductStories = () => {
  return (
    <ProductStoriesWrapper>
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
            <Link href={`/visitor/stories/${story.slug}`} className="story-link">
              Mehr erfahren →
            </Link>
          </div>
        ))}
      </div>
    </ProductStoriesWrapper>
  );
};

export default ProductStories;
