"use client";

import React, { useState, useRef } from "react";
import { type ProductCarousel } from "../../const/Index";
import SetFavoriteOption from "@/components/Favorite/SetFavoriteOption";

export default function ProductCarousel({
  products,
}: {
  products: ProductCarousel[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500); // Ensure this matches with your transition duration
  };

  const nextSlide = () => {
    if (!isTransitioning && !isAtEnd) {
      smoothScroll(Math.min(currentIndex + 1, products.length - itemsPerPage));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning && !isAtStart) {
      smoothScroll(Math.max(0, currentIndex - 1));
    }
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= products.length - itemsPerPage;

  return (
    <div className="relative -translate-y-[63px] w-full overflow-hidden">
      <div
        ref={carouselRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-500 ease-out" : ""
        }`}
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4`}
          >
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full aspect-[2/3] object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={product.hoverImage}
                alt={`${product.name} hover`}
                loading="lazy"
                className="w-full aspect-[2/3] object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <SetFavoriteOption />
            </div>
            <div className="mt-2 px-4 flex justify-between items-center">
              <span className="text-xs font-normal">{product.name}</span>
              <span className="text-xs font-normal">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      {!isAtStart && (
        <button
          className="absolute border-none top-1/2 left-4 transform -translate-y-1/2 transition-opacity duration-300"
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          <svg
            className="Svg Svg--swiper_left"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.4099 28.9405C23.4114 28.6747 23.3071 28.4192 23.1199 28.2305L12.8299 17.9405L23.1199 7.65046C23.4597 7.2537 23.4368 6.66227 23.0675 6.2929C22.6981 5.92353 22.1067 5.90068 21.7099 6.24046L9.9999 17.9405L21.7099 29.6505C21.9969 29.9318 22.4244 30.014 22.7953 29.8591C23.1661 29.7042 23.4082 29.3424 23.4099 28.9405Z"
              fill="#121212"
            ></path>
          </svg>
          <span className="sr-only">Previous slide</span>
        </button>
      )}
      {!isAtEnd && (
        <button
          className="absolute border-none top-1/2 right-4 transform -translate-y-1/2 transition-opacity duration-300"
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <svg
            className="Svg Svg--swiper_right"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9998 28.9405C11.9982 28.6747 12.1026 28.4192 12.2898 28.2305L22.5798 17.9405L12.2898 7.65046C11.95 7.2537 11.9728 6.66227 12.3422 6.2929C12.7116 5.92353 13.303 5.90068 13.6998 6.24046L25.4098 17.9405L13.6998 29.6505C13.4128 29.9318 12.9852 30.014 12.6144 29.8591C12.2435 29.7042 12.0014 29.3424 11.9998 28.9405Z"
              fill="#121212"
            ></path>
          </svg>
          <span className="sr-only">Next slide</span>
        </button>
      )}
    </div>
  );
}
