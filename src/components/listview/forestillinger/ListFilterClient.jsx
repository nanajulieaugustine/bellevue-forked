"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import {
  parseDates,
  extractCategories,
  filterItemsByStatus,
} from "@/app/library/utils";
import ListCard from "./ListCard";
import ListCardDropDown from "./ListCardDropDown";
import WipeLineAnimation from "@/components/global/animationer/WipeLineAnimarion";
import Image from "next/image";

export default function ListFilterClient({ items }) {
  const [activeTab, setActiveTab] = useState("current");

  // Dropdown states
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedChildren, setSelectedChildren] = useState("all");

  // Animation refs
  const currentRef = useRef(null);
  const archiveRef = useRef(null);
  const [tabWidths, setTabWidths] = useState({ current: 0, archive: 0 });

  useEffect(() => {
    setTabWidths({
      current: currentRef.current?.offsetWidth || 0,
      archive: archiveRef.current?.offsetWidth || 0,
    });
  }, [activeTab]);

  // Tilføj parsed datoer → item.latestDate
  const itemsWithDates = useMemo(() => {
    return parseDates(items, { addLatestDate: true });
  }, [items]);

  // Tab-baseret filtrering (current / archive)
  const upcoming = filterItemsByStatus(itemsWithDates, "current");
  const archive = filterItemsByStatus(itemsWithDates, "archive");

  const baseItems = activeTab === "current" ? upcoming : archive;

  // ========= DATO-LOGIK =========

  // Udtræk *kun unikke* datoer fra active tab
  const uniqueDates = useMemo(() => {
    const set = new Set();

    baseItems.forEach((item) => {
      if (item.latestDate instanceof Date) {
        set.add(item.latestDate.getTime());
      }
    });

    return [...set]
      .map((time) => new Date(time))
      .sort((a, b) => a - b);
  }, [baseItems]);

  // Formatér datoer til dropdown
  const formatDate = (date) =>
    date
      .toLocaleDateString("da-DK", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace(",", "")
      .replace(" den ", " d. ")
      .replace(/^\w/, (c) => c.toUpperCase());

  const dateOptions = uniqueDates.map((d) => formatDate(d));

  // ========= ANDRE DROPDOWN-VÆRDIER =========
  const categories = useMemo(() => extractCategories(items), [items]);

  const childrenOptions = ["Familieforestilling", "For børn"];

  // ========= DROPDOWN HANDLER =========
  const handleFilterChange = (type, value) => {
    const normalized = value === "Alle" ? "all" : value;

    if (type === "date") setSelectedDate(normalized);
    if (type === "category") setSelectedCategory(normalized);
    if (type === "children") setSelectedChildren(normalized);
  };

  // ========= ANVENDELSE AF ALLE FILTRE =========
  const filteredItems = baseItems.filter((item) => {
    const tags = item.tags || [];

    // Filter: DATO
    const matchDate =
      selectedDate === "all" ||
      (item.latestDate &&
        formatDate(item.latestDate) === selectedDate);

    // Filter: KATEGORI
    const matchCategory =
      selectedCategory === "all" || tags.includes(selectedCategory);

    // Filter: BØRN
    const matchChildren =
      selectedChildren === "all" || tags.includes(selectedChildren);

    return matchDate && matchCategory && matchChildren;
  });

  // ========= VISNING AF AKTIVE FILTRE =========
  const activeFilters = [
    { type: "date", label: selectedDate, value: selectedDate },
    { type: "category", label: selectedCategory, value: selectedCategory },
    { type: "children", label: selectedChildren, value: selectedChildren },
  ].filter((f) => f.value !== "all");

  const removeFilter = (type) => {
    if (type === "date") setSelectedDate("all");
    if (type === "category") setSelectedCategory("all");
    if (type === "children") setSelectedChildren("all");
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-6 mb-15 pb-3 relative w-full">
        <button onClick={() => setActiveTab("current")}>
          <h1
            ref={currentRef}
            className={
              activeTab === "current"
                ? "text-(--moerkeblaa-900)"
                : "bellevueblaa-100"
            }
          >
            FORESTILLINGER
          </h1>
        </button>

        <button onClick={() => setActiveTab("archive")}>
          <h1
            ref={archiveRef}
            className={
              activeTab === "archive"
                ? "text-(--moerkeblaa-900)"
                : "bellevueblaa-100"
            }
          >
            ARKIV
          </h1>
        </button>

{/* Underline kun på store skærme */}
<div className="hidden md:block">
  <WipeLineAnimation activeTab={activeTab} tabWidths={tabWidths} />
</div>      </div>

<div className="max-w-150 flex flex-col gap-5">
  <h3>Se vores fulde program</h3>
      <p>Her får du et samlet overblik over alle aktuelle og kommende forestillinger. Sortér efter genre eller målgruppe og find præcis det, der passer til jeres aften i teatret.</p>
      {/* DROPDOWNS MED DATO + KATEGORI + BØRN */}
      <ListCardDropDown
        dates={dateOptions}
        categories={categories}
        children={childrenOptions}
        onFilterChange={handleFilterChange}
      />
</div>

      {/* Grafik */}
      <div className="relative -top-80 left-180 -z-100 hidden lg:block">
        <Image src="/svg/watertower-red.svg" className="absolute opacity-80" alt="" width={250} height={300} />
      </div>


      {/* AKTIVE FILTRE */}
      {activeFilters.length > 0 && (
        <div className="flex gap-2 mt-4 ml-4 flex-wrap">
          {activeFilters.map((filter) => (
            <span
              key={filter.type}
              className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 px-3 py-1 rounded-2xl text-sm"
            >
              {filter.label}
              <button
                onClick={() => removeFilter(filter.type)}
                className="font-bold hover:text-blue-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {/* LISTE AF KORT */}
      <ul className="flex flex-wrap gap-3 mt-4">
        {filteredItems.map((item) => (
          <li key={item.id} className="basis-[calc(33.333%-0.5rem)]">
            <ListCard archive={archive} item={item} />
          </li>
        ))}
      </ul>

      {filteredItems.length === 0 && (
        <p className="mt-6">Ingen forestillinger matcher dine filtre.</p>
      )}
    </div>
  );
}
