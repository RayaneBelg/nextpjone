 'use client'
import React from 'react'
import GridMenu from '../Components/GridMenu'
import {motion } from "framer-motion"
import Menew from '../Components/Menew'
import Lacarte from '../Components/Lacarte'
import ListPlats from '../Components/ListPlats'
import Head from 'next/head'



export default function page() {
  return (
    
    <motion.div 
    initial ={{opacity : 0}}
    animate ={{opacity : 1}}
    transition={{delay : .8}}
    className='min-h-dvh'>
       <Head>
        <title>Menu Rosa Lyon - Burgers & Cuisine Maison à Lyon 9</title>
        <meta
          name="description"
          content="Découvrez notre menu : burgers, fish and chips, cordon bleu, frites maison et viandes de qualité. Tout est fait maison chez Rosa Lyon !"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Menu Rosa Lyon - Burgers & Cuisine Maison à Lyon 9" />
        <meta property="og:description" content="Savourez nos plats maison : burgers, fish and chips, cordon bleu, frites maison et viandes savoureuses. Venez découvrir Rosa Lyon !" />
        <meta property="og:url" content="https://www.rosalyon.fr/menu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rosalyon.fr/images/menu.jpg" />
      </Head>
      <Lacarte/>
      
    </motion.div>
  )
}
