"use client";
import Image from "next/image";
// import Link from "next/link";
import AnchorTagPrimaryButton from "@/components/global/knapper/AnchorTagPrimaryButton";

export default function ListCard({ items = [] }) {
  if (!items.length) return <p>Ingen items fundet</p>;

  return (
    <> 
      {items.map((item) => (
        <li
          key={item.id}
          className="relative"
        >
          <div className="flex flex-col rounded-2xl cursor-pointer ml-4 mr-4 mt-10 min-h-[450px] max-w-100 backdrop-blur-3xl">
        {/* Billede */}
        <Link href={`/forestillinger/${item.id}`}>
          {item.image?.[0] && (
            <div className="flex">
              <Image
                src={item.image[0].url}
                alt={item.image[0].alt}
                width={2000}
                height={200}
                className="rounded-3xl p-2 transition-all duration-300 
          hover:scale-102"
                />
            </div>
          )}
          </Link>

          {/* Indhold */}
          <div className="p-3">
            <div className="flex justify-between">
              <h4 className="font-bold">{item.name}</h4>
              <p className="font-light text-right text-sm">
                {" "}
                {item.tags}
              </p>
            </div>
            <p className="font-light pt-2">{item.date}</p>
            <p className=" font-light">{item.description}</p>
          </div>

          {/* Knapper - altid i bunden */}
          <div className="p-3 pt-0 text-center mt-auto">
            <div className="flex flex-row gap-3 w-full">

              {/* <Link
                href={`https://www.ticketmaster.dk/search?q=${encodeURIComponent(
                  item.name
                )}`}
                className="bg-(--bellevueblaa-100) border border-(--bellevueblaa-900) text-(--bellevueblaa-900) 
              py-2 px-4 rounded-2xl w-full text-sm md:text-base whitespace-nowrap"
              >
                Køb billet
              </Link> */}

              <div>
                <AnchorTagPrimaryButton href={`/forestillinger/${item.id}`} >
                  Køb billet
                </AnchorTagPrimaryButton>
              </div>
              <div>
                <AnchorTagPrimaryButton href={`/forestillinger/${item.id}`} >
                  Læs mere
                </AnchorTagPrimaryButton>
              </div>

            </div>
          </div>
           </div>
           <div className="absolute top-10 left-2.5 w-98 min-h-[455px] border-l-5 border-b-10 border-(--koboltblaa-900) rounded-3xl -z-10
          bg-[linear-gradient(to_left,var(--hvid)_95%,var(--koboltblaa-900)_5%,var(--koboltblaa-900)_100%)] drop-shadow-2xl"></div>
        </li>
      ))}
    </>
  );
}
