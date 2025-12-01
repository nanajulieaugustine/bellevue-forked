"use client";
import Image from "next/image";
import Link from "next/link";

export default function ListCard({ items = [] }) {
  if (!items.length) return <p>Ingen items fundet</p>;

  return (
    <>
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-xl border-b-4 border-l-4 border-blue-100 transform transition-transform duration-300 
          hover:scale-105 cursor-pointer ml-4 mr-4 mt-10"
        >
          {item.image?.[0] && (
            <div className="flex shrink-0 w-full">
              <Image
                src={item.image[0].url}
                alt={item.image[0].alt}
                width={200}
                height={200}
                className="object-cover rounded-xl h-full w-full"
              />
            </div>
          )}

          <div className="pl-3">
            <div className="grid grid-cols-2">
              <h2 className="text-blue-800 font-bold pt-2">{item.name}</h2>
              <p className="text-blue-300 font-light text-right text-sm">
                {" "}
                {item.tags}
              </p>
            </div>
            <p className="text-blue-800 font-light pt-2">Dato: {item.date}</p>
            <p className="text-blue-800 font-light">{item.description}</p>
          </div>

          <div className="pl-3 pb-4 pt-20 text-center">
            <div className="flex flex-row gap-3 w-full">
              <Link
                href={`https://www.ticketmaster.dk/search?q=${encodeURIComponent(
                  item.name
                )}`}
                className="bg-(--bellevueblaa-100) border border-(--bellevueblaa-900) text-(--bellevueblaa-900) 
              py-2 px-4 rounded-2xl w-full text-sm md:text-base whitespace-nowrap"
              >
                Køb billet
              </Link>
              <Link
                href={`/forestillinger/${item.id}`}
                className=" text-(--bellevueblaa-900) border border-(--bellevueblaa-900) py-2 px-4 rounded-2xl w-full text-sm md:text-base whitespace-nowrap"
              >
                Læs mere
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
