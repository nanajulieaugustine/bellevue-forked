"use client";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import ArrowXPositionRight from "../animationer/ArrowXPosition";

const AnchorTagSecondaryButton = ({ href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="flex items-center gap-1 uppercase text-nowrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <p className="hover:scale-102 transition-all duration-300 font-light">Læs mere</p>

      <div className="w-[26px] h-[26px] flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ x: hovered ? 5 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <MdArrowRightAlt size={26} />
        </motion.div>
      </div>
    </Link>
  );
};

export default AnchorTagSecondaryButton;
