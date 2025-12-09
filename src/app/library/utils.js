import { parse } from "date-fns";
import { da } from "date-fns/locale";

// ================================= Udregning af datoer i fortiden =========================================

export function parseDates(input, options = {}) {
  const { addLatestDate = false, onlyFuture = false } = options;
  const now = new Date(); // behold hele timestampet

  function parseWithDateAndTime(entry) {
    if (!entry?.date) return null;

    // Hvis tiden findes, kombinér "03/12/2025 11.00"
    function parseWithDateAndTime(entry) {
  if (!entry?.date) return null;

  // Hvis tiden er en ARRAY, parse kun datoen
  if (Array.isArray(entry.time)) {
    const d = parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da });
    return isNaN(d) ? null : d;
  }

  // Hvis tiden er en string, parse dato + tid
  if (typeof entry.time === "string" && entry.time.trim() !== "") {
    const combined = `${entry.date} ${entry.time}`;
    const d = parse(combined, "dd/MM/yyyy HH.mm", new Date(), { locale: da });
    return isNaN(d) ? null : d;
  }

  // Hvis der slet ikke er tid, parse kun datoen
  const d = parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da });
  return isNaN(d) ? null : d;
}


    // Ellers parse kun datoen (fallback)
    const d = parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da });
    return isNaN(d) ? null : d;
  }

  if (Array.isArray(input) && addLatestDate) {
    return input
      .map((item) => {
        if (!Array.isArray(item.fullDates)) return null;

        const parsedDates = item.fullDates
          .map((entry) => parseWithDateAndTime(entry))
          .filter(Boolean);

        if (parsedDates.length === 0) return null;

        const latestDate = new Date(
          Math.max(...parsedDates.map((d) => d.getTime()))
        );

        return { ...item, latestDate };
      })
      .filter(Boolean);
  }

  if (Array.isArray(input) && !addLatestDate) {
    const parsedDates = input
      .map((entry) => parseWithDateAndTime(entry))
      .filter(Boolean);

    const filteredDates = onlyFuture
      ? parsedDates.filter((d) => d.getTime() >= now.getTime())
      : parsedDates;

    return Array.from(
      new Map(filteredDates.map((d) => [d.getTime(), d])).values()
    );
  }

  return [];
}

// ===================================== filtrering af kategorier ==========================================

export function extractCategories(data) {
  if (!Array.isArray(data)) return [];

  const allTags = data.flatMap((item) => item.tags || []);
  return [...new Set(allTags)];
}

// ========================== Gruppér kalender-items pr. dato og split tider ud =============================

// Gruppér forestillinger efter dato og split tider ud pr. tidspunkt
export function groupShowsByDate(items, { onlyFuture = false } = {}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // bruges til filtrering af fortiden

  const map = new Map(); // ts -> shows[]

  items.forEach((item) => {
    item.fullDates?.forEach((entry) => {
      // Parse dato + evt. tid via parseDates
      const parsed = parseDates([entry])[0];
      if (!parsed) return;

      // Brug ren dato som key (ikke tidspunkt)
      const dateKey = new Date(parsed);
      dateKey.setHours(0, 0, 0, 0);

      // Filtrér fortid fra hvis onlyFuture === true
      if (onlyFuture && dateKey < today) return;

      const ts = dateKey.getTime();

      // Split tider ud i et array
      const rawTimes = Array.isArray(entry.time)
        ? entry.time.join(",")
        : entry.time || "";

      const times = rawTimes
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      // Sikr at datoen findes i map
      if (!map.has(ts)) map.set(ts, []);

      // Tilføj et show pr. tidspunkt
      if (times.length === 0) {
        // ingen tid angivet → push uden tid
        map.get(ts).push({ item, time: null });
      } else {
        times.forEach((time) => {
          map.get(ts).push({ item, time });
        });
      }
    });
  });

  // Sortér datoerne og returnér som array
  return [...map.entries()]
    .sort(([a], [b]) => a - b)
    .map(([ts, shows]) => ({
      date: new Date(ts),
      shows,
    }));
}
