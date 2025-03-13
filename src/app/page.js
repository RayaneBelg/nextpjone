import Image from "next/image";
import Hero from "./Components/Hero";
import Formules from "./Components/Formules";
import BannerCta from "./Components/BannerCta";
import Offres from "./Components/Offres";
import AboutCta from "./Components/AboutCta";
import HarmonizedCta from "./Components/HarmonizedCta";
import GridMenu from "./Components/GridMenu";
import GridNew from "./Components/GridNew";
import HeroShorts from "./Components/HeroShorts";
import OffersNext from "./Components/OffersNext";
import Combos from "./Components/Combos";
import Lesoffres from "./Components/LesOffres";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-dvh snap-y snap-mandatory overflow-y-scroll h-dvh  ">
      <Head>
        <title>Restaurant Halal à Lyon 9 - Cuisine de Brasserie Maison</title>
        <meta
          name="description"
          content="Découvrez notre restaurant halal à Lyon 9 : burgers, fish and chips, belles pièces de viande et desserts maison. Profitez d'un cadre chaleureux et convivial."
        />
      </Head>

     
        <Lesoffres/>
      
     
        
   

      
       <HarmonizedCta/>
      
      
      
        <AboutCta/>
        
       
      


    </div>
  );
}
