const Nyhedsbrev = () => (
  <div className="">
    <div className="text-center m-30">
      <h1 className="text-2xl pb-7">Ledige Stillinger</h1>
      <p className="pb-4">Der er i øjeblikket ingen ledige stillinger.</p>
      <p>Uopfordrede ansøgninger kan sendes til adm@bellevueteatret.dk​. </p>
      <p>For forhus: forhus@bellevueteatret.dk</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
      <div className="col-span-2 bg-(--bellevueblaa-600) rounded-2xl text-(--beige-600) p-10">
        <p className="font-bold text-center mb-6 text-2xl">
          Tilmeld dig vores nyhedsbrev og modtag de seneste nyheder direkte i
          din indbakke
        </p>
        <div className="w-full mx-auto flex flex-col gap-2 pt-10">
          <input
            id="email"
            type="email"
            placeholder="Skriv din email"
            className="bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900)"
          />
          <button className=" self-center font-bold border-3 border-(--beige-600) w-full pt-4 pb-4 rounded-xl">
            Tilmeld
          </button>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl pb-6">Bellevue Venneforening</h2>
        <p>
          Læs mere om vores venneforening og blev en del af et særligt
          teaterfællesskab
        </p>
      </div>
    </div>
  </div>
);

export default Nyhedsbrev;
