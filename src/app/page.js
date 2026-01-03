import LandingPageSamlet from "@/components/landingpage/LandingPageSamlet";

export const metadata = {
  title: "Forside | Bellevue Teatret",
  description: "Se Arne Jacobsens smukke teater fra alle leder og kanter. Få historien om teatret på en guidet rundvisning.",
};

export default async function Home() {

  return (
    <div>
     <LandingPageSamlet/>
    </div>
  );
}
