"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MobileMenu = ({ isVisible, closeMenu }) => {
  const links = [
    { href: "/forestillinger", text: "Forestillinger" },
    { href: "/kalender", text: "kalender" },
    { href: "/om-bellevue", text: "Om Teatret" },
    { href: "/praktisk-info", text: "Praktisk Info" },
    { href: "/venneforening", text: "Venneforening" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-10 left-0 py-20 w-full h-120 bg-(--moerkblaa-600) z-90 overflow-y-scroll"
        >
          <ul className="p-10 overflow-y-auto grid gap-8">
            {links.map((link) => (
              <li className="text-(--hvid)" key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
