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

export default function Home() {
  return (
    <div className="min-h-dvh snap-y snap-mandatory overflow-y-scroll h-dvh  ">
     
        
        <Offres/>
      

   

      
       <HarmonizedCta/>
       <GridNew/>
      
      
        <AboutCta/>
        
       
      


    </div>
  );
}
