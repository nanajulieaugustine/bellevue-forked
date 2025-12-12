import BellevueStriber from "@/components/global/animationer/BellevueStriber";
import Image from "next/image";
import HighlightCards from "../global/komponenter/HighLightCard";

  
  const HeroVenner = () => {
    const highlightItems = [
      { icon: "/svg/billet.svg", text: "Billetter til udvalgte forestillinger" },
      { icon: "/svg/exclusiv.svg", text: "Eksklusive arrangementer for medlemmer", iconWidth: 80, iconHeight: 80 },
      { icon: "/svg/people.svg", text: "12 måneders medlemskab 600 kr." },
    ];
  
    return (
      <div>
        <BellevueStriber>
          <section className="pt-50">
          <h1 className="pb-20">BELLEVUE TEATRETS VENNER</h1>
          <div className="absolute -right-10 -top-10 hidden lg:block">
        <Image src="/svg/venneforening-logo-stor.svg" alt="" width={700} height={350} />
      </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2"> 
          <div className="text-center md:text-left"> 
            <p className="font-medium pb-5">Bliv en del af Bellevue Teatrets Venner
             – fællesskabet for dig, der elsker kultur, nærvær og store oplevelser.</p> 
             <p className="font-light">Som medlem støtter du ikke blot teatret og dets kunstneriske arbejde
              – du får også adgang til en række helt særlige fordele, eksklusive invitationer og unikke oplevelser,
               vi kun deler med vores venner.</p> 
              <p className="font-light"> Det er vores måde at sige tak på - og din mulighed for at komme tættere på det
               teater, du holder af.</p> 
          </div> 
          </div>
  
            {/* Gule felter */}
            <div className="pt-40 pb-20 flex flex-col gap-12">
              <HighlightCards items={highlightItems} />
            </div>
          </section>
        </BellevueStriber>
      </div>
    );
  };

export default HeroVenner;
