"use client";

import { useMemo, useState, useRef } from "react";
import { useEffect } from "react";
import { parse } from "date-fns";
import { da } from "date-fns/locale";
import ListCard from "./ListCard";
import ListCardDropDown from "./ListCardDropDown";
import WipeLineAnimation from "@/components/global/animationer/WipeLineAnimarion";

export default function ListFilter({ items = [] }) {
  const [activeTab, setActiveTab] = useState("current"); // current / archive
  const [selectedCategory, setSelectedCategory] = useState(null); // ny state for kategori

  //til dynamisk bredde af animeret linje
  const currentRef = useRef(null);
  const archiveRef = useRef(null);
  const [tabWidths, setTabWidths] = useState({ current: 0, archive: 0 });

  useEffect(() => {
    setTabWidths({
      current: currentRef.current?.offsetWidth || 0,
      archive: archiveRef.current?.offsetWidth || 0,
    });
  }, [activeTab]);

  // i dag uden tidszone-problemer
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
      .filter(Boolean); // fjern null-elementer
  }, [items]);

  // Dynamiske kategorier ud fra Supabase data
const dynamicCategories = useMemo(() => {
  const allTags = items.flatMap(item => item.tags || []);
  return [...new Set(allTags)]; // fjern dubletter
}, [items]);

  // Filtrering
  const upcoming = itemsWithLatestDate.filter(
    (item) => item.latestDate.getTime() >= today.getTime()
  );

  const archive = itemsWithLatestDate.filter(
    (item) => item.latestDate.getTime() < today.getTime()
  );

  let visibleItems = activeTab === "current" ? upcoming : archive;

        // --- filtrering efter kategori ---
  if (selectedCategory) {
    visibleItems = visibleItems.filter((item) =>
      item.tags?.includes(selectedCategory)
    );
  }

  // callback til dropdown
  const handleFilterChange = (type, value) => {
    if (type === "category") 
      setSelectedCategory(value);
    
  };

  const removeCategoryFilter = () => setSelectedCategory(null);



  return (
    <div className="pt-40">
      
      {/* TABS */}
    <div className="flex gap-6 mb-6 pb-3 relative w-full">
        <button
          onClick={() => setActiveTab("current")}
        >
          <h1 ref={currentRef}  className={`${
            activeTab === "current" ? "text-(--moerkeblaa-900)" : "bellevueblaa-100"
          }`}>FORESTILLINGER</h1>
        </button>

        <button
          onClick={() => setActiveTab("archive")}
        >
          <h1 ref={archiveRef}  className={`${
            activeTab === "archive" ? "text-(--moerkeblaa-900)" : "bellevueblaa-100"
          }`}>ARKIV</h1>
        </button>

        <WipeLineAnimation
          activeTab={activeTab}
          tabWidths={tabWidths} // sender bredderne som props
        />
      </div>
      <ListCardDropDown 
  onFilterChange={handleFilterChange}
  categories={dynamicCategories}
/>

{/* --- Vis valgt kategori som chip --- */}
{selectedCategory && (
        <div className="flex gap-2 mt-4 ml-4">
          <span className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 px-3 py-1 rounded-2xl text-sm">
            {selectedCategory}
            <button
              onClick={removeCategoryFilter}
              className="font-bold text-blue-400 hover:text-blue-800"
            >
              ×
            </button>
          </span>
        </div>
      )}

      {/* LISTCARD */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        <ListCard items={visibleItems} />
      </ul>


    </div>
  );
}
 