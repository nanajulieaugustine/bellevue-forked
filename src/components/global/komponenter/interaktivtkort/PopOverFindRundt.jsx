"use client";
import { motion } from "framer-motion";
import PrimaryButton from "../../knapper/PrimaryButton";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

const PopOverFindRundt = ({  setActiveId, item }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="popover"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="absolute flex flex-col gap-5 top-50 right-10 bg-(--beige-600) p-10 min-w-110 min-h-100 shadow-lg rounded-xl z-50"
      >
        <button className="font-black text-2xl relative left-1/2 hover:scale-110 transition-all duration-300" onClick={() => setActiveId(null)}>
          X
        </button>
        <h2 className="mb-2 uppercase">{item.objekt}</h2>
        <p className="max-w-100">{item.beskrivelse}</p>
        <Image
          src={`/images/${item.image[0].src}`}
          alt={item.image[0].alt}
          width={500}
          height={500}
          className="object-cover h-100 w-100 rounded-2xl"
        />
      </motion.div>
    </AnimatePresence>
  );
};
export default PopOverFindRundt;