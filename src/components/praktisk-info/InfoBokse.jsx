import Image from "next/image";

const InfoBokse = () => {
  return (
    <section>
      <div className="flex flex-col gap-16 items-stretch md:flex-row md:justify-between md:gap-8">
        {/* ==============================   CLOCK   ============================== */}
        <div className="relative flex-1">
          <div className="absolute -top-12 left-6">
            <Image src="/svg/clock.svg" alt="" width={80} height={80} />
          </div>
          <div className="bg-(--gul-600) rounded-2xl px-6 py-10 h-full items-center justify-center">
            <div className="flex flex-col gap-8 text-center">
              <h3>Åbningstider</h3>
              <p>
                Bellevue Teatret har ikke faste åbningstider. Vi åbner dørene
                halvanden time før hver forestilling, hvor du er velkommen til
                at kigge forbi.
              </p>
              <p>
                Har du spørgsmål eller brug for hjælp, er du altid velkommen til
                at kontakte os på adm@bellevueteatret.dk
              </p>
            </div>
          </div>
        </div>

        {/* ===============================   CAR   ================================ */}
        <div className="relative flex-1">
          <div className="absolute -top-12 left-6">
            <Image src="/svg/car.svg" alt="" width={80} height={80} />
          </div>

          <div className="bg-(--gul-600) rounded-2xl px-6 py-10 h-full items-center justify-center">
            <div className="flex flex-col gap-8 text-center">
              <h3>Parkering</h3>
              <p>Der er gratis og ubegrænset parkering bag teatret.</p>
              <p>
                <strong>Vi anbefaler</strong>, at du ankommer cirka 45 minutter
                før forestillingen, så du har god tid til at finde plads og nyde
                stemningen.
              </p>
            </div>
          </div>
        </div>

        {/* ==============================   SUTICASE   ============================= */}
        <div className="relative flex-1">
          <div className="absolute -top-12 left-6">
            <Image src="/svg/suitcase.svg" alt="" width={80} height={80} />
          </div>

          <div className="bg-(--gul-600) rounded-2xl px-6 py-10 h-full items-center justify-center">
            <div className="flex flex-col gap-8 text-center">
              <h3>Glemte sager</h3>
              <p>
                Har du glemt noget hos os, hjælper vi dig gerne. Glemte sager
                opbevares i <strong>op til 2 uger</strong>, hvorefter de gives
                videre til genbrug.
              </p>
              <p>
                Kontakt administrationen, hvis du mangler noget - så gør vi
                vores bedste for at finde det.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBokse;
