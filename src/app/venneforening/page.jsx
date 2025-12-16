import BlivMedlem from "@/components/venneforening/BlivMedlem";
import HeroVenner from "@/components/venneforening/HeroVenner";
import MedlemsGoder from "@/components/venneforening/MedlemsGoder";
import Server from "@/components/venneforening/Server";
import VennerQuestion from "@/components/venneforening/VennerQuestion";
import BookBilletter from "@/components/venneforening/BookBilletter";

const Venneforening = () => {
  return (
<div className="pb-20">
      <HeroVenner />
      <Server />
      <MedlemsGoder />
      <BlivMedlem />
      <VennerQuestion />
      <BookBilletter/>
    </div>
  );
};

export default Venneforening;
