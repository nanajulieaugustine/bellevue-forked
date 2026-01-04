"use client";
import Filtrering from "@/components/global/komponenter/dropdown/Filtrering";
import KalenderCard from "./KalenderCard";

export default function KalenderSamlet({ items }) {
  return (
    <section className="flex flex-col gap-10">
      <h1>KALENDER</h1>

      {/* Filtreringskomponent */}
      <Filtrering
        items={items} // Alle kalender-events
        onlyFuture={true} // Skjul events i fortiden
        showTabs={false} // Ingen faner (fx “i dag / uge / måned”)
        allowMultipleTimes={true} // Samme event kan vises flere gange
        // Intro-tekst
        introTitle="Find din næste teateroplevelse"
        introText="Få overblikket over alle kommende forestillinger, koncerter og arrangementer. Brug filtrene til at sortere efter dato, kategori eller målgruppe - og book nemt dine billetter direkte i kalenderen."
        // Render prop – bestemmer hvordan events vises
        renderCard={(filteredGrouped, formatDate) => (
          <div className="pt-20 grid gap-20 w-full">
            {/* Loop gennem hver dato */}
            {filteredGrouped.map(({ date, shows }) => (
              <div
                key={date.getTime()}
                className="grid lg:grid-cols-[1fr_2fr] gap-8"
              >
                {/* Dato-kolonne */}
                <div>
                  <h4>{formatDate(date)}</h4>
                </div>

                {/* Events for dagen */}
                <ul className="grid gap-10">
                  {shows.map(({ item, time }, i) => (
                    <KalenderCard
                      key={item.id + "-" + i}
                      item={item}
                      time={time}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      />
    </section>
  );
}
