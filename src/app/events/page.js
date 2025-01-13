'use client'
import React from 'react'
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope , FaChevronDown} from "react-icons/fa";
import GallerySection from "../Components/GallerySection";

export default function page() {
  return (
    <div className="h-dvh snap-y snap-mandatory overflow-y-auto">
       <GallerySection/>
      <div className="flex flex-col justify-center items-center snap-start h-dvh  text-black bg-gradient-boldred relative">
            {/* Content Wrapper with Adjusted Height */}
            <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col lg:flex-row justify-center items-center px-4">
              {/* Left Content */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left lg:w-[50%] p-4 text-gray-200"
              >
                <h1 className="font-westmeath text-3xl lg:text-5xl uppercase mb-4 ">
                Réserver le 1er étage
                </h1>
                <p className="text-sm sm:text-2xl font-mono font-bold">
                Anniversaires, réunions, ou soirées privées—profitez d'un cadre
            unique pour vos événements.
                </p>
                <button className="mt-6 px-6 py-2 hover:bg-black  text-gray-200 border-2 border-gray-200 rounded transition-all duration-300 text-sm lg:text-lg font-bold uppercase">
                  J'appelle
                </button>
              </motion.div>
      
              {/* Right Content */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-[50%] flex justify-center items-center"
              >
                <img
                  className="h-[30vh] lg:h-[40vh] w-auto object-cover  shadow-lg border-2 border-gray-200"
                  src="../../rosain.jpg"
                  alt="About Rosa"
                />
              </motion.div>
            </div>
              {/* Scroll Down Animation */}
                
            

          </div>

     
     
      
    </div>
  )
}
