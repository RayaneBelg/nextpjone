'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const staggeredVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.div
      className="fixed top-0 z-50 bg-gradient-headover w-full"
      animate={{ height: scrolled ? '6vh' : '7vh' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center px-4 h-full">
        {/* Left Section */}
        <div className="w-1/3 flex justify-start">
          <FaSquarePhone size={40} color="black" />
        </div>

        {/* Center Section */}
        <div className="my-2 flex justify-center">
          <Link href="/">
            <img
              className={`${scrolled ? 'h-[5vh]' : 'h-[6vh]'}`}
              src={scrolled ? '../../IconeBlack.png' : '../../Rosablack.png'}
              alt="Hero Banner"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-1/3 flex justify-end">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose size={40} color="black" />
            ) : (
              <GiHamburgerMenu size={40} color="black" />
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50"
        >
          <div className="my-4 absolute top-2">
            <img
              className="h-[20vh]"
              src="../../RosaWhite.png"
              alt="Logo"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="space-y-12 md:space-y-16">
            <motion.li
              custom={0}
              variants={staggeredVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-7xl text-center text-white font-westmeath uppercase"
            >
              <Link href="/menu" onClick={() => setMenuOpen(false)}>Carte</Link>
            </motion.li>
            <motion.li
              custom={1}
              variants={staggeredVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl  text-center text-white font-westmeath uppercase"
            >
              <Link href="/evenements" onClick={() => setMenuOpen(false)}>Blog</Link>
            </motion.li>
            <motion.li
              custom={2}
              variants={staggeredVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl text-center md:text-7xl text-white font-westmeath uppercase"
            >
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </motion.li>
            <motion.li
              custom={2}
              variants={staggeredVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl text-center md:text-7xl text-white font-westmeath uppercase"
            >
              <Link href="/events" onClick={() => setMenuOpen(false)}>Privatisation</Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}
