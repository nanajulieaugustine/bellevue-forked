import Image from "next/image";
import SolBaggrund from "../global/ikoner/SolBaggrund";

const BilledKarrusel = ({ billede, item}) => {
  return (
    <div className="rounded-full relative">
      <div className="backdrop-blur-3xl">
        <Image
          src={billede.url}
          alt={billede.alt}
          width={800}
          height={800}
          className="object-cover rounded-full p-10 max-h-screen"
          />
           </div>
           <SolBaggrund item={item}/>
    </div>
  );
};

export default BilledKarrusel;
