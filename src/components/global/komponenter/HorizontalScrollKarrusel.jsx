"use client";

import { Children, useRef, useState, useEffect } from "react";
import ArrowLeft from "../ikoner/ArrowLeft";
import ArrowRight from "../ikoner/ArrowRight";

const HorizontalScrollKarruselMedPile = ({ children }) => {
  const containerRef = useRef(null);
  const slides = Children.toArray(children);
  const [current, setCurrent] = useState(0);

  // Wheel → horizontal
  const handleWheel = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  };

  // Opdater current index baseret på scroll
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const index = Math.round(container.scrollLeft / width);
    setCurrent(index);
  };

  const goToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    container.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  const goToPrev = () => {
    const newIndex = current === 0 ? slides.length - 1 : current - 1;
    goToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (current + 1) % slides.length;
    goToIndex(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen">
      {/* Scroll-container */}
      <div
        className="w-full h-full overflow-x-scroll overflow-y-hidden"
        ref={containerRef}
        onWheel={handleWheel}
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex h-full w-full">
          {slides.map((child, index) => (
            <div
              key={index}
              className="shrink-0 w-[170vh] h-full snap-center flex justify-center items-center"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Venstre pil */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 p-10 z-20"
        onClick={goToPrev}
      >
        <ArrowLeft className="text-(--hvid)" size={40} />
      </button>

      {/* Højre pil */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 p-10 z-20"
        onClick={goToNext}
      >
        <ArrowRight className="text-(--hvid)" size={40} />
      </button>

      {/* Prikker */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToIndex(index)}
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

export default HorizontalScrollKarruselMedPile;
