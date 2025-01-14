"use client";

import React, { useState } from "react";
import menu from "../assets/menew"
import { FaPlus, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, delay } from "framer-motion";

export default function Menew() {
  // State for filtering
  const [filter, setFilter] = useState("all");

  // State for modal
  const [selectedItem, setSelectedItem] = useState(null);

  // Filtered menu logic
  const filteredMenu =
    filter === "all" ? menu : menu.filter((item) => item.type === filter);

  return (
    <div className="flex flex-col h-dvh ">

           {/* Gallery Section */}
      <div className="  flex gap-2 justify-center mt-[8vh]">
        {["Rosagal1.jpeg", "Rosagal2.jpeg", "Rosagal3.jpeg"].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-24 h-24 object-cover shadow-md"
          />
        ))}
      </div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-3 p-4 ">
        {[
          "all",
          "viande",
          "poisson",
          "dessert",
          "pizzas",
          "burgers",
          "salades",
        ].map((category, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 sm:px-4 sm:py-2 bg-black text-xs sm:text-sm md:text-base rounded font-extrabold text-white font-mono uppercase transition-transform hover:scale-105 ${
              filter === category ? "bg-gray-700" : ""
            }`}
            onClick={() => setFilter(category)}
          >
            {category === "all" ? "Tous" : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* List of Items */}
      <AnimatePresence>
      <motion.div className="flex flex-col gap-4 p-4 lg:p-12">
        {filteredMenu.map((item ,id) => (
          <motion.div
          initial={{opacity : 0}}
            animate={{opacity:1}}
            transition=     {{delay:   id*.1}}
            key={item.id}
            className="flex justify-between items-center border-b border-gray-300 pb-4"
          >
            <div>
              <h2 className="text-xl font-bold font-mono text-black">
                {item.nom}
              </h2>
              <p className="text-sm text-gray-600 font-mono">{item.description}</p>
              <p className="text-lg font-extrabold text-red-700">{item.prix} €</p>
            </div>

            {/* Plus Icon */}
            <button
              className="p-2 bg-red-700 text-white rounded-full hover:bg-red-500 transition-all"
              onClick={() => setSelectedItem(item)}
            >
              <FaPlus />
            </button>
          </motion.div>
        ))}
      </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            >
              <button
                className="absolute top-3 right-3 text-red-700 hover:text-red-500"
                onClick={() => setSelectedItem(null)}
              >
                <FaTimes size={20} />
              </button>

              <img
                src={selectedItem.src}
                alt={selectedItem.nom}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-bold text-black mb-2">
                {selectedItem.nom}
              </h2>

              <p className="text-gray-700 mb-4">{selectedItem.description}</p>

              <p className="text-lg font-extrabold text-red-700">
                {selectedItem.prix} €
              </p>

              <button
                className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-500 transition-all"
                onClick={() => setSelectedItem(null)}
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
