"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {  motion, useInView } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function HarmonizedCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }); // Trigger animation when in view
  const images = [
    { id: 1, src: "../../plateone.jpg", alt: "Hero Banner 1" },
    { id: 2, src: "../../plate5.jpg", alt: "Hero Banner 2" },
    { id: 3, src: "../../plate4.jpg", alt: "Hero Banner 3" },
    { id: 4, src: "../../plate7.jpg", alt: "Hero Banner 4" },
  ];

  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-center items-center snap-start h-dvh bg-gradient-headover p-4"
    >
      {/* Wrapper Div for Content with Adjusted Height */}
      <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col lg:flex-row justify-center items-center mt-4">
        {/* Images Section */}
        <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
      className="grid grid-cols-2 gap-1 px-4 mx-4 sm:w-[50%] sm:order-1 order-1"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="relative overflow-hidden group border-2 border-gray-200"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2 + index * 0.1, // Stagger effect
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="sm:h-[30vh] sm:w-auto object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <p className="text-white text-sm sm:text-md font-medium">{image.alt}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-[50%] p-4 sm:order-2 order-2 text-gray-200"
        >
          <h1 className="font-westmeath text-3xl lg:text-5xl uppercase mb-4 ">
            La Carte
          </h1>
          <p className="text-sm sm:text-2xl font-mono font-bold">
            Des produits frais, locaux et soigneusement sélectionnés pour vous offrir des saveurs authentiques et des plats d’exception. Découvrez une cuisine qui allie tradition et modernité.
          </p>
          <Link href={`/menu`}>
            <button className="mt-6 px-6 py-2 hover:bg-black  text-gray-200 border-2 border-gray-200 rounded transition-all duration-300 text-sm lg:text-lg font-bold uppercase">
              Découvrir le Menu
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Animation */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 20 }}
        transition={{ duration: .8  , ease: "easeInOut", repeat: Infinity, repeatType: "loop" , repeatDelay :3}}
        className="absolute bottom-[8vh] flex justify-center items-center"
      >
        <FaChevronDown className="text-gray-200 text-3xl" />
      </motion.div>
    </div>
  );
}
