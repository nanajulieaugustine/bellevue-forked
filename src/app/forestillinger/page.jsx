//Importere server komponenten som henter og viser alle forestillingerne
import ListServer from "@/components/listview/forestillinger/ListServer";
//importere next image komponent, for at sikre bedre performance som automatisk optimere billeder
import Image from "next/image";

//Der oprettes en javscript funktion som vi kalder Forestillinger
export default function Forestillinger() {
  return (
    <div className="py-40 relative">
        {/* en snørkel i bg, som kun ses på large skærme */}
      <div className="absolute right-1 rotate-180 overflow-clip top-20 -z-10 hidden lg:block">
        <Image src="/svg/snoerkel-one.svg" alt="" width={450} height={250} />
      </div>
      {/* komkonenten ListServer kaldes på - ListServer henter data fra databasen*/}
      <ListServer />;
    </div>
  );
}
