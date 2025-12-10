import Image from "next/image";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";
import HighlightCards from "../global/komponenter/HighLightCard";


const LejTeatret = () => {
  const highlightItems = [
    { icon: "/svg/parking.svg", text: "Gratis, ubegrænset parkering" },
    { icon: "/svg/chair.svg", text: "742 siddepladser", iconWidth: 80, iconHeight: 80 },
    { icon: "/svg/catering.svg", text: "Catering, teknik og underholdning" },
  ];

  return (
    <section className="bg-(--beige-100) py-20 grid gap-20 items-center lg:grid-cols-[2fr_1fr]">
      {/* ======================= CONTAINER FOR VENSTRE INDHOLD ======================== */}
      <div className="flex flex-col gap-12">
        {/* HEADING + TEKST */}
        <div className="pb-16">
          <h2 className="pb-8">Lej teatret</h2>
          <p>Skab en uforglemmelig fest i Bellevue Teatrets ikoniske rammer.</p>
        </div>

        {/* Gule felter */}
        <HighlightCards items={highlightItems} />

        {/* TEKSTER OM LEJ TEATER + BUTTON */}
        <div className="flex flex-col gap-4">
          <p>
            Med Arne Jacobsens smukke arkitektur, beliggenheden mellem strand og
            skov og en sal med 742 pladser, får jeres arrangement en stemning,
            der løfter enhver begivenhed.
          </p>
          <p>
            Uanset om I planlægger firmafest, jubilæum, privat fejring eller et
            større show, tilbyder vi fleksible løsninger med catering, teknik og
            professionel support - så I trygt kan fokusere på gæsterne.
          </p>
          <p>
            Her får jeres fest ikke bare et sted at være, men en scene at stråle
            på.
          </p>
          <div className="self-center pt-8">
            <AnchorTagPrimaryButton href={`mailto:adm@bellevueteatret.dk`}>
              Kontakt os
            </AnchorTagPrimaryButton>
          </div>
        </div>
      </div>

      {/* ======================= CONTAINER FOR HØJRE INDHOLD ========================== */}
      <div className="flex flex-col gap-6  md:flex-row lg:flex-col">
        <Image
          src="/images/lejteatret1.webp"
          alt=""
          width={800}
          height={200}
          className="rounded-xl"
        />
        <Image
          src="/images/lejteatret2.webp"
          alt=""
          width={800}
          height={200}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default LejTeatret;
