'use client'
import React, { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically hide the loader after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Loader disappears after 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isLoading) return null; // If not loading, don't render the loader

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img
        src="../../RosaWhite.png"
        alt="Loading..."
        className="animate-pulse  "
      />
    </div>
  );
}
