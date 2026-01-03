import Image from "next/image";
import SolBaggrund from "../global/ikoner/SolBaggrund";
import BellevueStriber from "../global/animationer/BellevueStriber";

const BilledKarrusel = ({ billede, item }) => {
  return (
    <Image
      src={billede.url}
      alt={billede.alt}
      fill
      loading="lazy"
      className="object-cover max-h-screen rounded-4xl"
    />
  );
};

export default BilledKarrusel;
