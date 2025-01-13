"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { menuOffers } from "../assets/datatwo";
import Link from "next/link";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function OffersNext() {
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
              staggerChildren: 0.2, // Stagger animation for child elements
            }}
            className="flex snap-x snap-mandatory overflow-x-auto gap-4 w-full lg:justify-center p-4"
          >
            {menuOffers.map((formule, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: id * 0.2 }}
                className="snap-center card flex-shrink-0 w-80 xl:w-[30rem] border border-gray-200 shadow-md text-center bg-white hover:shadow-lg transition-shadow p-4 cursor-pointer"
                onClick={() => openModal(formule.offers)}
              >
                <h1 className="font-westmeath uppercase text-xl xl:text-6xl text-center my-2 text-red-700">
                  {formule.formule}
                </h1>
                <p className="text-md xl:text-xl mt-4 font-bold text-gray-700">
                  Découvrez nos offres spéciales pour {formule.formule}.
                </p>
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
            <div className="p-4">
              <h2 className="text-xl lg:text-3xl font-bold text-center text-red-700">
                {currentOffers[currentIndex].nom}
              </h2>
              <p className="text-gray-700 text-center mt-2">
                {currentOffers[currentIndex].description}
              </p>
              <p className="text-lg lg:text-2xl font-extrabold text-center mt-4 text-red-700">
                {currentOffers[currentIndex].prix} €
              </p>
            </div>
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
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              onClick={closeModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
