"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import toque from "../../../public/toquewhite3.png"

export default function Herosa() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transformation de l'image d'arrière-plan
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  // Overlay qui s'estompe au scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]);

  // Effet de fade out et translation vers le haut du logo et de l'adresse
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden h-[15vh] flex items-center justify-center"
    >
      {/* Image d'arrière-plan animée */}
      <motion.img
        src="/Rosagal5.jpeg"
        alt="Vue magnifique"
        className="absolute w-full h-full object-cover"
        style={{ scale, filter: `blur(${blur})` }}
      />

      {/* Overlay sombre */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Conteneur pour le logo et l'adresse */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo affiché en permanence */}
        <img
          src="/toquewhite3.png"
          alt="Logo"
          className="h-8 sm:h-48 w-auto"
        />
        {/* Adresse en dessous */}
        <p className="mt-2 text-white text-center text-sm sm:text-base md:text-lg">
          4 Pl. de L'Abbé Pierre , 69009 , LYON        </p>
      </motion.div>
    </section>
  );
}
