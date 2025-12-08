"use client"
import Link from "next/link";
import LineAnimation from "../animationer/LineAnimation";
import { useState } from "react";

const PrimaryLink = ({children, href}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href={href}  onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} className="text-(--roed-900) font-semithin">
            <span className="hover:scale-102 transition-all duration-300 hover:font-medium">
            {children}
            </span>
            <LineAnimation isHovered={isHovered} color={"var(--roed-900)"}/>
            </Link>
      );
}
 
export default PrimaryLink;