"use client";
import { useState, useMemo, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { da } from "date-fns/locale";
import { parseDates } from "@/app/utils";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { format } from "date-fns";

const DatoOversigt = ({ item }) => {
  const [selected, setSelected] = useState();
  // --- kun fremtidige datoer ---
  const allowedDates = useMemo(
    () => parseDates(item?.fullDates || [], { onlyFuture: true }),
    [item]
  );

  const allowedSet = useMemo(
    () => new Set(allowedDates.map((d) => d.getTime())),
    [allowedDates]
  );

  // map dato -> tidspunkter
  const timesByDate = useMemo(() => {
    const map = new Map();
    (item?.fullDates || []).forEach((entry) => {
      if (!entry?.date) return;
      const dt = parseDates([entry])[0]; // brug utils til parsing
      if (!dt) return;
      const key = dt.getTime();

      let raw = entry?.time;
      let slots = [];

      if (Array.isArray(raw)) {
        raw.forEach((r) => {
          if (typeof r === "string")
            slots.push(...r.split(",").map((s) => s.trim()));
        });
      } else if (typeof raw === "string") {
        slots.push(...raw.split(",").map((s) => s.trim()));
      }

      slots = Array.from(new Set(slots.filter(Boolean)));
      if (slots.length === 0) return;

      map.set(
        key,
        map.has(key) ? Array.from(new Set([...map.get(key), ...slots])) : slots
      );
    });

    return map;
  }, [item]);

  const handleSelect = (date) => {
    if (!date) return setSelected(null);
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    if (allowedSet.has(d.getTime())) setSelected(d);
  };

  // måneder med available dates
  const availableMonths = useMemo(() => {
    const set = new Set();
    allowedDates.forEach((d) =>
      set.add(new Date(d.getFullYear(), d.getMonth(), 1).getTime())
    );
    return Array.from(set)
      .map((t) => new Date(t))
      .sort((a, b) => a.getTime() - b.getTime());
  }, [allowedDates]);

  const [visibleMonth, setVisibleMonth] = useState(
    availableMonths.length ? availableMonths[0] : new Date()
  );

  useEffect(() => {
    if (availableMonths.length === 0) return;
    if (!availableMonths.find((m) => m.getTime() === visibleMonth.getTime())) {
      setVisibleMonth(availableMonths[0]);
    }
  }, [availableMonths]);

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

  // vælger automatisk første ledige dato
  useEffect(() => {
    if (allowedDates.length === 0) return;
    setSelected(allowedDates[0]);
  }, [allowedDates]);

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
          {visibleMonth
            ? format(visibleMonth, "LLLL yyyy", { locale: da })
            : ""}
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
        locale={da}
        disabled={(date) =>
          !date || !allowedSet.has(new Date(date).setHours(0, 0, 0, 0))
        }
        month={visibleMonth}
        onMonthChange={(m) => {
          const same = availableMonths.find(
            (am) => am.getTime() === m.getTime()
          );
          setVisibleMonth(
            same ||
              availableMonths.find((am) => am.getTime() >= m.getTime()) ||
              availableMonths[availableMonths.length - 1]
          );
        }}
        modifiers={{ available: allowedDates }}
        modifiersStyles={{
          available: { color: "#1c82c2", borderRadius: "100%" },
        }}
        styles={{
          day_selected: { backgroundColor: "#1c82c2", borderRadius: "9999px" },
          day_selected_hover: { backgroundColor: "#166699" },
          nav_button: { color: "#1c82c2" },
        }}
        components={{ Navbar: CustomNavbar }}
      />

      <div className="flex flex-col gap-5 min-w-50">
        <h3>Book billetter</h3>
        <div className="flex">
          {selected ? (
            <ul className="flex flex-col gap-10">
              {(timesByDate.get(selected.getTime()) || []).map((time) => (
                <li key={time}>
                  <AnchorTagPrimaryButton href={"/"}>
                    {time}
                  </AnchorTagPrimaryButton>
                </li>
              ))}
            </ul>
          ) : (
            <span>Vælg en dato</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatoOversigt;
