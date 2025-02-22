import localFont from "next/font/local";


import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import PageTransition from "./Components/PageTransition";
import {GoogleTagManager } from "@next/third-parties/google"
import CookieBanner from "./Components/CookieBanner";



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
       <GoogleTagManager gtmId="G-HBWNJFTY9D" />
      <Header/>
     
      
    <Loader/>
    
        {children}
        <CookieBanner/>
        <Footer/>
      </body>
     
    </html>
  );
}
