"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { flash, offers } from "../assets/data";
import { FaChevronDown } from "react-icons/fa";

export default function GridNew() {
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div className="flex flex-col snap-start h-dvh bg-gradient-softgray relative">
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
          <h1 className="font-westmeath text-3xl lg:text-5xl mt-6 uppercase ">
            Offres spéciales Rosa
          </h1>
    
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
          {flash.map((off, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="snap-center card flex-shrink-0 w-80 lg:w-auto border border-gray-200 shadow-md text-center hover:shadow-lg transition-shadow  "
            >
                <img  className="lg:h-[50vh] " src={off.src}/>
      
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: 0, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center "
        >
          
          <Link href={`/menu`}>
            <button className=" px-6 py-2 bg-white hover:bg-gray-200 text-black border-2 border-black rounded transition-all duration-300 text-sm lg:text-lg font-bold uppercase">
              La carte
            </button>
          </Link>
        </motion.div>

      </div>
           {/* Scroll Down Animation */}
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
