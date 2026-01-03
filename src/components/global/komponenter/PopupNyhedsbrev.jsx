"use client";
import { motion } from "framer-motion";
// Modtager navn og email som props for at bekræfte brugerens input
const PopupNyhedsbrev = ({ onClose, navn, email }) => {
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
        <div className="pt-8 text-center text-(--moerkblaa-900)">
          {/* Viser kun navn og email hvis de findes
              Bruges til at bekræfte at de indtastede oplysninger er korrekte */}
        {navn && <p><strong>Navn:</strong> {navn}</p>}
        {email && <p><strong>E-mail:</strong> {email}</p>}
        </div>
        
        <p className="text-center text-(--moerkblaa-900) pt-10 font-light ">
          Tak for din tilmelding – vi glæder os til at byde dig velkommen i
          fællesskabet. Hold øje med din mail – dit medlemstilbud er på vej!
        </p>
      </div>
    </motion.div>
  );
};

export default PopupNyhedsbrev;
