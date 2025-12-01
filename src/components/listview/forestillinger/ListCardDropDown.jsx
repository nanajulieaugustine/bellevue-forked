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

export default function ListCardDropDown({ onFilterChange }) {
  const [openMenu, setOpenMenu] = useState({ date: false, category: false, børn: false });

  const dates = [
    "Januar", "Februar", "Marts", "April", "Maj", "Juni",
    "Juli", "August", "September", "Oktober", "November", "December"
  ];

  const categories = [
    "Dramakomedie", "Familieforestilling", "Koncert", "Morgenmad",
    "Teaterforestilling", "Fællessang", "Julekoncert", "Salon",
    "Klassiker", "Oplæsning", "Performance", "Comedy"
  ];

  const children = ["Familieforestilling", "For børn"];

  const handleClick = (type, value) => {
    if (onFilterChange) onFilterChange(type, value);
  };

  return (
    <div className="flex gap-4">
      {/* --- Dato --- */}
      <DropdownMenu open={openMenu.date} onOpenChange={(open) => setOpenMenu({ ...openMenu, date: open })}>
        
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 rounded-2xl border-2 border-blue-400 text-blue-400 hover:bg-amber-200">
            Dato <IoIosArrowDown className={`transition-transform ${openMenu.date ? "rotate-180" : "rotate-0"}`} />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white">
          <DropdownMenuLabel>Dato</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {dates.map((d) => (
            <DropdownMenuItem key={d} onClick={() => handleClick("date", d)}>
              {d}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
        
      </DropdownMenu>

      {/* --- Kategori --- */}
      <DropdownMenu open={openMenu.category} onOpenChange={(open) => setOpenMenu({ ...openMenu, category: open })}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 rounded-2xl border-2 border-blue-400 text-blue-400 hover:bg-amber-200">
            Kategori <IoIosArrowDown className={`transition-transform ${openMenu.category ? "rotate-180" : "rotate-0"}`} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuLabel>Kategori</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categories.map((c) => (
            <DropdownMenuItem key={c} onClick={() => handleClick("category", c)}>
              {c}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* --- Børn --- */}
      <DropdownMenu open={openMenu.børn} onOpenChange={(open) => setOpenMenu({ ...openMenu, børn: open })}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 rounded-2xl border-2 border-blue-400 text-blue-400 hover:bg-amber-200">
            Børn <IoIosArrowDown className={`transition-transform ${openMenu.børn ? "rotate-180" : "rotate-0"}`} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuLabel>Børn</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {children.map((c) => (
            <DropdownMenuItem key={c} onClick={() => handleClick("children", c)}>
              {c}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
