"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ScrollToTertiaryButton = ({
  children,
  href,
  scrollToId,
  style,
  target,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (!scrollToId) return;

    e.preventDefault();
    const el = document.getElementById(scrollToId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ButtonContent = (
    <>
     <span
        className="block text-(--beige-600) hover:scale-101 hover:text-(--beige-600)
                   transition-all duration-300 border-2 border-(--beige-600)
                   py-4 px-6 rounded-xl text-center font-bold"
        style={style}
      >
        {children}
      </span>

      <motion.span
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-(--beige-900)"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{
          clipPath: isHovered
            ? "inset(0 0% 0 0)"
            : "inset(0 100% 0 0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        onClick={handleClick}
        className="relative inline-block group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        {ButtonContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative inline-block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {ButtonContent}
    </button>
  );
};

export default ScrollToTertiaryButton;
