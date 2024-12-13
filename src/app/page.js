import Image from "next/image";
import Hero from "./Components/Hero";
import Formules from "./Components/Formules";

export default function Home() {
  return (
    <div className="bg-gradient-card ">
    <Hero/>
    <Formules/>
  
    </div>
  );
}
