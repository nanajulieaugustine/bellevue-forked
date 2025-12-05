const KontaktHero = () => (
  <div>
    {/* HERO SEKTION */}
    <div className="max-h-[600px] px-4 sm:px-10 md:px-20 overflow-hidden">
      <div className="flex flex-col max-w-[600px] pt-20 sm:pt-32 md:pt-40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-(--bellevueblaa-600)">
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

        <p className="font-bold pt-5">
          Tøv endelig ikke med at række ud – vi glæder os til at høre fra dig.
        </p>
      </div>
    </div>

    {/* GUL KONTAKT-INFO SEKTION (udenfor max-height!) */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-10 pb-10 bg-(--gul-600) px-4 sm:px-10 md:px-20 text-center">
      <div>
        <p className="text-xl sm:text-2xl font-bold">Administration</p>
        <div className="font-light">
          <p>39 63 49 00</p>
          <p>(hverdage 10 - 14)</p>
          <p>adm@bellevueteatret.dk</p>
        </div>
      </div>

      <div>
        <p className="text-xl sm:text-2xl font-bold">Billetkontor</p>
        <div className="font-light"></div>
        <p>Ticketmaster: 38 48 16 30</p>
        <p>(hverdage 10 - 16.30)</p>
      </div>

      <div>
        <p className="text-xl sm:text-2xl font-bold">Forhus</p>
        <div className="font-light">
          <p>Forhus@bellevueteatret.dk</p>
        </div>
      </div>
    </div>
  </div>
);

export default KontaktHero;
