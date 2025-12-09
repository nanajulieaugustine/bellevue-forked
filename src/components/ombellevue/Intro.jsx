import Image from "next/image";

const OmHero = () => {
  return (
    // =============================== HERO SECTION ================================
    <div className="flex flex-col gap-8">
      <section>
        <h1>OM BELLEVUE TEATRET</h1>
      </section>

      <Image
        src="/images/ombellevuehero.webp"
        alt=""
        width={2000}
        height={1200}
      />

      <p className="max-w-3xl text-center self-center">
        Bellevue Teatret er et hovedværk blandt Arne Jacobsens tidlige arbejde
        og den funktionalistiske arkitektur i Danmark. Sommerteatret er det
        tredje i rækken af byggerier med glatte, hvidpudsede facader, som Arne
        Jacobsen tegnede til området omkring Bellevue Strand i 1930’erne, og som
        har givet området tilnavnet ”Arne Jacobsens Hvide By” Alt sammen i tråd
        med periodens idealer om sundhed, renlighed og kropslig udfoldelse.
      </p>
    </div>
  );
};

export default OmHero;
