"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { offers } from "../assets/data";

export default function GridNew() {
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div className="flex flex-col snap-start h-dvh bg-gradient-softgray">
      {/* Inner content area adjusted for fixed header and footer */}
      <div className="h-[calc(100%)] flex flex-col justify-center items-center overflow-hidden">
        {/* Introduction Section */}
        <motion.div
          ref={ref}
          initial={{ x: 0, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center p-4"
        >
          <h1 className="font-westmeath text-3xl lg:text-5xl uppercase mb-4">
            Discover the Rosa Menu
          </h1>
          <p className="text-sm sm:text-2xl font-mono font-bold">
            Indulge in the culinary wonders of Rosa Cuisine. From carefully
            crafted dishes to unparalleled ambiance, we create moments worth
            savoring.
          </p>
      
        </motion.div>

        {/* Horizontal Snap Scrolling Section */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0 }}
          animate={isCardsInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            staggerChildren: 0.2, // Stagger animation for child elements
          }}
          className="flex  snap-x snap-mandatory overflow-x-auto gap-4 w-full lg:justify-center p-4"
        >
          {offers.map((off, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="snap-center card flex-shrink-0 w-80 border border-gray-200 shadow-md text-center bg-white hover:shadow-lg transition-shadow p-4"
            >
              <h1 className="font-westmeath uppercase text-xl sm:text-3xl  text-center my-2">
                {off.nom}
              </h1>
              <ul className="space-y-3 sm:space-y-4 sm:my-8 font-mono">
                {off.inclus.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-bold sm:uppercase text-gray-700 "
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
        <motion.div
          ref={ref}
          initial={{ x: 0, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center p-4"
        >
          
          <Link href={`/menu`}>
            <button className="mt-6 px-6 py-2 bg-white hover:bg-gray-200 text-black border-2 border-black rounded transition-all duration-300 text-sm lg:text-lg font-bold uppercase">
              Explore Our Menu
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
