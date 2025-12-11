import Image from "next/image";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";
import { getItemStatus } from "@/app/library/utils.js";

const AddOns = ({ addOn }) => {
  const { isArchived } = getItemStatus(addOn);

  return (
    <div
      className="
        flex flex-col md:flex-row items-center
        gap-20 p-5 md:p-20 lg:p-30 w-full h-full justify-center
      "
      style={{ backgroundColor: addOn.baggrund_hex }}
    >
      {/* Tekstkolonne */}
      <div
        className="flex flex-col gap-10"
        style={{ color: addOn.text_hex }}
      >
        <h1 style={{ color: addOn.text_hex }}>{addOn.titel}</h1>

        <p className="max-w-100">{addOn.beskrivelse}</p>

        <div className="flex">
          <ul className="flex flex-col gap-5 max-w-150 w-full">
            {addOn.secondary_headings.map((item) => (
              <li key={item.text}>
                <div className="flex gap-10 justify-between items-center w-full">
                  <p className="max-w-80">{item.text}</p>
                  <div className="flex flex-col items-end">
                    <h4 style={{ color: addOn.text_hex }}className="font-thin">{item.secondaryheading}</h4>
                    <h4 style={{ color: addOn.text_hex }} className="flex flex-end items-end">{item.heading}</h4>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Billede + Knappen */}
      <div className="flex flex-col items-center flex-1">
        {addOn.billede?.url && (
          <Image
            src={addOn.billede.url}
            alt={addOn.billede.alt || addOn.titel}
            width={600}
            height={600}
            className="
              object-cover rounded-lg mb-6 
              w-full
              h-full
            "
          />
        )}

        {!isArchived ? (
          <AnchorTagPrimaryButton style={{ color: addOn.text_hex }} target="blank" href={addOn.billet}>
            {`Køb ${addOn.titel}`}
          </AnchorTagPrimaryButton>
        ) : null}
      </div>
    </div>
  );
};

export default AddOns;
