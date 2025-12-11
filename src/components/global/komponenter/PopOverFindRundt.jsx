import PrimaryButton from "../knapper/PrimaryButton";
import { motion, AnimatePresence } from "framer-motion";

const PopOverFindRundt = ({ activeId, setActiveId }) => {
  return (
    <AnimatePresence>
      {activeId && (
        <motion.div
          key="popover"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="absolute top-50 right-10 bg-(--beige-600) p-10 min-w-110 min-h-100 shadow-lg rounded-xl z-50"
        >
          <h2 className="mb-2 uppercase">{activeId}</h2>

          <PrimaryButton onClick={() => setActiveId(null)}>
            Luk
          </PrimaryButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopOverFindRundt;
