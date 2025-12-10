import Image from "next/image";


const KontaktHero = () => (
  <div>
    {/* HERO SEKTION */}
      <section className="max-w-[1000px]">
        <h1 className="text-(--bellevueblaa-600)">
          KONTAKT
        </h1>

        <p className="font-light pt-20">
          Hos Bellevue Teatret vil vi gerne gøre det nemt for dig at komme i
          kontakt med os. Uanset om du har spørgsmål til billetter,
          arrangementer, praktiske forhold eller blot er nysgerrig på livet bag
          kulissen, står vi klar til at hjælpe. Her finder du både telefonnumre,
          mailadresser, vores medarbejdere og information om eventuelle ledige
          stillinger.
        </p>

        <p className="font-medium pt-5">
          Tøv endelig ikke med at række ud – vi glæder os til at høre fra dig.
        </p>
      </section>

    {/* GUL KONTAKT-INFO SEKTION (udenfor max-height!) */}
    <div className="absolute -left-10">
        <Image src="/svg/phone.svg" alt="" width={350} height={350} />
      </div>
    <div className="bg-(--gul-600)">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-10 pb-10 px-4 sm:px-10 md:px-20 text-center">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold" class="" >Administration</h3>
        <div className="font-extralight pt-5">
          <p>39 63 49 00</p>
          <p>(hverdage 10 - 14)</p>
          <p>adm@bellevueteatret.dk</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold" class="">Billetkontor</h3>
        <div className="font-extralight pt-5">
        <p>Ticketmaster: 38 48 16 30</p>
        <p>(hverdage 10 - 16.30)</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold" class="">Forhus</h3>
        <div className="font-extralight  pt-5">
          <p>Forhus@bellevueteatret.dk</p>
        </div>
      </div>
      </section>
    </div>
  </div>
);

export default KontaktHero;


