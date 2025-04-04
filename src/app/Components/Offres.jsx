"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { offers } from "../assets/data";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Offres() {
  const videoRef = useRef(null);
  const cardsRef = useRef(null);

  const isVideoInView = useInView(videoRef, { once: true });
  const isCardsInView = useInView(cardsRef, { once: true });

  return (
    <div className="flex flex-col justify-center snap-start h-dvh bg-gradient-softgray  relative">
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
            className=" h-[15vh] sm:h-[25vh]  w-full object-cover object-bottom"
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
          <h1 className="font-westmeath uppercase text-2xl  xl:text-6xl  my-2">
            Nos Formules
          </h1>

          {/* Grid of Cards */}
           {/* Grid of Cards <motion.div
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
          </motion.div> */}
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
                        className="snap-center card flex-shrink-0 w-80  xl:w-[30rem] border border-gray-200 shadow-md text-center bg-white hover:shadow-lg transition-shadow p-4"
                      >
                        <h1 className="font-westmeath uppercase text-xl xl:text-6xl  text-center my-2 text-red-700">
                          {off.nom}
                        </h1>
                        <ul className="space-y-3 sm:space-y-4 sm:my-8 font-mono">
                          {off.inclus.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-md font-bold xl:uppercase xl:text-3xl text-black "
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="text-lg mt-4 font-extrabold text-red-700 xl:text-5xl font-westmeath">
                          {off.prix} €
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                  <Link href={`/menu`}>
            <button className=" px-6 py-2 bg-white hover:bg-gray-200 text-black border-2 border-black rounded transition-all duration-300 text-sm lg:text-lg xl:text-3xl font-bold uppercase sm:hidden xl:block">
              Offres Spéciales Rosa
            </button>
          </Link>

          
        </div>
      </div>
       <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: 20 }}
              transition={{ duration: .8  , ease: "easeInOut", repeat: Infinity, repeatType: "loop" , repeatDelay :3}}
              className="absolute bottom-[8vh] flex justify-center items-center w-full"
            >
              <FaChevronDown className="text-black text-3xl" />
            </motion.div>
    </div>
  );
}
