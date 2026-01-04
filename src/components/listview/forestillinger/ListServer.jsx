import { createClient } from "@supabase/supabase-js";
//Suspense bruges til at vise midlertidig loading-state, mens noget data hentes.
import { Suspense } from "react";
//Importerer en komponent, som håndterer visning og filtrering af listen på klienten.
import ListFilterClient from "./ListFilterClient";

//opretter supabase-client - med databasen, url og nøglekey
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

//DEr deffineres ListServer-sider komponenten. 
export default async function ListServer() {
  //Henter alle rækker "*" fra tabellen bellevue_items
  //await betyder, at koden venter på at data er hentet før den fortsætter
  //const { data } = gemmer resultatet i en variabel kaldet data
  const { data } = await supabase.from("bellevue_items").select("*");

  // Laver en ny konstant vartiable, som fortæller: Vi laver en ny liste, hvor vi kun tager de items, vi vil vise.
  const filteredData =
  //filter går gennem alle items i data og returnerer kun de, hvor betingelsen er sand.
  //?. = “optional chaining” → hvis data er null eller undefined, stopper det uden fejl.
  data?.filter((item) => {
    //Hvis item ikke har tags, så behold det (true)
    if (!item.tags) return true;

    //Her sikrer vi, at tags altid bliver til en array, så vi kan arbejde med dem
    const tags = Array.isArray(item.tags)
    //Dette er en del af ternary operatoren (? :) 
    //Her: Hvis Array.isArray(item.tags) er true, så bruger vi bare den eksisterende array item.tags
      ? item.tags
      //: = “ellers” i ternary operatoren.
      //Hvis item.tags ikke er en array, tjekker vi nu om det er en string
      //typeof item.tags === "string" = “er item.tags en tekststreng?”
      : typeof item.tags === "string"
      //Dette er en del af ternary operatoren (? :)
      // "?" betyder “hvis betingelsen er sand” i en ternary operator: Her er betingelsen, at item.tags er en streng
      //item.tags.split(",") tager strengen og deler den op i en array, hvor hvert element er adskilt af kommaer.
      ? item.tags.split(",")
      // ":" betyder “ellers” i ternary operatoren.
      //Hvis item.tags ikke er en streng, laver vi en tom array []
      : [];

      //Dette er en funktion, der tjekker hvert element (tag) i arrayen
      //.some() er en array-metode - Den tjekker, om mindst ét element i array’en opfylder en betingelse.
      //! betyder “ikke”.
    return !tags.some(
      //typeof tag === "string" → tjekker, at "tag" faktisk er tekst (ikke fx undefined eller et objekt).
      //tag.toLowerCase() === "event" → tjekker, om teksten er "event" (små eller store bogstaver ignoreres)
      //"Er dette tag en tekst og hedder det 'event'?”
      (tag) => typeof tag === "string" && tag.toLowerCase() === "event"
    );
    //|| [] → betyder “ellers brug en tom array”
    //Så hvis data ikke findes, får filteredData i stedet bare [] (en tom liste), og koden fejler ikke.
  }) || [];


  // console.log("Fetched data (filtered):", filteredData);

  return (
    <section>
      {/* Suspense er fra React */}
      {/* Formål: Vent på, at ListFilterClient indhold bliver “klart”, før det vises. */}
      {/* fallback={<p>Loading...</p>} → viser midlertidigt teksten Loading…, mens data hentes eller komponenten loader. */}
      <Suspense fallback={<p>Loading...</p>}>
        {/* items={filteredData} → sender de filtrerede data til komponenten som props, så den kan vise dem. */}
        <ListFilterClient items={filteredData} />
      </Suspense>
    </section>
  );
}
