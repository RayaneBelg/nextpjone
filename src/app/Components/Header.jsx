import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from 'next/link';

export default function Header() {
  return (
    <div className='sticky top-0'>
    
    <div className="flex justify-between  items-center px-0 bg-red-700">
      {/* First Div */}
      <div className="  w-1/3 flex justify-start ">
      
       <AiFillTikTok  size={50}/>
    
    
      </div>

      {/* Middle Div */}
      <div className=" p-2  flex justify-center">
      <Link href="/"> 
     <h1 className="text-4xl text-blackuppercase font-bold font-westmeath  p-2 outline-4 outline-double">Rosa</h1></Link> 
      </div>

      {/* Last Div */}
      <div className=" w-1/3 flex justify-end">
       <FaInstagramSquare  size={50}/>
      </div>
    </div>
    <div className='bg-black'>
    <ul className='flex uppercase gap-4 font-mono text-white justify-center '>
        <Link href="/menu" > <li className=''>Carte</li></Link>
          <Link href="/evenements" > <li>Actu</li></Link>
          <Link href="/contact" > <li>Contact</li></Link>
        </ul>

      </div>


    </div>
  );
}
  