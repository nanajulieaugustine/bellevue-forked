import { createClient } from "@supabase/supabase-js";
import SlidingForestillinger from "./SlidingForestillinger";
import FlipCategories from "./FlipCategories";
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
      <SlidingForestillinger key={data.id} data={data} />
      <div className="relative py-30">
        <FlipCategories key={data.id} data={data} />
      </div>
    </>
  );
}
