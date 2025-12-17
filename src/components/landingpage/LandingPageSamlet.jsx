import Hero from "@/components/landingpage/Hero";
import Server from "@/components/landingpage/Server";
import Image from "next/image";
import FindVej from "@/components/global/komponenter/FindVej";
import HighlightCards from "@/components/global/komponenter/HighLightCard";
import Nyhedsbrev from "../kontakt/Nyhedsbrev";

const LandingPageSamlet = () => {
  const highlightItems = [
    { icon: "/svg/home.svg", text: "Forestillinger", link: "/forestillinger" },
    { icon: "/svg/kalender.svg", text: "Kalender", link: "/kalender" },
    { icon: "/svg/phone.svg", text: "Kontakt", link: "/kontakt" },
    { icon: "/svg/group.svg", text: "Venneforening", link: "/venneforening" },
  ];

  return (
    <div>
      <Hero />
      <Server />
      <div className="absolute -right-1 top-650 -z-5 hidden lg:block"></div>
      <div className="flex flex-col gap-30">
        <FindVej />
        <section className="pt-20">
          <HighlightCards items={highlightItems} textAs="h3" />
        </section>
        <div className="relative pb-10">
          <Nyhedsbrev />
          <div className="absolute right-0 -bottom-40 -z-10 hidden lg:block rotate-180">
            <Image
              src="/svg/snoerkel-top-right.svg"
              alt=""
              width={600}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSamlet;
