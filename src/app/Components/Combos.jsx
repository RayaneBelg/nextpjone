"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { menuOffers } from "../assets/datatwo";
import Link from "next/link";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Combos() {
  const videoRef = useRef(null);
  const cardsRef = useRef(null);

  const isVideoInView = useInView(videoRef, { once: true });
  const isCardsInView = useInView(cardsRef, { once: true });

  const [modalVisible, setModalVisible] = useState(false);
  const [currentOffers, setCurrentOffers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (offers) => {
    setCurrentOffers(offers);
    setCurrentIndex(0);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const nextOffer = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentOffers.length);
  };

  const prevOffer = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentOffers.length - 1 : prevIndex - 1
    );
  };

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
            className="h-[15vh] sm:h-[25vh] w-full object-cover object-bottom"
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

          {/* Grid of Cards */}
          <motion.div
            ref={cardsRef}
            initial={{ opacity: 0 }}
            animate={isCardsInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              staggerChildren: 0.2,
            }}
            className="flex snap-x snap-mandatory overflow-x-auto gap-4 w-full lg:justify-center p-4"
          >
            {menuOffers.map((formule, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: id * 0.2 }}
                className="snap-center card flex-shrink-0 w-80 xl:w-[30rem] border border-gray-200 shadow-md text-center bg-white hover:shadow-lg transition-shadow p-4 cursor-pointer relative flex flex-col items-center gap-4 "
                onClick={() => openModal(formule.offers)}
              >
                
                <h1 className="font-westmeath uppercase text-2xl xl:text-6xl text-center my-2 text-red-700">
                  {formule.formule}
                </h1>
                <p className="text-lg  xl:text-xl mt-4 font-mono text-black font-bold">
                  Découvrez nos offres spéciales pour {formule.formule}.
                </p>
               
              <button
                          className="p-2 bg-red-700 text-white rounded-full hover:bg-red-400 active:bg-red-500 transition-all"
                          
                        >
                          <FaPlus />
                        </button>

                
              </motion.div>
            ))}
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
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[70%] lg:w-[50%] rounded-lg shadow-lg overflow-hidden relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.5,
                  staggerChildren: 0.2,
                }}
                className="p-4 text-center"
              >
                <h2 className="text-xl lg:text-3xl font-westmeath text-red-700">
                  {currentOffers[currentIndex].nom}
                </h2>
                <img
                  src="../../6.jpg"
                  alt="Offer Image"
                  className="w-3/4 max-w-sm mx-auto my-4"
                />
                <p className="text-gray-700 font-mono mt-2">
                  {currentOffers[currentIndex].description}
                </p>
                <p className="text-lg lg:text-2xl font-extrabold text-red-700 mt-4">
                  {currentOffers[currentIndex].prix} €
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
              <FaChevronLeft
                className="text-2xl text-gray-700 cursor-pointer hover:text-black"
                onClick={prevOffer}
              />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <FaChevronRight
                className="text-2xl text-gray-700 cursor-pointer hover:text-black"
                onClick={nextOffer}
              />
            </div>
            <button
              className="absolute top-2 right-2 text-black  text-xl"
              onClick={closeModal}
            >
               <IoClose className="absolute top-2 right-2 text-4xl text-red-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
