"use client";

const Footer = () => {
  return (
    <div className="bg-(--moerkblaa-600) text-gray-300 grid grid-cols-1 md:grid-cols-3 gap-8 p-5">

      {/* --- Kolonne 1 --- */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div>
          {/* logo af some */}
        </div>

        <div className="pt-10 md:pt-40">
          <p className="font-extrabold pb-2 text-white">Administration:</p>
          <p>39 63 49 00 (hverdage 10 - 14)</p>
        </div>

        <div className="pt-10">
          <p className="font-extrabold pb-2 text-white">Billettelefon:</p>
          <p>Ticketmaster: 38 48 16 30 (hverdage 10 - 16.30)</p>
          <p>Kørestol- og ledsagerpladser: 38 48 16 33</p>
        </div>
      </div>

      {/* --- Kolonne 2 --- */}
      <div className="pt-10 md:pt-40 flex flex-col items-center text-center">
        <p className="font-extrabold pb-4 text-white">Hold dig opdateret</p>
        <p>
          Ja, tak, jeg vil gerne modtage nyhedsbrev per email fra Bellevue Teatret med markedsføring af aktuelle og nye
          forestillinger, nyt om teatret, arrangementer, tilbud o.a. Du kan til hver en tid afmelde dig igen.
        </p>
        <div className="pt-6 w-full max-w-xs flex flex-col gap-2">
          <label className="font-medium text-left w-full" htmlFor="email">Email</label>
          <input id="email" type="email" className="bg-gray-400 rounded-sm p-2 w-full" />
          <button className="mt-3 self-center font-bold text-(--moerkblaa-800) bg-gray-200 pt-2 pb-2 pl-7 pr-7 rounded-sm">
            Tilmeld
          </button>
        </div>
      </div>

      {/* --- Kolonne 3 --- */}
      <div className="pt-10 md:pt-40 flex flex-col items-center md:items-end text-center md:text-right">
        <p className="font-extrabold pb-2 text-white">Praktisk</p>
        <div className="flex flex-col items-center md:items-end gap-2">
          <button>Handelsbetingelser</button>
          <button>CVR</button>
          <button>Privatdatapolitik</button>
          <button>Årsrapporter</button>
          <button>Vedtægter</button>
          <button>Egnsaftale</button>
          <button>Presse</button>
        </div>

        <div className="pt-10 flex flex-col items-center md:items-end">
          <div className="pb-4">
            <button className="text-gray-300 border-4 border-gray-300 pt-3 pb-3 pl-15 pr-15 rounded-xl">Find vej</button>
          </div>
          <p className="text-center md:text-right max-w-49">Strandvejen 451​ 2930 Klampenborg</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
