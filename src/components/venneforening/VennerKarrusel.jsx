"use client";
import ListCard from "../listview/forestillinger/ListCard";
import { parseDates } from "@/app/library/utils";
import { useMemo } from "react";
import ResponsiveKarrusel from "../global/komponenter/ResponsiveKarrusel";
import { groupShowsByDate} from "@/app/library/utils";

const VennerKarrusel = ({ data }) => {
  const now = new Date();

  const itemsWithLatestDate = useMemo(
    () => parseDates(data, { addLatestDate: true }),
    [data]
  );

  const upcoming = itemsWithLatestDate.filter(
    (item) => item.latestDate.getTime() >= now.getTime()
  );

    const grouped = useMemo(() => groupShowsByDate(upcoming, { onlyFuture: true }), [
  upcoming,
]);

const allShows = grouped.flatMap(group => group.shows.map(show => show.item));

// Fjern dubletter baseret på item.id
const uniqueShows = Array.from(new Map(allShows.map(item => [item.id, item])).values());
 
const medlemstilbud = uniqueShows.filter(
    (tilbud) => tilbud.venneforening === true
  );



  return (
    <div className="px-0 md:px-(--content-width)">
      <div className="pl-25">
        <h2>Aktuelle medlemstilbud</h2>
      </div>
      <ResponsiveKarrusel>
        {medlemstilbud.map((item) => (
          <ListCard key={item.id} item={item} medlemstilbud={medlemstilbud} />
        ))}
      </ResponsiveKarrusel>
    </div>
  );
};

export default VennerKarrusel;
