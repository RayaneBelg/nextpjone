'use client'
import React from 'react'
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope , FaChevronDown} from "react-icons/fa";
import GallerySection from "../Components/GallerySection";
import Link from 'next/link';

export default function page() {
  return (
    <div className="h-dvh snap-y snap-mandatory overflow-y-auto">
       <GallerySection/>
      <div className="flex flex-col justify-center items-center snap-start h-dvh  text-white bg-gradient-boldred relative">
            {/* Content Wrapper with Adjusted Height */}
            <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col justify-center items-center px-4">
 
    <h2 className="font-westmeath text-2xl md:text-3xl lg:text-4xl uppercase text-center mb-4">
      Options de privatisation
    </h2>

    {/* Responsive Cards Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
      {/* Option 1: Locaux */}
      <div className="flex flex-col items-center text-center border border-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg md:text-xl font-bold uppercase mb-2">
          Locaux
        </h3>
        <p className="text-sm md:text-base mb-4">Mise à disposition de la salle</p>
        <span className="text-xl md:text-2xl font-bold">__€</span>
      </div>

      {/* Option 2: Locaux + ménage */}
      <div className="flex flex-col items-center text-center border border-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg md:text-xl font-bold uppercase mb-2">
          Locaux + Ménage
        </h3>
        <p className="text-sm md:text-base mb-4">
          Salle et service de nettoyage inclus.
        </p>
        <span className="text-xl md:text-2xl font-bold">__€</span>
      </div>

      {/* Option 3: Prestation complète */}
      <div className="flex flex-col items-center text-center border border-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg md:text-xl font-bold uppercase mb-2">
          Prestation complète
        </h3>
        <p className="text-sm md:text-base mb-4">
          Locaux, traiteur, et service complet.
        </p>
        <span className="text-xl md:text-2xl font-bold text-yellow-300">
          Sur devis
        </span>
      </div>
    </div>
    <Link href="tel:0478838746">
    
    <button className="mt-6 px-6 py-2 hover:bg-black text-gray-200 border-2 border-gray-200 rounded transition-all duration-300 text-sm md:text-base lg:text-lg font-bold uppercase">
    J'appelle
  </button>

  </Link>
  

  {/* Call to Action Button */}

</div>
</div>
     
     
      
    </div>
  )
}
