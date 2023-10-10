import { Outlet } from "react-router-dom";
import Products from "./products/Products";

function ShopLayout() {
  return (
    <section className="grid grid-flow-col">
      <section>
        <Products />
      </section>
      <section>Cart OverView</section>
    </section>
  );
}

export default ShopLayout;
