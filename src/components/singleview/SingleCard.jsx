"use client";
import Image from "next/image";
import StickyInfo from "./StickyInfo";
import DatoOversigt from "./DatoOversigt";
import Anmeldelser from "./Anmeldelser";
import Karrusel from "../global/komponenter/Karrusel";
import Cirkel from "../global/ikoner/Cirkel";
import AddOns from "./AddOns";
import BilledKarrusel from "./BilledKarrusel";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

export default function SingleCard({ item }) {
  if (!item) return <p>Item ikke fundet</p>;

  const firstSnapRef = useRef(null);
  const [snapCompleted, setSnapCompleted] = useState(false);
  const lastScrollY = useRef(0);

  const snapCount =
    (item.anmeldelser?.length ? 1 : 0) +
    (item.add_ons?.length ? 1 : 0) +
    (item.billeder?.length ? 1 : 0);

  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);

  // Unlock scroll ved mount
  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

useEffect(() => {
  const handleScroll = () => {
  if (!firstSnapRef.current || snapCompleted) return;

  const container = firstSnapRef.current;
  const containerTop = container.offsetTop;
  const containerBottom = containerTop + container.offsetHeight;

  const scrollY = window.scrollY || window.pageYOffset;
  const scrollingDown = scrollY > lastScrollY.current;
  lastScrollY.current = scrollY;

  // kun lås hvis vi er indenfor containeren
  if (scrollY >= containerTop && scrollY <= containerBottom - window.innerHeight) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [snapCompleted]);



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
        <div className="p-10 max-w-150">
          <p>{item.description_long}</p>
        </div>
        <div className="scroll-snap-section h-screen w-screen snap-y snap-mandatory"
        ref={firstSnapRef}
            >
        {item.anmeldelser ?(
            <div className="snap-start h-screen w-screen bg-(--bellevueblaa-900) text-(--hvid) p-10 flex flex-col items-center justify-center relative overflow-hidden"
            onScroll={() => handleSnapInView(0)}>
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
            <div className="snap-start h-screen w-screen overflow-hidden"
            onScroll={() => handleSnapInView(0)}>
            <Karrusel>
            {item.add_ons.map((addOn) => (
                <AddOns addOn={addOn} />
            ))}
            </Karrusel>

            </div>
        ):null
    }

                {item.billeder ?(
                    <div className="snap-start h-screen w-screen overflow-hidden"
                    onScroll={() => handleSnapInView(0)}>
            <Karrusel>
            {item.billeder.map((billede) => (
                <BilledKarrusel billede={billede} item={item} />
            ))}
            </Karrusel>

            </div>
        ):null
    }
    </div>
      </section>

      {/* sticky kolonne (venstre) */}
      <aside className="h-[170vh]">
        <div className="sticky top-40">
          <StickyInfo item={item} />
        </div>
      </aside>
    </div>
  );
}
