import SingleCard from "@/components/singleview/SingleCard";
//Bruges til at oprette forbindelse til supabase
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Pause from "@/components/singleview/Pause";

//Der oprettes forbindelse til supabase
const supabase = createClient(
//"Link" der fortæller hvor databasen ligger henne
  "https://rzwaokiepaobrlrpphia.supabase.co",
//Gør sådan at koden ikke afslører hemmeligheder - gør det sikkert - adgangsnøglen som ligger i .env.local
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// kort sagt= Side-komponent der henter og viser data baseret på URL’ens id (params indeholder URL’ens id)
export default async function SingleItem({ params }) {
  //Henter id fra url'en
  const { id } = await params;

//// Hent én forestilling fra databasen baseret på id fra URL
  //await betyder: “Vent på svaret, før du fortsætter.” - så vent på supabase før fortsæt
  //Vi gemmer svaret i to ting:
  // "data" → selve informationen om forestillingen
  // "error" → hvis der sker en fejl
  const { data, error } = await supabase
  //Vi siger: “Vi vil arbejde med tabellen bellevue_items”
    .from("bellevue_items")
    //* betyder alt. - Vi henter alle kolonner for det element, vi spørger om.
    .select("*")
    //eq står for equal → vi leder efter rækker, hvor id = det id, vi har fået fra URL’en. - Tænk: “Find lige præcis den forestilling, der matcher dette id.”
    .eq("id", id)
    //Vi forventer kun én enkelt række fra databasen. - hvis flere så fejl.
    .single();


  if (error) {
    console.error("Supabase error:", error);
    return <p>Der skete en fejl med at hente item.</p>;
  }

  if (!data) {
    return <p>Kunne ikke finde item</p>;
  }
  
  return (
    <div className="relative">
      <SingleCard
      //vi sender den data, vi hentede fra databasen, til kortet SingleCard
      item={data}
      //Nogle forestillinger har en pause i midten. Sender prob videre til SingleCard.
      //Ternary operator (if/else - statement)
      //hvis data.pause betyder ja "?" (findes) så skal der indsættes pause komponenten på SingleCard, ellers ":" så vises null (ingenting)
      pauseSlot={data.pause ? <Pause item={data} /> : null}
      />


      <div className="absolute right-0 top-230 -z-5 hidden lg:block rotate-180">
        <Image src="/svg/snoerkel-left.svg" alt="" width={350} height={350} />
      </div>
    </div>
  );
}

//Der laves en funktion "generateMetadata" som skal generere meta data for belleuve
export async function generateMetadata({ params }) {
    const { id } = await params;

 //Henter information fra det enkelte item i databasen   
   const { data } = await supabase
    .from("bellevue_items")
    .select("*")
    .eq("id", id)
    .single();

//Funktionen retunere metadata til siden
  return {
    title: data.name,
    description: data.description_short,
    //infor til some hvis linket deles.
    openGraph: {
      title: data.name,
      description: data.description_short,
    },
  };
}
