"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BellevueStriber = ({children}) => {
  const stripeWidth = 40;
  const [numberOfStripes, setNumberOfStripes] = useState(0);

  // Dynamisk udregning af striber baseret på viewport
  useEffect(() => {
    const calculateStripes = () => {
      const count = Math.ceil(window.innerWidth / stripeWidth);
      setNumberOfStripes(count);
    };

    calculateStripes();
    window.addEventListener("resize", calculateStripes);

    return () => window.removeEventListener("resize", calculateStripes);
  }, []);

  return (
    <div className="h-screen [var(--beige-100) overflow-hidden relative">
      {Array.from({ length: numberOfStripes }).map((_, i) => (
        <motion.div
          key={i}
          className="w-10 h-full bg-(--bellevueblaa-100) absolute top-0 -z-100"
          style={{ left: `${i * 5.5}rem` }}
          initial={{ y: -300, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}   
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        />
    ))}
    {children}
    </div>
  );
};

export default BellevueStriber;
