import BellevueStriber from "@/components/global/animationer/BellevueStriber";
import Image from "next/image";


const HeroVenner = () => (
  <div>
      <BellevueStriber>
        <div className=" pt-50 pb-60 sm:px-10 md:px-20">
          <div>
            <h1 className="pb-20">Venneforening</h1>
          </div>
          <section className="pt-60">
            {/* IKONER + GULE TEKSTBOKSE */}
        <div className="flex flex-col gap-16 items-stretch sm:flex-row sm:justify-between sm:gap-8">
          {/* PARKERING */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="ikoner/Billet.svg" alt="" width={100} height={100} />
            </div>
            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
              Gratis billetter
            </p>
          </div>

          {/* STOL */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="/svg/chair.svg" alt="" width={80} height={80} />
            </div>

            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            Eksklusive arrangementer
                        </p>
          </div>

          {/* CATERING */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="/svg/catering.svg" alt="" width={100} height={100} />
            </div>

            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            12 måneders medlemskab
            </p>
          </div>
        </div>
          </section>
        </div>
      </BellevueStriber>
  </div>
);

export default HeroVenner;
