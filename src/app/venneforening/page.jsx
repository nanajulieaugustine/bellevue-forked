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
      <div className="px-0 md:px-(--content-width)">
      <BlivMedlem />
      <VennerQuestion />
      <BookBilletter />
      </div>
    </div>
  );
};

export default Venneforening;
