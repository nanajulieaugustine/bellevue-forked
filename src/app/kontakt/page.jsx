import KontaktServer from "@/components/kontakt/KontaktServer";
// import KontaktMedarbejder from "./KontaktMedarbejder";
import KontaktHero from "@/components/kontakt/KontaktHero";
import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev";

export default function Kontakt() {
  return (
    <div className="
    py-50
    bg-none               /* Mobile: ingen baggrund */
    lg:bg-[url('/svg/snoerkel-top-right.svg')]   /* Tablet+ */
    lg:bg-no-repeat
    lg:bg-position-[right_-20px_top_-200px]
  ">
      <KontaktHero />
      <KontaktServer />
      <Nyhedsbrev />
    </div>
  );
}
