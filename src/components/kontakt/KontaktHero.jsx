import BellevueStriber from "@/components/global/animationer/BellevueStriber";

const KontaktHero = () => (
  <div>
    <div className="max-h-[600px] overflow-hidden px-4 sm:px-10 md:px-20">
      <BellevueStriber>
        {/* Hero overskrift */}
        <div className="flex flex-col max-w-[600px] pt-20 sm:pt-32 md:pt-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl  text-(--bellevueblaa-600)">
            KONTAKT
          </h1>
        </div>

        {/* Kontakt info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          <div>
            <p className="text-xl sm:text-2xl font-bold">Administration</p>
            <p>39 63 49 00</p>
            <p>(hverdage 10 - 14)</p>
            <p>adm@bellevueteatret.dk</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold">Billetkontor</p>
            <p>Ticketmaster: 38 48 16 30</p>
            <p>(hverdage 10 - 16.30)</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold">Forhus</p>
            <p>Forhus@bellevueteatret.dk</p>
          </div>
        </div>
      </BellevueStriber>
    </div>
  </div>
);

export default KontaktHero;
