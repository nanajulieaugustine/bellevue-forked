"use client";
import { useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extractCategories } from "@/app/library/utils.js";
import FlipCard from "./FlipCard";
import PrimaryLink from "../global/knapper/PrimaryLink";

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

  return (
    
<div className="bg-(--beige-300) p-20 h-150 w-250 sticky left-50 top-0 rounded-2xl shadow-md flex flex-col justify-between">
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

  <ul className="flex justify-baseline gap-10 items-center">
    {categories.map((category) => (
      <PrimaryLink href="/" key={category}>
        {category}
      </PrimaryLink>
    ))}
  </ul>
</div>

  );
};

export default FlipCategories;
