"use client";

// Imports fra bibliotek
import { useState } from "react";
import Image from "next/image";

// Imports af komponentet
import PrimaryButton from "@/components/global/knapper/PrimaryButton";
import AnchorTagPrimaryButton from "@/components/global/knapper/AnchorTagPrimaryButton";
import SecondaryButton from "@/components/global/knapper/SecondaryButton";
import AnchorTagSecondaryButton from "@/components/global/knapper/AnchorTagSecondaryButton";

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
          className={`flex items-start justify-between p-10 transition-colors duration-300 shadow-md ${
            isOpen ? "bg-(--beige-300)" : "bg-(--beige-100)"
          } ${noBottomRadius ? "rounded-t-2xl" : "rounded-2xl"} gap-6`}
        >
          {/* INFORMATION */}
          <div className="grid gap-5 min-w-0">
            <div className="w-50">
              <div className="grid grid-cols-3">
                <p>{displayTime}</p>

                <div className="flex gap-5">
                  <p>|</p>
                  <p>{item.tags}</p>
                </div>
              </div>
            </div>

            {/* FORESTILLING NAVN */}
            <h4 className="wrap-break-words">{item.name}</h4>
          </div>

          {/* KNAPPER */}
          <div className="flex gap-6 shrink-0 whitespace-nowrap">
            <AnchorTagPrimaryButton
              href={`/forestillinger/${item.id}`}
              ariaLabel={"Køb billet"}
            >
              Køb billet
            </AnchorTagPrimaryButton>

            {!isOpen ? (
              <SecondaryButton
                onClick={() => toggle(item.id)}
                ariaLabel={"Læs Mere"}
              >
                Læs Mere
              </SecondaryButton>
            ) : (
              <button
                className="text-(--roed-600)"
                onClick={() => toggle(item.id)}
                aria-label="Luk igen"
              >
                Luk igen
              </button>
            )}
          </div>
        </div>

        {/* =========================== ACCORDION ============================ */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out 
            px-10 bg-(--beige-300) rounded-b-2xl shadow-md
            ${isOpen ? "max-h-[900px] pt-5 pb-10" : "max-h-0 py-0"}
          `}
          onTransitionEnd={() => {
            if (isClosing) setClosingId(null);
          }}
        >
          {/* INDHOLDET BILLEDE */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 ">
            {item.image?.[0]?.url && (
              <div className="flex shrink-0 w-full">
                <Image
                  src={item.image[0].url}
                  alt={item.image[0].alt || "Forestillingsbillede"}
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
                <AnchorTagSecondaryButton
                  href={`/forestillinger/${item.id}`}
                  ariaLabel={"Køb billet"}
                >
                  Læs mere
                </AnchorTagSecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default KalenderCard;
