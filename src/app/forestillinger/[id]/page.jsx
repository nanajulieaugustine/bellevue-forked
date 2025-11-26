import SingleCard from "@/components/singleview/SingleCard";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.SUPABASE_ANON_KEY
);

export default async function SingleView({ params }) {
  const id = await params;

  console.log("ID", id)

  const { data, error } = await supabase
    .from("bellevue_items")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Supabase error:", error);
    return <p>Fejl ved hentning af item</p>;
  }

  return <SingleCard item={data} />;
}


