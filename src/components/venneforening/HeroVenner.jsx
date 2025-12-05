import BellevueStriber from "@/components/global/animationer/BellevueStriber";

const HeroVenner = () => (
  <div>
    <div className=" max-h-[900px] overflow-hidden px-4 sm:px-10 md:px-20">
      <BellevueStriber>
        <div className=" pt-50 pb-20">
          <div>
            <h1>VENNE LOGO</h1>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-3 font-bold text-(--roed-600) text-center">
              <p className="bg-(--gul-600) p-8 rounded-2xl">Gratis Billetter</p>
              <p className="bg-(--gul-600) p-8 rounded-2xl">
                Eksklusive arrengementer
              </p>
              <p className="bg-(--gul-600) p-8 rounded-2xl ">
                12 måneders medlemsskab
              </p>
            </div>
            <p className="text-(--beige-100) pt-15">
              Bellevue Teatrets Venner er en støtteforening for Bellevue
              Teatret, der giver medlemmerne en række eksklusive tilbud til
              teatrets forestillinger og arrangementer. Som medlem støtter du
              teatret og får samtidig adgang til særlige medlemsfordele.
            </p>
          </div>
          <div className="text-(--beige-100) font-bold ">
            <p className="text-(--bellevueblaa-100) text-4xl">
              "Sammen om scenekunsten"
            </p>
            <p className="italic pt-5">
              Den frivillige forening, Bellevue Teatrets Venner, blev skabt, da
              coronaen viste sit skånselsløse ansigt. Vi er nu i vores 5. år og
              kraftigt på vej mod 300 medlemmer, og vi er glade og taknemmelige
              for hvert medlem, vi har. Du får årligt mange skønne teater- og
              koncertoplevelser i den smukke bygning på Strandvejen.
            </p>
            <p className="pt-10 italic">-Erik Hamre</p>
            <p className="italic">Formand, Bellevue Teatrets Venner</p>
          </div>
        </div>
      </BellevueStriber>
    </div>
  </div>
);

export default HeroVenner;
