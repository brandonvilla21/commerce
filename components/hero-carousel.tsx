"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
    title: "Imprescindibles",
    description: "Los suplementos esenciales que no pueden faltar en tu rutina",
    cta: "Comprar ahora",
    path: "/search/proteinas",
  },
  {
    id: 2,
    gradient: "bg-gradient-to-r from-rose-500 to-orange-500",
    title: "Mejora Tu Rendimiento",
    description: "Explora nuestros nuevos suplementos para resultados máximos",
    cta: "Ver Novedades",
    path: "/search?sort=latest-desc",
  },
  {
    id: 3,
    gradient: "bg-gradient-to-r from-indigo-600 to-pink-500",
    title: "Energía y Rendimiento",
    description: "Suplementos que impulsan cada entrenamiento al máximo",
    cta: "Potencia tu rutina",
    path: "/search/pre-entrenos",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const startTimer = () => {
      return setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    const timer = startTimer();

    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[50vh] lg:h-[50vh] overflow-hidden mb-1">
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="absolute flex w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative w-full h-full flex-shrink-0`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={`/images/${index + 1}.webp`}
                  alt={`Banner ${index + 1}`}
                  fill
                  sizes="100vw"
                  quality={85}
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                    '<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#1a1a1a"/></svg>'
                  ).toString("base64")}`}
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black/30">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-center md:text-left">
                  {slide.description}
                </p>
                <Link
                  key={slide.id}
                  href={slide.path}
                  prefetch={true}
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
