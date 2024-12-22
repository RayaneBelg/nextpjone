"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const galleryImages = Array(10).fill("../../../rosain.jpg");

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div className="h-dvh snap-start bg-gray-100">
      <div
        ref={ref}
        className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col justify-end items-center overflow-hidden p-6"
      >
        <motion.div
          initial={{ opacity: 0,  }}
          animate={isInView ? { opacity: 1,  } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mt-24"
        >
          <h1 className="font-westmeath text-3xl lg:text-5xl uppercase  ">
            La SAlle
          </h1>
          <p className="text-sm sm:text-2xl font-mono font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
        </motion.div>

        <motion.div
       
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-[95%] sm:w-[90%]"
        >
          {galleryImages.slice(0, 5).map((src, index) => (
            <motion.div
              key={index}
              className={`relative shadow-lg overflow-hidden ${
                index === 0 ? "col-span-2" : ""
              }`}
              initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + 0.15*index , duration: 0.8 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[15vh] lg:h-[30vh] object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
