import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between  items-center px-0 bg-gradient-header">
      {/* First Div */}
      <div className=" border-red-200 w-1/3 flex justify-start ">
        <ul className='flex uppercase gap-4  '>
        <Link href="/menu" > <li className=''>Menu</li></Link>
          <Link href="/evenements" > <li>Evenements</li></Link>
          <Link href="/contact" > <li>Contact</li></Link>
        </ul>
      </div>

      {/* Middle Div */}
      <div className=" border-red-200 w-1/3 flex justify-center">
     <Link href="/">  <h1 className="text-6xl uppercase font-bold font-westmeath">Rosa</h1></Link> 
      </div>

      {/* Last Div */}
      <div className=" border-red-200 w-1/3 flex justify-end">
       <FaInstagramSquare size={40}/>
      </div>
    </div>
  );
}
  