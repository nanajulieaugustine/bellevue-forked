import HeroSektion from "./HeroSektion";
import InfoBokse from "./InfoBokse";

const PraktiskInfoSamlet = () => {
  return (
    <div className="flex flex-col gap-40">
      <HeroSektion />
      <InfoBokse />
    </div>
  );
};

export default PraktiskInfoSamlet;
