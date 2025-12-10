import BellevueStriber from "@/components/global/animationer/BellevueStriber";
// import Image from "next/image";
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
          <section className="pt-60">
          <h1 className="pb-20 text-center">BELLEVUE TEATRETS VENNER</h1>
          <div className="grid grid-cols-2"> 
          <div> 
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
            <div className="pt-40 pb-20">
              <HighlightCards items={highlightItems} />
            </div>
          </section>
        </BellevueStriber>
      </div>
    );
  };

export default HeroVenner;
