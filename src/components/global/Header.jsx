"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MobileMenu from "./MobileMenu";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  //til burgermenu

    const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => setShowSideMenu((prev) => !prev);

    const closeSideMenu = () => {
    if (showSideMenu) {
      toggleSideMenu();
    }
  };
  //---- animation til den gule cirkel -----
  const pathname = usePathname();

  const [hovered, setHovered] = useState(null);
  const [active, setIsActive] = useState(null);

  const [sentinelRef, inView] = useInView({ threshold: 1 });

  //----- animation til fixed -------

  const [showFixed, setShowFixed] = useState(true);
  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
     let lastY = window.scrollY; //definerer brugerens scrolling ad y-aksen
    let ticking = false;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastY;
          // If else statement til hvornår header dukker op og forsvinder, baseret på pixels.
          if (!inView) {
            if (delta <= -20) {
              setShowFixed(true);
            } else if (delta >= 10) {
              setShowFixed(false);
            }
          } else {
            setShowFixed(false);
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    //Tilføjer og fjerner eventlistener, defineret på brugerens scroll, og mountes ved useEffect, der kalder på inView konstanten

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [inView]); 
// Styling af nav, der definerer om den er fixed eller absolute
  const baseNavClasses =
    "px-(--content-width) w-full z-110 backdrop-blur-xs bg-(--moerkblaa-600) transition-transform duration-200 ease-out shadow-md";
  const navPositionClass = inView
    ? "absolute"
    : showFixed
    ? "fixed top-0 left-0 right-0"
    : "fixed top-0 left-0 right-0 -translate-y-full";

  return (
    <>
      <div ref={sentinelRef} className="w-full h-0 pointer-events-none" />

      <motion.nav
        className={`${baseNavClasses} ${navPositionClass}`}
        animate={{ y: inView ? 0 : showFixed ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul className="hidden md:flex flex-col items-center justify-between py-4 px-8">
          <li>
            <a href="/">
              <Image
                src="/"
                alt="submark"
                width={70}
                height={70}
                className="cursor-pointer"
              />
            </a>
          </li>

          {/* Navigation */}
          <li>
            <ul className="rounded-full flex h-8 p-1 gap-10 items-center">
              <li className="hover:scale-103 transition-all duration-300">
                <Link
                  href="/forestillinger"
                  onClick={() =>
                    setIsActive(prev =>
                      prev === "/forestillinger" ? null : "/forestillinger"
                    )
                  }
                  // OnMouseEnter og onMouseLeave til at danne en smooth animation når brugeren hover
                  onMouseEnter={() => setHovered("/forestillinger")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/arrangementer")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer text-(--hvid) relative"
                >
                  Forestillinger
                  {/* papthname definerer den gule cirkel, dukker op når brugeren er på siden */}
                  <AnimatePresence>
                    {(hovered === "/forestillinger" || active === "/forestillinger") && (
                      <motion.div
                        key="/arrangementer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>

              <li className="hover:scale-103 transition-all duration-300">
                <Link
                  href="/kalender"
                  onClick={() =>
                    setIsActive(prev => (prev === "/kalender" ? null : "/kalender"))
                  }
                  onMouseEnter={() => setHovered("/kalender")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/kalender")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer text-(--hvid) relative"
                >
                  Kalender
                  <AnimatePresence>
                    {(hovered === "/kalender" || active === "/kalender") && (
                      <motion.div
                        key="/kalender"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>

              <li className="hover:scale-103 transition-all duration-300">
                <Link
                  href="/om-bellevue"
                  onClick={() =>
                    setIsActive(prev =>
                      prev === "/om-bellevue" ? null : "/om-bellevue"
                    )
                  }
                  onMouseEnter={() => setHovered("/om-bellevue")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/om-bellevue")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer text-(--hvid) relative"
                >
                  Om Teatret
                  <AnimatePresence>
                    {(hovered === "/om-bellevue" || active === "/om-bellevue") && (
                      <motion.div
                        key="/om-bellevue"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>

              <li className="hover:scale-103 transition-all duration-300">
                <Link
                  href="/praktisk-info"
                  onClick={() =>
                    setIsActive(prev =>
                      prev === "/praktisk-info" ? null : "/praktisk-info"
                    )
                  }
                  onMouseEnter={() => setHovered("/praktisk-info")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/praktisk-info")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer text-(--hvid) relative"
                >
                  Praktisk Info
                  <AnimatePresence>
                    {(hovered === "/praktisk-info" || active === "/praktisk-info") && (
                      <motion.div
                        key="/praktisk-info"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>

              <li className="hover:scale-103 transition-all duration-300">
                <Link
                  href="/venneforening"
                  onClick={() =>
                    setIsActive(prev =>
                      prev === "/venneforening" ? null : "/venneforening"
                    )
                  }
                  onMouseEnter={() => setHovered("/venneforening")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered("/venneforening")}
                  onBlur={() => setHovered(null)}
                  className="cursor-pointer text-(--hvid) relative hover:scale-102 transition-all duration-300"
                >
                  Venneforening
                  <AnimatePresence>
                    {(hovered === "/venneforening" || active === "/venneforening") && (
                      <motion.div
                        key="/venneforening"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-(--gul-900) -z-100"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
         <button
          aria-label="gå til menu"
          className="block md:hidden sticky py-10 cursor-pointer hover:scale-105 transition-all z-100 duration-300 text-(--hvid)"
          onClick={toggleSideMenu}
        >
          {showSideMenu ? (
            <IoMdClose size={40} />
          ) : (
            <IoIosMenu size={40} />
          )}
        </button>

        {/* Mobilmenu — vises kun når showSideMenu er true */}
        {showSideMenu && <MobileMenu isVisible={showSideMenu} closeMenu={closeSideMenu} />}

      </motion.nav>
    </>
  );
};

export default Header;