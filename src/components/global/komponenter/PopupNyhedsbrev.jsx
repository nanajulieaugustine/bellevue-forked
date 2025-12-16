"use client";
import { motion } from "framer-motion";
const PopupNyhedsbrev = ({ onClose }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "easeInOut", duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      {/* Sløret baggrund */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={onClose} // Klik på baggrunden lukker popup
      ></div>

      {/* Selve popup-boksen */}
      <div className="bg-(--beige-600) rounded-xl p-15 max-w-200 w-full relative shadow-lg z-10">
        {/* Luk-knap */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-(--moerkblaa-900) font-bold text-xl hover:text-(--bellevueblaa-600)"
        >
          &times;
        </button>

        <h2 className=" mb-4 text-center">Tak for din tilmelding!</h2>
        <p className="text-center text-(--moerkblaa-900) pt-10 font-light ">
          Tak for din tilmelding – vi glæder os til at byde dig velkommen i
          fællesskabet. Hold øje med din mail – dit medlemstilbud er på vej!
        </p>
      </div>
    </motion.div>
  );
};

export default PopupNyhedsbrev;
