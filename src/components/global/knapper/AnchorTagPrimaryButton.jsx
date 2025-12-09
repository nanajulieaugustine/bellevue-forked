import Link from "next/link";

const AnchorTagPrimaryButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="text-(--bellevueblaa-600) border-2 border-(--bellevueblaa-600) py-2 px-4 rounded-2xl text-center text-nowrap hover:border-(--bellevueblaa-900) hover:text-(--bellevueblaa-900)"
    >
      {children}
    </Link>
  );
};

export default AnchorTagPrimaryButton;
