"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope , FaChevronDown} from "react-icons/fa";
import GallerySection from "../Components/GallerySection";

export default function Contact() {

  const weekSlots = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="h-dvh snap-y snap-mandatory overflow-y-auto">
      {/* Section 1: Contact Details */}
      <div className="flex flex-col justify-center items-center snap-start h-dvh text-black relative ">
        {/* Content Wrapper with Adjusted Height */}
        <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col lg:flex-row justify-center items-center px-4">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-[50%] p-4 text-black"
          >
            <h1 className="font-westmeath text-3xl lg:text-5xl uppercase mt-4">
             où nous trouver ?
            </h1>
            <p className="text-sm sm:text-2xl font-mono font-bold mb-2">
              Nous sommes ouverts tous les jours de 7:00 à 23:00
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-2 font-mono">
              {/* Address */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xl lg:text-2xl text-black" />
                <div>
                  <h2 className="text-sm lg:text-xl font-semibold">
                    Adresse du restaurant
                  </h2>
                  <p className="text-black text-sm lg:text-lg">
                    4 Pl Abbé Pierre, 69009 Lyon
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xl lg:text-2xl text-black" />
                <div>
                  <h2 className="text-sm lg:text-xl font-semibold">
                    Nous appeler
                  </h2>
                  <p className="text-black text-sm lg:text-lg">
                    +1 (123) 456-7890
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xl lg:text-2xl text-black" />
                <div>
                  <h2 className="text-sm lg:text-xl font-semibold">Email</h2>
                  <p className="text-black text-sm lg:text-lg">
                    info@rosacuisine.fr
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content: Map */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[50%] flex justify-center items-center"
          >
            <iframe
              className="w-[90%] h-[30vh] lg:h-[40vh] card border-2 border-gray-200 shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d89032.10894496374!2d4.713508226355309!3d45.78615078481529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47f4eb5e4dc8e601%3A0xe70336dc96c30659!2s4%20Pl.%20de%20l%E2%80%99Abb%C3%A9%20Pierre%2C%2069009%20Lyon!3m2!1d45.7861804!2d4.795908799999999!5e0!3m2!1sfr!2sfr!4v1734572535510!5m2!1sfr!2sfr"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
          {/* Scroll Down Animation */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: 20 }}
                transition={{ duration: .8  , ease: "easeInOut", repeat: Infinity, repeatType: "loop" , repeatDelay :3}}
                className="absolute bottom-[8vh] flex justify-center items-center"
              >
                <FaChevronDown className="text-black text-3xl" />
              </motion.div>


      </div>


      {/* Section 2: Reservation Details */}
       
    </div>
  );
}
