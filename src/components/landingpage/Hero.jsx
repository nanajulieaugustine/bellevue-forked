import BellevueStriber from "../global/animationer/BellevueStriber";
import Image from "next/image";
import VandTaarn from "../global/ikoner/VandTaarn";

const Hero = () => {
  return (
    <div role="banner" aria-label="Bellevue Teatret introduktion">
      <BellevueStriber>
        <section className="relative mx-auto max-screen-xl px-6 pt-32 md:pt-40">

          {/* Titel */}
         <div className="md:w-100 lg:w-250">
            <h1 className="display bellevueblaa-600 indent-5 moerkblaa-600">
              Bellevue
            </h1>

            <h2 className="display font-thin koboltblaa-600 text-right">
              Teatret
            </h2>
         </div>
       

          {/* Tekst + illustration */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 relative">
            <div className="flex flex-col gap-5">
              <p className="max-w-prose italic text-lg">
                “I 1937 opførtes Bellevue Teatret tæt på Bellavista af Arne
                Jacobsen. Teaterbygningens indgangsfacade med to cirkulære
                trappetårne er vendt mod Strandvejen. En indretning med lette
                materialer, der emmer af sommer, hvilket understreges af taget,
                der kan skydes til side.”
              </p>
              <p className="italic">Dansk arkitektur center</p>
            </div>

            {/* Illustration */}
            <div className="flex justify-end">
              <Image
                src="/bellevue-salen.webp"
                alt="Indgangen til Bellevue Teatret med de karakteristiske trappetårne"
                width={500}
                height={500}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>

            {/* Dekorativt vandtårn */}
            <VandTaarn
              className="absolute right-0 top-0 w-24 md:left-250 md:-top-80 md:w-40 opacity-20 -z-10"
              aria-hidden="true"
            />
          </div>
        </section>
      </BellevueStriber>
    </div>
  );
};

export default Hero;
