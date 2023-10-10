import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCart } from "./cartSlice";
import Button from "../../UI/Button";

function Cart() {
  const cart = useSelector(getCart());
  if (!cart.length)
    return (
      <p className="text-center text-2xl font-semibold">
        Add Some Products To Your Cart{" "}
      </p>
    );
  return (
    <section className="flex flex-col gap-7">
      <h2>Shopping Cart</h2>
      <section>
        <div className="flex justify-end">
          <span>Sort by</span>
          <select>
            <option name="price" value="price" defaultChecked>
              Price
            </option>
          </select>
        </div>
        <ul>
          {cart?.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>
      </section>
      <div className="w-full  text-center">
        <Button styles="w-1/3 mx-auto">Buy</Button>
      </div>
    </section>
  );
}

export default Cart;
