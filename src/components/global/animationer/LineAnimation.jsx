"use client";
import { motion } from "framer-motion";

const LineAnimation = ({ isHovered, color }) => {
  return (
    <motion.hr
      initial={{ width: "0%" }}
      animate={{ width: isHovered ? "100%" : "0%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ borderTop: `1px solid ${color}` }}
    />
  );
};

export default LineAnimation;
