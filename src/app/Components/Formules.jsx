import React from 'react';
import { offers } from '../assets/data';

export default function Formules() {
  return (
    <div className='overflow-x-hidden'>
      <h1 className='font-westmeath uppercase text-4xl text-center'>Nos formules</h1>
      <div className='flex justify-between overflow-x-auto snap-x snap-mandatory space-x-4 py-4'>
        {offers.map((off, id) => (
          <div
            key={id}
            className='card snap-start flex-shrink-0 w-[80%] md:w-[500px] h-[40vh] bg-gray-100 p-4  shadow-md'
          >
            <h1 className='text-xl font-bold font-westmeath uppercase text-center'>{off.nom}</h1>
            <p className='font-mono'>{off.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
