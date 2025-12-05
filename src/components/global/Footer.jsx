"use client";

const Footer = () => {
  return (
    <div className="bg-(--moerkblaa-600) text-(--moerkblaa-100) grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
      {/* --- Kolonne 1 --- */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div>{/* logo af some */}</div>

        <div className="pt-10 md:pt-40">
          <p className="font-extrabold pb-2 text-white">Administration:</p>
          <p>39 63 49 00 </p>
          <p> (hverdage 10 - 14)</p>
        </div>

        <div className="pt-10">
          <p className="font-extrabold pb-2 text-white">Billettelefon:</p>
          <p>Ticketmaster: 38 48 16 30 </p>
          <p> (hverdage 10 - 16.30)</p>
          <p>Kørestol- og ledsagerpladser:</p>
          <p> 38 48 16 33</p>
        </div>
      </div>

      {/* --- Kolonne 2 --- */}
      <div className="pt-10 md:pt-40 flex flex-col items-center text-center">
        <p className="font-extrabold pb-4 text-white text-2xl">
          Hold dig opdateret
        </p>
        <p className="text-(--beige-600)">
          Tilmeld dig vores nyhedsbrev og modtag de seneste nyheder direkte i
          din indbakke
        </p>
        <div className="w-full mx-auto flex flex-col gap-2 pt-10">
          <input
            id="email"
            type="email"
            placeholder="Skriv din email"
            className="bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900) border-2 border-(--beige-900)"
          />
          <button className="bg-(--beige-900) self-center font-bold border-3 border-(--beige-600) w-full pt-4 pb-4 rounded-xl text-(--moerkblaa-900)">
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
            <button className="text-(--koboltblaa-600) border-2 border-(--koboltblaa-600) bg-(--bellevueblaa-100) pt-3 pb-3 pl-15 pr-15 rounded-xl">
              Find vej
            </button>
          </div>
          <p className="text-center font-bold md:text-right max-w-49">
            Strandvejen 451​ 2930 Klampenborg
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
