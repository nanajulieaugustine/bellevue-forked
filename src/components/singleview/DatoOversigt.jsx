"use client";
import { useState, useMemo, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { parse } from "date-fns";
import { da } from "date-fns/locale";
import AnchorTagPrimaryButton from "../global/AnchorTagPrimaryButton";

const DatoOversigt = ({ item }) => {
  const [selected, setSelected] = useState(null);

  const allowedDates = useMemo(() => {
    const list = item?.fullDates || [];
    const seen = new Set();

    return list
      .map((entry) => {
        const dateStr = entry?.date;
        if (!dateStr) return null;
        // sørger for datoen konverteres korrekt
        const dt = parse(dateStr, "dd/MM/yyyy", new Date(), { locale: da });
        if (isNaN(dt)) return null;
        dt.setHours(0, 0, 0, 0); //følger efter tidszonen.
        return dt;
      })
      .filter(Boolean)
      .filter((d) => {
        const t = d.getTime();
        if (seen.has(t)) return false;
        seen.add(t);
        return true;
      });
  }, [item]);

  //endelig konstant til de gyldige datoer
  const allowedSet = useMemo(() => {
    const s = new Set();
    allowedDates.forEach((d) => s.add(d.getTime()));
    return s;
  }, [allowedDates]);

  // --- Bruges til at mappe over datoerne under arrayet ---
  const timesByDate = useMemo(() => {
    const map = new Map();
    const list = item?.fullDates || [];

    list.forEach((entry) => {
      const dateStr = entry?.date;
      if (!dateStr) return;
      const dt = parse(dateStr, "dd/MM/yyyy", new Date(), { locale: da });
      if (isNaN(dt)) return;
      dt.setHours(0, 0, 0, 0);
      const key = dt.getTime();

      let raw = entry?.time;
      let slots = [];

      if (Array.isArray(raw)) {
        // array items kan være strings eller comma-separated strings
        raw.forEach((r) => {
          if (typeof r === "string") {
            slots.push(...r.split(",").map((s) => s.trim()));
          }
        });
      } else if (typeof raw === "string") {
        slots.push(...raw.split(",").map((s) => s.trim()));
      }

      // fjern tomme og dubletter
      slots = Array.from(new Set(slots.filter(Boolean)));

      if (slots.length === 0) return;

      if (map.has(key)) {
        map.set(key, Array.from(new Set([...map.get(key), ...slots])));
      } else {
        map.set(key, slots);
      }
    });

    return map;
  }, [item]);

  //til at styre datoen, brugeren har valgt
  const handleSelect = (date) => {
    if (!date) {
      setSelected(null);
      return;
    }
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    if (allowedSet.has(d.getTime())) setSelected(d);
  };

    // beregn hvilke måneder der indeholder available dates (første dag i måneden) ---
  const availableMonths = useMemo(() => {
    const set = new Set();
    (allowedDates || []).forEach((d) => {
      const m = new Date(d.getFullYear(), d.getMonth(), 1);
      set.add(m.getTime());
    });
    return Array.from(set)
      .map((t) => new Date(t))
      .sort((a, b) => a.getTime() - b.getTime());
  }, [allowedDates]);

  // styrer hvilken måned DayPicker viser (kun måneder fra availableMonths)
  const [visibleMonth, setVisibleMonth] = useState(
    availableMonths.length ? availableMonths[0] : new Date()
  );

  // når availableMonths opdateres (fx efter item er loadet), sæt visibleMonth til første available hvis ikke allerede gyldig
  useEffect(() => {
    if (availableMonths.length === 0) return;
    const found = availableMonths.find(
      (m) => visibleMonth && m.getTime() === visibleMonth.getTime()
    );
    if (!found) setVisibleMonth(availableMonths[0]);
  }, [availableMonths]); // eslint-disable-line react-hooks/exhaustive-deps

  // helpers til at finde prev/next available måned
  const findIndex = (date) =>
    availableMonths.findIndex((m) => m.getTime() === date?.getTime());
  const getPrevMonth = (date) => {
    const i = findIndex(date);
    return i > 0 ? availableMonths[i - 1] : null;
  };
  const getNextMonth = (date) => {
    const i = findIndex(date);
    return i >= 0 && i < availableMonths.length - 1
      ? availableMonths[i + 1]
      : null;
  };

    const CustomNavbar = ({ className, style }) => {
    const prev = getPrevMonth(visibleMonth);
    const next = getNextMonth(visibleMonth);

        return (
      <div className={className} style={style}>
        <button
          type="button"
          onClick={() => prev && setVisibleMonth(prev)}
          disabled={!prev}
          aria-label="Forrige måned"
          className="rdp-nav_button"
        >
          <IoIosArrowDropleft />
        </button>

        <div className="rdp-caption_label">
          {visibleMonth ? format(visibleMonth, "LLLL yyyy", { locale: da }) : ""}
        </div>

        <button
          type="button"
          onClick={() => next && setVisibleMonth(next)}
          disabled={!next}
          aria-label="Næste måned"
          className="rdp-nav_button"
        >
          <IoIosArrowDropright />
        </button>
      </div>
    );
  };

  return (
    <div className="w-2xl p-10 flex gap-15">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleSelect}
        // dansk tidszone
        locale={da}
        //fjerner klik på datoer, der ikke er gyldige
        disabled={(date) => {
          if (!date) return true;
          const d = new Date(date);
          d.setHours(0, 0, 0, 0);
          return !allowedSet.has(d.getTime());
        }}
         month={visibleMonth}
        onMonthChange={(m) => {
          // hvis nogen forsøger at ændre måned (fx keyboard), skift til nærmeste available måned
          const same = availableMonths.find((am) => am.getTime() === m.getTime());
          if (same) setVisibleMonth(same);
          else {
            // find nærmeste available måned (første større eller sidste mindre)
            const next = availableMonths.find((am) => am.getTime() >= m.getTime());
            setVisibleMonth(next || availableMonths[availableMonths.length - 1]);
          }
        }}
        //modifiers = gyldige datoer fra api'et
        modifiers={{ available: allowedDates }}
        modifiersStyles={{ available: { color: "#1c82c2", borderRadius: "100%" } }}
        styles={{
          day_selected: {
            backgroundColor: "#1c82c2", // farve på den valgte cirkel
            borderRadius: "9999px",
          },
          day_selected_hover: {
            backgroundColor: "#166699",
          },
          nav_button: {
            color: "#1c82c2", // sætter tekst/fill via currentColor på pilene
          },
        }}
         components={{
          Navbar: CustomNavbar,
        }}
      />

 {/* vis tidspunkter for valgte dato, ellers returner "vælg en dato"*/}
      <div className="flex flex-col gap-5 min-w-50">
        <h2>Tidspunkter</h2>
        <div className="flex">
          {selected ? (
            (() => {
              const times = timesByDate.get(selected.getTime()) || [];
              return (
                <ul className="flex flex-col gap-10">
                  {times.map((time) => (
                    <li key={time}>
                      <AnchorTagPrimaryButton href={"/"}>{time}</AnchorTagPrimaryButton>
                    </li>
                  ))}
                </ul>
              );
            })()
          ) : (
            <span>Vælg en dato</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default DatoOversigt;