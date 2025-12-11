"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/global/komponenter/DropdownInner";

export default function ReusableDropdown({ label, items = [], onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {/* ================================  KATEGORI BUTTON STYLING  ============================== */}
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 rounded-2xl border-2 border-(--bellevueblaa-600) text-(--bellevueblaa-600) hover:border-(--bellevueblaa-900) hover:text-(--bellevueblaa-900)">
          {label}
          <IoIosArrowDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </DropdownMenuTrigger>

      {/* ==============================  DROPDOWN WRAPPER FOR INNER  ============================= */}
      <DropdownMenuContent className="bg-white">
        {items.map((item) => (
          <DropdownMenuItem key={item} onClick={() => onSelect?.(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}