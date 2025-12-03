import BellevueStriber from "@/components/global/animationer/BellevueStriber";


const KontaktHero = () => (
    <div>
        <div style={{ maxHeight: "600px", overflow: "hidden" }}>
      <BellevueStriber>
        <div className="flex flex-col max-w-250 relative left-50 pt-40">
        <h1 className="display bellevueblaa-600">KONTAKT</h1>
        </div>
        <div className="grid grid-cols-3 ml-50">
            <div>
                <p className="text-2xl font-bold">Administration</p>
                <p>39 63 49 00</p>
                <p>(hverdage 10 - 14) </p>
                <p>adm@bellevueteatret.dk</p>
            </div>
            <div>
                <p className="text-2xl font-bold">Billetkontor</p>
                <p>Ticketmaster: 38 48 16 30</p>
                <p>(hverdage 10 - 16.30)</p>
            </div>
            <div>
                <p className="text-2xl font-bold">Forhus</p>
                <p>Forhus@bellevueteatret.dk</p>
            </div>
        </div>
      </BellevueStriber>
    </div>
    </div>

  );
  
  export default KontaktHero;