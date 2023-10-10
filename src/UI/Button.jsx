/* eslint-disable react/prop-types */
function Button({ onClick, children, styles, type }) {
  const base =
    "bg-primary font-semibold text-white hover:bg-lightOrg hover:opacity-90";

  return (
    <button
      onClick={onClick}
      className={`rounded-lg  px-3 py-1 ${base} ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;
