import React from "react";

export default function MenuFilter({ filter, setFilter }) {
  const categories = [
    { key: "all", label: "Tous" },
    { key: "viande", label: "Viande" },
    { key: "poisson", label: "Poisson" },
    { key: "dessert", label: "Desserts" },
    { key: "pizzas", label: "Pizzas" },
    { key: "burgers", label: "Burgers" },
    { key: "salades", label: "Salades" },
    { key: "chef", label: "PLats du jour" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 p-4">
      {categories.map((category) => (
        <button
          key={category.key}
          className={`px-4 py-2 text-sm md:text-lg font-bold rounded transition-all 
          uppercase font-westmeath hover:scale-105
          ${filter === category.key ? "bg-gradient-headover text-white" : "bg-black text-gray-300"}`}
          onClick={() => setFilter(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
