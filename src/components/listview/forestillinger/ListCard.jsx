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
          hover:scale-105 cursor-pointer"
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
              <p className="text-blue-800 font-light"> {item.tags}</p>
            </div>
            <p className="text-blue-800 font-light pt-2">Dato: {item.date}</p>
            <p className="text-blue-800 font-light">{item.description}</p>
          </div>

          <div className="pl-3 pb-4 pt-20">
            <Link
              href={`/forestillinger/${item.id}`}
              className="bg-blue-100 text-blue-800 border border-blue-800 pt-2 pb-2 pl-7 pr-7 rounded-2xl mr-4"
            >
              Køb billet
            </Link>
            <Link
              href={`/forestillinger/${item.id}`}
              className=" text-blue-800 border border-blue-800 pt-2 pb-2 pl-7 pr-7 rounded-2xl"
            >
              Læs mere
            </Link>
          </div>
        </li>
      ))}
    </>
  );
}
