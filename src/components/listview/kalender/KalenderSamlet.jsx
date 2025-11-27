"use client";
import KalenderCard from "./KalenderCard";

const KalenderSamlet = ({ items }) => {
  if (!items.length) return <p>Ingen items fundet</p>;

  return (
    <div className="grid gap-20 px-(--content-width) w-full">
      <h1 className="text-8xl">KALENDER</h1>

      <div className="grid grid-cols-[1fr_2fr]">
        <h3>Den gældende dato</h3>
        <ul>
          <KalenderCard items={items || []} />
        </ul>
      </div>
    </div>
  );
};

export default KalenderSamlet;
