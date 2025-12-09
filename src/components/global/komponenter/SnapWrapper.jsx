"use client";
import { useRef, Children } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Karrusel from "./Karrusel";

export default function SnapWrapper({ image, children }) {
  const containerRef = useRef(null);

  const count = Children.count(children);

  // Global parallax
  const { scrollYProgress: pageScroll } = useScroll();
  const y = useTransform(pageScroll, [0, 1], [0, 1000]);

  // Overlay scroll
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
        <div className="h-[90vh] snap-start" />

        {/* Sektion med indhold, viser kun karrusel hvis længden er over én */}
        <div className={`h-[90vh] text-(--hvid) ${count > 1 ? "snap-start" : ""}`}>
          {count > 1 ? <Karrusel>{children}</Karrusel> : children} 
        </div>
      </div>
    </div>
  );
}
