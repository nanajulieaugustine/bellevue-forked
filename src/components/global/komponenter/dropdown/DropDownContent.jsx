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
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <DropDown
        label="Dato"
        items={["Alle", ...dates]}
        onSelect={(value) => onFilterChange("date", value)}
      />

      <DropDown
        label="Kategori"
        items={["Alle", ...categories]}
        onSelect={(value) => onFilterChange("category", value)}
      />

      <DropDown
        label="Aldersgruppe"
        items={["Alle", ...children]}
        onSelect={(value) => onFilterChange("children", value)}
      />
    </div>
  );
}
