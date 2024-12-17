import React from 'react';
import { offers } from '../assets/data';

export default function Formules() {
  return (
    <div className='overflow-x-hidden min-h-[30vh]  flex flex-col justify-center'>
      <h1 className='font-westmeath uppercase text-4xl text-center my-6'>Nos formules</h1>
      <div className='flex justify-between overflow-x-auto snap-x snap-mandatory space-x-4 py-4 '>
        {offers.map((off, id) => (
          <div
            key={id}
            className='card snap-start flex-shrink-0 w-[80%] md:w-[500px]  bg-gray-100 p-4  shadow-md flex flex-col gap-6'
          >
            <h1 className='text-xl font-bold font-westmeath uppercase text-center'>{off.nom}</h1>
            

            
            <ul className='text-xl text-center uppercase font-extrabold font-mono'>
              {
                off.inclus.map((produits , id)=>(< div key = {id}><li className=''  >{produits}  </li> <span>+</span>
                </div> ))
              }

            </ul>
            <h2 className='text-2xl'>  {off.prix} € </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
