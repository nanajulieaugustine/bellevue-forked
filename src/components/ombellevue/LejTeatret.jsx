import Image from "next/image";

const LejTeatret = () => {
  return (
    <section>
      {/* ======================= CONTAINER FOR VENSTRE INDHOLD ======================== */}
      <div>
        <h2>Lej teatret</h2>
        <p>Skab en uforglemmelig fest i Bellevue Teatrets ikoniske rammer.</p>

        {/* IKONER + GULE TEKSTBOKSE */}
        <div className="flex justify-between">
          <div>
            <Image src="/svg/parking.svg" alt="" width={100} height={100} />
            <p className="highlighttext bg-(--gul-600) p-6 rounded-2xl">
              Gratis, ubegrænset parkering
            </p>
          </div>
          <div>
            <Image src="/svg/chair.svg" alt="" width={100} height={100} />
            <p className="highlighttext bg-(--gul-600) p-6 rounded-2xl">
              742 siddepladser
            </p>
          </div>
          <div>
            <Image src="/svg/catering.svg" alt="" width={100} height={100} />
            <p className="highlighttext bg-(--gul-600) p-6 rounded-2xl">
              Catering, teknik og underholdning
            </p>
          </div>
        </div>
      </div>
      {/* ======================= CONTAINER FOR HØJRE INDHOLD ========================== */}
      <div></div>
    </section>
  );
};

export default LejTeatret;
