import KontaktServer from "@/components/kontakt/KontaktServer";
// import KontaktMedarbejder from "./KontaktMedarbejder";
import KontaktHero from "@/components/kontakt/KontaktHero";
import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev";
import LedigeStillinger from "@/components/kontakt/LedigeStillinger";

export default function Kontakt() {
  return (
    <div className="
    py-40
    bg-none               /* Mobile: ingen baggrund */
    lg:bg-[url('/svg/snoerkel-top-right.svg')]   /* Tablet+ */
    lg:bg-no-repeat
    lg:bg-position-[right_-20px_top_-200px]
  ">
      <KontaktHero />
      <KontaktServer />
      <LedigeStillinger/>
      <Nyhedsbrev />
    </div>
  );
}
