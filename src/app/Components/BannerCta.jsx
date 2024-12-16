import React from 'react'

export default function BannerCta() {
  return (
    <div className=' bg-red-700 flex flex-col md:flex-row justify-center p-4'>
        <div className='grid grid-cols-2 gap-1 px-4 mx-4'>
             <img
        className=" h-[20vh] w-[20vh] object-cover border-2 border-black"
        src="../../herobann.jpg"
        alt="Hero Banner"
      />
            <img
        className=" h-[20vh] w-[20vh] object-cover border-2 border-black"
        src="../../herobann.jpg"
        alt="Hero Banner"
      />
            <img
        className=" h-[20vh] w-[20vh] object-cover border-2 border-black"
        src="../../herobann.jpg"
        alt="Hero Banner"
      />
            <img
        className=" h-[20vh] w-[20vh] object-cover border-2 border-black"
        src="../../herobann.jpg"
        alt="Hero Banner"
      />



            
    </div>
        <div className=' mx-4'>
        <h1 className='font-westmeath uppercase text-4xl text-center my-6'>La Carte</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ut minus pariatur ipsum eligendi</p>
            
        </div>
      
    </div>
  )
}
