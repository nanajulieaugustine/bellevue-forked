"use client";
import { useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extractCategories } from "@/app/library/utils.js";
import FlipCard from "./FlipCard";
import PrimaryLink from "../global/knapper/PrimaryLink";
import ArrowXPositionRight from "../global/animationer/ArrowXPosition";
import ArrowXPositionLeft from "../global/animationer/ArrowXPositionLeft";

const FlipCategories = ({ data }) => {
  const categories = useMemo(() => extractCategories(data), [data]);
  const [index, setIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [categories.length]);

  const current = categories[index];

  // Find det første item i data, som matcher den viste kategori
  const matchedItem = useMemo(() => {
    return data.find((item) => item.tags?.includes(current));
  }, [data, current]);

  const visibleCount = 3;
const [startIndex, setStartIndex] = useState(0);

const visibleCategories = useMemo(() => {
return categories.slice(startIndex, startIndex + visibleCount);
}, [categories, startIndex]);

const handleNext = () => {
setStartIndex((prev) =>
  prev + visibleCount < categories.length ? prev + visibleCount : prev
);
};

const handlePrev = () => {
setStartIndex((prev) => (prev - visibleCount >= 0 ? prev - visibleCount : 0));
};

  return (


    //antal af kategorier vist
    
<div
  className="
    bg-(--beige-300)
    px-6 py-10 md:px-12 md:py-16
    w-full max-w-3xl
    mx-auto
    sticky top-0
    rounded-2xl shadow-lg
    flex flex-col justify-between
  "
>
  <div className="flex flex-col gap-5">
    <h1 className="thin bellevueblaa-600 mb-4">Jeg er mest til</h1>
    <div className="flex justify-between">
    <div
      style={{ perspective: "800px" }}
      className="relative w-64 h-12 flex justify-center"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            position: "absolute",
            width: "100%",
          }}
        >
          <h2>{current}</h2>
        </motion.div>
      </AnimatePresence>
    </div>

    {matchedItem && (
      <FlipCard matchedItem={matchedItem} current={current} />
    )}
  </div>
    </div>
{/* sender url afsted med searchparams */}
  <ul className="flex items-center justify-between mt-10 uppercase font-light gap-5">

  <ArrowXPositionLeft
    onClick={handlePrev}
    className="opacity-70 hover:opacity-100 text-(--roed-900) transition disabled:opacity-20"
    disabled={startIndex === 0}
  />
    


  <div className="flex gap-3 flex-wrap justify-between flex-1">
    {visibleCategories.map((category) => (
      <PrimaryLink
        href={`/forestillinger?category=${encodeURIComponent(category)}`}
        key={category}
      >
        {category}
      </PrimaryLink>
    ))}
  </div>

  <ArrowXPositionRight
    onClick={handleNext}
    className="opacity-70 hover:opacity-100 text-(--roed-900) transition disabled:opacity-20"
    disabled={startIndex + visibleCount >= categories.length}
  />


</ul>

</div>

  );
};

export default FlipCategories;
