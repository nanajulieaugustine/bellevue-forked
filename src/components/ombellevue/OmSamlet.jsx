import Intro from "./Intro";
import RundvisningInfo from "./RundvisningInfo";
import BilledeSektion from "./BilledeSektion";
import InteraktivtKort from "./InteraktivtKort";
import LejTeatret from "./LejTeatret";
import FindRundt from "../global/komponenter/FindRundt";

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
