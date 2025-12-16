import Intro from "./Intro";
import RundvisningInfo from "./RundvisningInfo";
import BilledeSektion from "./BilledeSektion";
import LejTeatret from "./LejTeatret";
import InteraktivtKort from "../global/komponenter/interaktivtkort/InteraktivtKort";

const OmSamlet = () => {
  return (
    // ========================= WRAPPER FOR ALLE COMPONENTS ==========================
    <div>
      <Intro />
      <div className="flex flex-col gap-30">
        <RundvisningInfo />
        <BilledeSektion />
        <InteraktivtKort/>
        <LejTeatret />
      </div>
    </div>
  );
};

export default OmSamlet;
