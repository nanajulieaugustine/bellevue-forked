import Link from "next/link";

const PrimaryLink = ({children, href}) => {
    return (
        <Link href={href} className="text-(--roed-900) font-semithin">
            <span className="underline">

            {children}
            </span>
            </Link>
      );
}
 
export default PrimaryLink;