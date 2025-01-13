"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
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
          isExpanded ? "h-[45vh]" : "h-[7vh]"
        }`}
      >
        {/* Toggle Button */}
        <div
          className="flex justify-center items-center p-2 cursor-pointer"
          onClick={toggleFooter}
        >
          <span className="text-xl absolute right-2 top-2">
            {isExpanded ? "▼" : "▲"}
          </span>
        </div>

        {/* Content Area */}
        <div
          className={`overflow-hidden transition-opacity duration-500 ${
            isExpanded ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Main Footer Content */}
          
            
        

            <motion.div
          className="flex flex-col font-mono justify-between h-[40vh] p-8 "
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Address */}
          <div className="flex items-center gap-3 ">
            <FaMapMarkerAlt size={30} className="text-lg lg:text-2xl text-red-700" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold uppercase">Addresse du restaurant</h2>
              <p className=" text-sm lg:text-base">
                4 Pl Abbé Pierre 69009
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt size={30}   className="text-lg lg:text-2xl text-red-700" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold uppercase">Nous appeler</h2>
              <p className="text-sm lg:text-base">+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope  size={30}  className="text-lg lg:text-2xl text-red-700" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold uppercase">Email</h2>
              <p className=" text-sm lg:text-base">info@rosacuisine.fr</p>
            </div>
          </div>
        </motion.div>

            {/* Additional Links */}
           
         
        </div>

        {/* Footer Icon Always Visible */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <img
              className="h-[5vh] object-cover "
              src="../../IconeWhite.png"
              alt="Hero Banner"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
