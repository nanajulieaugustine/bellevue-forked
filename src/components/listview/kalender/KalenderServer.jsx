import KalenderSamlet from "./KalenderSamlet";
import { createClient } from "@supabase/supabase-js";
import { Suspense } from "react";
// Supabase client (fungerer som server)
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",

  // Key som ligger i .env fil
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function KalenderServer() {
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
    <Suspense fallback={<p>Loader...</p>}>
      <KalenderSamlet items={data || []} />
    </Suspense>
  );
}
