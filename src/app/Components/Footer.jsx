'use client' 
import React, { useState } from 'react';
import Link from 'next/link';

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
          isExpanded ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={toggleFooter}
      ></div>

      {/* Footer */}
      <div
        className={`fixed bottom-0 w-full bg-black text-white z-50 transition-all duration-500 ${
          isExpanded ? 'h-[45vh]' : 'h-[5vh]'
        }`}
      >
        {/* Toggle Button */}
        <div
          className="flex justify-center items-center p-2 cursor-pointer"
          onClick={toggleFooter}
        >
          <span className="text-xl absolute right-2 top-2">
            {isExpanded ? '▼' : '▲'}
          </span>
        </div>

        {/* Content Area */}
        <div
          className={`overflow-hidden transition-opacity duration-500 ${
            isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* Main Footer Content */}
          <div className="p-4">
            <h2 className="text-lg font-bold">More Information</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Contact Us</li>
              <li>• Privacy Policy</li>
              <li>• Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Footer Icon Always Visible */}
        <div
          className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 
          }`}
        >
          <Link href="/">
            <img
              className="h-[3vh] object-cover"
              src="../../IconeWhite.png"
              alt="Hero Banner"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
