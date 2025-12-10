import KontaktServer from "@/components/kontakt/KontaktServer";
// import KontaktMedarbejder from "./KontaktMedarbejder";
import KontaktHero from "@/components/kontakt/KontaktHero";
import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev";

export default function Kontakt() {
  return (
    <div className="py-50">
      <KontaktHero />
      <KontaktServer />
      <Nyhedsbrev />
    </div>
  );
}
