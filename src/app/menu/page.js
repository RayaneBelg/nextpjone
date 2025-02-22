 'use client'
import React from 'react'
import GridMenu from '../Components/GridMenu'
import {motion } from "framer-motion"
import Menew from '../Components/Menew'
import Lacarte from '../Components/Lacarte'
import ListPlats from '../Components/ListPlats'

export default function page() {
  return (
    <motion.div 
    initial ={{opacity : 0}}
    animate ={{opacity : 1}}
    transition={{delay : .8}}
    className='min-h-dvh'>
      
      <Lacarte/>
      
    </motion.div>
  )
}
