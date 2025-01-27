"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFooter = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Blurred Background for Expanded Footer */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isExpanded ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={toggleFooter}
      ></div>

      {/* Footer */}
      <div
        className={`fixed bottom-0 w-full bg-gradient-headover text-white z-40 transition-all duration-500 ${
          isExpanded ? "h-[50vh]" : "h-[7vh]"
        }`}
      >
        {/* Header with Icons */}
        <div className="flex justify-between items-center px-4 py-2 h-[7vh]">
          {/* Instagram Icon */}
          <Link href="https://www.instagram.com/rosafood69009/">
          <FaInstagram size={30} className="text-white" />
          </Link>

          {/* Centered Logo */}
          <Link href="/">
            <img
              className="h-[5vh] object-cover"
              src="../../IconeWhite.png"
              alt="Hero Banner"
            />
          </Link>

          {/* Toggle Arrow */}
          <span onClick={toggleFooter} className="cursor-pointer">
            {isExpanded ? (
              <FaChevronDown size={40} className="text-white" />
            ) : (
              <FaChevronUp size={40} className="text-white" />
            )}
          </span>
        </div>

        {/* Content Area */}
        <div
          className={`overflow-hidden transition-opacity duration-500 ${
            isExpanded ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <motion.div
            className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 pt-4 px-4 font-mono h-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Address */}
            <div className="flex flex-col items-center gap-2 text-center text-xs sm:text-sm lg:text-base">
              <FaMapMarkerAlt size={24} className="text-slate-200" />
              <div>
                <h2 className="font-semibold uppercase">Adresse du Restaurant</h2>
                <p>4 Pl Abbé Pierre 69009</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-2 text-center text-xs sm:text-sm lg:text-base">
              <FaPhoneAlt size={24} className="text-slate-200" />
              <div>
                <h2 className="font-semibold uppercase">Nous Appeler</h2>
                <p>0478838746</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-2 text-center text-xs sm:text-sm lg:text-base">
              <FaEnvelope size={24} className="text-slate-200" />
              <div>
                <h2 className="font-semibold uppercase">Email</h2>
                <p>info@rosacuisine.fr</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
