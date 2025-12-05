"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const BellevueStriber = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); //animerer først når brugeren er i viewporten

  const stripeWidth = 40;
  const [numberOfStripes, setNumberOfStripes] = useState(0);

  useEffect(() => {
    const calculateStripes = () => {
      const count = Math.ceil(window.innerWidth / stripeWidth);
      setNumberOfStripes(count); //dynamisk indsat antallet af striber efter skræmstørelse
    };

    calculateStripes();
    window.addEventListener("resize", calculateStripes);
    return () => window.removeEventListener("resize", calculateStripes);
  }, []);

  return (
    <div ref={ref} className="relative h-full overflow-hidden">
      {/* STRIBER */}
      {Array.from({ length: numberOfStripes }).map((_, i) => (
        <motion.div
          key={i}
          className="w-10 h-full bg-(--bellevueblaa-100) absolute top-0 -z-10 pointer-events-none"
          style={{ left: `${i * 5.5}rem` }}
          initial={{ y: -300, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        />
      ))}

      {/* GRADIENT OVERLAY */}
      <div className="absolute bottom-0 left-0 w-full h-100 bg-linear-to-t from-(--hvid) to-transparent z-0 pointer-events-none" />

      {/* KLIKBART INDHOLD */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BellevueStriber;
