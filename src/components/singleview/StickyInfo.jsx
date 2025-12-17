import Price from "../global/ikoner/Price";
import Child from "../global/ikoner/Child";
import Calender from "../global/ikoner/Calender";
import Clock from "../global/ikoner/Clock";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";

const StickyInfo = ({ item, isArchived}) => {
  return (
    <div className="flex flex-col gap-20 max-w-200 p-10">
      <div className="h-full z-10 flex gap-20">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center">
            <Calender size={30} className="inline-block text-(--roed-600)" />
            <h3>Spilleperiode</h3>
            <p>{item.date}</p>
          </div>

          <div className="flex flex-col items-center">
            <Clock size={30} className="inline-block text-(--roed-600)" />
            <h3>Varighed</h3>
            <p>{item.varighed}</p>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center">
            <Price size={30} className="inline-block text-(--roed-600)" />
            <h3>Pris</h3>
            <p>{item.price}</p>
          </div>

          <div className="flex flex-col items-center">
            <Child size={30} className="inline-block text-(--roed-600)" />
            <h3>Alder</h3>
            <p>{item.alder}</p>
          </div>
        </div>
      </div>
      {!isArchived ?(
      <AnchorTagPrimaryButton href={item.billetter} target="_blank" ariaLabel={"Køb billet"}>
        Køb billet
      </AnchorTagPrimaryButton>
      ):null}
    </div>
  );
};

export default StickyInfo;
