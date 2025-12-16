import Image from "next/image";
import KontaktInfo from "../praktisk-info/KontaktInfo";
const KontaktHero = () => (
  <>
    {/* HERO SEKTION */}
    <section className="pb-20">
      <h1 className="text-(--bellevueblaa-600)">KONTAKT</h1>

      <p className="font-light pt-20">
        Hos Bellevue Teatret vil vi gerne gøre det nemt for dig at komme i
        kontakt med os. Uanset om du har spørgsmål til billetter, arrangementer,
        praktiske forhold eller blot er nysgerrig på livet bag kulissen, står vi
        klar til at hjælpe. Her finder du både telefonnumre, mailadresser, vores
        medarbejdere og information om eventuelle ledige stillinger.
      </p>

      <p className="font-medium pt-5">
        Tøv endelig ikke med at række ud - vi glæder os til at høre fra dig.
      </p>
    </section>
  <KontaktInfo/>
   
  </>
);

export default KontaktHero;
