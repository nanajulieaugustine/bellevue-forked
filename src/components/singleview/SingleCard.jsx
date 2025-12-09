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

export default function SingleCard({ item }) {
  if (!item) return <p>Item ikke fundet</p>;

  return (
    <div>
    <SnapWrapper image={item.image?.[0]}>
      {item.anmeldelser?.map((review) => (
        <Anmeldelser key={review.anmelder} review={review} />
      ))}
    </SnapWrapper>

      <div className="flex items-start">
        {/* højre kolonne */}
        <div className="w-2/3">
          <DatoOversigt item={item} />
          <BellevueStriber>
            <div className="p-10 flex gap-10">
              <p className="max-w-100">{item.description_long}</p>
              <div className="flex gap-5 items-start">
                <span className="font-black text-7xl italic font-serif">"</span>
                <blockquote>{item.quote}</blockquote>
              </div>
            </div>
          </BellevueStriber>

          {item.add_ons && (
            <div className="h-screen w-screen overflow-hidden">
              <HorizontalScrollKarrusel>
                {item.add_ons.map((addOn) => (
                  <AddOns key={addOn.id} addOn={addOn} />
                ))}
              </HorizontalScrollKarrusel>
            </div>
          )}
          <div className="flex h-screen w-screen">
            {item.billeder && (
              <div
                className="h-full w-screen"
                style={{ backgroundColor: item.baggrund }}
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
            <div className="overflow-y-auto overflow-hidden scroll-auto min-w-1/2">
              <Medvirkende item={item} />
            </div>

            {/* {item.embed && (
      <div className="h-full w-full">
      <iframe
        src={item.embed}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        ></iframe>
    </div>
  )} */}
          </div>
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
