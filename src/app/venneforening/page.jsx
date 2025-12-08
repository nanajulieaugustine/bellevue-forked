import HeroVenner from "@/components/venneforening/HeroVenner";
import Server from "@/components/venneforening/Server";
// import VennerKarrusel from "@/components/venneforening/VennerKarrusel";
import VennerQuestion from "@/components/venneforening/VennerQuestion";

const Venneforening = () => {
  return (
    <div>
      <HeroVenner />
      <Server />
      {/* <VennerKarrusel /> */}
      <VennerQuestion />
    </div>
  );
};

export default Venneforening;
