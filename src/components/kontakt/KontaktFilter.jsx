import KontaktMedarbejder from "./KontaktMedarbejder";

export default function KontaktFilter({ employees = [] }) {
  return (
    <section className=" bg-(--beige-100)">
      <h2 className="text-center pt-20">Teatrets Medarbejdere</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-3 px-10 pb-20">
        {employees.length === 0 && <p>Ingen medarbejdere fundet</p>}

        <KontaktMedarbejder employees={employees} />
      </ul>
    </section>
  );
}
