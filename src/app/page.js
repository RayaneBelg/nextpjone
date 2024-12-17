import Image from "next/image";
import Hero from "./Components/Hero";
import Formules from "./Components/Formules";
import BannerCta from "./Components/BannerCta";
import Offres from "./Components/Offres";

export default function Home() {
  return (
    <div className="min-h-dvh snap-y snap-mandatory overflow-y-scroll h-dvh  ">
      <div className="snap-start h-[dvh]  overflow-y-hidden">
        <Hero />
        <Offres/>
      </div>

   

      <div className="snap-start h-dvh  overflow-y-hidden">
        <BannerCta />
      </div>
      <div className="snap-start h-dvh flex items-center justify-center overflow-y-hidden ">
        <Offres/>
      </div>


    </div>
  );
}
