"use client";
import Anmeldelser from "./Anmeldelser";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SnapContainer = ({ item }) => {
  const containerRef = useRef(null);

  // baggrundsparallax
  const { scrollYProgress: pageScroll } = useScroll();
  const y = useTransform(pageScroll, [0, 1], [0, 1000]); 

  // 2️ Container scroll til overlay
  const { scrollYProgress: containerScroll } = useScroll({
    container: containerRef,
  });
  const overlayOpacity = useTransform(containerScroll, [0, 0.2], [0, 0.7]);

  return (
    <div className="relative h-[90vh] w-screen overflow-hidden">
      {/* baggrund med parallax på global scroll */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        {item.image?.[0]?.url && (
          <Image
            src={item.image[0].url}
            alt={item.image[0].alt || item.name}
            fill
            className="object-cover"
          />
        )}
      </motion.div>

      {/* overlay fade ind baseret på container-scroll */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-black pointer-events-none transition-opacity duration-700"
      />

      {/* forgrund med container-scroll */}
      <div
    ref={containerRef}
    className="relative z-20 h-full w-full overflow-y-auto snap-y snap-mandatory text-(--hvid)"
    >

        {/* uden anmeldelse */}
        <div className="h-[90vh] w-full flex items-center justify-center snap-start" />

        {/* anmeldelser */}
        {item.anmeldelser?.map((review) => (
          <div
            key={review.anmelder}
            className="h-[90vh] w-full flex items-center justify-center snap-start"
          >
            <Anmeldelser review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnapContainer;
