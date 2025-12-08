"use client";
import { useState, useEffect, Children, useRef } from "react";
import ArrowLeft from "../ikoner/ArrowLeft";
import ArrowRight from "../ikoner/ArrowRight";

// Hjælp til at dele array i batches
const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const ResponsiveKarrusel = ({ children, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const timerRef = useRef(null);

  // Responsive kort pr. slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerSlide(1);
      else if (width < 1024) setCardsPerSlide(2);
      else setCardsPerSlide(3);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // Lav slides
  useEffect(() => {
    const array = Children.toArray(children); // flyt herind
    setSlides(chunk(array, cardsPerSlide));
    setCurrent(0);
  }, [children, cardsPerSlide]); // kun children og cardsPerSlide

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

  if (!slides.length) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((group, i) => (
            <div
              key={i}
              className="flex gap-3 justify-center pl-20 pb-20 pr-20 shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              {group.map((child, idx) => (
                <div key={idx} className="flex-1 min-w-0 px-5">
                  {child}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* knapper */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl font-bold p-10"
        onClick={goToPrev}
      >
        <ArrowLeft className="text-(--roed-600)" size={40} />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl font-bold p-10"
        onClick={goToNext}
      >
        <ArrowRight className="text-(--roed-600)" size={40} />
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
              ${index === current ? "bg-(--roed-900)" : "bg-(--roed-600)"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveKarrusel;
