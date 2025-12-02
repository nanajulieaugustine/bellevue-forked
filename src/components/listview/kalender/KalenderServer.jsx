import KalenderSamlet from "./KalenderSamlet";
import { createClient } from "@supabase/supabase-js";

// Supabase client (fungerer som server)
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",

  // Key som ligger i .env fil
  process.env.SUPABASE_ANON_KEY
);

export default async function ListServer() {
  // Hent data fra Supabase med navn på tabel
  const { data, error } = await supabase.from("bellevue_items").select("*");

  // Error besked hvis fejl i fetch
  if (error) {
    console.error("Supabase error:", error);
    return <p>Der skete en fejl med at hente data.</p>;
  }

  console.log("Fetched data:", data);

  // Returnerer data ellers tomt array
  return (
    <ul>
      <KalenderSamlet items={data || []} />
    </ul>
  );
}
