"use client";
import Filtrering from "@/components/global/komponenter/dropdown/Filtrering";
import ListCard from "./ListCard";

export default function ListFilterClient({ items }) {
  return (
    <Filtrering
    //Alt herunder er props (indstillinger), som styrer hvordan filtreringen opfører sig
  items={items}
  showTabs={true}
  onlyFuture={false}
  allowMultipleTimes={false}
  introTitle="Se vores fulde program"
  introText="Her får du et samlet overblik over alle aktuelle og kommende forestillinger. Sortér efter genre eller målgruppe og find præcis det, der passer til jeres aften i teatret."
  renderCard={(filteredGrouped) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* flatmap - flader data ud, så alle forestillinger vises i en liste */}
      {filteredGrouped.flatMap(({ shows }) =>
        shows.map(({ item, time }, i) => (
          <ListCard
          //Unik nøgle, som React kræver (kombi af forestillingen id og index)
            key={item.id + "-" + i}
            item={item}
            isArchived={false}
            className="basis-[calc(33.333%-0.5rem)]"
          />
        ))
      )}
    </div>
  )}
/>
  );
}
