import Link from "next/link";

const AnchorTagPrimaryButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="text-(--koboltblaa-600) font-(--font-heading) rounded-2xl text-center text-nowrap"
    >
      {children}
    </Link>
  );
};

export default AnchorTagPrimaryButton;
