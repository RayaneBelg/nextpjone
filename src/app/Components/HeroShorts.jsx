"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

export default function HeroShorts() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    { id: 1, src: "/head.mov", poster: "/thumb1.jpg", title: "Yellow Tomato Pasta", views: "52k views" },
    { id: 2, src: "/mozza.mp4", poster: "/thumb2.jpg", title: "Youssef Boughanem Talk", views: "68k views" },
    { id: 3, src: "/head.mov", poster: "/thumb3.jpg", title: "When Ada's Collar Gets Bored", views: "102k views" },
    { id: 4, src: "/mozza.mp4", poster: "/thumb4.jpg", title: "Another Fun Short", views: "88k views" },
  ];

  const handleThumbnailClick = (index) => {
    setCurrentVideoIndex(index);
    setIsFullScreen(true);
  };

  const handleSwipe = (direction) => {
    if (direction === "up" && currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (direction === "down" && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <div className="flex flex-col snap-start h-dvh bg-gradient-softgray relative">
      {/* Grid Mode */}
      {!isFullScreen && (
        <div className="h-[calc(100%)] flex flex-col justify-center items-center overflow-hidden">
          <div className="text-center p-4">
            <h1 className="font-westmeath text-3xl lg:text-5xl uppercase">
              Bienvenue au Rosa
            </h1>
            <img className="h-14" src="/IconeBlack.png" alt="Logo" />
          </div>

          <div className="flex snap-x snap-mandatory overflow-x-auto gap-4 w-full lg:justify-center p-4">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="snap-center flex-shrink-0 w-[150px] h-[280px] relative border border-gray-800 bg-black rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                onClick={() => handleThumbnailClick(index)}
              >
                {index === 0 ? (
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    poster={video.poster}
                  />
                ) : (
                    <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    poster={video.poster}
                  />
                )}
                <div className="absolute inset-0 flex justify-center items-center bg-black/40">
                  <FaPlay className="text-white text-sm" />
                </div>
                <div className="mt-2 text-sm text-white px-2">
                  <p className="font-semibold truncate">{video.title}</p>
                  <p className="text-gray-400 text-xs">{video.views}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Full-Screen Swipeable Mode */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            className="absolute inset-0 bg-black flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullScreen(false)}
              className="absolute top-4 right-4 z-50 text-white text-xl"
            >
              <FaTimes />
            </button>

            {/* Swipeable Video */}
            <motion.div
              className="w-full h-full flex justify-center items-center"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y < -100) handleSwipe("up");
                if (info.offset.y > 100) handleSwipe("down");
              }}
            >
              <motion.video
                key={videos[currentVideoIndex].id}
                src={videos[currentVideoIndex].src}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
