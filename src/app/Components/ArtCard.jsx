import React from 'react';
import Link from 'next/link';

export default function ArtCard({ infos }) {
  return (
    <div className="card text-justify gap-4 flex flex-col p-0 justify-between">
        <img
        className="  object-cover h-[40%]"
        src="../../herobann.jpg"
        alt="Hero Banner"
      />
      <div className='flex-col flex justify-between h-[60%] '>

      
      <h1 className="font-westmeath uppercase text-2xl">
        {infos.titre}
      </h1>
      <h2 className="font-bold text-xl">
        {infos.sousTitre}
      </h2>

      <p>{infos.contenu.substring(0, 100)}...</p> {/* Snippet of content */}
      <Link href={`/evenements/${infos.id}`}>
        <button className="read-button p-4 border-2 font-mono uppercase font-bold text-white bg-black">Read</button>
      </Link>
      </div>
    </div>
  );
}
