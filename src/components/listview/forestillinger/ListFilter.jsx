"use client";

import { useMemo, useState } from "react";
import { parse } from "date-fns";
import { da } from "date-fns/locale";
import ListCard from "./ListCard";
import ListCardDropDown from "./ListCardDropDown";


export default function ListFilter({ items = [] }) {
  const [activeTab, setActiveTab] = useState("current"); // current / archive

  // Today uden tidszone-problemer
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Udregn seneste spilledag for hvert item
  const itemsWithLatestDate = useMemo(() => {
    return items
      .map((item) => {
        if (!Array.isArray(item.fullDates)) return null;

        // parse alle gyldige datoer
        const parsedDates = item.fullDates
          .map((entry) =>
            parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da })
          )
          .filter((d) => !isNaN(d)) // fjern ugyldige datoer
          .map((d) => {
            d.setHours(0, 0, 0, 0);
            return d;
          });

        if (parsedDates.length === 0) return null;

        // find seneste spilledag
        const latestDate = new Date(
          Math.max(...parsedDates.map((d) => d.getTime()))
        );

        return {
          ...item,
          latestDate,
        };
      })
      .filter(Boolean); // fjern nulls
  }, [items]);

  // Filtrering
  const upcoming = itemsWithLatestDate.filter(
    (item) => item.latestDate.getTime() >= today.getTime()
  );

  const archive = itemsWithLatestDate.filter(
    (item) => item.latestDate.getTime() < today.getTime()
  );

  const visibleItems = activeTab === "current" ? upcoming : archive;

  return (
    <div className="mt-6">
      
      {/* TABS */}
      <div className="flex gap-6 mb-6 pb-3 ">
        <button
          className={`text-5xl ml-5 ${
            activeTab === "current" ? "text-blue-800 border-b-4" : "text-blue-300 border-b-4"
          }`}
          onClick={() => setActiveTab("current")}
        >
          FORESTILLINGER
        </button>

        <button
          className={`text-5xl ${
            activeTab === "archive" ? "text-blue-800 border-b-4" : "text-blue-300 border-b-4"
          }`}
          onClick={() => setActiveTab("archive")}
        >
          ARKIV
        </button>
      </div>
      <ListCardDropDown />


      {/* LISTCARD */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        <ListCard items={visibleItems} />
      </ul>

    </div>
  );
}
