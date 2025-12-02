

const KontaktHero = () => (
    <div className="">
        <div className="text-center m-30">
          <h1 className="text-2xl pb-7">Ledige Stillinger</h1>
          <p className="pb-4">Der er i øjeblikket ingen ledige stillinger.</p>
          <p>Uopfordrede ansøgninger kan sendes til adm@bellevueteatret.dk​. </p>
          <p>  For forhus: forhus@bellevueteatret.dk</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-2 bg-(--bellevueblaa-600) rounded-xl text-amber-50 p-10 ">
                <p className="font-bold text-center mb-6">Tilmeld dig vores nyhedsbrev og modtag de seneste nyheder direkte i din indbakke</p>
                <div className="w-full max-w-xs mx-auto flex flex-col gap-2">
                    <label className="font-medium text-left w-full" htmlFor="email">Email</label>
                    <input id="email" type="email" className="bg-(--beige-600) rounded-lg p-2 w-full" />
                    <button className="mt-3 self-center font-bold border-3 border-(--beige-600) w-full pt-2 pb-2 pl-7 pr-7 rounded-lg">
                        Tilmeld
                    </button>
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-4xl pb-6">Bellevue Venneforening</h2>
                <p>Læs mere om vores venneforening og blev en del af et særligt teaterfællesskab</p>
            </div>
        </div>

    </div>
    );
  
  export default KontaktHero;