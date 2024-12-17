import React from 'react'
import { offers } from '../assets/data';

export default function Offres() {
  return (
    <div className='flex-col flex min-h-dvh snap-start  p-0'>
        
      <video
        className="h-[30vh] md:h-[35vh] w-full object-cover object-bottom"
        src="../../head.mov"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
   

          <h1 className='font-westmeath uppercase text-2xl sm:text-5xl text-center mt-8'>Formules</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 p-4'>
        {offers.map((off, id) => (
                <div
                  key={id}
                  className='card md:p-4'
                >
                  <h1 className='text-xl  md:text-3xl font-bold font-westmeath uppercase text-center'>{off.nom}</h1>
                  
      
                  
                  <ul className=' text-center  font-mono'>
                    {
                      off.inclus.map((produits , id)=>(< div key = {id}><li className='md:text-2xl text-[11px] md:py-4'  >{produits}  </li> 
                      </div> ))
                    }
      
                  </ul>
                  <h2 className='text-2xl'>  {off.prix} € </h2>
                </div>
              ))}
        </div>
      
    </div>
  )
}
