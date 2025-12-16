"use client";
import Link from "next/link";
import LineAnimation from "../animationer/LineAnimation";
import { useState } from "react";

const PrimaryLink = ({ children, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-label={ariaLabel || undefined}
      className="text-(--roed-900) font-semithin inline-block"
    >
      <span className="hover:scale-102 transition-all duration-300 hover:font-medium relative">
        {children}
        <LineAnimation isHovered={isHovered} color={"var(--roed-900)"} />
      </span>
    </Link>
  );
};

export default PrimaryLink;
