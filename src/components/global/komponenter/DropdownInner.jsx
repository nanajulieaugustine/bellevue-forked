"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

// ------------------------- ROOT & TRIGGER -------------------------
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

// ------------------------- DROPDOWN CONTENT -------------------------
export function DropdownMenuContent({ className = "", sideOffset = 4, ...props }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={`shadow-md rounded-xl z-50 min-w-24 bg-white ${className}`}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

// ------------------------- MENU ITEM -------------------------
export function DropdownMenuItem({ label, value, onSelect, ...props }) {
  return (
    <DropdownMenuPrimitive.Item
      className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white text-sm rounded-md"
      onSelect={() => onSelect && onSelect(value)}
      {...props}
    >
      {label}
    </DropdownMenuPrimitive.Item>
  );
}

// ------------------------- EKSEMPEL PÅ BRUG -------------------------
export default function ExampleDropdown() {
  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ];

  const [selected, setSelected] = React.useState(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-gray-200 rounded-md">
        {selected !== null ? `Valgt: ${selected}` : "Vælg en option"}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            label={option.label}
            value={option.value}
            onSelect={(val) => setSelected(val)}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
