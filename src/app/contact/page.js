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
            Get in Touch
          </h1>
          <p className="text-gray-700 text-sm lg:text-base text-center lg:text-left px-2 lg:px-0">
            We’re here to assist you! Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Right Section: Contact Details */}
        <motion.div
          className="flex flex-col items-start justify-center gap-4 w-full lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Address */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-lg lg:text-2xl text-black" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold">Our Address</h2>
              <p className="text-gray-700 text-sm lg:text-base">
                123 Rosa Lane, Blossom City, FL 45678
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-lg lg:text-2xl text-black" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold">Call Us</h2>
              <p className="text-gray-700 text-sm lg:text-base">+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg lg:text-2xl text-black" />
            <div>
              <h2 className="text-base lg:text-xl font-semibold">Email</h2>
              <p className="text-gray-700 text-sm lg:text-base">info@rosacuisine.com</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map */}
      <div className="w-full h-[150px] lg:h-[250px] mt-4 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full sm:h-[30vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.543234180184!2d-122.40141202413465!3d37.7873599796568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3b52f55d%3A0x1e5ecbb20c25ec8a!2s123%20Rosa%20Ln%2C%20San%20Francisco%2C%20CA%2094132%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
