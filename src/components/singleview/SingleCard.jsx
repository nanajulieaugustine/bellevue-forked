"use client";
import Image from "next/image";
import StickyInfo from "./StickyInfo";
import DatoOversigt from "./DatoOversigt";
import Anmeldelser from "./Anmeldelser";
import Karrusel from "../global/komponenter/Karrusel";
import Cirkel from "../global/ikoner/Cirkel";
import AddOns from "./AddOns";
import BilledKarrusel from "./BilledKarrusel";
import HorizontalScrollKarrusel from "../global/komponenter/HorizontalScrollKarrusel";
import SolBaggrund from "../global/ikoner/SolBaggrund";
import BellevueStriber from "../global/animationer/BellevueStriber";

export default function SingleCard({ item }) {
  if (!item) return <p>Item ikke fundet</p>;

  return (
    <div className="flex items-start">
      {/* højre kolonne */}
      <section className="w-2/3">

        <article className="w-full h-full mx-auto pl-6">
          {item.image?.[0]?.url && (
              <Image
              src={item.image[0].url}
              alt={item.image[0].alt || item.name}
              width={1000}
              height={1000}
              className="object-cover rounded-lg mb-6"
              />
            )}
        </article>
        <DatoOversigt item={item}/>
        <BellevueStriber>
        <div className="p-10 flex gap-10">
          <p className="max-w-100">{item.description_long}</p>
          <div className="flex gap-5 items-start">
          <span className="font-black text-7xl italic font-serif">"</span>
          <blockquote>{item.quote}</blockquote>
          </div>
        </div>
        </BellevueStriber>
        <div className="min-h-screen w-screen">
        {item.anmeldelser ?(
            <div className=" h-screen w-screen bg-(--bellevueblaa-900) text-(--hvid) p-10 flex flex-col items-center justify-center overflow-hidden">
                <div>
                    <Cirkel/>
                </div>
            <Karrusel>
            {item.anmeldelser.map((review) => (
                <Anmeldelser review={review} />
            ))}
            </Karrusel>

            </div>
        ):null
    }

        {item.add_ons ?(
            <div className=" h-screen w-screen overflow-hidden">
            <HorizontalScrollKarrusel>
            {item.add_ons.map((addOn) => (
                <AddOns addOn={addOn} />
            ))}
            </HorizontalScrollKarrusel>

            </div>
        ):null
    }
                {item.billeder ?(
                  <div className="h-screen w-screen overflow-hidden">

            <Karrusel>
            {item.billeder.map((billede) => (
              <BilledKarrusel billede={billede} item={item} />
            ))}
            </Karrusel>

            </div>
        ):null
      }
    </div>

                 {/* {item.embed ? (
            <iframe title={`trailer af ${item.name}`}
            src={item.embed}
            className="h-screen w-screen rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
            ) : null  } */}
      </section>

      {/* sticky kolonne (venstre) */}
      <aside className="h-[170vh] relative">
        <div className="sticky top-40">
        <SolBaggrund item={item} />
          <StickyInfo item={item} />
        </div>
      </aside>
    </div>
  );
}
