'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 z-50 bg-gradient-headover  w-full "
      animate={{ height: scrolled ? '6vh' : '10vh' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center px-4 h-full">
        {/* Left Section */}
        <div className="w-1/3 flex justify-start">
          <AiFillTikTok size={40} color="black" />
        </div>

        {/* Center Section */}
        <div className="p-2 flex justify-center">
          <Link href="/">
            <img
              className={`   ${scrolled ? 'h-[5vh]' : 'h-[10vh]'}`}
              src={scrolled ? '../../IconeBlack.png' : '../../Rosablack.png'}
              alt="Hero Banner"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-1/3 flex justify-end">
          <FaInstagramSquare size={40} color="black" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-black">
        <ul className="flex  gap-4 justify-center ">
          <Link href="/menu"><li  className='text-xl text-white font-mono uppercase '>Carte</li></Link>
          <Link href="/evenements"><li className='text-xl text-white font-mono uppercase '>Actu</li></Link>
          <Link href="/contact"><li className='text-xl text-white font-mono uppercase '>Contact</li></Link>
        </ul>
      </div>
    </motion.div>
  );
}
