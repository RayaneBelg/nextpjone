"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bonsPlansData from "../assets/plan";

const categories = [
  { id: "petit_dej", label: "Petit Déj" },
  { id: "plats_chauds", label: "Plats Chauds" },
  { id: "gouters", label: "Goûters" },
];

export default function BonsPlans() {
  const [selectedCategory, setSelectedCategory] = useState("petit_dej");
  const containerRef = useRef(null);

  const filteredBonsPlans = bonsPlansData.filter(
    (item) => item.categorie === selectedCategory
  );

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth / 2;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full flex flex-col items-center px-6 justify-center">
      {/* Filtres avec animation */}
      <div className="flex flex-col justify-center items-start px-2">
  {/* Titre avec effet de bande latérale */}
  <div className="relative py-2">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-gradient-headover"></div>
    <h1 className="font-westmeath uppercase text-3xl md:text-5xl pl-6">
      Nos Formules
    </h1>
  </div>

  {/* Boutons de filtre avec animation */}
  <div className="flex flex-wrap justify-start items-center gap-3 ">
    {categories.map((cat) => (
      <motion.button
        key={cat.id}
        className={`px-4 py-2 text-sm md:text-lg font-bold rounded transition-all 
        uppercase font-westmeath hover:scale-105 
        ${
          selectedCategory === cat.id
            ? "bg-gradient-headover text-gray-50"
            : "bg-black text-gray-300"
        } hover:bg-red-600 transition-all duration-300`}
        onClick={() => setSelectedCategory(cat.id)}
        whileTap={{ scale: 0.95 }}
      >
        {cat.label}
      </motion.button>
    ))}
  </div>
</div>


      {/* Carousel Wrapper */}
      <div className="relative w-full">
        {/* Bouton gauche pour desktop */}
        <button
          onClick={() => handleScroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 p-3 rounded-full shadow-md z-10 hover:bg-gray-300"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Liste des bons plans */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide p-4 items-center "
        >
          <AnimatePresence mode="wait">
            {filteredBonsPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="relative w-[95%] md:w-[50%] lg:w-[25%]  flex-shrink-0 snap-center bg-white rounded-lg shadow-lg overflow-hidden h-[max-content]"
              >
                {/* Image */}
                <div className="relative w-full h-36 sm:h-64 md:h-96">
                  <img
                    src={plan.src}
                    alt={plan.nom}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md uppercase">
                    {plan.specialTag}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-4 text-start font-archivo">
                  <h3 className="text-lg font-bold text-gray-900 font-westmeath">{plan.nom} <span className="text-red-700">{plan.prix} €</span></h3>
                  <p className="text-gray-600 text-sm mt-1 font-mono">{plan.description}</p>
                

                  {/* Suppléments */}
                  {plan.supplements && plan.supplements.length > 0 && (
                    <div className="mt-3 flex flex-wrap justify-start gap-2">
                      {plan.supplements.map((supp, index) => (
                        <span
                          key={index}
                          className="text-gray-700 text-xs font-semibold flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full shadow-sm"
                        >
                          {supp.nom === "Œuf" && "🥚"}
                          {supp.nom === "Viande" && "🥩"}
                          {supp.nom === "Fromage" && "🧀"}
                          {supp.nom} 
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bouton droit pour desktop */}
        <button
          onClick={() => handleScroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 p-3 rounded-full shadow-md z-10 hover:bg-gray-300"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
