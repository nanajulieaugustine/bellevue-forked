import Image from "next/image";

const Medvirkende = ({ item }) => (
  <section className="bg-(--beige-100) rounded-2xl">
    <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 pr-20 gap-5 pb-20">
      {item.medvirkende?.map((med) => (
        <li key={med.rolle} className="flex flex-col pt-20 text-center">
          <div className="shrink-0 w-full">
            <Image
              src={"/images/headshot.webp"}
              alt={"headhsot dummy"}
              width={100}
              height={100}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="pl-3">
            <h4 className="pt-2">{med.medvirkende}</h4>
            <p className="text-(--moerkblaa-900) font-light pt-2">
              {med.rolle}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Medvirkende;
