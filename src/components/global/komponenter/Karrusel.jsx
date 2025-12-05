"use client";
import { useState, useEffect, useRef, Children } from "react";
import ArrowLeft from "../ikoner/ArrowLeft";
import ArrowRight from "../ikoner/ArrowRight";

const Karrusel = ({ children, interval = 10000 }) => {
  const slides = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Start auto-slide
  const startAutoSlide = () => {
    stopAutoSlide(); // ryd eksisterende først
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
  };

  // Stop auto-slide
  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [slides.length, interval]);

  const goToPrev = () => {
    stopAutoSlide();
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide();
  };

  const goToNext = () => {
    stopAutoSlide();
    setCurrent((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
          absolute w-full h-full transition-opacity duration-700
          flex justify-center items-center
          ${
            index === current
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {slide}
        </div>
      ))}

      {/* knapper */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl font-bold p-10"
        onClick={goToPrev}
      >
        <ArrowLeft className="text-(--hvid)" size={40} />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl font-bold p-10"
        onClick={goToNext}
      >
        <ArrowRight className="text-(--hvid)" size={40} />
      </button>

      {/* prikker */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              stopAutoSlide();
              setCurrent(index);
              startAutoSlide();
            }}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition 
              ${index === current ? "bg-white" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Karrusel;
