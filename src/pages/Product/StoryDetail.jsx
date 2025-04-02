// src/pages/Product/StoryDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./styles/StoryDetail.scss";

// Örnek sabit veri (ileride backend'e bağlanabilir)
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
    `
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
    `
  }
];

const StoryDetail = () => {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);

  if (!story) return <p>Story nicht gefunden.</p>;

  return (
    <div className="story-detail">
      <img src={story.image} alt={story.product} className="story-image" />
      <h1>{story.title}</h1>
      <p className="product-name"><strong>Produkt:</strong> {story.product}</p>
      <div className="story-content">
        {story.content.split("\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph.trim()}</p>
        ))}
      </div>
    </div>
  );
};

export default StoryDetail;
