"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PrimaryButton = ({ children, onClick, disabled, active, ariaLabel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="relative inline-block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-label={ariaLabel || undefined}
    >
      <span
        className={`
        block py-2 px-3 md:px-6 rounded-2xl text-center text-nowrap
        border-2 transition-all duration-300
        ${
          active
            ? "bg-(--bellevueblaa-600) text-(--hvid) border-(--bellevueblaa-600)"
            : "bg-transparent text-(--bellevueblaa-600) border-(--bellevueblaa-600) hover:text-(--bellevueblaa-900)"
        }
      `}
      >
        {children}
      </span>

      {/* Animeret mørkeblå border-linje */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-(--bellevueblaa-900)"
        style={{ borderWidth: 2 }}
        initial={{ clipPath: "inset(0 100% 0 0)" }} // 0% synlig (fra venstre)
        animate={{
          clipPath: isHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        }} // 100% — hele linjen tegnet
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </button>
  );
};

export default PrimaryButton;
