//Fortæller Next det er en client side komponent (fordi der bruges interaktive elementer)
"use client";
import { useState, useEffect } from "react";
import ListCard from "@/components/listview/forestillinger/ListCard";
import { createClient } from "@supabase/supabase-js";
import ListCardDropDown from "./ListCardDropDown";

const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

  //vi laver en ny funktion og kalder den ListCardHero
export default function ListCardHero() {
  //Vi laver to stadier - activeFilter (bestememr hvilken fane der er aktiv), vi fortæller at "forestillinger" er den som er der fra start.
  const [activeFilter, setActiveFilter] = useState("forestillinger");
  //"Items" indeholde listcards, som hentes fra databasen.
  const [items, setItems] = useState([]);

  // Fetch data fra Supabase
  useEffect(() => {
    //Laver en asynkron funktion og kalder den "fetchData"
    async function fetchData() {
      //Henter alle items fra tabellen "bellevue_items"
      const { data, error } = await supabase.from("bellevue_items").select("*");
      //Laver en if sætning til hvis der er fejl
      if (error) {
        console.error(error);
        return;
      }
      setItems(data || []);
    }
    fetchData();
  }, []);

  //Det der skal vises fra databasen
  return (
      <div>
      {/* FILTER KNAPPER */}
      <div className="pl-10 flex gap-0 mb-5 text-7xl">
        {/* Hvad der sker når man klikker på "forestillinger"  */}
        <h1
          onClick={() => setActiveFilter("forestillinger")}
          // siger: “Sæt activeFilter til forestillinger”.
          className={`cursor-pointer pr-5 border-b-4 ${
            //Tjekker om fanen “FORESTILLINGER” er valgt
            activeFilter === "forestillinger"
            //Hvis fanen er valg mørkeblå, hvis ikke lyseblå
              ? "!text-blue-900 border-b-4 " : "!text-blue-100 border-b-4"
          }`}
        >
          FORESTILLINGER
        </h1>

        {/* Når man klikker på "Arkiv" kommer h1 op  */}
        <h1
          onClick={() => setActiveFilter("arkiv")}
          // siger: “Sæt activeFilter til arkiv.
          className={`cursor-pointer pl-5 border-b-4 ${
            activeFilter === "arkiv"
              ? "!text-blue-900 border-b-4 " : "!text-blue-100 border-b-4"
          }`}
        >
          ARKIV
        </h1>
        
      </div>
      <ListCardDropDown />

      {/* CONTENT */} 
      {/* //Ternay operator */} 
      {/* Den fortæller: “Hvis activeFilter er lig med 
      'forestillinger', så vis den første del ((...)). 
      Ellers vis den anden del ((...))” */}
      {activeFilter === "forestillinger" ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30 mt-4">
          <ListCard items={items} />
        </ul>
      ) : (
        <h1>HER SKAL TIDELIGERE FORESTILLINGER VISES</h1>
      )}

    </div>
  );
}
