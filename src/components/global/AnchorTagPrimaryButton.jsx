import Link from "next/link";

const AnchorTagPrimaryButton = ({children, href}) => {
    return (
        <Link href={href}
              className="text-(--bellevueblaa-600) border-2 border-(--bellevueblaa-600) pt-2 pb-2 pl-7 pr-7 rounded-2xl"
            >
              {children}
            </Link>
      );
}
 
export default AnchorTagPrimaryButton;