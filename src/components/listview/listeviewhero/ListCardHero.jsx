"use client";
import { useState } from "react";
import ListCardDropDown from "@/components/listview/listeviewhero/ListCardDropDown";

const ListOrCalendar = () => {
  const [activeFilter, setActiveFilter] = useState("forestillinger");

  return (
    <div>
      {/* FILTER TOGGLER */}
      <div className="flex gap-5 mb-5 text-8xl">
        <h1 
          onClick={() => setActiveFilter("forestillinger")}
          className= {`cursor-pointer ${
            activeFilter === "forestillinger" ? "font-bold text-blue-500" : "text-gray-500"
          }`}
        >
          FORESTILLINGER
        </h1>

        <h1 
          onClick={() => setActiveFilter("arkiv")}
          className={`cursor-pointer ${
            activeFilter === "arkiv" ? "font-bold text-blue-500" : "text-gray-500"
          }`}
        >
          ARKIV
        </h1>
      </div>

      {/* CONTENT BASED ON FILTER */}
      {activeFilter === "forestillinger" && (
        <div>
          {/* Listevisning */}
          <h2 className="text-xl font-semibold mb-3">Listevisning</h2>
          {/* Her indsætter du dit ListView component */}
        </div>
      )}

      {activeFilter === "arkiv" && (
        <div>
          {/* Kalendervisning */}
          <h2 className="text-xl font-semibold mb-3">Arkiv</h2>
          {/* Her indsætter du dit kalender component */}
        </div>
      )}
      <ListCardDropDown />
    </div>
  );
};

export default ListOrCalendar;