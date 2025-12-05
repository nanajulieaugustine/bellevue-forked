import Price from "../global/ikoner/Price";
import Child from "../global/ikoner/Child";
import Calender from "../global/ikoner/Calender";
import Clock from "../global/ikoner/Clock";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";

const StickyInfo = ({ item }) => {
  return (
    <div className="flex flex-col gap-20 max-w-200 p-10 backdrop-blur-3xl rounded-2xl">
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
      <AnchorTagPrimaryButton href={"/"}>Køb billet</AnchorTagPrimaryButton>

      {/* {item.embed ? (
            <iframe title={`trailer af ${item.name}`}
                    src={item.embed}
                    className="h-80 w-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
          ) : null  } */}
    </div>
  );
};

export default StickyInfo;
