import Image from "next/image";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";

const AddOns = ({addOn}) => {
    
    return ( 
        <div
      className="flex gap-20 p-30 w-full h-full justify-center"
      style={{ backgroundColor: addOn.baggrund_hex}}
    >
            <div className="flex flex-col gap-10 add-on-content"  style={{ color: addOn.text_hex}}>
            <h1>{addOn.titel}</h1>
            <p className="max-w-100">{addOn.beskrivelse}</p>

            <div className="flex">
            <ul className="flex flex-col gap-5 max-w-100">
                {addOn.secondary_headings.map(item => (
                    <li key={item.text}>
                    <div className="flex gap-10 items-center">
                        <p>{item.text}</p>
                        <div className="flex flex-col items-center">
                        <h3>{item.secondaryheading}</h3>
                        <h2 className="flex flex-end items-end">{item.heading}</h2>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>

            </div>
            <div className="flex flex-col items-center">
           {addOn.billede?.url && (
            <Image
                src={addOn.billede.url}
                alt={addOn.billede.alt || addOn.titel}
                width={600}
                height={600}
                className="object-cover rounded-lg mb-6 w-full h-full"
            />
            )}
            <AnchorTagPrimaryButton target="_blank" href={addOn.billet}>{`Køb ${addOn.titel}`}</AnchorTagPrimaryButton>
            </div>
         
                   
           
        </div>
     );
}
 
export default AddOns;