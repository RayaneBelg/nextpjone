"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie.includes("cookieConsent=true");
    if (!hasConsent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
    setIsVisible(false);
  };

  const refuseCookies = () => {
    document.cookie = "cookieConsent=false; path=/; max-age=" + 60 * 60 * 24 * 30; // Expires in 30 days
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-4 left-4 right-4 bg-black text-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 z-50"
    >
      <p className="text-sm font-mono">
        Nous utilisons des cookies pour améliorer votre expérience utilisateur.
      </p>
      <div className=" flex gap-4">
      <button
          onClick={acceptCookies}
          className="bg-gradient-headover hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all font-mono"
        >
          Accepter
        </button>
        <button
          onClick={refuseCookies}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all font-mono"
        >
          Refuser
        </button>

      </div>
    
    </motion.div>
  );
}
