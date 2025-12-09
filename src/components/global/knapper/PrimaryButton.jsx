const PrimaryButton = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-(--bellevueblaa-600) border-2 border-(--bellevueblaa-600) py-2 px-4 rounded-2xl text-center text-nowrap hover:border-(--bellevueblaa-900) hover:text-(--bellevueblaa-900)"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
