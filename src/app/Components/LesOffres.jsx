"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { menuOffers } from "../assets/datatwo";
import Link from "next/link";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import formule from "../assets/formule";

export default function Combos() {
    const [filter, setFilter] = useState("Petit Dej");
    const activeImages =
    formule.find((category) => category.type === filter)?.images || [];
  const videoRef = useRef(null);
  const cardsRef = useRef(null);

  const isVideoInView = useInView(videoRef, { once: true });
  const isCardsInView = useInView(cardsRef, { once: true });



  return (
    <div className="flex flex-col justify-center snap-start h-dvh bg-gradient-softgray relative">
      {/* Wrapper Div for Content with Adjusted Height */}
      <div className="h-[calc(100%-theme(space.16)-theme(space.6))] flex flex-col">
        {/* Video Section */}
        <motion.div
          ref={videoRef}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isVideoInView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 w-full origin-top"
        >
          <video
            className="h-[10vh] sm:h-[25vh] w-full object-cover object-bottom"
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
          <h1 className="font-westmeath uppercase text-2xl xl:text-6xl my-2">
            Nos Formules
          </h1>
          <div className="flex gap-4 mb-6">
        {["Petit Dej", "Plats Chauds", "Gouters"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm md:text-lg font-bold rounded transition-all 
          uppercase font-westmeath hover:scale-105 ${
              filter === category ? "bg-red-500" : "bg-black text-gray-300"
            } hover:bg-red-600 transition-all duration-300`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

          {/* Grid of Cards */}
          <motion.div
  ref={cardsRef}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.8,
    staggerChildren: 0.2,
  }}
  className="flex snap-x snap-mandatory overflow-x-auto gap-4 w-full lg:justify-center p-4"
>
  <AnimatePresence>
    {activeImages.map((src, idx) => (
      <motion.img
        key={`${filter}-${idx}`} // Unique key for each filter and image combination
        src={src}
        alt={`Gallery ${idx + 1}`}
        className="snap-center  card flex-shrink-0 w-80 xl:w-[30rem] border shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer object-cover"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }} // Exit animation
        transition={{ duration: 0.5, delay: idx * 0.2 }}
      />
    ))}
  </AnimatePresence>
</motion.div>


          <Link href={`/menu`}>
            <button className="px-6 py-2 bg-white hover:bg-gray-200 text-black border-2 border-black rounded transition-all duration-300 text-sm lg:text-lg xl:text-3xl font-bold uppercase sm:hidden xl:block">
              Offres Spéciales Rosa
            </button>
          </Link>
        </div>
      </div>

      {/* Down Chevron */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 3,
        }}
        className="absolute bottom-[8vh] flex justify-center items-center w-full"
      >
        <FaChevronDown className="text-black text-3xl" />
      </motion.div>

      {/* Modal for Sliding Through Offers */}
    
    </div>
  );
}
