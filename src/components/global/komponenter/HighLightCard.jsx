// components/global/HighlightCards.js
import Image from "next/image";
import Link from "next/link";

const HighlightCards = ({ items, textAs = "p" }) => {
  return (
    <div className="flex flex-col gap-16 items-stretch sm:flex-row sm:justify-between sm:gap-8">
      {items.map((item, index) => {
        const TextTag = textAs; // dynamisk tag, p eller h3

        const cardContent = (
          <>
            <div className="absolute -top-16 left-6">
              <Image
                src={item.icon}
                alt=""
                width={item.iconWidth || 100}
                height={item.iconHeight || 100}
              />
            </div>
            <TextTag className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full min-w-50 flex items-center justify-center text-center">
              {item.text}
            </TextTag>
          </>
        );

        // Hvis der er en link-prop, wrap med Link, ellers bare div
        return item.link ? (
          <Link key={index} href={item.link}>
            <span className="relative flex-1 cursor-pointer">{cardContent}</span>
          </Link>
        ) : (
          <div key={index} className="relative flex-1">
            {cardContent}
          </div>
        );
      })}
    </div>
  );
};

export default HighlightCards;
