import Image from "next/image";
import Hero from "./Components/Hero";
import Formules from "./Components/Formules";
import BannerCta from "./Components/BannerCta";

export default function Home() {
  return (
    <div className="min-h-dvh">
    <Hero/>
    <Formules/>
    <BannerCta/>
    <Formules/>

  
    </div>
  );
}
