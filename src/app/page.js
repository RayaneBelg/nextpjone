import Image from "next/image";
import Hero from "./Components/Hero";
import Formules from "./Components/Formules";
import BannerCta from "./Components/BannerCta";
import Offres from "./Components/Offres";

export default function Home() {
  return (
    <div className="min-h-dvh snap-y snap-mandatory overflow-y-scroll h-dvh">
      <div className="snap-start h-[dvh]">
        <Hero />
        <Offres/>
      </div>

   

      <div className="snap-start h-dvh">
        <BannerCta />
      </div>
      <div className="snap-start h-dvh flex items-center justify-center">
        <Offres/>
      </div>


    </div>
  );
}
