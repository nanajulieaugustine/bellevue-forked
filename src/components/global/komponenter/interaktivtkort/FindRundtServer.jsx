import { createClient } from "@supabase/supabase-js";
import FindRundt from "./FindRundt";

const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function FindRundtServer() {

  const { data, error } = await supabase
    .from("interaktivt_kort")
    .select("*");


  console.log("Supabase error:", error);
  console.log("Supabase data:", data);

  if (error) {
    return <p>Der skete en fejl med at hente item.</p>;
  }

  if (!data || data.length === 0) {
    return <p>Kunne ikke finde item</p>;
  }


  return <FindRundt item={data} />;
}
