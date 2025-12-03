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
            <ul className="flex flex-col gap-5 max-w-150">
                {addOn.secondary_headings.map(item => (
                    <li key={item.text}>
                    <div className="flex gap-10 justify-between items-center">
                        <p className="max-w-80">{item.text}</p>
                        <div className="flex flex-col items-center text-center">
                        <h4 className="font-thin">{item.secondaryheading}</h4>
                        <h4 className="flex flex-end items-center">{item.heading}</h4>
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