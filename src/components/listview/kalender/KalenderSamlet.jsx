"use client";
import { useMemo, useState } from "react";
import KalenderCard from "./KalenderCard";
import KalenderDropdown from "./KalenderDropdown";
import { groupShowsByDate, extractCategories } from "@/app/library/utils.js";
import Image from "next/image";

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

  // State til valgt dato, kategori og børn ("all" = vis alle)
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedChildren, setSelectedChildren] = useState("all");

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

  // Datoer til dropdown (vises som formatteret tekst)
  const dateOptions = useMemo(
    () => grouped.map(({ date }) => formatDate(date)),
    [grouped]
  );

  // Kategorier til dropdown (tags fra items)
  const categories = useMemo(() => extractCategories(items), [items]);

  // Børn/voksne-tilstand (baseret på tags på items)
  const childrenOptions = ["Familieforestilling", "For børn"];

  // Håndtering af ændring fra dropdowns
  const handleFilterChange = (type, value) => {
    if (type === "date") {
      setSelectedDate(value === "Alle" ? "all" : value);
    }
    if (type === "category") {
      setSelectedCategory(value === "Alle" ? "all" : value);
    }
    if (type === "children") {
      setSelectedChildren(value === "Alle" ? "all" : value);
    }
  };

  // Hvis "all" er valgt -> vis alle datoer, ellers filtrér på valgt dato
  // + filtrér på kategori/børn ud fra tags på forestillingerne
  const filteredGrouped = grouped
    .map(({ date, shows }) => {
      // Filtrér på dato på gruppeniveau
      if (selectedDate !== "all" && formatDate(date) !== selectedDate) {
        return { date, shows: [] };
      }

      // Filtrér på kategori + børn på showniveau
      const filteredShows = shows.filter(({ item }) => {
        const tags = item.tags || [];

        const matchCategory =
          selectedCategory === "all" || tags.includes(selectedCategory);

        const matchChildren =
          selectedChildren === "all" || tags.includes(selectedChildren);

        return matchCategory && matchChildren;
      });

      return { date, shows: filteredShows };
    })
    // Fjern datoer, hvor alle forestillinger er filtreret væk
    .filter((group) => group.shows.length > 0);

  // ========================================= HTML / STYLING ============================================
  return (
    <div className="grid gap-20 px-(--content-width) w-full">
      <h1>KALENDER</h1>

      {/* Dropdown til filtrering på dato, kategori og børn */}
      <KalenderDropdown
        dates={dateOptions}
        categories={categories}
        childrenOptions={childrenOptions}
        onFilterChange={handleFilterChange}
      />

      {/* Her vises enten alle datoer eller de filtrerede datoer */}
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

      {/* Hvis filtrene fjerner alt */}
      {!filteredGrouped.length && (
        <p>Ingen forestillinger matcher dine filtre.</p>
      )}
      {/* <div className="absolute -right-2">
        <Image src="/svg/snoerkel-top-left.svg" alt="" width={400} height={900} />
      </div> */}
    </div>
  );
};

export default KalenderSamlet;
