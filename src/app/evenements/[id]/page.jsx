import React from 'react';
import { articles } from '../../assets/data';

export default function ArticlePage({ params }) {

const {id} = params;
const article = articles.find((art) => art.id.toString() === id);


  return (
    <div className="solo-article">
      <h1 className="font-westmeath uppercase text-4xl">{article.titre}</h1>
      <h2 className="text-xl font-bold">{article.sousTitre}</h2>
      <img
        className="h-[30vh] w-full object-cover"
        src="../../herobann.jpg"
        alt="Hero Banner"
      />
      <p>{article.contenu}</p>
      <p><strong>Author</strong> {article.auteur}</p>
      <p><strong>Published</strong> {article.datePublication}</p>
    </div>
  );
}

