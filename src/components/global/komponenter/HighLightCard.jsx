// components/global/HighlightCards.js
import Image from "next/image";

const HighlightCards = ({ items }) => {
  return (
    <div className="flex flex-col gap-16 items-stretch sm:flex-row sm:justify-between sm:gap-8">
      {items.map((item, index) => (
        <div key={index} className="relative flex-1">
          <div className="absolute -top-16 left-6">
            <Image
              src={item.icon}
              alt=""
              width={item.iconWidth || 100}
              height={item.iconHeight || 100}
            />
          </div>
          <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HighlightCards;
