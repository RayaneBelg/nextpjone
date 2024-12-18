"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

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
        className={`fixed bottom-0 w-full bg-black text-white z-50 transition-all duration-500 ${
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
          <div className="p-4">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <div className="flex flex-col gap-3 mt-3">
              {/* Address */}
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-lg text-white" />
                <span className="text-sm">123 Rosa Lane, Blossom City</span>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg text-white" />
                <span className="text-sm">+1 (123) 456-7890</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lg text-white" />
                <span className="text-sm">info@rosacuisine.com</span>
              </div>
            </div>

            {/* Additional Links */}
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Privacy Policy</li>
              <li>• Terms & Conditions</li>
              <li>• FAQ</li>
            </ul>
          </div>
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
