import { LiaDollarSignSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

function CartOverview() {
  const totalPrice = useSelector((store) =>
    store.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0),
  );
  const itemsQuantity = useSelector((store) =>
    store.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0),
  );
  return (
    <div className="fixed inset-x-0 bottom-0  hidden items-center justify-between gap-5 overflow-hidden rounded-t-3xl bg-lightOrg px-6 py-4 text-xl  xs:flex">
      <h2 className="flex items-center">
        <span>Price:</span>
        <LiaDollarSignSolid />
        {totalPrice.toFixed(2)}
      </h2>
      <h2>
        <span>Items:</span> {itemsQuantity}
      </h2>
      <Link
        to="/cart"
        className="rounded-lg bg-white px-3 text-xl font-semibold text-primary   hover:shadow-lg hover:ring-primary hover:ring-offset-2"
      >
        Open Cart
      </Link>
    </div>
  );
}

export default CartOverview;
