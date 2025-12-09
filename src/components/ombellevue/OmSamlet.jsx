import Intro from "./Intro";
import RundvisningInfo from "./RundvisningInfo";
import BilledeSektion from "./BilledeSektion";
import InteraktivtKort from "./InteraktivtKort";
import LejTeatret from "./LejTeatret";

const OmSamlet = () => {
  return (
    // ========================= WRAPPER FOR ALLE COMPONENTS ==========================
    <div className="flex flex-col gap-30">
      <Intro />
      <RundvisningInfo />
      <BilledeSektion />
      <InteraktivtKort />
      <LejTeatret />
    </div>
  );
};

export default OmSamlet;
