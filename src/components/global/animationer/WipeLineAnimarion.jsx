import { motion } from "framer-motion";

const WipeLineAnimation = ({ activeTab, tabWidths }) => {
  const spacing = 24; // afstand mellem knapper

  const leftPositions = {
    current: 0,
    archive: tabWidths.current + spacing,
  };

  return (
    <div className="absolute bottom-0 left-0 h-1 pointer-events-none w-full">
      {/* Inaktiv linje: dækker begge tabs som baggrund */}
      <div className="absolute h-1 w-full max-w-190 bg-(--bellevueblaa-100)" />

      {/* Aktiv linje */}
      <motion.div
        className="absolute h-1 bg-(--moerkblaa-600)"
        initial={false}
        animate={{
          left: leftPositions[activeTab],
          width:
            activeTab === "current" ? tabWidths.current : tabWidths.archive,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
};

export default WipeLineAnimation;
