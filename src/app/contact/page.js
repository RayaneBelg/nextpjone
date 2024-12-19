"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="h-dvh flex flex-col justify-between bg-gradient-to-r from-white to-gray-200 p-4">
      {/* Main Content Wrapper */}
      <div className="h-[calc(100%-theme(space.16)-theme(space.12))] flex flex-col lg:flex-row justify-between items-center gap-6">
        
        {/* Left Section: Image and Intro */}
        <motion.div
          className="flex flex-col items-center lg:items-start lg:w-1/2 w-[full] gap-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            className="w-[80%] lg:w-[60%] object-cover rounded-lg shadow-lg"
            src="../../rosain.jpg"
            alt="Contact"
          />
          <h1 className="text-2xl lg:text-4xl font-westmeath mt-4 text-center lg:text-left">
            Comment nous trouver ?
          </h1>
          <p className="text-gray-700 text-sm lg:text-base text-center lg:text-left px-2 lg:px-0 uppercase font-bold">
            Nous sommes ouvert tout les jours de 7:00 à 23:00
          </p>
        </motion.div>

        {/* Right Section: Contact Details */}
        <motion.div
          className="flex flex-col items-start justify-center gap-2 w-full lg:w-1/2 font-mono"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Address */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-lg lg:text-2xl text-black" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold">Addresse du restaurant</h2>
              <p className="text-gray-700 text-sm lg:text-base">
                4 Pl Abbé Pierre 69009
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-lg lg:text-2xl text-black" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold">Nous appeler</h2>
              <p className="text-gray-700 text-sm lg:text-base">+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg lg:text-2xl text-black" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold">Email</h2>
              <p className="text-gray-700 text-sm lg:text-base">info@rosacuisine.fr</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map */}
      <div className="w-full h-[150px] lg:h-[250px] mt-4 rounded-lg overflow-hidden">
     
        <iframe 
        className="w-full h-full sm:h-[30vh]"
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d89032.10894496374!2d4.713508226355309!3d45.78615078481529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47f4eb5e4dc8e601%3A0xe70336dc96c30659!2s4%20Pl.%20de%20l%E2%80%99Abb%C3%A9%20Pierre%2C%2069009%20Lyon!3m2!1d45.7861804!2d4.795908799999999!5e0!3m2!1sfr!2sfr!4v1734572535510!5m2!1sfr!2sfr"  loading="lazy"></iframe>
      </div>
    </div>
  );
}
