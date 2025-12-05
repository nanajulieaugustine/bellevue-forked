import DropDown from "@/components/global/komponenter/DropDown";

export default function Filters({ onFilterChange, categories = [] }) {
  const dates = [];

  const children = ["Familieforestilling", "For børn"];

  return (
    <div className="flex gap-4">
      <DropDown
        label="Dato"
        items={dates}
        onSelect={(value) => onFilterChange("date", value)}
      />

      <DropDown
        label="Kategori"
        items={categories}
        onSelect={(value) => onFilterChange("category", value)}
      />

      <DropDown
        label="Børn"
        items={children}
        onSelect={(value) => onFilterChange("children", value)}
      />
    </div>
  );
}
