"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function ListPlats({ filteredMenu, setSelectedItem }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredMenu.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? filteredMenu.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col gap-4 p-4 lg:p-12 mb-12 md:mb-24">
      {/* Liste des plats */}
      <AnimatePresence>
        {filteredMenu.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex justify-between items-center border-b border-gray-300 pb-4"
          >
            <div>
              <h2 className="text-xl font-bold font-archivo text-black font-westmeath">{item.nom}</h2>
              <p className="text-sm text-gray-600 font-mono">{item.description}</p>
              <p className="text-lg font-extrabold text-red-700">{item.prix} €</p>
            </div>

            {/* Bouton d'ouverture du modal */}
            <button
              className="p-2 bg-red-700 text-white rounded-full hover:bg-red-400 active:bg-red-500 transition-all"
              onClick={() => setSelectedIndex(idx)}
            >
              <FaPlus />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>

    {/* Modal avec navigation */}
{/* Modal avec navigation */}
<AnimatePresence>
  {selectedIndex !== null && filteredMenu[selectedIndex] && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-white rounded-lg shadow-2xl  w-[95%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-h-[85vh] flex flex-col overflow-hidden"
      >
        {/* Bouton de fermeture */}
        <button
          className="absolute top-3 right-3 text-red-600 hover:text-red-800 z-10"
          onClick={() => setSelectedIndex(null)}
        >
          <FaTimes size={22} />
        </button>

        {/* Image */}
        <div className="relative w-full h-56 md:h-64 lg:h-96 overflow-hidden">
          <img
            src={filteredMenu[selectedIndex].src || "/fallback.jpg"} 
            alt={filteredMenu[selectedIndex].nom}
            className="w-full h-full object-cover"
          />

          {/* Bandeaux d'information */}
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md uppercase">
            {filteredMenu[selectedIndex].type}
          </div>

          {filteredMenu[selectedIndex].popularite && (
            <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {filteredMenu[selectedIndex].popularite}
            </div>
          )}
        </div>

        {/* Contenu du modal */}
        <div className="p-5 text-left font-archivo bg-white flex flex-col flex-grow">
          
          {/* Nom du plat */}
          <h2 className="text-2xl font-bold text-black font-westmeath">{filteredMenu[selectedIndex].nom}</h2>

          {/* Temps de préparation {filteredMenu[selectedIndex].preparation && (
            <p className="text-sm text-gray-600 mt-1">⏳ {filteredMenu[selectedIndex].preparation}</p>
          )} */}
          

          {/* Description */}
          <p className="text-black mt-2 font-mono text-sm">{filteredMenu[selectedIndex].description}</p>

          {/* Prix */}
          <p className="text-2xl font-extrabold text-red-700 font-westmeath mt-2 ">{filteredMenu[selectedIndex].prix} €</p>

          {/* Suppléments (si disponibles) */}
          {filteredMenu[selectedIndex].supplements && filteredMenu[selectedIndex].supplements.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold font-westmeath text-black">Suppléments :</h3>
              <ul className="mt-3 flex flex-wrap justify-start gap-2">
                {filteredMenu[selectedIndex].supplements.map((supplement, index) => (
                  <li 
                    key={index} 
                    className="text-white  text-sm font-semibold flex items-center gap-2 bg-gradient-headover px-3 py-1 rounded-full shadow-sm "
                  >
                     {supplement.nom} <span className="text-white font-bold">+{supplement.prix} €</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Navigation entre les plats */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400"
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400"
        >
          <FaChevronRight size={18} />
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </div>
  );
}
