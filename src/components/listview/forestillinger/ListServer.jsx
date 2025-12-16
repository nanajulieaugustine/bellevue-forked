import { createClient } from "@supabase/supabase-js";
import { Suspense } from "react";
import ListFilterClient from "./ListFilterClient";

// Supabase client (server-side)
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function ListServer() {
  // Hent data fra Supabase
  const { data } = await supabase.from("bellevue_items").select("*");

  // Filtrér items, så "event" ikke medtages
  const filteredData =
    data?.filter((item) => !item.tags?.includes("Event")) || [];

  console.log("Fetched data (filtered):", filteredData);

  return (
    <section>
      <Suspense fallback={<p>Loading...</p>}>
        <ListFilterClient items={filteredData} />
      </Suspense>
    </section>
  );
}
