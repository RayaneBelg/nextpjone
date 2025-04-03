
import React from 'react'
import { Metadata } from "next";
import Lacarte from '../Components/Lacarte'

export const metadata = {
  title: "Menu Rosa Lyon - Burgers & Cuisine Maison à Lyon 9",
  description: "Découvrez notre menu : burgers, fish and chips, cordon bleu, frites maison et viandes de qualité. Tout est fait maison chez Rosa Lyon !",
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


export default function page() {
  return (
    
    <main>
      
      <Lacarte/>
      
    </main>
  )
}
