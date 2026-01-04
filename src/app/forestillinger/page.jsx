import ListServer from "@/components/listview/forestillinger/ListServer";
import Image from "next/image";

export default function Forestillinger() {
  return (
    <div className="py-40 relative">
      <div className="absolute right-1 rotate-180 overflow-clip top-20 -z-10 hidden lg:block">
        <Image src="/svg/snoerkel-one.svg" alt="" width={450} height={250} />
      </div>
      <ListServer />;
    </div>
  );
}
