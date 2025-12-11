"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AnchorTagPrimaryButton = ({ children, href, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} className="relative inline-block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Selve knappen */}
      <span className="block text-(--bellevueblaa-600) hover:scale-101 hover:text-(--bellevueblaa-900) transition-all duration-300 border-2 border-(--bellevueblaa-600) py-2 px-8 rounded-2xl text-center text-nowrap" style={style}>
        {children}
      </span>

      {/* Animeret mørkeblå border-linje */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-(--bellevueblaa-900)"
        style={{ borderWidth: 2 }} 
        initial={{ clipPath: "inset(0 100% 0 0)" }}     // 0% synlig (fra venstre)
        animate={{ clipPath: isHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }} // 100% — hele linjen tegnet
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </Link>
  );
};

export default AnchorTagPrimaryButton;
