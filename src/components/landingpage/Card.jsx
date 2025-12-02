import Image from "next/image";
import AnchorTagPrimaryButton from "@/components/global/knapper/AnchorTagPrimaryButton";

export default function ListCard({ item}) {

  return (
        <li
          key={item.id}
          className="flex flex-col rounded-xl border-b-4 border-l-4 border-blue-100 transform transition-transform duration-300 
          hover:scale-105 cursor-pointer ml-4 mr-4 mt-10 min-h-[400px]"
        >
        {/* Billede */}
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

          {/* Indhold */}
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

          {/* Knapper - altid i bunden */}
          <div className="p-3 pt-0 text-center mt-auto">
            <div className="flex flex-row gap-3 w-full">

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
        </li>
  );
}
