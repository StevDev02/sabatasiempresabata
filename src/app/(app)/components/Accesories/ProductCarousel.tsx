"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { type ProductCarousel } from "../../const/Index"; 

export default function ProductCarousel({
  products,
}: {
  products: ProductCarousel[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const updateItemsPerPage = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setItemsPerPage(1);
    else if (width < 1024) setItemsPerPage(2);
    else if (width < 1280) setItemsPerPage(3);
    else setItemsPerPage(4);
  }, []);

  useEffect(() => {
    // Inicializa el estado del carrusel después de la primera renderización
    const handleResize = () => updateItemsPerPage();
    handleResize(); // Llama a la función para calcular el tamaño inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateItemsPerPage]);

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

              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-2 right-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.0776 0H2.92081C2.45796 0 2.08203 0.375362 2.08203 0.838778V15.3283C2.08203 15.7285 2.40998 16.0006 2.75655 16.0006C2.90388 16.0006 3.05458 15.9515 3.18497 15.8414L7.56683 12.1516C7.69157 12.0466 7.8451 11.9941 7.9992 11.9941C8.15273 11.9941 8.30626 12.0466 8.43101 12.1516L12.8134 15.8414C12.9438 15.9509 13.0945 16.0006 13.2418 16.0006C13.5884 16.0006 13.9164 15.7285 13.9164 15.3283V0.838778C13.9164 0.375362 13.541 0 13.0776 0ZM13.239 15.3142L8.86733 11.6334C8.62461 11.4291 8.31642 11.3167 7.9992 11.3167C7.68197 11.3167 7.37322 11.4291 7.1305 11.6334L2.75938 15.3142V0.838778C2.75938 0.750159 2.83163 0.677344 2.92081 0.677344H13.0782C13.1668 0.677344 13.2396 0.749594 13.2396 0.838778V15.3142H13.239Z"
                    fill="black"
                  ></path>
                </svg>
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
            <div className="mt-2 px-4 flex justify-between items-center">
              <span className="text-xs font-normal">{product.name}</span>
              <span className="text-xs font-normal">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      {!isAtStart && (
        <Button
          variant="outline"
          size="icon"
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
        </Button>
      )}
      {!isAtEnd && (
        <Button
          variant="outline"
          size="icon"
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
        </Button>
      )}
    </div>
  );
}
