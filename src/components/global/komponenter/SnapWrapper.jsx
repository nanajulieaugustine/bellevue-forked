"use client";
import { useRef, Children } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Karrusel from "./Karrusel";
import { usePathname } from "next/navigation";

export default function SnapWrapper({ image, children }) {
  const containerRef = useRef(null);
  const pathname = usePathname();

  // Filtrer så vi kun får faktiske DOM-elementer
  const validChildren = Children.toArray(children).filter(
    (child) => child !== null && child !== undefined && child !== false
  );

  const count = validChildren.length;
  const hasReviews = count > 0;

  // --- PARALLAX ONLY (ingen anmeldelser) ---
  if (!hasReviews) {
    const { scrollYProgress: pageScroll } = useScroll();
    const y = useTransform(pageScroll, [0, 1], [0, 1000]);

    return (
      <div className="relative h-[90vh] w-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          {image && (
            <Image
              src={image.url}
              alt={image.alt || ""}
              fill
              className="object-cover"
            />
          )}
        </motion.div>
      </div>
    );
  }

  // --- NORMAL VERSION MED SNAP / OVERLAY ---
  const { scrollYProgress: pageScroll } = useScroll();
  const y = useTransform(pageScroll, [0, 1], [0, 1000]);

  const { scrollYProgress: containerScroll } = useScroll({
    container: containerRef,
  });

  const overlayOpacity = useTransform(containerScroll, [0, 0.2], [0, 0.7]);

  return (
    <div className="relative h-[90vh] w-screen overflow-hidden">
      {/* Baggrund */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {image && (
          <Image
            src={image.url}
            alt={image.alt || ""}
            fill
            className="object-cover"
          />
        )}
      </motion.div>

      {/* Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-black pointer-events-none"
      />

      {/* Scroll-indhold */}
      <div
        ref={containerRef}
        className={`relative z-20 h-full w-full overflow-y-auto ${
          count > 1 ? "snap-y snap-mandatory" : ""
        }`}
      >
        {pathname.includes("/om-bellevue") ? (
          <div className="snap-start flex justify-center">
            <h1 className="beige-100 display py-40 flex items-center text-center justify-center">Om Bellevue Teatret</h1>
          </div>
        ) : (
          <div className="h-[90vh] snap-start" />
        )}

        <div
          className={`snap-start h-[90vh] text-(--hvid)`}
        >
          {count > 1 ? <Karrusel>{validChildren}</Karrusel> : validChildren}
        </div>
      </div>
    </div>
  );
}
