import localFont from "next/font/local";

import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import PageTransition from "./Components/PageTransition";


const westmeath = localFont({
  src: "../../public/fonts/Westmeath.ttf",
  weight: "700",
  variable: "--font-west", // This defines the CSS variable
});


 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${westmeath.variable}`}>
        <body
        className="p-0 bg-gradient-body overflow-x-hidden "
      >
      <Header/>
      <PageTransition/>
      <Loader/>
     
    
        {children}
        <Footer/>
      </body>
     
    </html>
  );
}
