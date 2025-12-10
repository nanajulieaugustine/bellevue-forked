import PraktiskInfoSamlet from "@/components/praktisk-info/PraktiskInfoSamlet";

const PraktiskInfo = () => {
  return (
    <div className="
    py-50
    bg-none               /* Mobile: ingen baggrund */
    lg:bg-[url('/svg/snoerkel-top-right.svg')]   /* Tablet+ */
    lg:bg-no-repeat
    lg:bg-position-[right_-20px_top_-200px]
  ">
      <PraktiskInfoSamlet />
    </div>
  );
};

export default PraktiskInfo;
