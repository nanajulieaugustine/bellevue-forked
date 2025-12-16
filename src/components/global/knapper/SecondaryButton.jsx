"use client";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

const SecondaryButton = ({ children, onClick, ariaLabel }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-nowrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label={ariaLabel || undefined}
    >
      <p className="hover:scale-102 transition-all duration-300 font-light">
        {children}
      </p>

      <div className="w-[26px] h-[26px] flex items-center justify-center overflow-hidden ">
        <motion.div
          animate={{ x: hovered ? 5 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <MdArrowRightAlt size={26} />
        </motion.div>
      </div>
    </button>
  );
};

export default SecondaryButton;
