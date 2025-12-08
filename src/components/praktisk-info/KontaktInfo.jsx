import Image from "next/image";

const KontaktInfo = () => {
  return (
    // ============================ HEADING ==============================
    <div className="flex flex-col gap-10 pb-20">
      <h3 className="text-center">Har du spørgsmål? Kontakt os endelig</h3>

      {/* ====================== PHONE ABSOLUTE ========================== */}
      <div className="absolute -left-10">
        <Image src="/svg/phone.svg" alt="" width={350} height={350} />
      </div>

      {/* ======================== GUL CONTAINERS ======================== */}
      <section className="bg-(--gul-600) flex justify-end gap-40 py-10 text-center">
        <div>
          <h4>Administration</h4>
          <div className="font-light pt-5">
            <p>39 63 49 00</p>
            <p>(hverdage 10 - 14)</p>
            <p>adm@bellevueteatret.dk</p>
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
            <p>Forhus@bellevueteatret.dk</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontaktInfo;
