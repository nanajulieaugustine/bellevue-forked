import { createClient } from "@supabase/supabase-js";
import VennerKarrusel from "./VennerKarrusel";

// Supabase client (fungerer som server)
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",

  // Key som ligger i .env fil
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function Server() {
  // Hent data fra Supabase med navn på tabel
  const { data } = await supabase.from("bellevue_items").select("*");

  console.log("Fetched data:", data);

  // Returnerer data ellers tomt array
  return (
    <>
      <VennerKarrusel key={data.id} data={data} />
    </>
  );
}
