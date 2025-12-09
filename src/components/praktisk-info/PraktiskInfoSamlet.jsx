import HeroSektion from "./HeroSektion";
import InfoBokse from "./InfoBokse";
import FAQ from "./FAQ";
import InteraktivtKort from "../ombellevue/InteraktivtKort";
import KontaktInfo from "./KontaktInfo";
import SlutBox from "./SlutBox";

const PraktiskInfoSamlet = () => {
  return (
    // ========================= WRAPPER FOR ALLE COMPONENTS ==========================
    <div className="flex flex-col gap-40">
      <HeroSektion />
      <InfoBokse />
      <FAQ />
      <InteraktivtKort />
      <KontaktInfo />
      <SlutBox />
    </div>
  );
};

export default PraktiskInfoSamlet;
