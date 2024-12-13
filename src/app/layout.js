import localFont from "next/font/local";

import "./globals.css";
import Header from "./Components/Header";


const westmeath = localFont({
  src: "../../public/fonts/Westmeath.ttf",
  weight: "700",
  variable: "--font-west", // This defines the CSS variable
});


 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${westmeath.variable}`}>
        <body
        className="p-0"
      >
      <Header/>
     
    
        {children}
      </body>
    </html>
  );
}
