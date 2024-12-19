"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { offers } from "../assets/data";

export default function Offres() {
  const videoRef = useRef(null);
  const cardsRef = useRef(null);

  const isVideoInView = useInView(videoRef, { once: true });
  const isCardsInView = useInView(cardsRef, { once: true });

  return (
    <div className="flex flex-col snap-start h-dvh bg-gradient-softgray">
      {/* Wrapper Div for Content with Adjusted Height */}
      <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col">
        {/* Video Section */}
        <motion.div
          ref={videoRef}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isVideoInView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 w-full origin-top"
        >
          <video
            className="h-[25vh] md:h-[35vh] lg:h-[40vh] w-full object-cover object-bottom"
            src="../../head.mov"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-center px-2">
          <h1 className="font-westmeath uppercase text-4xl sm:text-4xl lg:text-6xl sm:my-6 my-2">
            Formules
          </h1>

          {/* Grid of Cards */}
          <motion.div
            ref={cardsRef}
            initial={{ opacity: 0 }}
            animate={isCardsInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              staggerChildren: 0.2, // Stagger animation for child elements
            }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
          >
            {offers.map((off, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: id * 0.2 }}
                className="card border border-gray-200 shadow-md  text-center bg-white hover:shadow-lg transition-shadow"
              >
                <h1 className="font-westmeath uppercase text-xl sm:text-3xl xl:text-5xl text-center my-2">
                  {off.nom}
                </h1>
                <ul className="mt space-y-3 sm:space-y-4 sm:my-8 font-mono">
                  {off.inclus.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs font-bold sm:text-md sm:uppercase text-gray-700 xl:text-2xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm sm:text-2xl mt-4 font-extrabold text-red-700 xl:text-3xl">
                  {off.prix} €
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
