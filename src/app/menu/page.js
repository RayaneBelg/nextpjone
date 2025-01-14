 'use client'
import React from 'react'
import GridMenu from '../Components/GridMenu'
import {motion } from "framer-motion"
import Menew from '../Components/Menew'

export default function page() {
  return (
    <motion.div 
    initial ={{opacity : 0}}
    animate ={{opacity : 1}}
    transition={{delay : .8}}
    className='min-h-dvh'>
      
      <Menew/>
    </motion.div>
  )
}
