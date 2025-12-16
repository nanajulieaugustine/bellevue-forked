import Image from "next/image";

const KontaktInfo = () => {
  return (
    // ============================ HEADING ==============================
    <div className="flex flex-col gap-10 pb-20">
      <h3 className="text-center">Har du spørgsmål? Kontakt os endelig</h3>

      {/* ====================== PHONE ABSOLUTE ========================== */}
      <div className="relative -left-8 hidden lg:block">
        <Image
          src="/svg/phone.svg"
          alt=""
          width={350}
          height={350}
          className="absolute"
        />
      </div>

      {/* ======================== GUL CONTAINERS ======================== */}
      <section className="bg-(--gul-600) flex flex-wrap justify-center lg:justify-end gap-20 lg:gap-40 py-10 text-center">
        <div>
          <h4>Administration</h4>
          <div className="font-light pt-5">
            <p>39 63 49 00</p>
            <p>(hverdage 10 - 14)</p>
            <a href="mailto:adm@bellevueteatret.dk">adm@bellevueteatret.dk</a>
          </div>
        </div>

        <div>
          <h4>Billetkontor</h4>
          <div className="font-light pt-5">
            <p>Ticketmaster: 38 48 16 30</p>
            <p>(hverdage 10 - 16.30)</p>
          </div>
        </div>

        <div>
          <h4>Forhus</h4>
          <div className="font-light pt-5">
            <a href="mailto:forhus@bellevueteatret.dk">Forhus@bellevueteatret.dk</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontaktInfo;
