"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function MenuList({ filteredMenu }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex flex-col gap-4 p-4 lg:p-12">
      {/* Menu Items */}
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
              <h2 className="text-xl font-bold font-westmeath text-black">
                {item.nom}
              </h2>
              <p className="text-sm text-gray-600 font-mono">{item.description}</p>
              <p className="text-lg font-extrabold text-red-700">{item.prix} €</p>
            </div>

            {/* Plus Icon */}
            <button
              className="p-2 bg-red-700 text-white rounded-full hover:bg-red-400 active:bg-red-500 transition-all"
              onClick={() => setSelectedItem(item)}
            >
              <FaPlus />
            </button>
          </motion.div>
        ))}
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
              className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[60%] flex flex-col items-center"
            >
              <button
                className="self-end text-red-500 hover:text-red-700"
                onClick={() => setSelectedItem(null)}
              >
                <FaTimes size={24} />
              </button>
              <img
                src={selectedItem.src}
                alt={selectedItem.nom}
                className="object-cover h-[25vh] w-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-black mb-2">
                {selectedItem.nom}
              </h2>
              <p className="text-gray-700 mb-4 text-center">{selectedItem.description}</p>
              <p className="text-lg font-extrabold text-red-700">
                {selectedItem.prix} €
              </p>
              <button
                className="mt-4 px-6 py-2 bg-red-700 text-white rounded hover:bg-red-500 transition-all"
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
