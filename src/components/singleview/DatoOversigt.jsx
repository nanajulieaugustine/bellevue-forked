"use client";
import { useState, useMemo } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { parse } from "date-fns";
import { da } from "date-fns/locale";

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

  return (
    <div className="w-1/2 flex gap-10">
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
      />

{/* vis tidspunkter for valgte dato, ellers returner "vælg en dato"*/}
      <div>
        <h2>Tidspunkter</h2>

        {selected ? (
          (() => {
            const times = timesByDate.get(selected.getTime()) || [];
            return (
              <ul>
                {times.map((time) => (
                  <li key={time}>{time}</li>
                ))}
              </ul>
            );
          })()
        ) : (
          <span>Vælg en dato</span>
        )}
      </div>
    </div>
  );
};
export default DatoOversigt;