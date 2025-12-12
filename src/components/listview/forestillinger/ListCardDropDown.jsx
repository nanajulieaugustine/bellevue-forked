import DropDown from "@/components/global/komponenter/DropDown";


// Er en præsentationskomponent
// Modtager bare de færdige options som props
// Sender valg tilbage til parent (KalenderSamlet) via onFilterChange
export default function Filters({
  dates = [],
  categories = [],
  children = [],
  onFilterChange,
}) {
  return (
    <div className="flex gap-4">
      <DropDown
        label="Dato"
        items={["Alle", ...dates]}
        onSelect={(value) => onFilterChange("date", value)}
      />

      <DropDown
        label="Kategori"
        items={categories}
        onSelect={(value) => onFilterChange("category", value)}
      />

      <DropDown
        label="Børn"
        items={["Alle", ...children]}
        onSelect={(value) => onFilterChange("children", value)}
      />
    </div>
  );
}
