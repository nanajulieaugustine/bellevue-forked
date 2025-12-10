import BlivMedlem from "@/components/venneforening/BlivMedlem";
import HeroVenner from "@/components/venneforening/HeroVenner";
import MedlemsGoder from "@/components/venneforening/MedlemsGoder";
import Server from "@/components/venneforening/Server";
import VennerQuestion from "@/components/venneforening/VennerQuestion";

const Venneforening = () => {
  return (
<div className="pb-50">
      <HeroVenner />
      <Server />
      <MedlemsGoder />
      <BlivMedlem />
      <VennerQuestion />
    </div>
  );
};

export default Venneforening;
