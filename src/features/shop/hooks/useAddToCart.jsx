import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  getProductQuantity,
  increaseItemQuantity,
} from "../../cart/cartSlice";

function useAddToCart(id, product) {
  const dispatch = useDispatch();
  const productQuantity = useSelector(getProductQuantity(id));
  const isInCart = productQuantity > 0;
  const handleAddItem = () => {
    if (!isInCart) {
      // dispatch(addItem({ ...product, quantity: 1, totalPrice: product.price }));
      dispatch(addItem(product));
    } else {
      dispatch(increaseItemQuantity(id));
    }
  };
  return { isInCart, productQuantity, handleAddItem };
}

export default useAddToCart;
