import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";


const AnchorTagSecondaryButton = ({ href }) => {
  return (
    <Link
      href={href}
      className="text-center text-nowrap flex items-center uppercase"
    >
        <p>

      Læs mere
        </p>
      <MdArrowRightAlt size={30} />
    </Link>
  );
};

export default AnchorTagSecondaryButton;
