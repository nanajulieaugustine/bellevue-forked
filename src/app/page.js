import Hero from "@/components/landingpage/Hero";
import Server from "@/components/landingpage/Server";
import FindRundt from "@/components/global/komponenter/FindRundt";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Server />
      <FindRundt />
    </div>
  );
}
