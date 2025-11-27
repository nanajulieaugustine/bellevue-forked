"use client";
import Image from "next/image";
import StickyInfo from "./StickyInfo";
import DatoOversigt from "./DatoOversigt";

export default function SingleCard({ item }) {
  if (!item) return <p>Item ikke fundet</p>;

  return (
    <div className="flex items-start">
      {/* højre kolonne */}
      <section className="w-2/3">
        <article className="w-full h-full mx-auto pl-6">
          {item.image?.[0]?.url && (
            <Image
              src={item.image[0].url}
              alt={item.image[0].alt || item.name}
              width={800}
              height={800}
              className="object-cover rounded-lg mb-6"
            />
          )}
        </article>
        <DatoOversigt item={item}/>
        {/* komponenter her */}
      </section>

      {/* sticky kolonne (venstre) */}
      <aside className="h-[200vh]">
        <div className="sticky top-50">
          <StickyInfo item={item} />
        </div>
      </aside>
    </div>
  );
}
