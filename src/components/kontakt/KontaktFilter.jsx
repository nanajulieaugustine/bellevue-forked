"use client";
import KontaktMedarbejder from "./KontaktMedarbejder";
// import KontaktHero from "@/components/kontakt/KontaktHero";
// import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev"

export default function KontaktFilter({ employees = [] }) {
  return (
    <div>
      {/* <KontaktHero /> */}
      <div className="mt-6 bg-(--beige-100)">
        <h1 className="text-center pt-5">Teatrets Medarbejdere</h1>

        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 pr-20">
          <KontaktMedarbejder employees={employees} />
        </ul>
      </div>
      {/* <Nyhedsbrev /> */}
    </div>
  );
}
