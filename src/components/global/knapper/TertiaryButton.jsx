"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const TertiaryButton = ({ children = "Tilmeld", onClick, disabled = false, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="relative inline-block group w-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {/* Selve knappen */}
      <span
        className="block text-(--beige-600) hover:scale-101 hover:text-(--beige-600)
                   transition-all duration-300 border-2 border-(--beige-600)
                   py-4 px-6 rounded-xl text-center font-bold"
        style={style}
      >
        {children}
      </span>

      {/* Animeret border */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-xl border-2 border-(--beige-900)"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{
          clipPath: isHovered
            ? "inset(0 0% 0 0)"
            : "inset(0 100% 0 0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </button>
  );
};

export default TertiaryButton;
