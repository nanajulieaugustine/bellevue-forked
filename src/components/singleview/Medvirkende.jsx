import Image from "next/image";

const Medvirkende = ({ item }) => (
  <ul className="flex flex-wrap gap-5 p-5 justify-center">
    {item.medvirkende?.map((med) => (
      <li key={med.rolle} className="flex items-baseline gap-2">
        <h4 className="thin">{med.rolle}</h4>
        <h3>{med.medvirkende}</h3>
      </li>
    ))}
  </ul>
);

export default Medvirkende;