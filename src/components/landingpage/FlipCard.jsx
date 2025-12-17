"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FlipCard = ({ matchedItem, current }) => {

  // Sørg for at splitte tags på komma hvis det er en streng
  const tags = Array.isArray(matchedItem.tags)
    ? matchedItem.tags.flatMap(tag => tag.split(",").map(t => t.trim()))
    : typeof matchedItem.tags === "string"
    ? matchedItem.tags.split(",").map(t => t.trim())
    : [];

  const svgId = tags.find(tag => tag.toLowerCase() === current.toLowerCase())?.toLowerCase();

  return (
    <div style={{ perspective: "600px" }} className="flex">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d", width: "100%" }}
        >
          <Link href={`/forestillinger?category=${encodeURIComponent(current)}`}>
            <div className="w-50 h-50">
              {svgId && (
                <img
                  src={`/svg/${svgId}.svg`}
                  alt={svgId}
                  className="w-full h-full"
                />
              )}
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


export default FlipCard;
