import HeroSektion from "./HeroSektion";
import InfoBokse from "./InfoBokse";
import FAQ from "./FAQ";
import KontaktInfo from "./KontaktInfo";
import SlutBox from "./SlutBox";
import FindVej from "../global/komponenter/FindVej";
import InteraktivtKort from "../global/komponenter/interaktivtkort/InteraktivtKort";

const PraktiskInfoSamlet = () => {
  return (
    // ========================= WRAPPER FOR ALLE COMPONENTS ==========================
    <div className="flex flex-col gap-40">
      <HeroSektion />
      <InfoBokse />
      <FAQ />
      <InteraktivtKort />
      <FindVej />
      <KontaktInfo />
      <SlutBox />
    </div>
  );
};

export default PraktiskInfoSamlet;
