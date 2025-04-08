"use client";

import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import ProductCard from "@/components/visitor/products/ProductCard";
import { IProduct } from "@/types/product.d";

interface ProductSliderProps {
  products: IProduct[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const length = products.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    
  }, [isHovered, length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  if (length === 0) return null;

  return (
    <SliderContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Track style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {products.map((product, i) => (
          <Slide key={product._id || i}>
            <ProductCard product={product} />
          </Slide>
        ))}
      </Track>

      <NavButton className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </NavButton>
      <NavButton className="next" onClick={nextSlide}>
        <FaChevronRight />
      </NavButton>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: ${({ theme }) => theme.cardBackground || "#fdfaf4"};
`;

const Track = styled.div`
  display: flex;
  transition: transform 0.6s ease-in-out;
  width: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.text};

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }

  &:hover {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;
