import BellevueStriber from "@/components/global/animationer/BellevueStriber";
import SingleCard from "@/components/singleview/SingleCard";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

// Brug præcis samme opsætning som ListServer
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.SUPABASE_ANON_KEY
);

export default async function SingleItem({ params }) {
  const { id } = await params; // hvis params er promise i din Next-version

  const { data, error } = await supabase
    .from("bellevue_items")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase error:", error);
    return <p>Der skete en fejl med at hente item.</p>;
  }

  if (!data) {
    return <p>Kunne ikke finde item</p>;
  }

  return (
    <div>
      <SingleCard item={data} />

      <div className="absolute -left-8 top-300 -z-5 hidden lg:block">
          <Image
            src="/svg/snoerkel-left.svg"
            alt=""
            width={350}
            height={350}
          />
    </div>
    </div>
  );
}
