"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const galleryImages = Array(10).fill("../../../rosain.jpg");

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="h-dvh snap-start bg-gray-100">
      <div
        ref={ref}
        className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col justify-end items-center overflow-hidden p-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center  "
        >
          <h1 className="font-westmeath text-3xl lg:text-5xl uppercase ">
            La SAlle
          </h1>
          <p className="text-sm sm:text-2xl font-mono font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
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
              transition={{ delay: 0.3 + 0.15 * index, duration: 0.8 }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[15vh] lg:h-[30vh] object-cover cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {lightboxOpen && (
        <div   className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            &times;
          </button>
          <button
            onClick={showPrev}
            className="absolute left-5 text-white text-2xl"
          >
            &lt;
          </button>
          <div className="w-[80%] sm:w-[50%]">
            <img
              src={galleryImages[currentIndex]}
              alt={`Lightbox ${currentIndex + 1}`}
              className="w-full h-auto"
            />
          </div>
          <button
            onClick={showNext}
            className="absolute right-5 text-white text-2xl"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
