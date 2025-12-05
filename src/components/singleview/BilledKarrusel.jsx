import Image from "next/image";
import SolBaggrund from "../global/ikoner/SolBaggrund";
import BellevueStriber from "../global/animationer/BellevueStriber";

const BilledKarrusel = ({ billede, item }) => {
  return (
    <Image
      src={billede.url}
      alt={billede.alt}
      fill
      className="object-cover max-h-screen"
    />
  );
};

export default BilledKarrusel;
