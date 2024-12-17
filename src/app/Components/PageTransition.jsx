"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    setIsAnimating(true); // Start animation
    const timeout = setTimeout(() => {
      setIsAnimating(false); // End animation after 1s
    }, 1000);

    return () => clearTimeout(timeout); // Clean up timeout
  }, [pathname]); // Trigger animation when pathname changes

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          key="page-transition"
          initial={{ x: "-100%" }}  // Make sure to wrap percentages in quotes
          animate={{ x: "0%" }}     // Same here for consistency
          exit={{ x: "100%" }}      
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black origin-left"
        >
          <motion.img
            src="../../RosaWhite.png"
            alt="Page Transition"
            className="absolute inset-0 m-auto "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
