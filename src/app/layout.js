import localFont from "next/font/local";
import { Metadata } from "next";

import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import PageTransition from "./Components/PageTransition";
import {GoogleTagManager , GoogleAnalytics } from "@next/third-parties/google"
import CookieBanner from "./Components/CookieBanner";

export const metadata = {
  title: 'Rosa Restaurant',
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
  },
  manifest: '/manifest.json',
};

const westmeath = localFont({
  src: "../../public/fonts/Westmeath.ttf",
  weight: "700",
  variable: "--font-west", // This defines the CSS variable
});


 
export default function RootLayout({ children }) {
  console.log("GTM ID:", process.env.NEXT_PUBLIC_GTM_ID);
  
  return (
    <html lang="en" className={`${westmeath.variable}`}>
    
        <body
        className="p-0 bg-gradient-body  "
      >
      
       <GoogleAnalytics gaId="G-HBWNJFTY9D"/>
      <Header/>
     
      
    <Loader/>
    
        {children}
        <CookieBanner/>
        <Footer/>
      </body>
     
    </html>
  );
}
