"use client"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import VandTaarn from "../global/ikoner/VandTaarn";
import Cirkel from "../global/ikoner/Cirkel";

const FlipCard = ({ matchedItem, current }) => {
  return (
    <div
      style={{ perspective: "600px" }}
      className="flex" // Halvdelen af containeren
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            position: "",
            width: "100%", // Fylder div'ens bredde (50% af containeren)
          }}
        >
            <Link href={`/forestillinger/${matchedItem.id}`}> 
          <div className="w-50 h-50 bg-amber-400">

          </div>
            </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FlipCard;
