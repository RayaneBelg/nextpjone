"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function ArtCard({ infos }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0,  }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="card flex flex-col bg-gradient-lightgray shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="w-full h-[25vh] ">
        <img
          className="w-full h-full object-cover"
          src="../../herobann.jpg"
          alt={infos.titre}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        {/* Title and Subtitle */}
        <div>
          <h1 className="font-westmeath text-xl sm:text-2xl lg:text-3xl uppercase mb-2">
            {infos.titre}
          </h1>
          <h2 className="font-bold text-sm sm:text-base lg:text-xl uppercase  mb-4">
            {infos.sousTitre}
          </h2>
        </div>

        {/* Content Snippet */}
        <p className="text-sm sm:text-base lg:text-lg  mb-4 font-mono font-bold">
          {infos.contenu.substring(0, 100)}...
        </p>

        {/* Read More Button */}
        <Link href={`/evenements/${infos.id}`}>
          <button className="mt-2 px-4 py-2 bg-gradient-boldred text-white hover:bg-gray-800 font-bold lg:text-2xl uppercase transition-all duration-300 rounded-lg ">
            Lire
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
