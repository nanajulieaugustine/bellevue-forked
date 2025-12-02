"use client";
import { useMemo, useState } from "react";
import { parse } from "date-fns";
import { da } from "date-fns/locale";
import KalenderCard from "./KalenderCard";

// ======================================= ALT LOGIKKEN FOR KALENDER ============================================
const KalenderSamlet = ({ items }) => {
  if (!items?.length) return <p>Ingen items fundet</p>;

  // Brug af memo: koden kører kun når items ændrer sig + undgår unødige genberegninger
  const grouped = useMemo(() => {
    // Opretter et Map, der skal samle datoer
    const map = new Map();

    // Loop gennem alle items og deres tilhørende datoer
    items.forEach((item) => {
      item.fullDates?.forEach((entry) => {
        if (!entry?.date) return;

        // parse -> laver dato-streng om til Date-objekt
        const d = parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da });
        if (isNaN(d)) return;

        // setHours -> nulstiller tid for at undgå tidszoneforskydninger
        d.setHours(0, 0, 0, 0);

        // getTime -> bruges som unikt ID for datoen
        const ts = d.getTime();

        // Split tiderne i et array
        let times = [];
        if (Array.isArray(entry.time)) {
          entry.time.forEach((t) => {
            if (typeof t === "string") {
              times.push(...t.split(",").map((s) => s.trim()));
            }
          });
        } else if (typeof entry.time === "string") {
          times = entry.time.split(",").map((s) => s.trim());
        }

        times = Array.from(new Set(times.filter(Boolean))); // Fjern dubletter + tomme værdier

        // Hvis datoen ikke findes i map endnu, opret ny array
        if (!map.has(ts)) map.set(ts, []);

        // Tilføj hver forestilling med hvert tidspunkt
        times.forEach((t) => {
          map.get(ts).push({
            item,
            time: t,
          });
        });
      });
    });

    // Map omdannes til sorteret array
    return [...map.entries()]
      .sort((a, b) => a[0] - b[0]) // sorter efter dato
      .map(([timestamp, shows]) => ({
        date: new Date(timestamp),
        shows,
      }));
  }, [items]);

  // ======================================= DROPDOWN-FILTRERING ============================================

  // State som holder styr på hvilken dato der er valgt i dropdown
  const [selectedDate, setSelectedDate] = useState("all");

  // Funktion til formattering af datoer (bruges både i dropdown og overskrifter)
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

  // Filtrering: hvis "all" er valgt -> vis alt, ellers filtrér på valgt dato
  const filteredGrouped =
    selectedDate === "all"
      ? grouped
      : grouped.filter(
          (g) => g.date.toISOString().split("T")[0] === selectedDate
        );

  // ====================================== ALT STYLING OG OPSÆTNING =========================================
  return (
    <div className="grid gap-20 px-(--content-width) w-full">
      <h1>KALENDER</h1>

      {/* Dropdown menu til filtrering af hvilke datoer der vises */}
      <div>
        <select
          className="cursor-pointer px-4 py-3 rounded-4xl border border-(--bellevueblaa-600) text-(--bellevueblaa-600) w-30"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value="all">Datoer</option>

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

      {/* Her vises enten alle datoer eller filtreret dato */}
      {filteredGrouped.map(({ date, shows }) => (
        <div key={date.getTime()} className="grid lg:grid-cols-[1fr_2fr] gap-8">
          <div>
            {/* Dato-overskrift */}
            <h4>{formatDate(date)}</h4>
          </div>

          {/* Herunder laves listen af kort (KalenderCard) */}
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
