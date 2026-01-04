"use client";

import { useState } from "react";

const FAQ = () => {
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
        "Du kan købe billetter direkte på vores hjemmeside eller via Ticketmaster. Følg vejledningen på siden.",
    },
    {
      id: 2,
      question: "Kan jeg selv vælge, hvor jeg vil sidde??",
      answer:
        "Billetter kan normalt ikke refunderes, medmindre arrangementet aflyses. Kontakt administration for mere info.",
    },
    {
      id: 3,
      question:
        "Hvad gør vi, hvis vi er flere medlemmer, der gerne vil sidde ved siden af hinanden?",
      answer:
        "Ja, der er gratis parkering ved teatret. Vi anbefaler dog at komme i god tid ved store forestillinger.",
    },
    {
      id: 4,
      question: "Kan der resikeres at være udsolgt, til et event?",
      answer:
        "Ja, der er gratis parkering ved teatret. Vi anbefaler dog at komme i god tid ved store forestillinger.",
    },
    {
      id: 5,
      question: "Hvad gør jeg, hvis jeg køber flere billetter?",
      answer:
        "Ja, der er gratis parkering ved teatret. Vi anbefaler dog at komme i god tid ved store forestillinger.",
    },
    {
      id: 6,
      question: "Hvad hvis jeg har brug for handicapplads?",
      answer:
        "Ja, der er gratis parkering ved teatret. Vi anbefaler dog at komme i god tid ved store forestillinger.",
    },
    {
      id: 7,
      question:
        "Hvad gør jeg, hvis jeg ikke modtager den første mail efter jeg har indmeldt mig?",
      answer:
        "Ja, der er gratis parkering ved teatret. Vi anbefaler dog at komme i god tid ved store forestillinger.",
    },
  ];

  return (
    <section className="flex flex-col gap-12">
      <h2>Ofte stillede spørgsmål</h2>

      <ul className="space-y-4 cursor-pointer">
        {qaItems.map((item) => {
          const isOpen = openId === item.id;
          const isClosing = closingId === item.id;
          const noBottomRadius = isOpen || isClosing;

          return (
            <li key={item.id}>
              {/* =============================== CARD HEADER ================================ */}
              <div
                className={`flex items-center justify-between p-10 transition-colors duration-300 gap-15 flex-row flex-nowrap
                ${isOpen ? "bg-(--beige-300)" : "bg-(--beige-100)"} 
                ${noBottomRadius ? "rounded-t-2xl" : "rounded-2xl"}
              `}
                onClick={() => toggle(item.id)}
              >
                <p className="highlighttext">{item.question}</p>
                <span className="text-3xl font-bold cursor-pointer select-none text-(--roed-600)">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* ============================== CARD CONTENT =============================== */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out 
                px-10 ${isOpen ? "max-h-[900px] pt-5 pb-10" : "max-h-0 py-0"} 
                bg-(--beige-300) rounded-b-2xl`}
                onTransitionEnd={() => {
                  if (isClosing) setClosingId(null);
                }}
              >
                <p>{item.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
