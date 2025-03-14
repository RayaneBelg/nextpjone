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

export const metadata = {
  title: "Rosa Lyon - Restaurant Halal à Lyon 9 | Burgers & Brasserie",
  description: "Découvrez Rosa Lyon, votre restaurant halal à Lyon 9. Burgers, fish and chips, belles pièces de viande et desserts maison dans une ambiance conviviale.",
};



export default function Home() {

  return (
    <div className="min-h-dvh snap-y snap-mandatory overflow-y-scroll h-dvh  ">
    

     
        <Lesoffres/>
      
     
        
   

      
       <HarmonizedCta/>
      
      
      
        <AboutCta/>
        
       
      


    </div>
  );
}
