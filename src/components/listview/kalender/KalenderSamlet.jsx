"use client";
import Filtrering from "@/components/global/komponenter/dropdown/Filtrering";
import KalenderCard from "./KalenderCard";

export default function KalenderSamlet({ items }) {
  return (
    <section className="flex flex-col gap-10">
      <h1>KALENDER</h1>
<<<<<<< HEAD
      <Filtrering
        items={items}
        onlyFuture={true}
        showTabs={false}
        introTitle="Find din næste teateroplevelse"
        introText="Få overblikket over alle kommende forestillinger, koncerter og arrangementer. Brug filtrene til at sortere efter dato, kategori eller målgruppe - og book nemt dine billetter direkte i kalenderen."
        renderCard={(filteredGrouped, formatDate) => (
          <div className="grid gap-20 w-full pt-20">
            {filteredGrouped.map(({ date, shows }) => (
              <div
                key={date.getTime()}
                className="grid lg:grid-cols-[1fr_2fr] gap-8"
              >
                <h4>{formatDate(date)}</h4>

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
=======
    <Filtrering
      items={items}
      onlyFuture={true}
      showTabs={false}
      allowMultipleTimes={true}
      introTitle="Find din næste teateroplevelse"
      introText="Få overblikket over alle kommende forestillinger, koncerter og arrangementer. Brug filtrene til at sortere efter dato, kategori eller målgruppe – og book nemt dine billetter direkte i kalenderen."
      renderCard={(filteredGrouped, formatDate) => (
        <div className="grid gap-20 w-full">
          {filteredGrouped.map(({ date, shows }) => (
            <div key={date.getTime()} className="grid lg:grid-cols-[1fr_2fr] gap-8">
              <div><h4>{formatDate(date)}</h4></div>
              <ul className="grid gap-10">
                {shows.map(({ item, time }, i) => <KalenderCard key={item.id + "-" + i} item={item} time={time} />)}
              </ul>
            </div>
          ))}
        </div>
      )}
>>>>>>> cdbcab7b36523d8fe23d9b25ed8f03978d0de4cb
      />
    </section>
  );
}
