import KalenderServer from "@/components/listview/kalender/KalenderServer";
import Image from "next/image";

const Kalender = () => {
  return (
    <div className="
    py-50
    bg-none               /* Mobile: ingen baggrund */
    lg:bg-[url('/svg/snoerkel-top-right.svg')]   /* Tablet+ */
    lg:bg-no-repeat
    lg:bg-position-[right_-20px_top_-200px]
  ">
      <KalenderServer />
      <div className="absolute -right-2">
        <Image src="/svg/snoerkel-buttom-right.svg" alt="" width={400} height={900} />
      </div>
    </div>
  );
};

export default Kalender;
