"use client";

import React, { useState, useEffect } from "react";
import menu from "../assets/menew";
import Gallery from "./Gallery";
import MenuFilter from "./MenuFilter";
import MenuList from "./MenuList";

export default function Lacarte() {
  // State for filtering
  const [filter, setFilter] = useState("poisson");

  // State for selected menu item
  const [selectedItem, setSelectedItem] = useState(null);

  // State for active images based on the filter
  const [activeImages, setActiveImages] = useState([
    "shoot1.jpg",
    "Rosagal1.jpeg",
    "shoot2.jpg",
  ]);

  // Map of filters to image sets
  const filterImageMap = {
    all: ["shoot1.jpg", "Rosagal1.jpeg", "shoot2.jpg"],
    viande: ["shoot3.jpg", "shoot4.jpg", "shoot6.jpg"],
    poisson: ["shoot2.jpg", "shoot1.jpg", "shoot12.jpg"],
    dessert: ["shoot9.jpg", "shoot12.jpg", "shoot8.jpg"],
    pizzas: ["shoot8.jpg", "shoot3.jpg", "shoot4.jpg"],
    burgers: ["shoot1.jpg", "shoot2.jpg", "shoot9.jpg"],
    salades: ["shoot4.jpg", "shoot3.jpg", "shoot6.jpg"],
  };

  // Update active images whenever the filter changes
  useEffect(() => {
    setActiveImages(filterImageMap[filter] || filterImageMap["all"]);
  }, [filter]);

  // Filtered menu logic
  const filteredMenu =
    filter === "all" ? menu : menu.filter((item) => item.type === filter);

  return (
    <div className="flex flex-col h-dvh overflow-x-hidden">
      {/* Gallery Component */}
      <Gallery activeImages={activeImages} />

      {/* Menu Filter Component */}
      <MenuFilter filter={filter} setFilter={setFilter} />

      {/* Menu List Component */}
      <MenuList
        filteredMenu={filteredMenu}
        setSelectedItem={setSelectedItem}
      />

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[80%]">
            <img
              src={selectedItem.src}
              alt={selectedItem.nom}
              className="object-cover h-[25vh] w-auto mb-4"
            />
            <h2 className="text-xl font-bold">{selectedItem.nom}</h2>
            <p>{selectedItem.description}</p>
            <p className="text-lg font-bold text-red-700">
              {selectedItem.prix} €
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-700 text-white rounded"
              onClick={() => setSelectedItem(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
