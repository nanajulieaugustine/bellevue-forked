import BellevueStriber from "@/components/global/animationer/BellevueStriber";
import Image from "next/image";


const HeroVenner = () => (
  <div>
      <BellevueStriber>
        <section className="pt-60">
          <div>
            <h1 className="pb-20 text-center">BELLEVUE TEATRETS VENNER</h1>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <p className="font-medium pb-5">Bliv en del af Bellevue Teatrets Venner – fællesskabet for dig, der elsker kultur, nærvær og store oplevelser.</p>
              <p className="font-light">Som medlem støtter du ikke blot teatret og dets kunstneriske arbejde – du får også adgang til en række helt særlige 
               fordele, eksklusive invitationer og unikke oplevelser, vi kun deler med vores venner.</p> 
              <p className="font-light"> Det er vores måde at sige tak på - og din mulighed for at komme tættere på det teater, du holder af.</p>
            </div>
          </div>



          <div className="pt-40 pb-20">
            {/* IKONER + GULE TEKSTBOKSE */}
        <div className="flex flex-col gap-16 items-stretch sm:flex-row sm:justify-between sm:gap-8">
          {/* BILLET */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="/svg/billet.svg" alt="" width={100} height={100} />
            </div>
            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            Billetter til udvalgte forestillinger
            </p>
          </div>

          {/* EXCLUSIVE */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="/svg/exclusiv.svg" alt="" width={80} height={80} />
            </div>

            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            Eksklusive arrangementer for medlemmer
                        </p>
          </div>

          {/* PEOPLE */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="/svg/people.svg" alt="" width={100} height={100} />
            </div>

            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            12 måneders medlemskab 600 kr.
            </p>
          </div>
        </div>
          </div>


        </section>
      </BellevueStriber>
  </div>
);

export default HeroVenner;
