import { parse } from "date-fns";
import { da } from "date-fns/locale";

export function parseDates(input, options = {}) {
  const { addLatestDate = false, onlyFuture = false } = options;
  const now = new Date(); // behold hele timestampet

  function parseWithDateAndTime(entry) {
    if (!entry?.date) return null;

    // Hvis tiden findes, kombinér "03/12/2025 11.00"
    if (entry.time) {
      const combined = `${entry.date} ${entry.time}`;
      const d = parse(combined, "dd/MM/yyyy HH.mm", new Date(), { locale: da });
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
