"use client";
import ListCard from "../listview/forestillinger/ListCard";
import { parseDates } from "@/app/library/utils";
import { useMemo } from "react";
import ResponsiveKarrusel from "../global/komponenter/ResponsiveKarrusel";
import ArrowXPositionRight from "../global/animationer/ArrowXPosition";
import PrimaryLink from "../global/knapper/PrimaryLink";
import Image from "next/image";


const SlidingForestillinger = ({ data }) => {
const now = new Date();
const threeMonthsAhead = new Date();
threeMonthsAhead.setMonth(threeMonthsAhead.getMonth() + 3);

  const itemsWithLatestDate = useMemo(
    () => parseDates(data, { addLatestDate: true }),
    [data]
  );
//sørger for at det kun er items, der er i fremtiden, men kun tre måneder fremme, der vises som aktuelt
  const upcoming = itemsWithLatestDate.filter((item) => {
    const d = item.latestDate;
    return d >= now && d <= threeMonthsAhead;
  });

  return (
    <section>
      <div className="absolute -left-1 top-400 -z-5 hidden lg:block">
        <Image
          src="/svg/snoerkel-left.svg"
          alt=""
          width={350}
          height={350}
        />
      </div>
      <div className="pl-25 mt-10">
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
    </section>
  );
};

export default SlidingForestillinger;
