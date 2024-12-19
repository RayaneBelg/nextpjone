"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function HarmonizedCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }); // Trigger animation when in view

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center snap-start h-dvh bg-gradient-headover p-4"
    >
      {/* Wrapper Div for Content with Adjusted Height */}
      <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col lg:flex-row justify-center items-center">
        {/* Images Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="grid grid-cols-2 gap-1 sm:gap-2 px-4 mx-4 sm:w-[50%] sm:order-1 order-1"
        >
          <img
            className="sm:h-[30vh] sm:w-[30vh] object-cover border-2 border-gray-200"
            src="../../herobann.jpg"
            alt="Hero Banner"
          />
          <img
            className="sm:h-[30vh] sm:w-[30vh] object-cover border-2 border-gray-200"
            src="../../herobann.jpg"
            alt="Hero Banner"
          />
          <img
            className="sm:h-[30vh] sm:w-[30vh] object-cover border-2 border-gray-200"
            src="../../herobann.jpg"
            alt="Hero Banner"
          />
          <img
            className="sm:h-[30vh] sm:w-[30vh] object-cover border-2 border-gray-200"
            src="../../herobann.jpg"
            alt="Hero Banner"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-[50%] p-4 sm:order-2 order-2 text-gray-200"
        >
         <h1 className="font-westmeath text-3xl lg:text-5xl uppercase mb-4 ">
            Bienvenue au Rosa
          </h1>
          <p className="text-sm sm:text-2xl font-mono font-bold">
            Indulge in the culinary wonders of Rosa Cuisine. From carefully
            crafted dishes to unparalleled ambiance, we create moments worth
            savoring.
          </p>
          <Link href={`/menu`}>
            <button className="mt-6 px-6 py-2 bg-white hover:bg-gray-200 text-black border-2 border-black rounded transition-all duration-300 text-sm lg:text-lg font-bold uppercase">
              Explorer notre menu
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
