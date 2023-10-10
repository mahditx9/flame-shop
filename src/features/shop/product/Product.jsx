import { useLoaderData } from "react-router-dom";
import { fetchProduct } from "../../../services/getProducts";
import styles from "../../../styles";
import { AiFillStar } from "react-icons/ai";
import Button from "../../../UI/Button";
import { LiaDollarSignSolid } from "react-icons/lia";
import useAddToCart from "../hooks/useAddToCart";
import { useState } from "react";
function Product() {
  const [quantity, setQuantity] = useState(1);
  const product = useLoaderData();
  const { id, category, description, image, price, rating, title } = product;
  const updatedProduct = { ...product, quantity, totalPrice: quantity * price };
  const { handleAddItem } = useAddToCart(id, updatedProduct);
  return (
    <section className="space-y-16 py-6 text-text sm:py-2">
      <section className="flex flex-col  gap-20  sm:flex-row  sm:gap-40 ">
        <div>
          <img src={image} alt="product cover" className="" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-12 sm:items-start sm:justify-start">
          <header>
            <h2 className={`${styles.heading}`}>{title}</h2>
            <span className="block">{category}</span>
            <span className="flex items-center gap-1">
              {rating?.rate}
              <AiFillStar className="text-base text-yellow-500" />
            </span>
          </header>
          <p className="text-base font-medium tracking-wide">{description}</p>
          <div className="flex  flex-row  items-center gap-8 sm:gap-1 ">
            <div className="flex items-center  gap-2">
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
            <span className="flex items-center justify-center  text-xl font-semibold">
              <LiaDollarSignSolid className=" text-2xl text-green-700" />{" "}
              {price}
            </span>
          </div>
          <Button styles=" mt-3 sm:w-2/4 w-full" onClick={handleAddItem}>
            Add To Cart
          </Button>
        </div>
      </section>
      <section>
        <div>Related Products</div>
      </section>
      <section>
        <div>
          <ul>Shared Votes</ul>
        </div>
      </section>
    </section>
  );
}

export const loader = async ({ params }) => {
  const product = await fetchProduct(params.productId);
  return product;
};

export default Product;
