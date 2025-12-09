"use client";
import ListCard from "../listview/forestillinger/ListCard";
import { parseDates } from "@/app/library/utils";
import { useMemo } from "react";
import ResponsiveKarrusel from "../global/komponenter/ResponsiveKarrusel";
import ArrowXPositionRight from "../global/animationer/ArrowXPosition";
import PrimaryLink from "../global/knapper/PrimaryLink";

const chunk = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const SlidingForestillinger = ({ data }) => {

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
      <h2>Aktuelle forestillinger</h2>
      <PrimaryLink href="/forestillinger">
        <h4 className="thin">Se alle forestillinger</h4>
      </PrimaryLink>
      </div>
      <ResponsiveKarrusel>
        {upcoming.map((item) => (
          <ListCard key={item.id} item={item} />
        ))}
      </ResponsiveKarrusel>
    </>
  );
};

export default SlidingForestillinger;
