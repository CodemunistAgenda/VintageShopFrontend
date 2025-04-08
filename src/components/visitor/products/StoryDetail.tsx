"use client";

import React from "react";
import { useParams } from "next/navigation";
import styled from "styled-components";
import { notFound } from "next/navigation";

const stories = [
  {
    slug: "annibale-colombo-sofa",
    title: "Die Reise eines Vintage-Sessels",
    product: "Annibale Colombo Sofa",
    image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
    content: `
      Dieser Sessel wurde in den 60er Jahren in einer kleinen italienischen Manufaktur gefertigt.
      Jahrzehnte lang stand er in einem charmanten Mailänder Apartment, bevor er liebevoll restauriert wurde.
      Heute bringt er Retro-Charme in dein Zuhause – ein echtes Unikat mit Geschichte.
    `,
  },
  {
    slug: "red-lipstick",
    title: "Upcycled mit Stil: Handgemachte Kosmetiktasche",
    product: "Red Lipstick",
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    content: `
      Dieser Lippenstift wurde ursprünglich als Teil einer limitierten Kollektion gelauncht.
      Die Verpackung besteht aus recyceltem Kunststoff und das Design erinnert an die 80er Jahre.
      Er erzählt die Geschichte von Nachhaltigkeit und Glamour in perfekter Harmonie.
    `,
  },
];

const Wrapper = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.text};
  font-family: var(--font-family-body);

  .story-image {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-small);
    margin-bottom: 2rem;
    box-shadow: var(--shadow-light);
  }

  h1 {
    font-family: var(--font-family-heading);
    font-size: 2.2rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: 1rem;
    text-align: center;
  }

  .product-name {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--text-secondary);
  }

  .story-content {
    line-height: 1.7;
    font-size: 1rem;

    p {
      margin-bottom: 1.5rem;
      text-align: justify;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }

    .story-content {
      font-size: 0.95rem;
    }
  }
`;

const StoryDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const story = stories.find((s) => s.slug === slug);

  if (!story) return notFound();

  return (
    <Wrapper>
      <img src={story.image} alt={story.product} className="story-image" />
      <h1>{story.title}</h1>
      <p className="product-name">
        <strong>Produkt:</strong> {story.product}
      </p>
      <div className="story-content">
        {story.content
          .split("\n")
          .filter((line) => line.trim() !== "")
          .map((paragraph, idx) => (
            <p key={idx}>{paragraph.trim()}</p>
          ))}
      </div>
    </Wrapper>
  );
};

export default StoryDetail;
