import React from 'react';
import Link from 'next/link';

export default function ArtCard({ infos }) {
  return (
    <div className="card text-justify gap-4 flex flex-col">
      <h1 className="font-westmeath uppercase text-2xl">
        {infos.titre}
      </h1>
      <h2 className="font-bold text-xl">
        {infos.sousTitre}
      </h2>
      <p>{infos.contenu.substring(0, 100)}...</p> {/* Snippet of content */}
      <Link href={`/evenements/${infos.id}`}>
        <button className="read-button">Read</button>
      </Link>
    </div>
  );
}
