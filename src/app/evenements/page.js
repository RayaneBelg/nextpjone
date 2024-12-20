'use client'
import React from 'react'
import Hero from '../Components/Hero'
import { articles } from '../assets/data'
import ArtCard from '../Components/ArtCard'
import { motion} from "framer-motion";

export default function page() {
  return (
    <motion.div 
    initial ={{opacity : 0}}
    animate ={{opacity : 1}}
    transition={{delay : .8}}
    
    className=''>
     <Hero/>
     <div>
     <h1 className="font-westmeath text-3xl lg:text-5xl uppercase mb-4 text-center">
            Actualités
          </h1>
          <p className="text-sm sm:text-2xl font-mono font-bold text-center">
            Indulge in the culinary wonders of Rosa Cuisine. From carefully
            crafted dishes to unparalleled ambiance, we create moments worth
            savoring.
          </p>
     </div>

     <div className='grid grid-cols-1 md:grid-cols-3  xl:grid-cols-5 gap-8  p-8' >

      {
        articles.map((card , id)=>(

          <ArtCard infos={card} key={card.id} />
        ))
      }

     </div>

    </motion.div>
  )
}
