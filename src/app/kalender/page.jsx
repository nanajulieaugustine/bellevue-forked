import KalenderServer from "@/components/listview/kalender/KalenderServer";
import Image from "next/image";

const Kalender = () => {
  return (
    <div className="relative py-40">
      <div className="absolute -right-1 -top-10 -z-10 hidden lg:block">
        <Image
          src="/svg/snoerkel-top-right.svg"
          alt=""
          width={600}
          height={350}
        />
      </div>
      <KalenderServer />
    </div>
  );
};

export default Kalender;
