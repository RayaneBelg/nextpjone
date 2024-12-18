"use client";

import React, { useState } from "react";
import menu from "../assets/data";
import Item from "./Item";
import { AnimatePresence } from "motion/react";

export default function GridMenu() {
  // State to store the selected filter
  const [filter, setFilter] = useState("all");

  // Filtered menu logic
  const filteredMenu =
    filter === "all" ? menu : menu.filter((item) => item.plat === filter);

  return (
    <div className="flex flex-col h-dvh overflow-y-auto">
      {/* Wrapper Div with Adjusted Height */}
      <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col mt-[13vh]">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 p-4">
          {/* Dynamic filter buttons */}
          {["all", "entrée", "plat chaud", "dessert"].map((category, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 sm:px-4 sm:py-2 bg-black text-xs sm:text-sm md:text-base rounded font-extrabold text-white font-mono uppercase transition-transform hover:scale-105 ${
                filter === category ? "bg-gray-700" : ""
              }`}
              onClick={() => setFilter(category)}
            >
              {category === "all"
                ? "Tous"
                : category === "entrée"
                ? "Entrées"
                : category === "plat chaud"
                ? "Plats chauds"
                : "Desserts"}
            </button>
          ))}
        </div>

        {/* Grid of Items */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-4 lg:p-12 lg:gap-8 ">
          <AnimatePresence>
            {filteredMenu.map((item) => (
              <Item key={item.id} infos={item} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
