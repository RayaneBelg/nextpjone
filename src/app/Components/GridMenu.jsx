'use client'
import React, { useState } from 'react';
import menu from '../assets/data';
import Item from './Item';
import { AnimatePresence } from 'motion/react';

export default function GridMenu() {
  // État pour stocker le filtre sélectionné
  const [filter, setFilter] = useState('all');

  // Menu filtré
  const filteredMenu = filter === 'all' 
    ? menu 
    : menu.filter(item => item.plat === filter);

  return (
    <div className="border-2">
      {/* Boutons de filtre */}
      <div className="flex space-x-4 p-4 justify-center flex-wrap gap-2  bg-soft-beige">
        <button 
          className="px-4 bg-black py-2 rounded  text-white font-westmeath uppercase" 
          onClick={() => setFilter('all')}
        >
          Tous
        </button>
        <button 
          className="px-4 py-2 bg-gradient-header text-white rounded   font-westmeath uppercase" 
          onClick={() => setFilter('entrée')}
        >
          Entrées
        </button>
        <button 
          className="px-4 py-2 bg-gradient-header text-white rounded  font-westmeath uppercase" 
          onClick={() => setFilter('plat chaud')}
        >
          Plats chauds
        </button>
        <button 
          className="px-4 py-2 bg-gradient-header text-white rounded  font-westmeath uppercase" 
          onClick={() => setFilter('dessert')}
        >
          Desserts
        </button>
        <button 
          className="px-4 py-2 bg-gradient-header text-white rounded  font-westmeath uppercase" 
          onClick={() => setFilter('dessert')}
        >
          Desserts
        </button>
      </div>

      {/* Grille des items */}
      <div className="grid lg:grid-cols-6  md:grid-cols-4 grid-cols-2 gap-4 border-2 font-westmeath section">
        {filteredMenu.map((item) => (
          <AnimatePresence key={item.id}>

          <Item infos={item}  />
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}
