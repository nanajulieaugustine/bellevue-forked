import Image from "next/image";

const InfoBokse = () => {
  return (
    <section>
      {/* IKONER + GULE TEKSTBOKSE */}
      <div className="flex flex-col gap-16 items-stretch sm:flex-row sm:justify-between sm:gap-8">
        {/* PARKERING */}
        <div className="relative flex-1">
          <div className="absolute -top-16 left-6">
            <Image src="/svg/clock.svg" alt="" width={100} height={100} />
          </div>
          <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            Gratis, ubegrænset parkering
          </p>
        </div>

        {/* STOL */}
        <div className="relative flex-1">
          <div className="absolute -top-16 left-6">
            <Image src="/svg/car.svg" alt="" width={80} height={80} />
          </div>

          <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            742 siddepladser
          </p>
        </div>

        {/* CATERING */}
        <div className="relative flex-1">
          <div className="absolute -top-16 left-6">
            <Image src="/svg/suitcase.svg" alt="" width={100} height={100} />
          </div>

          <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            Catering, teknik og underholdning
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoBokse;
