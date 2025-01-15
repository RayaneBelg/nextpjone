import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPlay, FaPause, FaChevronRight, FaChevronLeft } from "react-icons/fa";
// Add custom styles if needed

const Showchef = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = ["vidros1.mp4", "head.mov", "head.mov", "head.mov"];

  const openModal = (index) => {
    setCurrentVideo(index);
    setModalOpen(true);
    setIsPlaying(true); // Autoplay the first video
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsPlaying(false);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(true);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(true);
  };

  return (
    <div className="w-full   mt-8 snap-start h-dvh ">
        <div className="h-[calc(100%-theme(space.16)-theme(space.6))] flex flex-col items-center justify-around">
        <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 } }
                  transition={{ duration: 0.3 }}
                  className="text-center pt-10 "
                >
                  <h1 className="font-westmeath text-3xl  lg:text-5xl uppercase ">
                    Rosa Shorts
                  </h1>
                  <p className="text-sm sm:text-2xl font-mono font-bold mb-2">
                    Découvrez le rosa en vidéo 
                     
                    </p>
                
                </motion.div>

        
      {/* Shorts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-[95%]  ">
    


        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            className="relative shadow-lg overflow-hidden rounded-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            onClick={() => openModal(idx)}
          >
            <video
              src={video}
              className="w-full h-[30vh] object-cover rounded-lg"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 text-white text-sm font-bold">
              Chef's Special {idx + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-[90%] sm:w-[70%] lg:w-[50%] h-[70vh]  rounded-lg overflow-hidden">
              {/* Custom Video Player */}
              <video
                src={videos[currentVideo]}
                className="w-full h-full object-contain rounded-lg"
                controls={false}
                autoPlay={isPlaying}
                muted={false}
              />

              

           
            </div>
            {/* Custom Controls */}
            <div className="absolute bottom-[7vh] left-0 right-0 flex justify-between items-center px-4 py-2 text-red-700">
                <button onClick={prevVideo} className="text-xl">
                  <FaChevronLeft/>
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-xl"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button onClick={nextVideo} className="text-xl">
                  <FaChevronRight/>
                </button>
              </div>
                 {/* Close Button */}
                 <button
                className="absolute top-[8vh] right-2 text-red-700 text-2xl"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default Showchef;
