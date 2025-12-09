"use client";
import StickyInfo from "./StickyInfo";
import DatoOversigt from "./DatoOversigt";
import BellevueStriber from "../global/animationer/BellevueStriber";
import SnapWrapper from "../global/komponenter/SnapWrapper";
import BilledKarrusel from "./BilledKarrusel";
import HorizontalScrollKarrusel from "../global/komponenter/HorizontalScrollKarrusel";
import AddOns from "./AddOns";
import Karrusel from "../global/komponenter/Karrusel";
import Medvirkende from "./Medvirkende";
import Anmeldelser from "./Anmeldelser";
import { getItemStatus } from "@/app/library/utils.js";

export default function SingleCard({ item }) {
  if (!item) return <p>Item ikke fundet</p>;

    const { isArchived } = getItemStatus(item);

  return (
    <div>
    <SnapWrapper image={item.image?.[0]}>
      {item.anmeldelser?.map((review) => (
        <Anmeldelser key={review.anmelder} review={review} />
      ))}
    </SnapWrapper>

      <div className="flex items-start">
        {/* højre kolonne */}
        <div className="w-2/3 max-h--150">
        {!isArchived ? (<DatoOversigt item={item} />) : null }
          <BellevueStriber>
            <div className="p-10 flex gap-10">
              <p className="max-w-100">{item.description_long}</p>
                {item.quote?(
              <div className="flex gap-5 items-start">
                <span className="font-black text-7xl italic font-serif">"</span>
                  <blockquote>{item.quote}</blockquote>
              </div>
                ):null}
            </div>
          </BellevueStriber>

          <div className="h-screen w-screen overflow-hidden">
         {item.add_ons && item.add_ons.length > 1 ? (
            <HorizontalScrollKarrusel>
              {item.add_ons.map((addOn) => (
                <AddOns key={addOn.titel} addOn={addOn} />
              ))}
            </HorizontalScrollKarrusel>
        ) : (
          // Hvis kun 1 eller 0, vises direkte uden karrusel
            item.add_ons?.map((addOn) => (
              <AddOns key={addOn.titel} addOn={addOn} />
            ))

        )}
          </div>
          {item.embed?(
          <div className="flex h-screen w-screen p-10 gap-10">

            {item.billeder && (
              <div
              className="h-full w-screen rounded-4xl"
              style={{ backgroundColor: item.baggrund? item.baggrund : null }}
              >
              <Karrusel>
              {item.billeder.map((billede) => (
                <BilledKarrusel
                key={billede.id}
                billede={billede}
                item={item}
                />
              ))}
              </Karrusel>
              </div>
            )}
            
            {item.embed ? (
              <div className="h-full w-full">
              <iframe
              src={item.embed}
              className="w-full h-full rounded-4xl"
              frameBorder="0"
              allowFullScreen
              ></iframe>
              </div>
            ):null}
            </div>
          ):(
             <div className="h-screen w-screen">

            {item.billeder && (
              <section
              className="h-full w-screen pt-10"
              >
              <Karrusel>
              {item.billeder.map((billede) => (
                <BilledKarrusel
                key={billede.id}
                billede={billede}
                item={item}
                />
              ))}
              </Karrusel>
              </section>
            )}
            </div>
          )}
          {item.medvirkende?(

            <section className="w-screen p-10">
        <Medvirkende item={item} />
      </section>
      ):null}
        </div>

        {/* sticky kolonne (venstre) */}
        <aside className="h-[90vh]">
          <div className="sticky top-40">
             <StickyInfo item={item} />
          </div>
        </aside>
      </div>
    </div>
  );
}
