"use client";
import { HiArrowLongRight } from "react-icons/hi2";
import { useState } from "react";
import { motion } from "framer-motion";

const ArrowXPositionRight = ({ className, disabled, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
       onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      animate={{ x: hovered ? 5 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <HiArrowLongRight size={26} />
    </motion.button>
  );
};

export default ArrowXPositionRight;
