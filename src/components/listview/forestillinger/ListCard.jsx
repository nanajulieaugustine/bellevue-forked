"use client";
import Image from "next/image";
import Link from "next/link";
import AnchorTagPrimaryButton from "@/components/global/knapper/AnchorTagPrimaryButton";

export default function ListCard({ item }) {
  return (
        <li
          className="relative ml-4 mr-4 mt-10"
        >
          <div
        className="
          relative flex flex-col bg-white rounded-3xl p-2 min-h-[450px]
          before:content-[''] before:absolute before:inset-0
          before:rounded-3xl before:border-l-6 before:border-b-6 before:border-blue-900
          before:pointer-events-none
        "
      >
        <p className="font-extralight text-right text-sm uppercase text-(--koboltblaa-600)">
                {" "}
                {item.tags}
              </p>
        {/* Billede */}
        <Link href={`/forestillinger/${item.id}`}>
          {item.image?.[0] && (
            <div className="flex">
              <Image
                src={item.image[0].url}
                alt={item.image[0].alt}
                width={2000}
                height={200}
                className="rounded-3xl p-2"
                />
            </div>
          )}
          </Link>

          {/* Indhold */}
          <div className="p-3">
            <div className="flex justify-between">
              <h4 className="font-bold">{item.name}</h4>
            </div>
            <p className="font-extralight pt-2 text-2xl">{item.date}</p>
            <p className=" font-light">{item.description}</p>
          </div>

          {/* Knapper - altid i bunden */}
          <div className="p-3 pt-0 pb-10 text-center mt-auto">
            <div className="flex justify-center gap-10 w-full pt-10">

              <div className="border-2 border-(--koboltblaa-600) rounded-2xl py-3 px-6 bg-(--bellevueblaa-100)">
                <AnchorTagPrimaryButton href={`/forestillinger/${item.id}`} >
                  <h4>Køb billet</h4>
                </AnchorTagPrimaryButton>
              </div>
              <div className="py-3 px-6">
                <AnchorTagPrimaryButton href={`/forestillinger/${item.id}`} >
                <span className="
                    relative flex items-center gap-2 
                    before:content-[''] before:absolute before:left-0 before:right-0 
                    before:-bottom-0.5 before:h-[2px] 
                    before:bg-current
                  " >
                  <h4>Læs mere <span>→</span></h4> 
                  </span>
                </AnchorTagPrimaryButton>
              </div>

            </div>
          </div>
           </div>
        </li>
  );
}
