import BellevueStriber from "@/components/global/animationer/BellevueStriber";
import SingleCard from "@/components/singleview/SingleCard";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

// Brug præcis samme opsætning som ListServer
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function SingleItem({ params }) {
  const { id } = await params;

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
    <div className="relative">
      <SingleCard item={data} />

      <div className="absolute right-0 top-230 -z-5 hidden lg:block rotate-180">
        <Image src="/svg/snoerkel-left.svg" alt="" width={350} height={350} />
      </div>
    </div>
  );
}
