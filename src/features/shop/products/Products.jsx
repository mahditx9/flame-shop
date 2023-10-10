import { useLoaderData } from "react-router-dom";
import { fetchProducts } from "../../../services/getProducts";
import ProductItem from "./ProductItem";

function Products() {
  const products = useLoaderData();
  return (
    <section className="grid grid-flow-row items-center justify-center  xs:items-start xs:justify-start sm:grid-cols-[1fr,auto]">
      <ul className="grid grid-flow-row  gap-10   sm:grid-cols-3">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
      <aside className=" text-text">Aside</aside>
    </section>
  );
}

export const loader = async () => {
  const products = await fetchProducts();
  return products;
};

export default Products;
