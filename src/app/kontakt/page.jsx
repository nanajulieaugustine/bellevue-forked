import KontaktServer from "@/components/kontakt/KontaktServer";
// import KontaktMedarbejder from "./KontaktMedarbejder";
import KontaktHero from "@/components/kontakt/KontaktHero";
import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev";

export default function Kontakt() {
  return (
    <div>
      <KontaktHero />
      <KontaktServer />
      <Nyhedsbrev />
    </div>
  );
}
