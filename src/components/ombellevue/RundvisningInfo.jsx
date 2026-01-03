import BellevueStriber from "@/components/global/animationer/BellevueStriber";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";
import BellevueVideo from "../global/komponenter/BellevueVideo";
import Clock from "../global/ikoner/Clock";
import Chat from "../global/ikoner/Chat";
import Calender from "../global/ikoner/Calender";
import Price from "../global/ikoner/Price";

const RundvisningInfo = () => {
  return (
    <BellevueStriber>
      <section className="pt-20 grid gap-15">
        <h2>Rundvisning</h2>
        {/* =============================== TEXT + VIDEO ================================ */}

        <div className="grid md:grid-cols-2 gap-10">
          {/* ========= VENSTRE INDHOLD ======== */}

          <div className="flex flex-col gap-18">
            {/* CONTAINER FOR IKONER */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <Clock size={30} className={"text-(--moerkblaa-300)"} />
                <p className="highlighttext">45 minutters varighed</p>
              </div>
              <div className="flex gap-4 items-center">
                <Chat size={25} className={"text-(--moerkblaa-300)"} />
                <p className="highlighttext">Tilbydes på dansk eller engelsk</p>
              </div>
              <div className="flex gap-4 items-center">
                <Calender size={25} className={"text-(--moerkblaa-300)"} />
                <p className="highlighttext">
                  Arrangeres på hverdage mellem 9-16
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Price size={25} className={"text-(--moerkblaa-300)"} />
                <p className="highlighttext">
                  135 kr. per person (min. 10 pers)
                </p>
              </div>
            </div>

            {/* CONTAINER FOR TEKST */}
            <div className="grid gap-6">
              <p>Rundvisninger er arrangeret på faste dage.</p>
              <div>
              <p>
                For grupper på 10 personer eller flere, kontakt
              </p>
                <a className="font-medium" href="mailto:marianne@bellvueteatret.dk">
                   marianne@bellevueteatret.dk.
                </a>
              </div>
            </div>
          </div>

          {/* ======== HØJRE INDHOLD ======== */}
          <div className="flex flex-col gap-8">
            <BellevueVideo />

            <div className="grid gap-6">
              <p>
                Arne Jacobsens ikoniske teater fra 1936 ligger elegant på
                Strandvejen i Klampenborg ved Dyrehavens sydøstlige hjørne og
                med smuk udsigt til Øresund og sandstrand med moler og
                udkigstårne. Alt i området er designet af Arne Jacobsen - også
                den smukke boligrække Bellevista, der støder til Bellevue
                Teatret mod syd.
              </p>
              <p>
                I får hele historien i en guidet rundvisning. Vi skyder teatrets
                tag til side for rundvisninger, når den blå himmel tillader det.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BellevueStriber>
  );
};

export default RundvisningInfo;
