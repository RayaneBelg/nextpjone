import React from 'react'
import Hero from '../Components/Hero'
import { articles } from '../assets/data'
import ArtCard from '../Components/ArtCard'

export default function page() {
  return (
    <div className=''>
     <Hero/>
     <div>
      <h1 className='text-4xl font-bold font-westmeath uppercase text-center'>Actualités</h1> 

      <p className='font-mono font-bold text-justify'>La page ACTU/BLOG de notre restaurant est votre destination privilégiée pour rester informé de toutes nos nouveautés et inspirations culinaires. Vous y découvrirez des articles variés, allant des recettes emblématiques de notre chef aux événements spéciaux que nous organisons, en passant par des conseils pratiques et des partenariats avec des producteurs locaux. Que vous soyez passionné de gastronomie, curieux de nos initiatives ou simplement à la recherche d’idées pour sublimer vos repas, cette page vous offre un contenu riche et inspirant. Plongez dans l'univers de notre restaurant et partagez avec nous votre amour de la bonne cuisine !</p>
     </div>

     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  p-2' >

      {
        articles.map((card , id)=>(

          <ArtCard infos={card} key={card.id} />
        ))
      }

     </div>

    </div>
  )
}
