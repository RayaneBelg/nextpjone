'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically hide the loader after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Loader disappears after 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isLoading) return null; // If not loading, don't render the loader

  return (
    <div className="fixed inset-0 flex items-center flex-col justify-center bg-black z-50">
       <img
        src="../toquewhite3.png"
        alt="Loading..."
       
      />
       <h1 className="font-westmeath text-3xl  lg:text-5xl uppercase  text-white">
            Café - Restaurant
          </h1>
          <h1 className="font-westmeath text-2xl  lg:text-5xl uppercase  text-white my-4 ">
            4 Pl de l'abbé Pierre 69009
          </h1>
    </div>
  );
}
