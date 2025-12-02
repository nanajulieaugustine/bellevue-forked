"use client";

// Imports fra bibliotek
import { useState } from "react";
import Image from "next/image";

// Imports af komponentet
import PrimaryButton from "@/components/global/knapper/PrimaryButton";
import AnchorTagPrimaryButton from "@/components/global/knapper/AnchorTagPrimaryButton";

const KalenderCard = ({ item, time }) => {
  const [openId, setOpenId] = useState(null);
  const [closingId, setClosingId] = useState(null);

  const toggle = (id) => {
    if (openId === id) {
      setClosingId(id);
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  if (!item) return null;

  // Formatér time (kan være string eller array)
  const displayTime = Array.isArray(time) ? time.join(", ") : time || ""; // fallback hvis tomt

  const isOpen = openId === item.id;
  const isClosing = closingId === item.id;
  const noBottomRadius = isOpen || isClosing;

  return (
    <li>
      <div className="transition-colors duration-300">
        {/* ============================= CARD ============================= */}
        <div
          className={`flex justify-between p-10 transition-colors duration-300 gap-15 ${
            isOpen ? "bg-(--beige-300)" : "bg-(--beige-100)"
          } ${
            noBottomRadius ? "rounded-t-2xl" : "rounded-2xl"
          } flex-col gap-6 sm:flex-row`}
        >
          {/* INFORMATION */}
          <div className="grid gap-5">
            <div className="w-50">
              <div className="grid grid-cols-3">
                <p>{displayTime}</p>

                <div className="flex gap-5">
                  <p>|</p>
                  <p>{item.tags}</p>
                </div>
              </div>
            </div>

            <h3>{item.name}</h3>
          </div>

          {/* KNAPPEN */}
          <div className="flex gap-4 self-start sm:self-end">
            <AnchorTagPrimaryButton href={`/forestillinger/${item.id}`}>
              Køb billet
            </AnchorTagPrimaryButton>

            <PrimaryButton onClick={() => toggle(item.id)}>
              {isOpen ? "Luk" : "Læs mere"}
            </PrimaryButton>
          </div>
        </div>

        {/* =========================== ACCORDION ============================ */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out 
            px-10 bg-(--beige-300) rounded-b-2xl
            ${isOpen ? "max-h-[900px] pt-5 pb-10" : "max-h-0 py-0"}
          `}
          onTransitionEnd={() => {
            if (isClosing) setClosingId(null);
          }}
        >
          {/* INDHOLDET BILLEDE */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 ">
            {item.image?.[0] && (
              <div className="flex shrink-0 w-full">
                <Image
                  src={item.image[0].url}
                  alt={item.image[0].alt}
                  width={200}
                  height={200}
                  className="object-cover rounded-xl h-full w-full"
                />
              </div>
            )}

            {/* INDHOLDET TEXT + KNAPPER */}
            <div className="flex flex-col justify-between gap-8">
              <p>{item.description_short}</p>

              <div className="self-start sm:self-end">
                <AnchorTagPrimaryButton href={`/forestillinger/${item.id}`}>
                  Læs mere
                </AnchorTagPrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default KalenderCard;
