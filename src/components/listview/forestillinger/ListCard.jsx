"use client";
import Image from "next/image";
import Link from "next/link";
import AnchorTagPrimaryButton from "@/components/global/knapper/AnchorTagPrimaryButton";
import SecondaryButton from "@/components/global/knapper/AnchorTagSecondaryButton";
import ScrollToPrimaryButton from "@/components/global/knapper/ScrollToPrimaryButton";

export default function ListCard({ item, medlemstilbud, archive }) {
  return (
    <div className="relative ml-4 mr-4 mt-10 ">
      <div
        className="
          relative flex flex-col bg-white rounded-3xl p-2 min-h-[450px]
          before:content-[''] before:absolute before:inset-0
          before:rounded-3xl before:border-l-6 before:border-b-6 before:border-blue-900
          before:pointer-events-none shadow-md
        "
      >
        <p className="font-extralight text-right text-sm uppercase text-(--koboltblaa-600)">
          {item.tags}
        </p>
        {/* Billede */}
        <Link href={`/forestillinger/${item.id}`}>
          {item.image?.[0]?.url && (
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

        {/* Indhold  line-clamp-1=maks en linje */}
        <div className="p-3">
          <div className="flex justify-between">
            <h4 className="font-medium line-clamp-1">{item.name}</h4>
          </div>
          {medlemstilbud ? (
            <div>
              <p className="font-extralight pt-2 text-md">
                {" "}
                {item.venne_fordele[0]?.dato}
              </p>
              <p className="pt-2 text-md">
                {" "}
                {item.venne_fordele[0]?.billet_antal}
              </p>
            </div>
          ) : (
            <p className="font-extralight pt-2 text-md">{item.date}</p>
          )}
          <p className=" font-light line-clamp-2 pt-5">
            {item.description_short}
          </p>
        </div>

        {/* Knapper - altid i bunden */}
        <div className="p-2 pt-0 pb-10 items-center justify-center mt-auto">
          <div className="flex flex-wrap justify-center items-center gap-10 w-full pt-10">
            <div>
              {medlemstilbud ? (
                // Note: Skal være scroll to anchor tag
                <ScrollToPrimaryButton scrollToId="bookbilletter">
                  Find billetter
                </ScrollToPrimaryButton>
              ) : (
                <AnchorTagPrimaryButton href={`/forestillinger/${item.id}`}>
                  Køb billet
                </AnchorTagPrimaryButton>
              )}
            </div>
            <div>
              <SecondaryButton href={`/forestillinger/${item.id}`}>
                Læs Mere
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
