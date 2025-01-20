import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery({ activeImages }) {
  const [displayImages, setDisplayImages] = useState([]);

  useEffect(() => {
    const updateDisplayedImages = () => {
      const isMobile = window.innerWidth < 640; // Mobile breakpoint
      setDisplayImages(isMobile ? activeImages.slice(0, 2) : activeImages.slice(0, 3));
    };

    // Initial setup
    updateDisplayedImages();

    // Update on window resize
    window.addEventListener("resize", updateDisplayedImages);
    return () => window.removeEventListener("resize", updateDisplayedImages);
  }, [activeImages]);

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.2, // Stagger delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={displayImages.join(",")} // Unique key based on current images
      className="grid grid-cols-2 sm:grid-cols-3  justify-items-center w-full mt-[7vh]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {displayImages.map((src, idx) => (
          <motion.div
            key={src + idx} // Ensure unique keys
            className="relative w-full h-48 sm:h-72 overflow-hidden group"
            variants={itemVariants} // Apply item variants
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover transition-transform "
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
