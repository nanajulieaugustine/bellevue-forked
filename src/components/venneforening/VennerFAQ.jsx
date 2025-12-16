"use client";

import { useState } from "react";

const QACard = () => {
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

  const qaItems = [
    {
      id: 1,
      question: "Hvordan booker jeg billetter?",
      answer:
        "Du kan købe billetter direkte på vores hjemmeside eller via Ticketmaster.dk - Følg vejledningen på siden.",
    },
    {
      id: 2,
      question: "Kan jeg selv vælge, hvor jeg vil sidde??",
      answer:
        "Ja — du kan selv vælge dine pladser, når du køber billetter, så længe de stadig er ledige.",
    },
    {
      id: 3,
      question:
        "Hvad gør vi, hvis vi er flere medlemmer, der gerne vil sidde ved siden af hinanden?",
      answer:
        "Ja — bestil billetter samlet, så sørger vi for, at I sidder sammen. Hvis I allerede har købt hver for sig, kan kundeservice ofte hjælpe.",
    },
    {
      id: 4,
      question: "Kan der risikeres at være udsolgt, til et event?",
      answer:
        "Ja — det kan risikeres, at forestillingen bliver udsolgt. Vi anbefaler derfor, at du køber billetter i god tid for at sikre din plads.",
    },
    {
      id: 5,
      question: "Hvad gør jeg, hvis jeg køber flere billetter?",
      answer:
        "Hvis du køber flere billetter, bliver de samlet under den samme mailadresse, og I bliver placeret sammen automatisk.",
    },
    {
      id: 6,
      question: "Hvad hvis jeg har brug for handicapplads?",
      answer:
        "Hvis du har brug for en handicapplads, er der særlige områder reserveret til dette. Du kan se alle tilgængelige handicappladser direkte i salsoversigten på Ticketmaster, når du vælger dine billetter.",
    },
    {
      id: 7,
      question:
        "Hvad gør jeg, hvis jeg ikke modtager den første mail efter jeg har indmeldt mig?",
      answer:
        "Hvis du ikke modtager velkomstmailen, så tjek spam, vent et øjeblik, og kontakt kundeservice, hvis den stadig ikke dukker op.",
    },
  ];

  return (
    <ul className="space-y-4 cursor-pointer">
      {qaItems.map((item) => {
        const isOpen = openId === item.id;
        const isClosing = closingId === item.id;
        const noBottomRadius = isOpen || isClosing;

        return (
          <li key={item.id}>
            {/* CARD HEADER */}
            <div
              className={`flex items-center justify-between p-10 transition-colors duration-300 gap-15 flex-row flex-nowrap 
                ${isOpen ? "bg-(--beige-300)" : "bg-(--beige-100)"} 
                ${noBottomRadius ? "rounded-t-2xl" : "rounded-2xl"}
              `}
              onClick={() => toggle(item.id)}
            >
              <p className="highlighttext">{item.question}</p>
              <span className="text-3xl font-bold cursor-pointer select-none  text-(--roed-600)">
                {isOpen ? "−" : "+"}
              </span>
            </div>

            {/* CARD BODY */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out 
                px-10 ${isOpen ? "max-h-[900px] pt-5 pb-10" : "max-h-0 py-0"} 
                bg-(--beige-300) rounded-b-2xl`}
              onTransitionEnd={() => {
                if (isClosing) setClosingId(null);
              }}
            >
              <p className="text-gray-700 text-xl">{item.answer}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default QACard;
