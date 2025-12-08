import Link from "next/link";

const AnchorTagPrimaryButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="text-(--bellevueblaa-600) border-2 uppercase border-(--bellevueblaa-600) py-2 px-7 rounded-2xl text-center text-nowrap font-semibold"
    >
      {children}
    </Link>
  );
};

export default AnchorTagPrimaryButton;
