"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import DropDownContent from "./DropDownContent";
import WipeLineAnimation from "@/components/global/animationer/WipeLineAnimarion";
import { useSearchParams } from "next/navigation";

export default function Filtrering({
  items,
  onlyFuture = false, // Til KalenderSamlet
  showTabs = false,    // Til ListFilterClient
  renderCard,          // Callback til hvordan kort skal vises
  introTitle,
  introText,
  allowMultipleTimes = false 
}) {
  if (!items?.length) return <p>Ingen forestillinger eller events fundet.</p>;

  // ----- Tabs -----
  const [activeTab, setActiveTab] = useState("current");
  const currentRef = useRef(null);
  const archiveRef = useRef(null);
  const [tabWidths, setTabWidths] = useState({ current: 0, archive: 0 });

   const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");


//til videresendelse af kategorier fra forsiden
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  useEffect(() => {
    if (showTabs) {
      setTabWidths({
        current: currentRef.current?.offsetWidth || 0,
        archive: archiveRef.current?.offsetWidth || 0,
      });
    }
  }, [activeTab, showTabs]);

  // ----- Gruppér forestillinger -----
  const grouped = useMemo(() => {
    const groupFn = require("@/app/library/utils").groupShowsByDate;
    return groupFn(items, { onlyFuture });
  }, [items, onlyFuture]);

  if (!grouped.length) return <p>Ingen kommende forestillinger.</p>;

  // ----- Filtre -----
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedChildren, setSelectedChildren] = useState("all");

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
      
      const handleFilterChange = (type, value) => {
          const normalized = value === "Alle" ? "all" : value;
          if (type === "date") setSelectedDate(normalized);
          if (type === "category") setSelectedCategory(normalized);
          if (type === "children") setSelectedChildren(normalized);
        };
        
        const removeFilter = (type) => {
            if (type === "date") setSelectedDate("all");
            if (type === "category") setSelectedCategory("all");
            if (type === "children") setSelectedChildren("all");
        };
        
        // ----- Filtrering -----
        const today = new Date();
        today.setHours(0,0,0,0);
        
        const baseItems = grouped.filter(({ date }) => {
            if (!showTabs) return true;
            if (activeTab === "current") return date >= today;
            if (activeTab === "archive") return date < today;
            return true;
        });

        const orderedBaseItems = useMemo(() => {
        if (activeTab === "archive") {
            // Seneste dato først
            return [...baseItems].sort((a, b) => b.date - a.date);
        }

        // Aktuelle forestillinger: tidligste først (default)
        return [...baseItems].sort((a, b) => a.date - b.date);
        }, [baseItems, activeTab]);

        
        const seenIds = allowMultipleTimes ? null : new Set();

        
        const filteredGrouped = orderedBaseItems
        .map(({ date, shows }) => {
            if (selectedDate !== "all" && formatDate(date) !== selectedDate) return { date, shows: [] };
            
            const filteredShows = shows
            .filter(({ item }) => {
                const tags = item.tags || [];
                const aldersgruppe = item.aldersgruppe || [];
                const matchCategory =
                selectedCategory === "all" ||
                (Array.isArray(tags)
                ? tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
                : typeof tags === "string"
                ? tags.toLowerCase().includes(selectedCategory.toLowerCase())
                : false
            );
            
            const matchChildren = selectedChildren === "all" || aldersgruppe.includes(selectedChildren);
            return matchCategory && matchChildren;
        })
       .filter(({ item }) => {
        if (!seenIds) return true; // kun til kalender (tillader flere cards pr. alle tidspunkter)

        if (seenIds.has(item.id)) return false;
        seenIds.add(item.id);
        return true;
        });

        
        return { date, shows: filteredShows };
    })
    .filter(group => group.shows.length > 0);
    
    const activeFilters = [
        { type: "date", value: selectedDate, label: selectedDate },
        { type: "category", value: selectedCategory, label: selectedCategory },
        { type: "children", value: selectedChildren, label: selectedChildren },
    ].filter(f => f.value !== "all");
    
    const activeItems = useMemo(() => {
        return baseItems.flatMap(group =>
            group.shows.map(show => show.item)
        );
    }, [baseItems]);
    
    //henter filtrering fra utils
      const dateOptions = useMemo(
        () => orderedBaseItems.map(({ date }) => formatDate(date)),
        [orderedBaseItems]
        );

    
      const categories = useMemo(
      () => require("@/app/library/utils").extractCategories(activeItems),
      [activeItems]
    );
    
    const childrenOptions = useMemo(
      () => require("@/app/library/utils").extractAldersgruppe(activeItems),
      [activeItems]
    );
  useEffect(() => {
  if (!urlCategory) {
    setSelectedDate("all");
    setSelectedCategory("all");
    setSelectedChildren("all");
  }
}, [activeTab, urlCategory]);

  // ----- Render -----
  return (
    <div>
      {showTabs && (
        <div className="flex flex-col md:flex-row gap-6 mb-15 pb-3 relative w-full">
          <button onClick={() => setActiveTab("current")}>
            <h1 ref={currentRef} className={activeTab === "current" ? "text-(--moerkeblaa-900)" : "bellevueblaa-100"}>FORESTILLINGER</h1>
          </button>
          <button onClick={() => setActiveTab("archive")}>
            <h1 ref={archiveRef} className={activeTab === "archive" ? "text-(--moerkeblaa-900)" : "bellevueblaa-100"}>ARKIV</h1>
          </button>
          <div className="hidden md:block">
            <WipeLineAnimation activeTab={activeTab} tabWidths={tabWidths} />
          </div>
        </div>
      )}
<div>
<div className="flex flex-col gap-10">

      {introTitle && introText && (
          <div className="max-w-150 flex flex-col gap-5">
          <h3>{introTitle}</h3>
          <p>{introText}</p>
        </div>
      )}
<div>
     <DropDownContent
      dates={dateOptions}
      categories={categories}
      children={childrenOptions}
      onFilterChange={handleFilterChange}
      selectedDate={selectedDate}
      selectedCategory={selectedCategory}
      selectedChildren={selectedChildren}
    />


      {activeFilters.length > 0 && (
          <div className="flex gap-2 mt-4 ml-4 flex-wrap">
          {activeFilters.map(filter => (
              <span key={filter.type} className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 px-3 py-1 rounded-2xl text-sm">
              {filter.label}
              <button onClick={() => removeFilter(filter.type)} className="font-bold hover:text-blue-800">×</button>
            </span>
          ))}
        </div>
      )}
      </div>

      {renderCard(filteredGrouped, formatDate)}

      {!filteredGrouped.length && <p className="mt-6">Ingen forestillinger matcher dine filtre.</p>}
      </div>
    </div>
      </div>
  );
}
