import Image from "next/image";

const BilledKarrusel = ({ billede}) => {
  return (
    <div>
        <Image
          src={billede.url}
          alt={billede.alt}
          fill
          className="object-cover rounded-lg mb-6 max-h-screen"
          />
    </div>
  );
};

export default BilledKarrusel;
