import KontaktFilter from "./KontaktFilter";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function KontaktServer() {
  const { data, error } = await supabase.from("bellevue_employees").select("*");

  console.log("Fetched data:", data);
  console.log("Error:", error);

  if (error) {
    return <p>Der skete en fejl med at hente.</p>;
  }

  return <KontaktFilter employees={data || []} />;
}
