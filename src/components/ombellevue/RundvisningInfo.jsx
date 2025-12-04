import BellevueStriber from "@/components/global/animationer/BellevueStriber";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";
import BellevueVideo from "../global/komponenter/BellevueVideo";
import Clock from "../global/ikoner/Clock";
import Chat from "../global/ikoner/Chat";
import Calender from "../global/ikoner/Calender";
import Price from "../global/ikoner/Price";

const RundvisningInfo = () => {
  return (
    // <BellevueStriber>
    <div className="flex flex-col gap-20">
      {/* =============================== TEXT + VIDEO ================================ */}
      <div className="px-(--content-width) w-full pt-20 grid gap-8">
        <h2>Rundvisning</h2>

        <div className="grid grid-cols-2">
          {/* ========= VENSTRE INDHOLD ======== */}
          <div>
            {/* CONTAINER FOR IKONER */}
            <div className="text-(--roed-600)">
              <div className="flex gap-4">
                <Clock size={30} />
                <p>45 minutters varighed</p>
              </div>
              <div className="flex gap-4">
                <Chat size={25} />
                <p>Tilbydes på dansk eller engelsk</p>
              </div>
              <div className="flex gap-4">
                <Calender size={25} />
                <p>Arrangeres på hverdage mellem 9-16</p>
              </div>
              <div className="flex gap-4">
                <Price size={25} />
                <p>135 kr. per person (min. 10 pers)</p>
              </div>
            </div>

            {/* CONTAINER FOR TEKST */}
            <div className="grid gap-6">
              <p>Rundvisninger er arrangeret på faste dage.</p>
              <p>
                For grupper på 10 personer eller flere, kontakt Marianne på
                marianne@bellevueteatret.dk.
              </p>
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
                udkigstårne. Alt i området er designet af Arne Jacobsen – også
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
      </div>

      {/* =============================== BEIGE CONTAINER ================================ */}
      <div className="flex justify-center items-center text-center">
        <div className="max-w-4xl p-20 bg-(--beige-100) rounded-2xl border-2 border-(--beige-300)">
          <p className="mb-10">
            Din rundvisning kan suppleres med smørrebrød eller kaffe og kage i
            teatrets bar. Spørg til mulighederne ved forudbestilling.
          </p>

          <AnchorTagPrimaryButton href={`/om-bellevue`}>
            Læs mere
          </AnchorTagPrimaryButton>
        </div>
      </div>
    </div>
    // </BellevueStriber>
  );
};

export default RundvisningInfo;
