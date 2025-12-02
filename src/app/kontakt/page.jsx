import KontaktHero from "@/components/kontakt/KontaktHero";
import KontaktMedarbejder from "@/components/kontakt/KontaktMedarbejder"
import Nyhedsbrev from "@/components/kontakt/Nyhedsbrev"


export default function Kontakt() {
  return (
    <div>
      <KontaktHero />
      <KontaktMedarbejder />
      <Nyhedsbrev />
    </div>
  );
}
