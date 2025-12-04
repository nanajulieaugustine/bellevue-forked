"use client";
import { motion } from "framer-motion";
import ListCard from "../listview/forestillinger/ListCard";
import { parseDates } from "@/app/utils";
import { useMemo } from "react";
import ResponsiveKarrusel from "../global/komponenter/ResponsiveKarrusel";

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
      <a href="/forestillinger">
      <h4 className="underline thin">
      Se alle forestillinger
      </h4>
      </a>
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
