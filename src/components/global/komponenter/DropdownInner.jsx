"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

// Root-komponenten (wrapper)
export const DropdownMenu = DropdownMenuPrimitive.Root;

// Trigger (knappens element)
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

// ================================  DROPDOWN PANELET  ==============================
export function DropdownMenuContent({
  className = "",
  sideOffset = 4,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={`shadow-md rounded-xl z-50 min-w-24 ${className}`}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

// =========================  DET KLIKBARE INNER MENU-ITEM  ==========================
export function DropdownMenuItem({ className = "", ...props }) {
  return (
    <DropdownMenuPrimitive.Item
      className={`cursor-pointer px-2 py-3 text-(--bellevueblaa-600) hover:bg-(--bellevueblaa-600) text-sm rounded-xl hover:text-white ${className}`}
      {...props}
    />
  );
}
