import { parse } from "date-fns";
import { da } from "date-fns/locale";

//trimmer tags hvis der er forskel på størrelse af bogstaver
export function normalizeTag(tag) {
  return typeof tag === "string" ? tag.trim().toLowerCase() : "";
}

// ================================= Udregning af datoer i fortiden =========================================

export function parseDates(input, options = {}) {
  const { addLatestDate = false, onlyFuture = false } = options;
  const now = new Date(); // behold hele timestampet

  function parseWithDateAndTime(entry) {
    if (!entry?.date) return null;

    // Hvis tiden findes, kombinér "03/12/2025 11.00"
    function parseWithDateAndTime(entry) {
      if (!entry?.date) return null;

      // Hvis tiden er en array, parse kun datoen
      if (Array.isArray(entry.time)) {
        const d = parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da });
        return isNaN(d) ? null : d;
      }

      // Hvis tiden er en string, parse dato + tid
      if (typeof entry.time === "string" && entry.time.trim() !== "") {
        const combined = `${entry.date} ${entry.time}`;
        const d = parse(combined, "dd/MM/yyyy HH.mm", new Date(), {
          locale: da,
        });
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

// ===================================== Filtrering af kategorier ==========================================

export function extractCategories(data) {
  if (!Array.isArray(data)) return [];

  const map = new Map();

  data.forEach((item) => {
    if (!item.tags) return;

    const tags =
      typeof item.tags === "string"
        ? item.tags.split(",")
        : Array.isArray(item.tags)
        ? item.tags
        : [];

    tags.forEach((tag) => {
      if (typeof tag !== "string") return;

      const trimmed = tag.trim();
      const key = trimmed.toLowerCase();

      if (!map.has(key)) {
        map.set(key, trimmed); // gem original casing
      }
    });
  });

  return [...map.values()];
}

// ===================================== filtrering af aldersgrupper ==========================================
export function extractAldersgruppe(data) {
  if (!Array.isArray(data)) return [];

  const allGroups = data
    .map((item) => item.aldersgruppe) // hent aldersgruppe
    .filter(Boolean); // fjern undefined/null

  return [...new Set(allGroups)]; // returner unikke værdier
}

// ========================== Gruppér kalender-items pr. dato og split tider ud =============================

// Gruppér forestillinger efter dato og split tider ud pr. tidspunkt
export function groupShowsByDate(items, { onlyFuture = false } = {}) {
  // Find “i dag” (uden klokkeslæt)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Map til gruppering,
  const map = new Map();

  // Loop gennem alle items
  items.forEach((item) => {
    // Loop gennem alle datoer for et item, hvor ?. beskytter mod undefined
    item.fullDates?.forEach((entry) => {
      // parse dato + evt. tid, tager kun første resultat
      const parsed = parseDates([entry])[0];

      // Hvis parsing fejler → spring videre
      if (!parsed) return;

      // Normalisér dato (uden tid)
      const dateKey = new Date(parsed);
      dateKey.setHours(0, 0, 0, 0);

      // Hvis kun fremtidige
      if (onlyFuture && dateKey < today) return;

      // 1. Brug timestamp som key 2. Gør datoen sammenlignelig 3. Bruges som Map-key
      const ts = dateKey.getTime();

      // Opret dag hvis den ikke findes. ts = én bestemt kalenderdag (fx 12. marts)
      if (!map.has(ts)) map.set(ts, []);

      // Case 1: Ingen tid
      if (!entry.time) {
        map
          .get(ts)
          .push({ item, time: null, billet: entry.billet || item.billetter });
      } else if (typeof entry.time === "string") {
        // Case 2: Én tid (string)
        // map.get(ts) = Giv mig arrayet med alle shows for denne dag
        map.get(ts).push({
          item,
          time: entry.time,
          billet: entry.billet || item.billetter,
        });
      } else if (Array.isArray(entry.time)) {
        // Case 3: Flere tider (array med objekter)
        entry.time.forEach((t) => {
          // Splitter én forestilling til flere kalender-rækker
          map.get(ts).push({ item, time: t.time, billet: t.billet });
        });
      }
    });
  });

  // Fra Map → Array (til React)
  return (
    [...map.entries()]

      // Sortér datoer - Ældste dato først
      .sort(([a], [b]) => a - b)

      // Formatér til slutformat
      .map(([ts, shows]) => ({
        date: new Date(ts),
        shows,
      }))
  );
}

// ========================== Arkiverede versus aktive forestillinger =============================

/* Beregn seneste dato og arkiveret status for et item */
export function getItemStatus(item) {
  if (!item?.fullDates || !Array.isArray(item.fullDates)) {
    return { latestDate: null, isArchived: false };
  }

  const parsed = parseDates([item], { addLatestDate: true })[0];
  if (!parsed?.latestDate) return { latestDate: null, isArchived: false };

  const today = new Date();
  // Sæt tid til slutningen af dagen
  const endOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59,
    999
  );

  const isArchived = parsed.latestDate.getTime() < endOfToday.getTime();

  return { latestDate: parsed.latestDate, isArchived };
}

/**
 * Filtrér en liste af items baseret på status
 * @param {Array} items  listen af items
 * @param {string} status "current" eller "archive"
 */
export function filterItemsByStatus(items, status = "current") {
  const today = new Date();
  const endOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59,
    999
  );

  return items.filter((item) => {
    const { latestDate } = getItemStatus(item);
    if (!latestDate) return false;

    return status === "current"
      ? latestDate.getTime() >= endOfToday.getTime()
      : latestDate.getTime() < endOfToday.getTime();
  });
}
