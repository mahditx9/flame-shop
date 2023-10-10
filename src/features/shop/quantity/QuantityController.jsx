/* eslint-disable react/prop-types */
function QuantityController({ quantity, setQuantity }) {
  return (
    <div className=" flex  items-center gap-2">
      <button
        className="rounded-full bg-lightOrg p-1 px-3 text-base font-semibold text-white"
        onClick={() => setQuantity((prev) => prev - 1)}
      >
        -
      </button>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        className="max-w-[15%] appearance-none rounded-md border-none px-3 py-1 text-center text-xl font-semibold outline-none focus:ring-1 focus:ring-primary"
      />
      <button
        className="rounded-full bg-lightOrg p-1 px-3 text-base font-semibold text-white"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
}

export default QuantityController;
