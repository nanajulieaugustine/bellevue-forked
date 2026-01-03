import { createClient } from "@supabase/supabase-js";
import FindRundt from "./FindRundt";

const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function FindRundtServer({ defaultGroup = null }) {
  const { data, error } = await supabase
    .from("interaktivt_kort")
    .select("*");

  if (error) {
    return <p>Der skete en fejl med at hente item.</p>;
  }

  if (!data || data.length === 0) {
    return <p>Kunne ikke finde item</p>;
  }

  return <FindRundt item={data} defaultGroup={defaultGroup} />;
}

