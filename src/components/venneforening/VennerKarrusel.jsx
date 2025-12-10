"use client";
import ListCard from "../listview/forestillinger/ListCard";
import { parseDates } from "@/app/library/utils";
import { useMemo } from "react";
import ResponsiveKarrusel from "../global/komponenter/ResponsiveKarrusel";

const chunk = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const VennerKarrusel = ({ data }) => {

  const now = new Date();

  const itemsWithLatestDate = useMemo(
    () => parseDates(data, { addLatestDate: true }),
    [data]
  );

  const upcoming = itemsWithLatestDate.filter(
    (item) => item.latestDate.getTime() >= now.getTime()
  );

  return (
    <>
        <div className="pl-25">
          <h2>
            Aktuelle medlemstilbud
          </h2>
        </div>
        <ResponsiveKarrusel>
          {upcoming.map((item) => (
            <section>
            <ListCard key={item.id} item={item} />
            </section>
          ))}
        </ResponsiveKarrusel>
    </>
  );
};

export default VennerKarrusel;

