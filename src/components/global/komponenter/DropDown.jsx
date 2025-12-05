"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

/**
 * ReusableDropdown
 * --------------------------
 * Props:
 * - label: Tekst på knappen
 * - items: Liste med valg
 * - onSelect: Funktion der køres når man vælger noget
 *
 * Eksempel:
 * <ReusableDropdown
 *   label="Dato"
 *   items={["Januar", "Februar"]}
 *   onSelect={(value) => console.log(value)}
 * />
 */
export default function ReusableDropdown({ label, items = [], onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={(o) => setOpen(o)}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 rounded-2xl border-2 border-blue-400 text-blue-400 hover:bg-amber-200">
          {label}
          <IoIosArrowDown
            className={`transition-transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem key={item} onClick={() => onSelect?.(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
