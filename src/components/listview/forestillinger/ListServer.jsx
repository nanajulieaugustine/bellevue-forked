import ListFilter from "./ListFilter";
import { createClient } from "@supabase/supabase-js";

// Supabase client (fungerer som server)
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",

  // Key som ligger i .env fil
  process.env.SUPABASE_ANON_KEY
);

export default async function ListServer() {
  // Hent data fra Supabase med navn på tabel
  const { data } = await supabase.from("bellevue_items").select("*");

  console.log("Fetched data:", data);

  return (
    <section>
      <ListFilter items={data || []} />
    </section>
  );
}
