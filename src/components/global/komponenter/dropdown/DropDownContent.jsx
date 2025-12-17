"use client";

import DropDown from "@/components/global/komponenter/dropdown/DropDown";

// Er en præsentationskomponent
// Modtager bare de færdige options som props
// Sender valg tilbage til parent (KalenderSamlet) via onFilterChange
export default function DropDownContent({
  dates = [],
  categories = [],
  children = [],
  onFilterChange,
  selectedDate = "all",
  selectedCategory = "all",
  selectedChildren = "all",
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <DropDown
        label="Dato"
        items={["Alle", ...dates]}
        selected={selectedDate}
        onSelect={(value) => onFilterChange("date", value)}
      />

      <DropDown
        label="Kategori"
        items={["Alle", ...categories]}
        selected={selectedCategory}
        onSelect={(value) => onFilterChange("category", value)}
      />

      <DropDown
        label="Aldersgruppe"
        items={["Alle", ...children]}
        selected={selectedChildren}
        onSelect={(value) => onFilterChange("children", value)}
      />
    </div>
  );
}

