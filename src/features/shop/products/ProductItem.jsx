import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { LiaDollarSignSolid } from "react-icons/lia";
import useAddToCart from "../hooks/useAddToCart";
import Button from "../../../UI/Button";
/* eslint-disable react/prop-types */
function ProductItem({ product }) {
  const { id, category, description, image, price, rating, title } = product;
  const updatedProduct = { ...product, quantity: 1, totalPrice: price };
  const { handleAddItem } = useAddToCart(id, updatedProduct);

  return (
    <li className="flex flex-col items-center justify-center rounded-lg border-[1px] border-gray-100 py-8 text-text shadow-xl hover:shadow-2xl">
      <Link to={`/product/${id}`} className=" w-full">
        <img
          src={image}
          alt="product cover"
          className="h-60 w-full object-contain"
        />
      </Link>
      <div className="space-y-4 px-6 py-4">
        <h2 className="text-center font-semibold">{title}</h2>
        <p className="">{description.slice(0, 50)}...</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-center  font-medium">
            <LiaDollarSignSolid className=" text-lg text-green-700" /> {price}
          </span>
          <span className="flex items-center gap-1 font-medium">
            {rating?.rate}
            <AiFillStar className="text-yellow-500" />
          </span>
        </div>
      </div>
      <Button onClick={handleAddItem} styles="w-[82%] mt-2">
        Add To Cart
      </Button>
    </li>
  );
}

export default ProductItem;
