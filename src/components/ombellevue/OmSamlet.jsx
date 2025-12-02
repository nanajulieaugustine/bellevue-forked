import Intro from "./Intro";
import RundvisningInfo from "./RundvisningInfo";

const OmSamlet = () => {
  return (
    <div className="flex flex-col gap-30">
      <Intro />
      <RundvisningInfo />
    </div>
  );
};

export default OmSamlet;
