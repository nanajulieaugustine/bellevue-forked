import Hero from "@/components/landingpage/Hero";
import Server from "@/components/landingpage/Server";
import FindRundt from "@/components/global/komponenter/FindRundt";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Server />
      <div className="absolute -right-1 top-650 -z-5 hidden lg:block">
          <Image
            src="/svg/snoerkel-buttom-right.svg"
            alt=""
            width={700}
            height={350}
          />
    </div>
      <FindRundt />
    </div>
  );
}
