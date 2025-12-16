import PraktiskInfoSamlet from "@/components/praktisk-info/PraktiskInfoSamlet";
import Image from "next/image";

const PraktiskInfo = () => {
  return (
    <div className="py-40">
    <div className="absolute -right-1 top-20 -z-10 hidden lg:block">
          <Image
            src="/svg/snoerkel-top-right.svg"
            alt=""
            width={500}
            height={350}
          />
    </div>
      <PraktiskInfoSamlet />
      <div className="absolute -left-1 -z-10 hidden lg:block">
          <Image
            src="/svg/snoerkel-one.svg"
            alt=""
            width={600}
            height={350}
          />
    </div>
    </div>
  );
};

export default PraktiskInfo;
