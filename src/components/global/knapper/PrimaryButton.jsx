const PrimaryButton = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-(--bellevueblaa-600) border-2 border-(--bellevueblaa-600) py-2 px-7 rounded-2xl text-center text-nowrap"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
