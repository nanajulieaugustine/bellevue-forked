"use client";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import ArrowXPositionLeft from "../animationer/ArrowXPositionLeft";

const SecondaryButton = () => {
  const [hovered, setHovered] = useState(false);
  const goBack = () => {
    history.back(); 
  };
  return (
    <button
    aria-label="Gå tilbage"
     onClick={goBack}
      className="flex items-center gap-3 pt-10 pl-10 text-nowrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="w-[26px] h-[26px] flex items-center justify-center overflow-hidden ">
        <motion.div
          animate={{ x: hovered ? 0 : 5 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ArrowXPositionLeft size={26} />
        </motion.div>
      </div>
      <h4 className="hover:scale-102 transition-all duration-300 font-light">
        Gå tilbage
      </h4>

    </button>
  );
};

export default SecondaryButton;
