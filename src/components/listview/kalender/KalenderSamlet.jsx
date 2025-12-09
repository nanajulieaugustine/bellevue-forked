"use client";
import { useMemo, useState } from "react";
import KalenderCard from "./KalenderCard";
import { groupShowsByDate } from "@/app/library/utils.js";

// ======================================= KALENDER-KOMPONENT ============================================
const KalenderSamlet = ({ items }) => {
  // Hvis der slet ikke er items
  if (!items?.length) return <p>Ingen items fundet</p>;

  // Gruppér forestillinger pr. dato og filtrér til KUN fremtidige datoer
  const grouped = useMemo(
    () => groupShowsByDate(items, { onlyFuture: true }),
    [items]
  );

  // Hvis alle forestillinger lå i fortiden
  if (!grouped.length) {
    return <p>Ingen kommende forestillinger.</p>;
  }

  // ====================================== DROPDOWN-FILTRERING ==========================================

  // State til valgt dato i dropdown ("all" = vis alle)
  const [selectedDate, setSelectedDate] = useState("all");

  // Funktion til formattering af datoer (bruges i dropdown og overskrifter)
  const formatDate = (date) =>
    date
      .toLocaleDateString("da-DK", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace(",", "")
      .replace(" den ", " d. ") // ændrer "den" til "d."
      .replace(/^\w/, (c) => c.toUpperCase()); // stort begyndelsesbogstav

  // Hvis "all" er valgt -> vis alle datoer, ellers filtrér på valgt dato
  const filteredGrouped =
    selectedDate === "all"
      ? grouped
      : grouped.filter(
          (g) => g.date.toISOString().split("T")[0] === selectedDate
        );

  // ========================================= HTML / STYLING ============================================
  return (
    <div className="grid gap-20 px-(--content-width) w-full">
      <h1>KALENDER</h1>

      {/* Dropdown til filtrering på dato */}
      <div>
        <select
          className="cursor-pointer px-4 py-3 rounded-4xl border border-(--bellevueblaa-600) text-(--bellevueblaa-600) w-30"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value="all">Datoer</option>

          {/* Én option pr. dato i grouped */}
          {grouped.map(({ date }) => {
            const iso = date.toISOString().split("T")[0];
            return (
              <option key={iso} value={iso}>
                {formatDate(date)}
              </option>
            );
          })}
        </select>
      </div>

      {/* Her vises enten alle datoer eller den filtrerede dato */}
      {filteredGrouped.map(({ date, shows }) => (
        <div key={date.getTime()} className="grid lg:grid-cols-[1fr_2fr] gap-8">
          <div>
            {/* Dato-overskrift */}
            <h4>{formatDate(date)}</h4>
          </div>

          {/* Liste af kort (KalenderCard) for den pågældende dato */}
          <ul className="grid gap-10">
            {shows.map(({ item, time }, i) => (
              <KalenderCard key={item.id + "-" + i} item={item} time={time} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default KalenderSamlet;
