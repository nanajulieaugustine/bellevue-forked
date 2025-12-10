import Image from "next/image";

const Nyhedsbrev = () => (
  <div>
    <div className="text-center text-(--beige-100) bg-(--moerkblaa-600)">
      <h3 className="pb-7 font-light pt-15 beige-100">Ledige Stillinger</h3>

      {/* <!-- Responsiv container --> */}
      <div className="font-extralight mx-auto px-4 max-w-2xl">
        <p className="pb-4">
          Der er i øjeblikket ingen ledige stillinger men vi hører altid gerne
          fra dig. Hvis du brænder for kultur, formidling og gode
          gæsteoplevelser, er du meget velkommen til at sende en uopfordret
          ansøgning.
        </p>
        <p>Administration: adm@bellevueteatret.dk</p>
        <p>Forhus: forhus@bellevueteatret.dk</p>
      </div>

      <p className="font-medium pb-15 pt-5">
        Vi glæder os til at høre fra dig.
      </p>
    </div>

    <div
      className="
    p-0            /* MOBILE: ingen padding udenom */
    md:p-20         /* DESKTOP: padding udenom */
    md:px-4
    mx-auto 
    max-w-xl
"
    >
      <div className="absolute -right-2">
        <Image src="/svg/watertower-blue.svg" alt="" width={200} height={900} />
      </div>

      <div
        className="
      col-span-2 
      bg-(--bellevueblaa-600) 
      text-(--beige-600)
      rounded-0       /* MOBILE: ingen hjørner */
      md:rounded-2xl  /* DESKTOP: runde hjørner */
      p-10            /* padding INDENI boksen – altid! *
       "
      >
        <div className="flex justify-center">
          <Image
            src="/svg/watertower-mini.svg"
            alt=""
            width={50}
            height={900}
          />
        </div>

        <p className="text-center mb-6 text-xl pt-5">
          Tilmeld dig vores nyhedsbrev og modtag de seneste nyheder direkte i
          din indbakke
        </p>

        <div className="w-full mx-auto flex flex-col gap-2 pt-10">
          <input
            id="email"
            type="email"
            placeholder="Skriv din email"
            className="bg-(--beige-600) rounded-xl p-4 w-full text-(--moerkblaa-900)"
          />
          <button className="self-center font-bold border-3 border-(--beige-600) w-full pt-4 pb-4 rounded-xl">
            Tilmeld
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Nyhedsbrev;
